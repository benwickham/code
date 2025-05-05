use crate::Result;
use serde::{Deserialize, Serialize};
use sqlx::{Executor, Sqlite};
use std::time::{SystemTime, UNIX_EPOCH};

#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
pub enum UpdateState {
    Idle,
    Downloading,
    Installing,
    Completed,
    Failed,
}

impl UpdateState {
    fn to_string(&self) -> &'static str {
        match self {
            Self::Idle => "idle",
            Self::Downloading => "downloading",
            Self::Installing => "installing",
            Self::Completed => "completed",
            Self::Failed => "failed",
        }
    }

    fn from_string(s: &str) -> Result<Self> {
        match s {
            "idle" => Ok(Self::Idle),
            "downloading" => Ok(Self::Downloading),
            "installing" => Ok(Self::Installing),
            "completed" => Ok(Self::Completed),
            "failed" => Ok(Self::Failed),
            _ => Err(crate::ErrorKind::DeserializationError(format!(
                "Invalid update state: {}",
                s
            ))
            .into()),
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UpdateInfo {
    pub state: UpdateState,
    pub version: Option<String>,
    pub download_url: Option<String>,
    pub file_size: Option<u64>,
    pub bytes_downloaded: Option<u64>,
    pub checksum: Option<String>,
    pub last_updated: u64,
    pub error_message: Option<String>,
}

impl UpdateInfo {
    pub fn new() -> Self {
        Self {
            state: UpdateState::Idle,
            version: None,
            download_url: None,
            file_size: None,
            bytes_downloaded: None,
            checksum: None,
            last_updated: current_timestamp(),
            error_message: None,
        }
    }

    pub fn downloading(
        version: String,
        download_url: String,
        file_size: u64,
        bytes_downloaded: u64,
        checksum: Option<String>,
    ) -> Self {
        Self {
            state: UpdateState::Downloading,
            version: Some(version),
            download_url: Some(download_url),
            file_size: Some(file_size),
            bytes_downloaded: Some(bytes_downloaded),
            checksum,
            last_updated: current_timestamp(),
            error_message: None,
        }
    }

    pub fn installing(version: String) -> Self {
        Self {
            state: UpdateState::Installing,
            version: Some(version),
            download_url: None,
            file_size: None,
            bytes_downloaded: None,
            checksum: None,
            last_updated: current_timestamp(),
            error_message: None,
        }
    }

    pub fn completed(version: String) -> Self {
        Self {
            state: UpdateState::Completed,
            version: Some(version),
            download_url: None,
            file_size: None,
            bytes_downloaded: None,
            checksum: None,
            last_updated: current_timestamp(),
            error_message: None,
        }
    }

    pub fn failed(version: Option<String>, error_message: String) -> Self {
        Self {
            state: UpdateState::Failed,
            version,
            download_url: None,
            file_size: None,
            bytes_downloaded: None,
            checksum: None,
            last_updated: current_timestamp(),
            error_message: Some(error_message),
        }
    }

    pub fn download_progress(&self) -> Option<f64> {
        match (self.bytes_downloaded, self.file_size) {
            (Some(bytes), Some(size)) if size > 0 => Some((bytes as f64 / size as f64) * 100.0),
            _ => None,
        }
    }

    pub async fn save<'e, E>(&self, executor: E) -> Result<()>
    where
        E: Executor<'e, Database = Sqlite>,
    {
        sqlx::query!(
            r#"
            UPDATE update_state
            SET current_state = $1,
                version = $2,
                download_url = $3,
                file_size = $4,
                bytes_downloaded = $5,
                checksum = $6,
                last_updated = $7,
                error_message = $8
            WHERE id = 0
            "#,
            self.state.to_string(),
            self.version,
            self.download_url,
            self.file_size,
            self.bytes_downloaded,
            self.checksum,
            self.last_updated,
            self.error_message,
        )
        .execute(executor)
        .await?;

        Ok(())
    }

    pub async fn load<'e, E>(executor: E) -> Result<Self>
    where
        E: Executor<'e, Database = Sqlite>,
    {
        let record = sqlx::query!(
            r#"
            SELECT current_state, version, download_url, file_size, 
                   bytes_downloaded, checksum, last_updated, error_message
            FROM update_state
            WHERE id = 0
            "#
        )
        .fetch_one(executor)
        .await?;

        Ok(Self {
            state: UpdateState::from_string(&record.current_state)?,
            version: record.version,
            download_url: record.download_url,
            file_size: record.file_size.map(|size| size as u64),
            bytes_downloaded: record.bytes_downloaded.map(|bytes| bytes as u64),
            checksum: record.checksum,
            last_updated: record.last_updated as u64,
            error_message: record.error_message,
        })
    }

    pub async fn reset<'e, E>(&mut self, executor: E) -> Result<()>
    where
        E: Executor<'e, Database = Sqlite>,
    {
        self.state = UpdateState::Idle;
        self.version = None;
        self.download_url = None;
        self.file_size = None;
        self.bytes_downloaded = None;
        self.checksum = None;
        self.last_updated = current_timestamp();
        self.error_message = None;

        self.save(executor).await
    }

    pub async fn update_download_progress<'e, E>(
        &mut self,
        bytes_downloaded: u64,
        executor: E,
    ) -> Result<()>
    where
        E: Executor<'e, Database = Sqlite>,
    {
        self.bytes_downloaded = Some(bytes_downloaded);
        self.last_updated = current_timestamp();
        self.save(executor).await
    }

    pub async fn mark_failed<'e, E>(&mut self, error_message: String, executor: E) -> Result<()>
    where
        E: Executor<'e, Database = Sqlite>,
    {
        self.state = UpdateState::Failed;
        self.error_message = Some(error_message);
        self.last_updated = current_timestamp();
        self.save(executor).await
    }

    pub fn was_interrupted(&self) -> bool {
        matches!(self.state, UpdateState::Downloading | UpdateState::Installing)
    }
}

fn current_timestamp() -> u64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .expect("Time went backwards")
        .as_secs()
}
