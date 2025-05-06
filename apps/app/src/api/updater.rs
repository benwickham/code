use crate::api::Result;
use crate::api::update_utils::{UpdateInfo, get_updates_dir, get_previous_versions_dir, save_current_version, apply_diff};
use tauri::plugin::TauriPlugin;
use tokio::sync::Mutex;
use std::sync::Arc;
use std::path::PathBuf;
use tauri::AppHandle;
use theseus::state::State;
use theseus::settings;

#[derive(Default)]
pub struct UpdaterState {
    pub update_info: Option<UpdateInfo>,
}

pub static UPDATER_STATE: once_cell::sync::Lazy<Arc<Mutex<UpdaterState>>> = 
    once_cell::sync::Lazy::new(|| Arc::new(Mutex::new(UpdaterState::default())));

pub fn init<R: tauri::Runtime>() -> tauri::plugin::TauriPlugin<R> {
    tauri::plugin::Builder::new("updater")
        .invoke_handler(tauri::generate_handler![
            get_update_status,
            set_restart_preference,
            install_update
        ])
        .build()
}

#[tauri::command]
pub async fn get_update_status() -> Result<Option<UpdateInfo>> {
    let state = UPDATER_STATE.lock().await;
    Ok(state.update_info.clone())
}

#[tauri::command]
pub async fn set_restart_preference(preference: bool) -> Result<()> {
    let mut settings = settings::get().await?;
    settings.restart_on_next_launch = preference;
    settings::set(settings).await?;
    Ok(())
}

#[tauri::command]
pub async fn install_update(app_handle: AppHandle) -> Result<()> {
    let state = UPDATER_STATE.lock().await;
    if let Some(update_info) = &state.update_info {
        if update_info.ready_to_install {
            app_handle.restart();
        }
    }
    Ok(())
}

pub async fn check_restart_on_launch() -> Result<bool> {
    let settings = settings::get().await?;
    let state = UPDATER_STATE.lock().await;
    
    if settings.restart_on_next_launch && state.update_info.as_ref().map_or(false, |u| u.ready_to_install) {
        let mut settings = settings.clone();
        settings.restart_on_next_launch = false;
        settings::set(settings).await?;
        Ok(true)
    } else {
        Ok(false)
    }
}

pub async fn background_update_checker(app_handle: AppHandle) -> Result<()> {
    use tauri_plugin_updater::UpdaterExt;
    use tokio::time::{sleep, Duration};
    
    let state_dir = State::get().await?;
    let dirs = &state_dir.directories;
    
    tokio::fs::create_dir_all(get_updates_dir(dirs)).await?;
    tokio::fs::create_dir_all(get_previous_versions_dir(dirs)).await?;
    
    loop {
        sleep(Duration::from_secs(15 * 60)).await;
        
        let updater = app_handle.updater();
        match updater.check().await {
            Ok(Some(update)) => {
                let current_exe = std::env::current_exe()?;
                let current_version = update.current_version.clone();
                let new_version = update.version.clone();
                let update_dir = get_updates_dir(dirs);
                let update_file = update_dir.join(format!("{}.bin", new_version));
                let diff_file = update_dir.join(format!("{}_diff.bin", new_version));
                
                let mut diff_mode = false;
                let prev_version_file = get_previous_versions_dir(dirs).join(format!("{}.bin", current_version));
                
                {
                    let mut state = UPDATER_STATE.lock().await;
                    state.update_info = Some(UpdateInfo {
                        version: new_version.clone(),
                        current_version: current_version.clone(),
                        download_url: update.download_url.clone(),
                        downloaded: false,
                        ready_to_install: false,
                        diff_mode: false,
                    });
                }
                
                if prev_version_file.exists() {
                    match updater.download_update_diff(
                        &prev_version_file,
                        &diff_file,
                        |_, _| {},
                    ).await {
                        Ok(_) => {
                            if let Ok(_) = apply_diff(&prev_version_file, &diff_file, &update_file) {
                                diff_mode = true;
                            } else {
                                if let Err(e) = updater.download(
                                    &update.download_url,
                                    &update_file,
                                    |_, _| {},
                                ).await {
                                    tracing::error!("Error downloading update: {}", e);
                                    continue;
                                }
                            }
                        },
                        Err(_) => {
                            if let Err(e) = updater.download(
                                &update.download_url,
                                &update_file,
                                |_, _| {},
                            ).await {
                                tracing::error!("Error downloading update: {}", e);
                                continue;
                            }
                        }
                    }
                } else {
                    if let Err(e) = updater.download(
                        &update.download_url,
                        &update_file,
                        |_, _| {},
                    ).await {
                        tracing::error!("Error downloading update: {}", e);
                        continue;
                    }
                    
                    if let Err(e) = save_current_version(dirs, &current_version, &current_exe).await {
                        tracing::error!("Error saving current version: {}", e);
                    }
                }
                
                {
                    let mut state = UPDATER_STATE.lock().await;
                    if let Some(update_info) = &mut state.update_info {
                        update_info.downloaded = true;
                        update_info.ready_to_install = true;
                        update_info.diff_mode = diff_mode;
                    }
                }
                
                app_handle.emit_all("update-ready", new_version).ok();
            },
            _ => {
            }
        }
    }
}
