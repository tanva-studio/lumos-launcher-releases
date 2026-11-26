# Lumos Launcher

Official Windows installers and signed update manifests for Lumos Project SRP.

## Current preview

[Download Lumos Launcher 0.9.10 for Windows x64](https://github.com/tanva-studio/lumos-launcher-releases/releases/download/v0.9.10/Lumos-Electron-Setup-0.9.10.exe) (309 MB). Close the game and run the installer to upgrade.

Version 0.9.10 is a manual download. [Release notes](https://github.com/tanva-studio/lumos-launcher-releases/releases/tag/v0.9.10) · [File size and SHA-256](releases/0.9.10.json).

### Changes in 0.9.10

The launcher now connects to the game at `16.5.44.44:27015` and requests admission tickets from `https://16.5.44.44:27016/`.

The Windows installer is Authenticode-unsigned. The release assets include SHA256SUMS.txt for verifying the download.

## Attribution

Powered by ArcaneMP and MafiaHub. Players must own and install Hogwarts Legacy separately. Bundled Noto Sans Thai, Noto Serif Thai and Cinzel fonts include SIL Open Font Licenses.

Thai speech runs locally with [OpenThai2.0-ASR-Streaming from iApp](https://huggingface.co/iapp/OpenThai2.0-ASR-Streaming) and its [official ONNX export](https://huggingface.co/iapp/OpenThai2.0-ASR-Streaming-ONNX). The offline package includes the OpenMDW-1.1 license.

This repository contains release artifacts and public validation metadata only. Application/server sources, admission settings, TLS private keys and Ed25519 signing private keys are not published here.
