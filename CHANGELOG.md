# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### 0.2.6 (2022-06-09)


### Bug Fixes

* handle null return value case ([a5aefce](https://github.com/kl-engineering/kidsloop-media-hooks/commit/a5aefcecbc9e1150e2f1fb95637ce26058fb7d7e))

### 0.2.5 (2022-06-07)


### Bug Fixes

* failed downloads because of expired presigned urls ([7ef0dad](https://github.com/kl-engineering/kidsloop-media-hooks/commit/7ef0dad6162b021115e369b484572bdb07d2c1a3))

### 0.2.4 (2022-05-23)


### Features

* **DAS-362:** add new download hook ([87a6570](https://github.com/kl-engineering/kidsloop-media-hooks/commit/87a65704611bf31362a28caca251fbbbf5deaf8a))

### [0.2.3](https://github.com/KL-Engineering/kidsloop-media-hooks/compare/v0.2.2...v0.2.3) (2022-04-15)


### Features

* **DAS-254:** add imageMetadata hook ([635a738](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/284b6f78e6df084de1ec5ed45daea82f9ff86de6))

### [0.2.2](https://github.com/KL-Engineering/kidsloop-media-hooks/compare/v0.2.1..v0.2.2) (2022-03-30)


### Refactor

* debugging ([0e78070](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/0e78070d016c9de89b7fac2c38903a2dd3e315ad))
* remove debug logs ([e1c4ce9](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/e1c4ce9ed4122eb71925a43ff596d6bf2907d2b8))

### [0.2.1](https://github.com/KL-Engineering/kidsloop-media-hooks/compare/v0.2.0..v0.2.1) (2022-03-23)


### Refactor

* add logs for debugging ([a0d5676](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/a0d567605a4c92a87248c3685107b1eb375fe75e))

## [0.2.0](https://github.com/KL-Engineering/kidsloop-media-hooks/compare/v0.1.7..v0.2.0) (2022-03-10)


### ⚠ BREAKING CHANGES

* generalize by renaming audio to media

### Features

* generalize by renaming audio to media ([635a738](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/635a738ac74744a4095d3267277a0c4a848d1286))
* rename package to kidsloop-media-ui ([76adaf8](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/76adaf8edb527f6034be4cb0171715462bcf0a7b))

### [0.1.7](https://github.com/KL-Engineering/kidsloop-media-hooks/compare/v0.1.6..v0.1.7) (2022-03-08)


### Refactor

* remove debug logs ([91de673](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/91de673051b558de546c0584d5215c88a35ad004))
* remove unused AudioPlayerHookOutput property ([0ecdafa](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/0ecdafa0c406d995aa43b890d36c074c5ff6e079))

### [0.1.6](https://github.com/KL-Engineering/kidsloop-media-hooks/compare/v0.1.5..v0.1.6) (2022-03-04)


### Features

* change creationDate to createdAt ([c2a7a16](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/c2a7a1636d722f96c1ede9953485cc02506d16e9))

### [0.1.5](https://github.com/KL-Engineering/kidsloop-media-hooks/compare/v0.1.4..v0.1.5) (2022-03-03)


### Features

* add client parameter to components ([ab87ea8](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/ab87ea8cdece96d28264e25d0d2a131c7201b147))


### Refactor

* forward failed fetch response to React error ([0b37226](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/0b372267a6dceb6b2829e1c9886c1ff37bcac037))

### [0.1.4](https://github.com/KL-Engineering/kidsloop-media-hooks/compare/v0.1.3..v0.1.4) (2022-02-21)


### Bug Fixes

* graphql syntax error ([153c452](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/153c45287113c7d9d386982cb78b6cb1bb1568b4))

### [0.1.3](https://github.com/KL-Engineering/kidsloop-media-hooks/compare/v0.1.2..v0.1.3) (2022-02-17)


### Features

* add required parameter to download hook ([40afdb3](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/40afdb3f516a429abec773eb50757a9b67ae6651))

### [0.1.2](https://github.com/KL-Engineering/kidsloop-media-hooks/compare/v0.1.1..v0.1.2) (2021-11-25)

### [0.1.1](https://github.com/KL-Engineering/kidsloop-media-hooks/compare/v0.1.0..v0.1.1) (2021-11-08)


### Features

* support passing in an ApolloClient ([822b9db](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/822b9dbfff735b1b67c4213d0e8ed956b3ec1811))


### Bug Fixes

* useAudioMetadata undefined error ([9967153](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/99671530b99ef687157e873dd099e21fbbcdcd9d))

## 0.1.0 (2021-11-08)


### Features

* add getAudioMetadata query ([6bd43c5](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/6bd43c5b041ba898128adcb95df568006f550e44))
* add metadata description field ([820236b](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/820236b34e19a1e7a939b871046b4c68f6b8fefa))
* add useAudioMetadata without demo ([267df87](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/267df87644466cfc09a2ff79c40b1ab38e9c4280))
* export audio download into hook + demo component ([81051c9](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/81051c931b1e87002c6817a62cbcd0958df6b32a))
* expose mimeType in the metadata ([57d47d3](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/57d47d35f627f54f3110f1e6ff525ed8701fef1f))
* move useDownloadAudio hook into ./hooks ([687d740](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/687d740381007546d78fdd5f0a116d8f1c4cdc2c))
* use proxy ([859e564](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/859e5647467244c7b6ab21408f07932f258f839c))


### Bug Fixes

* add mime type to AudioPlayer ([be1d045](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/be1d0457e16b5bfed84097c0a50fa18451fc3219))
* set @apollo/client as a peer dependency ([149a9d8](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/149a9d82c69cad7ca38bb4ad3cbf191d142a4a68))


### Refactor

* change hook extensions from tsx to ts ([c966a81](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/c966a817c982c7ef5f85d5ebb329ca22cb978a44))
* export typescript types explicitly ([233b61c](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/233b61cf14edc54e3395a75497289dbfa3320acd))
* extract logic into files ([ab85582](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/ab855823b70e1e8497d1174a53dec0782cabbefa))
* merge ([4f11c85](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/4f11c851e4d04cd5c3de2f44dde282aa1995a903))
* remove outdated code ([4ffe877](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/4ffe87732ac8806f53bd29d657fd828d3ef3d5c8))
* rename components to something more fitting ([10a42d4](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/10a42d4ccea3fe52625ab532ed0c40131d214e7f))
* strip project down and organize ([a866a75](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/a866a758585245d7e63d054499803a073cc3b8a5))


### Build Changes

* delete dist before packaging ([ca7b76f](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/ca7b76f6b01d45b45096f94d80be298c389b9cb7))
* make husky files executable ([d14d176](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/d14d176b8cd4a7eab807bea54d3bd4ef4a6b4ed5))
* rollup configuration and build ([6b9e11c](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/6b9e11c2a31e0424bca057fcd1d344eabad1f278))
* update node version from 14 to 16 ([cecf1c9](https://github.com/KL-Engineering/kidsloop-media-hooks/commit/cecf1c9cc5366269ad9c53d72a150755a81ae48f))
