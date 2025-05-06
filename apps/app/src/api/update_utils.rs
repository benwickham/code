use crate::api::Result;
use qbsdiff::{Bspatch, Bsdiff};
use std::path::{Path, PathBuf};
use std::fs;
use tokio::fs as tokio_fs;
use std::io::Read;
use theseus::state::DirectoryInfo;

pub const PREVIOUS_VERSION_DIR: &str = "previous_versions";
pub const UPDATES_DIR: &str = "updates";

#[derive(Debug, Clone)]
pub struct UpdateInfo {
    pub version: String,
    pub current_version: String,
    pub download_url: String,
    pub downloaded: bool,
    pub ready_to_install: bool,
    pub diff_mode: bool,
}

pub fn get_previous_versions_dir(dir_info: &DirectoryInfo) -> PathBuf {
    dir_info.caches_dir().join(PREVIOUS_VERSION_DIR)
}

pub fn get_updates_dir(dir_info: &DirectoryInfo) -> PathBuf {
    dir_info.caches_dir().join(UPDATES_DIR)
}

pub async fn save_current_version(
    dir_info: &DirectoryInfo,
    version: &str,
    app_path: &Path,
) -> Result<()> {
    let prev_versions_dir = get_previous_versions_dir(dir_info);
    tokio_fs::create_dir_all(&prev_versions_dir).await?;
    
    let version_path = prev_versions_dir.join(format!("{}.bin", version));
    tokio_fs::copy(app_path, &version_path).await?;
    
    Ok(())
}

pub fn generate_diff(old_path: &Path, new_path: &Path, diff_path: &Path) -> Result<()> {
    let mut old_file = fs::File::open(old_path)?;
    let mut old_data = Vec::new();
    old_file.read_to_end(&mut old_data)?;
    
    let mut new_file = fs::File::open(new_path)?;
    let mut new_data = Vec::new();
    new_file.read_to_end(&mut new_data)?;
    
    let diff = Bsdiff::new(&old_data, &new_data).create_patch();
    fs::write(diff_path, diff)?;
    
    Ok(())
}

pub fn apply_diff(old_path: &Path, diff_path: &Path, new_path: &Path) -> Result<()> {
    let mut old_file = fs::File::open(old_path)?;
    let mut old_data = Vec::new();
    old_file.read_to_end(&mut old_data)?;
    
    let diff_data = fs::read(diff_path)?;
    
    let new_data = Bspatch::new(&old_data, &diff_data).apply_patch();
    fs::write(new_path, new_data)?;
    
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;
    use tempfile::tempdir;
    use std::fs;
    use std::io::Write;

    #[test]
    fn test_diff_and_patch() {
        let temp_dir = tempdir().unwrap();
        
        let old_path = temp_dir.path().join("old.bin");
        let mut old_file = fs::File::create(&old_path).unwrap();
        old_file.write_all(b"Hello, World!").unwrap();
        
        let new_path = temp_dir.path().join("new.bin");
        let mut new_file = fs::File::create(&new_path).unwrap();
        new_file.write_all(b"Hello, Updated World!").unwrap();
        
        let diff_path = temp_dir.path().join("diff.bin");
        
        generate_diff(&old_path, &new_path, &diff_path).unwrap();
        
        let patched_path = temp_dir.path().join("patched.bin");
        
        apply_diff(&old_path, &diff_path, &patched_path).unwrap();
        
        let patched_content = fs::read_to_string(&patched_path).unwrap();
        let new_content = fs::read_to_string(&new_path).unwrap();
        
        assert_eq!(patched_content, new_content);
    }
}
