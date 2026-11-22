# Lumos Launcher

Official Windows installers and signed update manifests for Lumos Project SRP.

## Current preview

[Download Lumos Launcher 0.9.0](https://github.com/tanva-studio/lumos-launcher-releases/releases/tag/v0.9.0)

Close the game before updating. Users of 0.7.8 or earlier should install this preview manually once. Versions through 0.7.5 cannot discover Preview releases; 0.7.6 through 0.7.8 have a superseded Windows installer handoff. Newer builds use the Preview feed with signed manifests and installer SHA-256 verification. Preview releases do not become stable releases implicitly.

### New in 0.9.0

- Persistent searchable Activity logs, severity/component filters and local diagnostic ZIP export with known credential and speech-draft redaction.
- Readiness, disk-space, write-access and recovery checks before joining.
- Signed server mod pack details, credits, revision changes and declared compatibility. Verified downloads resume from interrupted partial files and support safe preparation cancellation.
- Optional local Whisper Base / Small model downloads, a microphone meter and local English/Thai test controls. Models are downloaded when selected instead of bundled in the installer.
- Reduced background rendering, Windows notifications and verified runtime migration outside the install directory.

### ArcaneMP and Lumos updates

Use Home > ArcaneMP version > Check for updates, or Game Files > Update ArcaneMP. Accept the official update prompt when offered. Lumos displays official progress and refreshes the runtime version after completion. Play updates an outdated runtime before requesting a fresh single-use admission ticket and rechecks server compatibility.

The official ArcaneMP launcher, updater and DLLs are unmodified. The bundled runtime is 1.14.0. Migration preserves a newer verified installed runtime; client and server still need compatible versions. The removed ArcaneMP Thai-menu patch is not included.

For Lumos, use Settings > Lumos Launcher updates > Check for updates > Download > Install and restart. The installer worker keeps settings and localhost mode, backs up the old launcher and requires a version/nonce health receipt.

The EN/TH interface defaults to English and remembers the selection. Play hides Lumos to the tray; it returns after the monitored session ends. Exit game and Restart game use scoped cleanup, and Restart requests a fresh ticket. Speech processing stays local.

### Validation and preview limits

[Validation and SHA-256](releases/0.9.0.json)

105 launcher tests and 8 gate tests passed. Packaged source, 248 official runtime files, 13 voice engine assets, 4 native helpers, installer CRC and the Ed25519 update envelope were verified. Packaged UI checked at 1200x790 and 1000x680. Production signed pack downloads and HTTP 206 resumption were verified. The real Whisper engine was exercised with synthetic speech.

A new in-game session, live user microphone speech and an installed upgrade test for 0.9.0 remain unverified. Windows EXEs have no Authenticode signature because no certificate is provisioned. The signed Ed25519 update envelope is separate from Windows executable signing.

## Attribution

Powered by ArcaneMP and MafiaHub. Players must own and install Hogwarts Legacy separately. Bundled Noto Sans Thai, Noto Serif Thai and Cinzel fonts include SIL Open Font Licenses.

This repository contains release artifacts and public validation metadata only. Application/server sources, admission settings, TLS private keys and Ed25519 signing private keys are not published here.
