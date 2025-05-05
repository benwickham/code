CREATE TABLE update_state (
    id INTEGER NOT NULL CHECK (id = 0),
    
    current_state TEXT NOT NULL CHECK (current_state IN ('idle', 'downloading', 'installing', 'completed', 'failed')),
    version TEXT NULL,
    download_url TEXT NULL,
    file_size INTEGER NULL,
    bytes_downloaded INTEGER NULL,
    checksum TEXT NULL,
    
    last_updated INTEGER NOT NULL,
    error_message TEXT NULL,
    
    PRIMARY KEY (id)
);

INSERT INTO update_state (id, current_state, last_updated) VALUES (0, 'idle', strftime('%s', 'now'));
