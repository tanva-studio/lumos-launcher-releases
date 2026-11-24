# Lumos Launcher

Official Windows installers and signed update manifests for Lumos Project SRP.

## Current preview

[Download Lumos Launcher 0.9.9 for Windows x64](https://github.com/tanva-studio/lumos-launcher-releases/releases/download/v0.9.9/Lumos-Electron-Setup-0.9.9.exe) (333 MB). Close the game and run the installer to upgrade.

Version 0.9.9 is a manual download. The in-app updater requires a signed update manifest. [Release notes](https://github.com/tanva-studio/lumos-launcher-releases/releases/tag/v0.9.9) · [File size and SHA-256](releases/0.9.9.json).

### Changes in 0.9.9

- The home screen groups server status and the Play button. Settings, navigation and the loading screen share the same layout and theme.
- Check for Lumos and ArcaneMP updates with one action. The launcher can notify players about new signed Lumos releases and newer ArcaneMP versions reported by their server.
- Thai speech recognition runs on the selected SRP server. Players can hear their microphone before joining and test Thai transcription in a paired game session.

The Windows installer is Authenticode-unsigned. The release assets include SHA256SUMS.txt for verifying the download.

## Attribution

Powered by ArcaneMP and MafiaHub. Players must own and install Hogwarts Legacy separately. Bundled Noto Sans Thai, Noto Serif Thai and Cinzel fonts include SIL Open Font Licenses.

Thai speech runs locally with [OpenThai2.0-ASR-Streaming from iApp](https://huggingface.co/iapp/OpenThai2.0-ASR-Streaming) and its [official ONNX export](https://huggingface.co/iapp/OpenThai2.0-ASR-Streaming-ONNX). The offline package includes the OpenMDW-1.1 license.

This repository contains release artifacts and public validation metadata only. Application/server sources, admission settings, TLS private keys and Ed25519 signing private keys are not published here.
