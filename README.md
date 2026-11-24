# Lumos Launcher

Official Windows installers and signed update manifests for Lumos Project SRP.

## Current preview

[Download Lumos Launcher 0.9.7](https://github.com/tanva-studio/lumos-launcher-releases/releases/tag/v0.9.7)

Close the game before updating. Users of 0.7.8 or earlier should install this preview manually once. Versions through 0.7.5 cannot discover Preview releases; 0.7.6 through 0.7.8 have a superseded Windows installer handoff. Newer builds use the Preview feed with signed manifests and installer SHA-256 verification. Preview releases do not become stable releases implicitly.

### New in 0.9.7

- See Thai speech appear while holding the talk key. Releasing the key confirms the final transcript for chat, spells, or doors. Chat waits for the player to send the draft. In-game previews require the matching SRP server resources.
- The standalone Windows installer fetches missing OpenThai models. For an offline installation, download both parts of the Windows x64 ZIP into one folder, extract the first part with 7-Zip, and run Setup beside the extracted OpenThai folder. The package includes INT8 and FP32.
- One press of **Settings > Update Launcher** checks the Preview feed and installs an available verified release. Lumos reuses installed models.

### ArcaneMP and Lumos updates

Use Home > ArcaneMP version > Check for updates, or Game Files > Update ArcaneMP. Accept the official update prompt when offered. Lumos displays official progress and refreshes the runtime version after completion. Play updates an outdated runtime before requesting a fresh single-use admission ticket and rechecks server compatibility.

The official ArcaneMP launcher, updater and DLLs are unmodified. The bundled runtime is 1.14.0. Migration preserves a newer verified installed runtime; client and server still need compatible versions. The removed ArcaneMP Thai-menu patch is not included.

For Lumos, use Settings > Update Launcher. The installer worker keeps settings and localhost mode, backs up the old launcher and requires a version/nonce health receipt.

The EN/TH interface defaults to English and remembers the selection. Play hides Lumos to the tray; it returns after the monitored session ends. Exit game and Restart game use scoped cleanup, and Restart requests a fresh ticket. Speech processing stays local.

### Validation and preview limits

[Validation and SHA-256](releases/0.9.7.json)

The launcher passed 111 tests. Thai audio played through a simulated microphone on Windows produced live previews and a final transcript in both modes. The offline package, all eight model files, the packaged application and the signed update manifest were verified.

A physical microphone inside a live game and an installed upgrade from a previous production release remain unverified. The Windows installer has no Authenticode signature. Lumos verifies the Ed25519 update manifest and installer SHA-256.

## Attribution

Powered by ArcaneMP and MafiaHub. Players must own and install Hogwarts Legacy separately. Bundled Noto Sans Thai, Noto Serif Thai and Cinzel fonts include SIL Open Font Licenses.

Thai speech runs locally with [OpenThai2.0-ASR-Streaming from iApp](https://huggingface.co/iapp/OpenThai2.0-ASR-Streaming) and its [official ONNX export](https://huggingface.co/iapp/OpenThai2.0-ASR-Streaming-ONNX). The offline package includes the OpenMDW-1.1 license.

This repository contains release artifacts and public validation metadata only. Application/server sources, admission settings, TLS private keys and Ed25519 signing private keys are not published here.
