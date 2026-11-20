# Lumos Launcher

Official Windows installers and signed update manifests for Lumos Project SRP.

## Current preview

[Download Lumos Launcher 0.7.9](https://github.com/tanva-studio/lumos-launcher-releases/releases/tag/v0.7.9)

Close the game before updating. Users of 0.7.8 or earlier should install 0.7.9 manually once. Versions through 0.7.5 cannot discover Preview releases; 0.7.6 through 0.7.8 have a superseded Windows installer handoff. Newer builds use the explicit Preview feed with signed manifests and installer SHA-256 verification.

### ArcaneMP updates

Use Home > ArcaneMP version > Check for updates, or Game Files > Update ArcaneMP. Accept the official update prompt when offered. Lumos displays the official progress and refreshes the runtime version after completion. The separate update action does not request a game admission ticket. Play also updates an outdated runtime before requesting a fresh ticket and rechecks server compatibility.

Only the owned progress-only window is hidden. Official confirmation prompts remain visible. The official ArcaneMP launcher, updater and DLLs are unmodified. The bundled runtime is 1.14.0; the official updater was tested updating it to 1.15.1. Server and client still need compatible versions.

### Lumos updates

Settings > Lumos Launcher updates > Check for updates > Download > Install and restart. The installer worker uses normal PowerShell file execution, keeps settings and localhost mode, backs up the old launcher and requires a version/nonce health receipt. Preview does not become a stable release implicitly.

### Existing features

- Midnight-blue and antique-gold interface, original castle scene and top navigation.
- Remembered EN / TH selection, English by default.
- Hide to tray after Play; return after the monitored session ends. Exit game and Restart game use scoped session cleanup and fresh admission tickets.
- Offline Whisper Base / Small speech modes remain unchanged. Interface language does not change the speech engine. The removed ArcaneMP Thai-menu patch is not included.

[Validation and SHA-256](releases/0.7.9.json)

83 automated tests passed, including actual Windows worker invocation and scoped native helper fixtures. Packaged UI checked at 1200x790 and 1000x680. Real game-session and microphone validation are separate from update testing.

## Attribution

Powered by ArcaneMP and MafiaHub. Players must own and install Hogwarts Legacy separately. Bundled Noto Sans Thai, Noto Serif Thai and Cinzel fonts include SIL Open Font Licenses.

This repository contains release artifacts and public validation metadata only. Server sources, TLS private keys and the Ed25519 update signing private key are not published here.


