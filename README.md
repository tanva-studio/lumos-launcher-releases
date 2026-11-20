# Lumos Launcher

Official Windows installers and signed update manifests for Lumos Project SRP.

## Current test release

[Download Lumos Launcher 0.7.4](https://github.com/tanva-studio/lumos-launcher-releases/releases/tag/v0.7.4)

Close the game and exit Lumos Launcher from the system tray before installing. A Localhost shortcut is included.

Version 0.7.4 removes the ArcaneMP Thai menu patch and its version-specific translation checks. The launcher always selects the unmodified official ArcaneMPClient.dll, including when old translation settings or files remain. The Lumos Launcher interface stays in Thai. Official runtime checksum verification and ArcaneMP updates remain enabled; the client and server still need compatible runtime versions.

Discord Rich Presence continues to show online/max player counts and Lumos/ArcaneMP versions, refreshing every 30 seconds. It uses a direct server endpoint when available and the official MafiaHub masterlist as a fallback. The fallback matches server address, port and game, and hides data older than two minutes. Masterlist counts can lag the server heartbeat.

The offline Fast (Whisper Base) / Accuracy (Whisper Small) modes remain available in Settings. Accuracy remains the default; Fast can make more Thai transcription mistakes. This is a prerelease for manual testing and is not offered by the stable automatic update feed. The automatic installed update and health receipt still need end-to-end validation.

[Validation and SHA-256](releases/0.7.4.json)

[Previous test release 0.7.3](https://github.com/tanva-studio/lumos-launcher-releases/releases/tag/v0.7.3)

## Attribution

Powered by ArcaneMP and MafiaHub. The official ArcaneMP runtime is included unchanged; players must own and install Hogwarts Legacy separately.

This repository contains release artifacts and public validation metadata only. Server sources, TLS private keys and the Ed25519 update signing private key are not published here.
