use crate::Result;
use crate::util::io;
use std::path::{Path, PathBuf};
use std::time::{SystemTime, UNIX_EPOCH};
use tokio::fs;

#[derive(Debug)]
pub struct Backup {
    pub backup_dir: PathBuf,
    pub original_version: String,
    pub timestamp: u64,
}

impl Backup {
    #[tracing::instrument(skip(app_dir))]
    pub async fn create(app_dir: &Path, version: &str) -> Result<Self> {
        let cache_dir = app_dir.join("cache").join("backups");
        io::create_dir_all(&cache_dir).await?;

        let timestamp = SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .expect("Time went backwards")
            .as_secs();

        let backup_dir = cache_dir.join(format!("backup_{}_{}", version, timestamp));
        io::create_dir_all(&backup_dir).await?;

        let metadata = serde_json::json!({
            "version": version,
            "timestamp": timestamp,
            "platform": get_platform_name(),
        });

        io::write(
            backup_dir.join("metadata.json"),
            serde_json::to_string_pretty(&metadata)?,
        )
        .await?;

        backup_platform_specific_files(app_dir, &backup_dir).await?;

        tracing::info!("Created backup at {}", backup_dir.display());

        Ok(Self {
            backup_dir,
            original_version: version.to_string(),
            timestamp,
        })
    }

    #[tracing::instrument(skip(app_dir))]
    pub async fn restore(&self, app_dir: &Path) -> Result<()> {
        tracing::info!("Restoring backup from {}", self.backup_dir.display());

        restore_platform_specific_files(&self.backup_dir, app_dir).await?;

        tracing::info!("Backup restored successfully");
        Ok(())
    }

    #[tracing::instrument(skip(app_dir))]
    pub async fn find_latest(app_dir: &Path) -> Result<Option<Self>> {
        let cache_dir = app_dir.join("cache").join("backups");
        
        if !cache_dir.exists() {
            return Ok(None);
        }

        let mut entries = io::read_dir(&cache_dir).await?;
        let mut latest_backup: Option<Self> = None;
        let mut latest_timestamp = 0;

        while let Some(entry) = entries.next_entry().await? {
            let path = entry.path();
            if !path.is_dir() {
                continue;
            }

            let metadata_path = path.join("metadata.json");
            if !metadata_path.exists() {
                continue;
            }

            let metadata_str = io::read_to_string(&metadata_path).await?;
            let metadata: serde_json::Value = serde_json::from_str(&metadata_str)?;

            if let (Some(version), Some(timestamp)) = (
                metadata["version"].as_str(),
                metadata["timestamp"].as_u64(),
            ) {
                if timestamp > latest_timestamp {
                    latest_timestamp = timestamp;
                    latest_backup = Some(Self {
                        backup_dir: path,
                        original_version: version.to_string(),
                        timestamp,
                    });
                }
            }
        }

        Ok(latest_backup)
    }

    #[tracing::instrument(skip(app_dir))]
    pub async fn cleanup_old_backups(app_dir: &Path, keep_count: usize) -> Result<()> {
        let cache_dir = app_dir.join("cache").join("backups");
        
        if !cache_dir.exists() {
            return Ok(());
        }

        let mut entries = io::read_dir(&cache_dir).await?;
        let mut backups = Vec::new();

        while let Some(entry) = entries.next_entry().await? {
            let path = entry.path();
            if !path.is_dir() {
                continue;
            }

            let metadata_path = path.join("metadata.json");
            if !metadata_path.exists() {
                continue;
            }

            let metadata_str = io::read_to_string(&metadata_path).await?;
            let metadata: serde_json::Value = serde_json::from_str(&metadata_str)?;

            if let (Some(version), Some(timestamp)) = (
                metadata["version"].as_str(),
                metadata["timestamp"].as_u64(),
            ) {
                backups.push((path, version.to_string(), timestamp));
            }
        }

        backups.sort_by(|a, b| b.2.cmp(&a.2));

        for (path, _, _) in backups.iter().skip(keep_count) {
            tracing::info!("Removing old backup: {}", path.display());
            io::remove_dir_all(path).await?;
        }

        Ok(())
    }
}

fn get_platform_name() -> &'static str {
    #[cfg(target_os = "windows")]
    return "windows";
    
    #[cfg(target_os = "macos")]
    return "macos";
    
    #[cfg(target_os = "linux")]
    return "linux";
    
    #[cfg(not(any(target_os = "windows", target_os = "macos", target_os = "linux")))]
    return "unknown";
}

#[tracing::instrument(skip(app_dir, backup_dir))]
async fn backup_platform_specific_files(app_dir: &Path, backup_dir: &Path) -> Result<()> {
    #[cfg(target_os = "windows")]
    {
        let exe_path = app_dir.join("Modrinth App.exe");
        if exe_path.exists() {
            io::copy(&exe_path, &backup_dir.join("Modrinth App.exe")).await?;
        }

        let mut entries = fs::read_dir(app_dir).await?;
        while let Some(entry) = entries.next_entry().await? {
            let path = entry.path();
            if path.is_file() && path.extension().map_or(false, |ext| ext == "dll") {
                let file_name = path.file_name().unwrap();
                io::copy(&path, &backup_dir.join(file_name)).await?;
            }
        }
    }

    #[cfg(target_os = "macos")]
    {
        let executable_path = app_dir.join("MacOS").join("Modrinth App");
        if executable_path.exists() {
            let target_dir = backup_dir.join("MacOS");
            io::create_dir_all(&target_dir).await?;
            io::copy(&executable_path, &target_dir.join("Modrinth App")).await?;
        }

        let info_plist_path = app_dir.join("Info.plist");
        if info_plist_path.exists() {
            io::copy(&info_plist_path, &backup_dir.join("Info.plist")).await?;
        }
    }

    #[cfg(target_os = "linux")]
    {
        let binary_path = app_dir.join("modrinth-app");
        if binary_path.exists() {
            io::copy(&binary_path, &backup_dir.join("modrinth-app")).await?;
        }

        let mut entries = fs::read_dir(app_dir).await?;
        while let Some(entry) = entries.next_entry().await? {
            let path = entry.path();
            if path.is_file() && path.extension().map_or(false, |ext| ext == "so") {
                let file_name = path.file_name().unwrap();
                io::copy(&path, &backup_dir.join(file_name)).await?;
            }
        }
    }

    Ok(())
}

#[tracing::instrument(skip(backup_dir, app_dir))]
async fn restore_platform_specific_files(backup_dir: &Path, app_dir: &Path) -> Result<()> {
    #[cfg(target_os = "windows")]
    {
        let exe_backup_path = backup_dir.join("Modrinth App.exe");
        if exe_backup_path.exists() {
            let target_path = app_dir.join("Modrinth App.exe");
            io::copy(&exe_backup_path, &target_path).await?;
        }

        let mut entries = fs::read_dir(backup_dir).await?;
        while let Some(entry) = entries.next_entry().await? {
            let path = entry.path();
            if path.is_file() && path.extension().map_or(false, |ext| ext == "dll") {
                let file_name = path.file_name().unwrap();
                io::copy(&path, &app_dir.join(file_name)).await?;
            }
        }
    }

    #[cfg(target_os = "macos")]
    {
        let executable_backup_path = backup_dir.join("MacOS").join("Modrinth App");
        if executable_backup_path.exists() {
            let target_path = app_dir.join("MacOS").join("Modrinth App");
            io::copy(&executable_backup_path, &target_path).await?;
        }

        let info_plist_backup_path = backup_dir.join("Info.plist");
        if info_plist_backup_path.exists() {
            let target_path = app_dir.join("Info.plist");
            io::copy(&info_plist_backup_path, &target_path).await?;
        }
    }

    #[cfg(target_os = "linux")]
    {
        let binary_backup_path = backup_dir.join("modrinth-app");
        if binary_backup_path.exists() {
            let target_path = app_dir.join("modrinth-app");
            io::copy(&binary_backup_path, &target_path).await?;
        }

        let mut entries = fs::read_dir(backup_dir).await?;
        while let Some(entry) = entries.next_entry().await? {
            let path = entry.path();
            if path.is_file() && path.extension().map_or(false, |ext| ext == "so") {
                let file_name = path.file_name().unwrap();
                io::copy(&path, &app_dir.join(file_name)).await?;
            }
        }
    }

    Ok(())
}
