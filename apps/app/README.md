# ![Modrinth App](/.github/assets/app_cover.png)

## Modrinth App

The Modrinth App is a desktop application for managing your Minecraft mods. It is built with [Tauri](https://tauri.app/) and [Vue](https://vuejs.org/).

If you're not a developer and you've stumbled upon this repository, you can download the latest release of the app from the [Modrinth website](https://modrinth.com/app).

## Development

### Pre-requisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/)
- [pnpm](https://pnpm.io/)
- [Rust](https://www.rust-lang.org/tools/install)
- [Tauri](https://v2.tauri.app/start/prerequisites/)

### Setup

Follow these steps to set up your development environment:

```bash
pnpm install
pnpm app:dev
```

You should now have a development build of the app running with hot-reloading enabled. Any changes you make to the code will automatically refresh the app.

## Update Process

The Modrinth App now features an optimized update system with two main improvements:

1. **Differential Updates**: Instead of downloading the entire application for each update, the system now uses binary diffs (using the bsdiff algorithm) to download only the changes between versions. This significantly reduces download sizes and speeds up the update process.

2. **Background Downloads**: Updates are now downloaded in the background without blocking the app's initialization. Once an update is ready to install, a notification is shown to the user with options to "Restart Now" or "Restart on Next Launch".

### Technical Details

- Previous versions of the app are stored in the cache directory to enable differential updates
- If a differential update fails, the system automatically falls back to downloading the full update
- User preferences for restart timing are persisted across app launches
