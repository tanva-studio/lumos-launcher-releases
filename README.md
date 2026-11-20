# Lumos Launcher

Official Windows installers and signed update manifests for Lumos Project SRP.

## Current preview

[Download Lumos Launcher 0.7.5](https://github.com/tanva-studio/lumos-launcher-releases/releases/tag/v0.7.5)

Close the game and exit Lumos Launcher from the system tray before installing. A Localhost shortcut is included. This prerelease is for manual installation and is excluded from the stable automatic update feed.

### What's new

- A midnight-blue and antique-gold design, original castle artwork, top navigation and a redesigned entry panel.
- EN / TH interface selection, English by default, with the language remembered on this device.
- Official ArcaneMP update progress on Home. The scoped native helper hides only the owned progress-only window; confirmation prompts and game windows remain available. The original progress window can be shown again.
- Successful Play hides Lumos to tray. It returns when the session ends, after the monitoring grace that protects required mod restarts. Exit game and Restart game controls restore session files; Restart requests a fresh admission ticket.
- Exit/Quit waits while the official updater applies files. Runtime version display follows official update completion.

The official ArcaneMP updater and binaries remain unmodified. The ArcaneMP Thai menu patch remains removed. The client and server still need compatible runtime versions.

The offline Fast (Whisper Base) / Accurate (Whisper Small) speech modes are unchanged. Interface language selection does not select a different speech model. Accurate remains the default; Fast can make more transcription errors.

[Validation and SHA-256](releases/0.7.5.json)

74 automated tests passed, including native Windows fixture tests for scoped window hide/restore. EN/TH preview and packaged UI checks passed at 1200x790 and 1000x680. These checks do not establish a real game session or live official updater integration. Automatic installed updater/health receipt and real microphone validation remain pending.

[Previous preview 0.7.4](https://github.com/tanva-studio/lumos-launcher-releases/releases/tag/v0.7.4)

## Attribution

Powered by ArcaneMP and MafiaHub. Players must own and install Hogwarts Legacy separately. Bundled Noto Sans Thai, Noto Serif Thai and Cinzel fonts include their SIL Open Font Licenses.

This repository contains release artifacts and public validation metadata only. Server sources, TLS private keys and the Ed25519 update signing private key are not published here.
