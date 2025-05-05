#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use native_dialog::{DialogBuilder, MessageLevel};
use std::env;
use tauri::{Listener, Manager};
use theseus::prelude::*;

mod api;
mod error;

#[cfg(target_os = "macos")]
mod macos;

// Should be called in launcher initialization
#[tracing::instrument(skip_all)]
#[tauri::command]
async fn initialize_state(app: tauri::AppHandle) -> api::Result<()> {
    tracing::info!("Initializing app event state...");
    theseus::EventState::init(app.clone()).await?;

    #[cfg(feature = "updater")]
    'updater: {
        if env::var("MODRINTH_EXTERNAL_UPDATE_PROVIDER").is_ok() {
            State::init().await?;
            break 'updater;
        }

        use tauri_plugin_updater::UpdaterExt;

        tracing::info!("Initializing app state...");
        State::init().await?;

        let state = State::get().await?;
        let update_info = theseus::UpdateInfo::load(&state.pool).await?;

        if update_info.was_interrupted() {
            tracing::warn!("Detected interrupted update: {:?}", update_info);
            
            match update_info.state {
                theseus::UpdateState::Downloading => {
                    tracing::info!("Attempting to resume interrupted download");
                    
                    let recovery_bar_id = theseus::init_loading(
                        theseus::LoadingBarType::RecoveringUpdate {
                            version: update_info.version.clone().unwrap_or_else(|| "unknown".to_string()),
                        },
                        update_info.download_progress().unwrap_or(0.0) / 100.0,
                        "Recovering interrupted update download...",
                    )
                    .await?;

                    if let (Some(download_url), Some(version)) = (&update_info.download_url, &update_info.version) {
                        let updater = app.updater_builder().build()?;
                        
                        let update = tauri_plugin_updater::Update {
                            version: version.clone(),
                            current_version: env!("CARGO_PKG_VERSION").to_string(),
                            download_url: download_url.clone(),
                            body: None,
                            date: None,
                        };

                        // 100 MiB
                        const DEFAULT_CONTENT_LENGTH: u64 = 1024 * 1024 * 100;

                        let app_dir = app.path_resolver().app_dir().ok_or_else(|| {
                            theseus::ErrorKind::UpdateBackupFailed("Could not determine app directory".to_string())
                        })?;
                        
                        let backup = theseus::util::backup::Backup::create(&app_dir, &env!("CARGO_PKG_VERSION")).await?;

                        let mut update_info = update_info.clone();
                        update_info.state = theseus::UpdateState::Installing;
                        update_info.save(&state.pool).await?;

                        match update.download_and_install(
                            |chunk_length, content_length| {
                                let _ = theseus::emit_loading(
                                    &recovery_bar_id,
                                    (chunk_length as f64)
                                        / (content_length
                                            .unwrap_or(DEFAULT_CONTENT_LENGTH)
                                            as f64),
                                    None,
                                );
                                
                                tauri::async_runtime::spawn({
                                    let state = state.clone();
                                    let mut update_info = update_info.clone();
                                    async move {
                                        if let Err(e) = update_info.update_download_progress(
                                            chunk_length,
                                            &state.pool,
                                        ).await {
                                            tracing::error!("Failed to update download progress: {}", e);
                                        }
                                    }
                                });
                            },
                            || {},
                        )
                        .await {
                            Ok(_) => {
                                update_info.state = theseus::UpdateState::Completed;
                                update_info.save(&state.pool).await?;
                                
                                tauri::async_runtime::spawn({
                                    let app_dir = app_dir.clone();
                                    async move {
                                        if let Err(e) = theseus::util::backup::Backup::cleanup_old_backups(&app_dir, 3).await {
                                            tracing::error!("Failed to clean up old backups: {}", e);
                                        }
                                    }
                                });
                                
                                app.restart();
                            }
                            Err(e) => {
                                tracing::error!("Failed to resume download: {}", e);
                                
                                update_info.mark_failed(format!("Failed to resume download: {}", e), &state.pool).await?;
                                
                                if let Err(restore_err) = backup.restore(&app_dir).await {
                                    tracing::error!("Failed to restore from backup: {}", restore_err);
                                    return Err(theseus::ErrorKind::UpdateRestoreFailed(
                                        format!("Failed to restore from backup: {}", restore_err)
                                    ).into());
                                }
                                
                                drop(recovery_bar_id);
                            }
                        }
                    } else {
                        tracing::warn!("Insufficient information to resume download");
                        update_info.reset(&state.pool).await?;
                        drop(recovery_bar_id);
                    }
                }
                theseus::UpdateState::Installing => {
                    tracing::info!("Recovering from interrupted installation");
                    
                    let recovery_bar_id = theseus::init_loading(
                        theseus::LoadingBarType::RecoveringUpdate {
                            version: update_info.version.clone().unwrap_or_else(|| "unknown".to_string()),
                        },
                        0.5, // Installation is approximately 50% complete
                        "Recovering from interrupted installation...",
                    )
                    .await?;
                    
                    let app_dir = app.path_resolver().app_dir().ok_or_else(|| {
                        theseus::ErrorKind::UpdateRestoreFailed("Could not determine app directory".to_string())
                    })?;
                    
                    if let Some(backup) = theseus::util::backup::Backup::find_latest(&app_dir).await? {
                        tracing::info!("Found backup from version {}", backup.original_version);
                        
                        if let Err(e) = backup.restore(&app_dir).await {
                            tracing::error!("Failed to restore from backup: {}", e);
                            return Err(theseus::ErrorKind::UpdateRestoreFailed(
                                format!("Failed to restore from backup: {}", e)
                            ).into());
                        }
                        
                        update_info.reset(&state.pool).await?;
                        tracing::info!("Successfully restored from backup");
                    } else {
                        tracing::warn!("No backup found, resetting update state");
                        update_info.reset(&state.pool).await?;
                    }
                    
                    drop(recovery_bar_id);
                }
                _ => {
                    tracing::warn!("Unexpected update state: {:?}", update_info.state);
                    update_info.reset(&state.pool).await?;
                }
            }
        } else {
            let updater = app.updater_builder().build()?;
            let update_fut = updater.check();

            let check_bar = theseus::init_loading(
                theseus::LoadingBarType::CheckingForUpdates,
                1.0,
                "Checking for updates...",
            )
            .await?;

            tracing::info!("Checking for updates...");
            let update = update_fut.await;

            drop(check_bar);

            if let Some(update) = update.ok().flatten() {
                tracing::info!("Update found: {:?}", update.download_url);
                
                let mut update_info = theseus::UpdateInfo::downloading(
                    update.version.clone(),
                    update.download_url.clone(),
                    0, // Will be updated during download
                    0,
                    None,
                );
                update_info.save(&state.pool).await?;
                
                let loader_bar_id = theseus::init_loading(
                    theseus::LoadingBarType::LauncherUpdate {
                        version: update.version.clone(),
                        current_version: update.current_version.clone(),
                    },
                    1.0,
                    "Updating Modrinth App...",
                )
                .await?;

                // 100 MiB
                const DEFAULT_CONTENT_LENGTH: u64 = 1024 * 1024 * 100;

                let app_dir = app.path_resolver().app_dir().ok_or_else(|| {
                    theseus::ErrorKind::UpdateBackupFailed("Could not determine app directory".to_string())
                })?;
                
                let backup = theseus::util::backup::Backup::create(&app_dir, &env!("CARGO_PKG_VERSION")).await?;

                update_info.state = theseus::UpdateState::Installing;
                update_info.save(&state.pool).await?;

                match update
                    .download_and_install(
                        |chunk_length, content_length| {
                            let _ = theseus::emit_loading(
                                &loader_bar_id,
                                (chunk_length as f64)
                                    / (content_length
                                        .unwrap_or(DEFAULT_CONTENT_LENGTH)
                                        as f64),
                                None,
                            );
                            
                            tauri::async_runtime::spawn({
                                let state = state.clone();
                                let mut update_info = update_info.clone();
                                async move {
                                    if let Err(e) = update_info.update_download_progress(
                                        chunk_length,
                                        &state.pool,
                                    ).await {
                                        tracing::error!("Failed to update download progress: {}", e);
                                    }
                                }
                            });
                        },
                        || {},
                    )
                    .await {
                        Ok(_) => {
                            update_info.state = theseus::UpdateState::Completed;
                            update_info.save(&state.pool).await?;
                            
                            tauri::async_runtime::spawn({
                                let app_dir = app_dir.clone();
                                async move {
                                    if let Err(e) = theseus::util::backup::Backup::cleanup_old_backups(&app_dir, 3).await {
                                        tracing::error!("Failed to clean up old backups: {}", e);
                                    }
                                }
                            });
                            
                            app.restart();
                        }
                        Err(e) => {
                            tracing::error!("Update failed: {}", e);
                            
                            update_info.mark_failed(format!("Update failed: {}", e), &state.pool).await?;
                            
                            if let Err(restore_err) = backup.restore(&app_dir).await {
                                tracing::error!("Failed to restore from backup: {}", restore_err);
                                return Err(theseus::ErrorKind::UpdateRestoreFailed(
                                    format!("Failed to restore from backup: {}", restore_err)
                                ).into());
                            }
                            
                            drop(loader_bar_id);
                        }
                    }
            }
        }
    }

    #[cfg(not(feature = "updater"))]
    {
        State::init().await?;
    }

    tracing::info!("Finished checking for updates!");
    let state = State::get().await?;
    app.asset_protocol_scope()
        .allow_directory(state.directories.caches_dir(), true)?;
    app.asset_protocol_scope()
        .allow_directory(state.directories.caches_dir().join("icons"), true)?;

    Ok(())
}

// Should be call once Vue has mounted the app
#[tracing::instrument(skip_all)]
#[tauri::command]
fn show_window(app: tauri::AppHandle) {
    let win = app.get_window("main").unwrap();
    if let Err(e) = win.show() {
        DialogBuilder::message()
            .set_level(MessageLevel::Error)
            .set_title("Initialization error")
            .set_text(format!(
                "Cannot display application window due to an error:\n{e}"
            ))
            .alert()
            .show()
            .unwrap();
        panic!("cannot display application window")
    } else {
        let _ = win.set_focus();
    }
}

#[tauri::command]
fn is_dev() -> bool {
    cfg!(debug_assertions)
}

// Toggles decorations
#[tauri::command]
async fn toggle_decorations(b: bool, window: tauri::Window) -> api::Result<()> {
    window.set_decorations(b).map_err(|e| {
        theseus::Error::from(theseus::ErrorKind::OtherError(format!(
            "Failed to toggle decorations: {e}"
        )))
    })?;
    Ok(())
}

#[tauri::command]
fn restart_app(app: tauri::AppHandle) {
    app.restart();
}

// if Tauri app is called with arguments, then those arguments will be treated as commands
// ie: deep links or filepaths for .mrpacks
fn main() {
    /*
        tracing is set basd on the environment variable RUST_LOG=xxx, depending on the amount of logs to show
            ERROR > WARN > INFO > DEBUG > TRACE
        eg. RUST_LOG=info will show info, warn, and error logs
            RUST_LOG="theseus=trace" will show *all* messages but from theseus only (and not dependencies using similar crates)
            RUST_LOG="theseus=trace" will show *all* messages but from theseus only (and not dependencies using similar crates)

        Error messages returned to Tauri will display as traced error logs if they return an error.
        This will also include an attached span trace if the error is from a tracing error, and the level is set to info, debug, or trace

        on unix:
            RUST_LOG="theseus=trace" {run command}

    */
    let _log_guard = theseus::start_logger();

    tracing::info!("Initialized tracing subscriber. Loading Modrinth App!");

    let mut builder = tauri::Builder::default();

    #[cfg(feature = "updater")]
    {
        builder = builder.plugin(tauri_plugin_updater::Builder::new().build());
    }

    builder = builder
        .plugin(tauri_plugin_single_instance::init(|app, args, _cwd| {
            if let Some(payload) = args.get(1) {
                tracing::info!("Handling deep link from arg {payload}");
                let payload = payload.clone();
                tauri::async_runtime::spawn(api::utils::handle_command(
                    payload,
                ));
            }

            if let Some(win) = app.get_window("main") {
                let _ = win.set_focus();
            }
        }))
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_deep_link::init())
        .plugin(tauri_plugin_opener::init())
        .plugin(
            tauri_plugin_window_state::Builder::default()
                .with_filename("app-window-state.json")
                .build(),
        )
        .setup(|app| {
            #[cfg(target_os = "macos")]
            {
                let payload = macos::deep_link::get_or_init_payload(app);

                let mtx_copy = payload.payload.clone();
                app.listen("deep-link://new-url", move |url| {
                    let mtx_copy_copy = mtx_copy.clone();
                    let request = url.payload().to_owned();

                    let actual_request =
                        serde_json::from_str::<Vec<String>>(&request)
                            .ok()
                            .map(|mut x| x.remove(0))
                            .unwrap_or(request);

                    tauri::async_runtime::spawn(async move {
                        tracing::info!("Handling deep link {actual_request}");

                        let mut payload = mtx_copy_copy.lock().await;
                        if payload.is_none() {
                            *payload = Some(actual_request.clone());
                        }

                        let _ =
                            api::utils::handle_command(actual_request).await;
                    });
                });
            };

            #[cfg(not(target_os = "macos"))]
            app.listen("deep-link://new-url", |url| {
                let payload = url.payload().to_owned();
                tracing::info!("Handling deep link {payload}");
                tauri::async_runtime::spawn(api::utils::handle_command(
                    payload,
                ));
                dbg!(url);
            });

            #[cfg(not(target_os = "linux"))]
            if let Some(window) = app.get_window("main") {
                if let Err(e) = window.set_shadow(true) {
                    tracing::warn!("Failed to set window shadow: {e}");
                }
            }

            Ok(())
        });

    builder = builder
        .plugin(api::auth::init())
        .plugin(api::mr_auth::init())
        .plugin(api::import::init())
        .plugin(api::logs::init())
        .plugin(api::jre::init())
        .plugin(api::metadata::init())
        .plugin(api::pack::init())
        .plugin(api::process::init())
        .plugin(api::profile::init())
        .plugin(api::profile_create::init())
        .plugin(api::settings::init())
        .plugin(api::tags::init())
        .plugin(api::utils::init())
        .plugin(api::cache::init())
        .plugin(api::ads::init())
        .plugin(api::friends::init())
        .plugin(api::worlds::init())
        .invoke_handler(tauri::generate_handler![
            initialize_state,
            is_dev,
            toggle_decorations,
            show_window,
            restart_app,
        ]);

    tracing::info!("Initializing app...");
    let app = builder.build(tauri::generate_context!());

    match app {
        Ok(app) => {
            #[allow(unused_variables)]
            app.run(|app, event| {
                #[cfg(target_os = "macos")]
                if let tauri::RunEvent::Opened { urls } = event {
                    tracing::info!("Handling webview open {urls:?}");

                    let file = urls
                        .into_iter()
                        .filter_map(|url| url.to_file_path().ok())
                        .next();

                    if let Some(file) = file {
                        let payload =
                            macos::deep_link::get_or_init_payload(app);

                        let mtx_copy = payload.payload.clone();
                        let request = file.to_string_lossy().to_string();
                        tauri::async_runtime::spawn(async move {
                            let mut payload = mtx_copy.lock().await;
                            if payload.is_none() {
                                *payload = Some(request.clone());
                            }

                            let _ = api::utils::handle_command(request).await;
                        });
                    }
                }
            });
        }
        Err(e) => {
            #[cfg(target_os = "windows")]
            {
                // tauri doesn't expose runtime errors, so matching a string representation seems like the only solution
                if format!("{e:?}").contains(
                    "Runtime(CreateWebview(WebView2Error(WindowsError",
                ) {
                    DialogBuilder::message()
                        .set_level(MessageLevel::Error)
                        .set_title("Initialization error")
                        .set_text("Your Microsoft Edge WebView2 installation is corrupt.\n\nMicrosoft Edge WebView2 is required to run Modrinth App.\n\nLearn how to repair it at https://support.modrinth.com/en/articles/8797765-corrupted-microsoft-edge-webview2-installation")
                        .alert()
                        .show()
                        .unwrap();

                    panic!("webview2 initialization failed")
                }
            }

            DialogBuilder::message()
                .set_level(MessageLevel::Error)
                .set_title("Initialization error")
                .set_text(format!(
                    "Cannot initialize application due to an error:\n{e:?}"
                ))
                .alert()
                .show()
                .unwrap();

            tracing::error!("Error while running tauri application: {:?}", e);
            panic!("{1}: {:?}", e, "error while running tauri application")
        }
    }
}
