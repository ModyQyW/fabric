# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [11.1.1](https://github.com/ModyQyW/fabric/compare/v11.1.0...v11.1.1) (2024-09-24)


### Bug Fixes

* fix types ([c92f5d2](https://github.com/ModyQyW/fabric/commit/c92f5d27c20b18040165039d96dcfe073983695f))

## [11.1.0](https://github.com/ModyQyW/fabric/compare/v11.0.0...v11.1.0) (2024-09-23)


### Features

* update biome rules ([94ef667](https://github.com/ModyQyW/fabric/commit/94ef6678da7dea6ba78886df31429a1c72fd54c0))

## [11.0.0](https://github.com/ModyQyW/fabric/compare/v10.12.0...v11.0.0) (2024-09-20)


### ⚠ BREAKING CHANGES

* **eslint:** eslint-plugin-react -> eslint-react
* prefer double quotes
* target node20.11
* **stylelint:** remove style option, use standard configs
* **prettier:** only keep prettier-plugin-jsdoc
* **eslint:** remove solid support
* **eslint:** remove prettier config since other configs have no stylistic rules
* update envs
* eslint-plugin-import/eslint-plugin-i -> eslint-plugin-import-x
* move utils

### build

* target node20.11 ([1c31425](https://github.com/ModyQyW/fabric/commit/1c31425594ed19885455e461768cb040c66d05c8))


### Features

* add eslint-plugin-tailwindcss ([d9be274](https://github.com/ModyQyW/fabric/commit/d9be274e430cad9b5276747bdde46c9ee0d4a370))
* **biome:** update rules ([90ab480](https://github.com/ModyQyW/fabric/commit/90ab4806ac8d430e4f91e455be805a71e5d7bb7b))
* **cli:** add eslint toml support ([d72ae51](https://github.com/ModyQyW/fabric/commit/d72ae510994cbc68a5c09ae34c39569b5455e11c))
* **cli:** resolve biome and stylelint conflicts ([2ba1971](https://github.com/ModyQyW/fabric/commit/2ba1971b47e992d4fcc230527b0f9236b20838ec))
* eslint-plugin-import/eslint-plugin-i -> eslint-plugin-import-x ([63104d8](https://github.com/ModyQyW/fabric/commit/63104d8fff2938372bbad56f848fe56285fe133e))
* **eslint:** add eslint-plugin-package-json ([7f953c1](https://github.com/ModyQyW/fabric/commit/7f953c137a0d0306e379246721def383bcadc8e5))
* **eslint:** add promise support ([82fe32b](https://github.com/ModyQyW/fabric/commit/82fe32b421c776f5939d4bedb3d4d924eb333784))
* **eslint:** add toml support ([8d0468f](https://github.com/ModyQyW/fabric/commit/8d0468f2d51b81adb11e626f62b69764ec34a079))
* **eslint:** allow more typescript rules ([db22dc3](https://github.com/ModyQyW/fabric/commit/db22dc36c460667538ee559e731670ce79e46971))
* **eslint:** disable javascript rules to avoid conflicts ([3229532](https://github.com/ModyQyW/fabric/commit/32295321f060017432a3e4f89cdebbdf6c48da58))
* **eslint:** disable some vue rules to avoid conflicts ([0a56b3f](https://github.com/ModyQyW/fabric/commit/0a56b3f32971ef1975a2959509403d5a752936b2))
* **eslint:** enable react/jsx-sort-props ([e1d32db](https://github.com/ModyQyW/fabric/commit/e1d32db0e9c14eb5caab0ca5b32930342abab245))
* **eslint:** eslint-plugin-react -> eslint-react ([791364c](https://github.com/ModyQyW/fabric/commit/791364c6e8aa9edffaf3ffc437b93ddf315d93e1))
* **eslint:** fixup plugins ([0b95a81](https://github.com/ModyQyW/fabric/commit/0b95a81da71cdabcbf05504872655eba06e30f5c))
* **eslint:** improve gitignore configs ([89063d1](https://github.com/ModyQyW/fabric/commit/89063d15ae39be720d1e1ab4aec1be23abe15186))
* **eslint:** loose typescript type-aware rules ([d7bca94](https://github.com/ModyQyW/fabric/commit/d7bca94cf6024b60131efac0e9886edd08483dbd))
* **eslint:** remove prettier config since other configs have no stylistic rules ([628cb1d](https://github.com/ModyQyW/fabric/commit/628cb1d59456aa434c858338d6eb64b9218b5b74))
* **eslint:** remove solid support ([a48d669](https://github.com/ModyQyW/fabric/commit/a48d669f8e0eac53534fef20d0e5ce599f434a09))
* **eslint:** support eslint-plugin-perfectionist v3.4.0 ([3a6425c](https://github.com/ModyQyW/fabric/commit/3a6425c2d9460f857668de4d3908c37b1ef51e41))
* **eslint:** support eslint-react  v1.13.0 ([259c033](https://github.com/ModyQyW/fabric/commit/259c033a844c96690208ab329f612f79e786c089))
* **eslint:** update import/extensions & import/parsers ([f9f9b12](https://github.com/ModyQyW/fabric/commit/f9f9b12efece3abbb133b7c1a80562017aa5fd79))
* **eslint:** update imports rules ([87b5999](https://github.com/ModyQyW/fabric/commit/87b5999538466a962327e01208142e9eec6f644d))
* **eslint:** update javascript options ([4666c78](https://github.com/ModyQyW/fabric/commit/4666c78d11477e5cd62bba01fbeb3cff5313e665))
* **eslint:** update javascript rules ([6ff7dd9](https://github.com/ModyQyW/fabric/commit/6ff7dd9d594b96b7754bd95c9a9081175b12776c))
* **eslint:** update javascript rules ([febaaa1](https://github.com/ModyQyW/fabric/commit/febaaa197f8841a532d6d60cc8b883582399e074))
* **eslint:** update javascript rules ([f895954](https://github.com/ModyQyW/fabric/commit/f895954dbcf4a5958c95d17c0e0d6f21520d444e))
* **eslint:** update javascript rules ([a44abed](https://github.com/ModyQyW/fabric/commit/a44abede8828598913b20ebdc3bf980ba43fe043))
* **eslint:** update jsdoc rules ([7c5a1e4](https://github.com/ModyQyW/fabric/commit/7c5a1e47f99dd469093671d8419abe82d53ab416))
* **eslint:** update jsdoc rules ([8308c07](https://github.com/ModyQyW/fabric/commit/8308c07defdefbc151b7b23123601eb00c2b1575))
* **eslint:** update jsonc rules ([006ba64](https://github.com/ModyQyW/fabric/commit/006ba64919e85675068661b626df07781af157bc))
* **eslint:** update markdown rules ([97a61f8](https://github.com/ModyQyW/fabric/commit/97a61f858e67c72add3ecf065e19d07f1170dfda))
* **eslint:** update next rules ([da360ae](https://github.com/ModyQyW/fabric/commit/da360ae6e7162fd3558a990308aa9871da1c17e9))
* **eslint:** update node rules ([09616bf](https://github.com/ModyQyW/fabric/commit/09616bfec2a19a5d172587463f8b1dcad6c33088))
* **eslint:** update node rules ([50f967a](https://github.com/ModyQyW/fabric/commit/50f967a5c6c9bc0948a71e373c430694ba4757fc))
* **eslint:** update nuxt rules ([4cbf9f5](https://github.com/ModyQyW/fabric/commit/4cbf9f5c8f95059458c6aef4535ee56950b7766f))
* **eslint:** update perfectionist rules ([5554847](https://github.com/ModyQyW/fabric/commit/55548473b4b195a721fcae4425650dc682df2582))
* **eslint:** update perfectionist rules ([75143a7](https://github.com/ModyQyW/fabric/commit/75143a7f5ee5c9eafa67d2f0b25dac6c32de9a87))
* **eslint:** update perfectionist rules ([8f5fe42](https://github.com/ModyQyW/fabric/commit/8f5fe4273cbd527dfa7070ec4dee64625ebbf3a2))
* **eslint:** update prettier config ([9bf7452](https://github.com/ModyQyW/fabric/commit/9bf74525b4b361505ffaa0955676c469869390bb))
* **eslint:** update react rules ([871cef9](https://github.com/ModyQyW/fabric/commit/871cef9d72edf0cb8151443d70f7adc281953e39))
* **eslint:** update react rules ([8bc710b](https://github.com/ModyQyW/fabric/commit/8bc710ba71e6d3d5862fdcbd2c6e67d235632b61))
* **eslint:** update react-native rules ([8dd0253](https://github.com/ModyQyW/fabric/commit/8dd0253f67a5b91ee67f5e33ab213427a29eea1f))
* **eslint:** update regexp rules ([839c1ba](https://github.com/ModyQyW/fabric/commit/839c1ba1a1ebc777d96af0ce4395fe4a95c250b7))
* **eslint:** update regexp rules ([1cc59f3](https://github.com/ModyQyW/fabric/commit/1cc59f3e141e4bb49a88173cf79e4a3ac2b3227e))
* **eslint:** update solid rules ([472efd7](https://github.com/ModyQyW/fabric/commit/472efd7aa225416f53c8ac2fb6efd73b7e611e7f))
* **eslint:** update tailwindcss rules ([6b79785](https://github.com/ModyQyW/fabric/commit/6b797851eccb524b606fd2e5d6ea4257a098707b))
* **eslint:** update typescript config ([eb57014](https://github.com/ModyQyW/fabric/commit/eb57014e3c22ef24737361b1ddeca63d49010f57))
* **eslint:** update typescript rules ([f9d5261](https://github.com/ModyQyW/fabric/commit/f9d5261d53ea2daddcd870e2ab6695fc874923b7))
* **eslint:** update typescript rules ([8811fee](https://github.com/ModyQyW/fabric/commit/8811fee4def92044dc683ab392fe939cd7f9b1bd))
* **eslint:** update TypeScriptOptions ([dc514f2](https://github.com/ModyQyW/fabric/commit/dc514f29970ecdd8d936cb82d46504b25b8c46b9))
* **eslint:** update unicorn rules ([ece6df2](https://github.com/ModyQyW/fabric/commit/ece6df20280913bb6d6430c504477279c4f14f83))
* **eslint:** update unocss rules ([6836978](https://github.com/ModyQyW/fabric/commit/6836978809dd8eaeae182e991624064fb70e5c28))
* **eslint:** update vue rules ([3316433](https://github.com/ModyQyW/fabric/commit/33164332fc7485bf37fd5ca64d6a50ac869355ed))
* **eslint:** update yml rules ([53d5fe1](https://github.com/ModyQyW/fabric/commit/53d5fe1687119c0cf013e769dee4aff06990726d))
* **eslint:** use eslint-import-resolver-oxc ([ce0d8ec](https://github.com/ModyQyW/fabric/commit/ce0d8ecd7a1941525d1d992c9e36b1a43b98110a))
* **eslint:** use perfectionist to sort jsx props ([3c24718](https://github.com/ModyQyW/fabric/commit/3c247183697bf3447d5f09cc439d7623de39c86b))
* **lint-staged:** add eslint toml support ([bf73703](https://github.com/ModyQyW/fabric/commit/bf73703fb7aeff9b7338b7e2ce9c9ddb6ffbd836))
* **lint-staged:** default value judgement ([c81c9c0](https://github.com/ModyQyW/fabric/commit/c81c9c05c805dfddcd0798f13f0fd25d2fdbfa59))
* move utils ([af557d9](https://github.com/ModyQyW/fabric/commit/af557d9028068303733e4400da6ba0ec70121a26))
* prefer double quotes ([e8abe53](https://github.com/ModyQyW/fabric/commit/e8abe5339e5ba077a5236bf7ff97b54ef5c7c24e))
* **prettier:** only keep prettier-plugin-jsdoc ([17fe67a](https://github.com/ModyQyW/fabric/commit/17fe67a5adc7393f11aad85375a4dc75a4809a82))
* review perfectionist configs ([58ffbfb](https://github.com/ModyQyW/fabric/commit/58ffbfb74e7d1d5d94f1da15b18d49e4414ce0eb))
* **stylelint:** remove style option, use standard configs ([2cedf82](https://github.com/ModyQyW/fabric/commit/2cedf8295c7f961258bff558a355ea5c9dbb1914))
* update envs ([9c01fba](https://github.com/ModyQyW/fabric/commit/9c01fbaafb233e26c3c27fd1f9ca103eb7b9a4fc))
* update GLOB_EXCLUDE ([ff4ab71](https://github.com/ModyQyW/fabric/commit/ff4ab71aa514e82d79badab30911f9c33c97aecb))


### Bug Fixes

* **env:** fix envs ([85c171d](https://github.com/ModyQyW/fabric/commit/85c171de1c1a1a711642c092743472d668484040))
* **eslint:** add name ([3bb2765](https://github.com/ModyQyW/fabric/commit/3bb2765038a0575eb0a984838d009f76d8613cb7))
* **eslint:** disable import/first ([6aaba15](https://github.com/ModyQyW/fabric/commit/6aaba1572014db858e3b6a89a1854028340d987e))
* **eslint:** fix duplicated rules ([ca0048f](https://github.com/ModyQyW/fabric/commit/ca0048f26d37d7da87d706a96216a2fdfccbcf65))
* **eslint:** fix types ([267d041](https://github.com/ModyQyW/fabric/commit/267d041638b46f513b10b3d8e6416dc0d4a75210))
* **eslint:** fix typescript parser options ([a99d974](https://github.com/ModyQyW/fabric/commit/a99d974da100044391ed3b88c34418f14428ddd1))
* **eslint:** fixup eslint-plugin-react-hooks ([07b1285](https://github.com/ModyQyW/fabric/commit/07b12856de2534ce79618f9a2601a92ec0afbf88))
* **eslint:** improve unocss config ([dda2976](https://github.com/ModyQyW/fabric/commit/dda297674e457c8f8ccf562fc356d0a57d3d8ec5))
* **eslint:** loose unicorn/prefer-top-level-await ([f28c648](https://github.com/ModyQyW/fabric/commit/f28c648df5c6e4a146038d2c5e07b3b33645f75e))
* **eslint:** update types ([dacd58e](https://github.com/ModyQyW/fabric/commit/dacd58e810ae227d2f5e6f37c8e37d2fef6da0be))
* **eslint:** update yml rules, comment prettier-conflicted rules ([58831f9](https://github.com/ModyQyW/fabric/commit/58831f9b4ccc05a4cce1959a4e08742703ab2b36))
* **eslint:** vue + typescript judgement ([adf32df](https://github.com/ModyQyW/fabric/commit/adf32dffafb344ce0892d2830c35d85729e33c51))
* fix exports ([175375e](https://github.com/ModyQyW/fabric/commit/175375ecc751fa62bb5144fa868a3a0e298c5535))
* fix types ([2ba0336](https://github.com/ModyQyW/fabric/commit/2ba0336fd1f39daa82057e4f965a3745a20e7000))
* lint fix ([ced8b18](https://github.com/ModyQyW/fabric/commit/ced8b18d9601ca7562d3084ba506d0fabda04247))
* **prettier:** fix parsing ([c8bdfe2](https://github.com/ModyQyW/fabric/commit/c8bdfe26655ffd1edbde423397072cd2a20b6e0a))
* remove useless eslint-disable ([ba2836d](https://github.com/ModyQyW/fabric/commit/ba2836dcc89ceb7458388140e46a248c612f6088))
* sort import ([e32e118](https://github.com/ModyQyW/fabric/commit/e32e118039346871fe85281c45681152012eb4a7))
* yml empty mapping values ([9b4f094](https://github.com/ModyQyW/fabric/commit/9b4f094021b3332dc53378f7b1dc16863c739060))

## [10.12.0](https://github.com/ModyQyW/fabric/compare/v10.11.1...v10.12.0) (2024-07-18)

### Features

* use eslint-plugin-import-x by default ([1950515](https://github.com/ModyQyW/fabric/commit/19505155444e21db73b3da88dfd18ad4a302d1b2))

### Bug Fixes

* **cli:** fix biome config generation ([9f84839](https://github.com/ModyQyW/fabric/commit/9f84839f671e4ee9471c4ba080716674df468d7f))
* **cli:** fix conflict resolution ([81e2af3](https://github.com/ModyQyW/fabric/commit/81e2af3fa1bb353b6e71b507a040e4e7bf384688))
* **cli:** use named import ([d1615a1](https://github.com/ModyQyW/fabric/commit/d1615a149491ca544fd8e7b5b449790a26b94256))

## [10.11.1](https://github.com/ModyQyW/fabric/compare/v10.11.0...v10.11.1) (2024-07-13)

### Bug Fixes

* fix script ([bfe87bf](https://github.com/ModyQyW/fabric/commit/bfe87bf754529cc3e4d73e653c27de7b721c8ba5))
* **lint-staged:** fix biome support ([13836ff](https://github.com/ModyQyW/fabric/commit/13836ffd74678f3ead58e1bbf2833560bb302021))

## [10.11.0](https://github.com/ModyQyW/fabric/compare/v10.10.0...v10.11.0) (2024-07-05)

### Features

* **biome:** add biome json ([ee9eb9d](https://github.com/ModyQyW/fabric/commit/ee9eb9d61370be698d800a6c06d1ac417647f29a))
* **biome:** update globals ([ced5cd6](https://github.com/ModyQyW/fabric/commit/ced5cd67e973d87cdbcf3045a4d9f68bf4240cbe))
* **cli:** support biome ([09f03ac](https://github.com/ModyQyW/fabric/commit/09f03acee54622d93a162ee24a1902cf92022990))
* **eslint:** update globals ([495ac2b](https://github.com/ModyQyW/fabric/commit/495ac2b5a0f1a28989bce6ab24d6f67ac9755e78))

### Bug Fixes

* **cli:** update oxlint usage ([d8a842f](https://github.com/ModyQyW/fabric/commit/d8a842f523d419ca42be769f1b66167abc624b90))
* **eslint:** disable vue/enforce-style-attribute ([866219b](https://github.com/ModyQyW/fabric/commit/866219b3cc309acdeed20a5d04db65949843acec))
* **lint-staged:** update oxlint usage ([923052e](https://github.com/ModyQyW/fabric/commit/923052eaf611b3198d4005a1cfc09627ca02b386))
* **stylelint:** remove extra overrides ([a8de612](https://github.com/ModyQyW/fabric/commit/a8de6124d54fda2508785efa757868fdd2dd1931))

## [10.10.0](https://github.com/ModyQyW/fabric/compare/v10.9.5...v10.10.0) (2024-06-28)

### Features

* add constants ([cbe9d3d](https://github.com/ModyQyW/fabric/commit/cbe9d3d5f55df39c419d73f31f0d2a5fc4d4065f))
* **stylelint:** add 3 plugins support ([7e8945c](https://github.com/ModyQyW/fabric/commit/7e8945c605f8860bbc2ca2b53706e5b3cc95e85c))

### Bug Fixes

* **eslint:** loose node rules ([d6cf921](https://github.com/ModyQyW/fabric/commit/d6cf921c156071b6a4fd75bd7b99a77d7aaa1431))
* lint ([b0d5eef](https://github.com/ModyQyW/fabric/commit/b0d5eef17c0aea7491ca85b7f0f19c21800f6aec))
* **markdownlint:** remove comments and deprecated props ([7f5b06e](https://github.com/ModyQyW/fabric/commit/7f5b06ecf0df6b2098a00a9497039cb10a12194d))

## [10.9.5](https://github.com/ModyQyW/fabric/compare/v10.9.4...v10.9.5) (2024-05-09)

### Bug Fixes

* **eslint:** disable rules ([fd27f96](https://github.com/ModyQyW/fabric/commit/fd27f96d8cb5f423c3433803610ddb05d30f4df6))

## [10.9.4](https://github.com/ModyQyW/fabric/compare/v10.9.3...v10.9.4) (2024-05-09)

### Bug Fixes

* **stylelint:** fix overrides ([3da301c](https://github.com/ModyQyW/fabric/commit/3da301c23f8461ed3b28196fed3faa6e23442cef))

## [10.9.3](https://github.com/ModyQyW/fabric/compare/v10.9.2...v10.9.3) (2024-05-09)

### Bug Fixes

* **eslint:** disable vue rules ([f41aea8](https://github.com/ModyQyW/fabric/commit/f41aea886b16b2d1cb39187ca7d573ebdb5b57ba))

## [10.9.2](https://github.com/ModyQyW/fabric/compare/v10.9.1...v10.9.2) (2024-05-09)

### Bug Fixes

* **eslint:** fix eslint rules ([4d5571f](https://github.com/ModyQyW/fabric/commit/4d5571f0e0689cba74006578fb88936a0ec8cb43))
* **prettier:** disable jsdoc capitalize ([137006d](https://github.com/ModyQyW/fabric/commit/137006d76e7e371901a61b314f7fa128f8a28fb2))

## [10.9.1](https://github.com/ModyQyW/fabric/compare/v10.9.0...v10.9.1) (2024-04-15)

### Bug Fixes

* fix types ([f8fa2db](https://github.com/ModyQyW/fabric/commit/f8fa2dbceae98001c9e8194927c6bcf7abeff64e))

## [10.9.0](https://github.com/ModyQyW/fabric/compare/v10.8.2...v10.9.0) (2024-04-09)

### Features

* **eslint:** disable unicorn/import-style ([b482469](https://github.com/ModyQyW/fabric/commit/b482469308fda6c191089d43c9f12becabcbe074))

### Bug Fixes

* **cli:** create .vscode dir if not exists ([653ad65](https://github.com/ModyQyW/fabric/commit/653ad650016a2bc054092a49ff5b0a4942126c84))
* **cli:** update prettier config ([7714d2d](https://github.com/ModyQyW/fabric/commit/7714d2d4b508399a06b78afedb1502e1cf7ef8b1))
* **eslint:** update n rules ([c4f7cfa](https://github.com/ModyQyW/fabric/commit/c4f7cfadd40aeacfac8b1d5f50b8ca4b1cea86ca))

## [10.8.2](https://github.com/ModyQyW/fabric/compare/v10.8.1...v10.8.2) (2024-04-02)

### Bug Fixes

* update typesVersions ([c8c0411](https://github.com/ModyQyW/fabric/commit/c8c04117dfeafb0ebdd0ad302d073f0a5cba83b4))

## [10.8.1](https://github.com/ModyQyW/fabric/compare/v10.8.0...v10.8.1) (2024-04-01)

### Bug Fixes

* try to improve types ([bc1d219](https://github.com/ModyQyW/fabric/commit/bc1d219d2cb0a7bafc20f880434564a3cacaa7f3))

## [10.8.0](https://github.com/ModyQyW/fabric/compare/v10.7.0...v10.8.0) (2024-04-01)

### Features

* update envs ([3b3eec3](https://github.com/ModyQyW/fabric/commit/3b3eec36276184e8191e3138328b86bd1aa3a372))

### Bug Fixes

* **cli:** fix value judgement ([a362854](https://github.com/ModyQyW/fabric/commit/a362854b45b5fa68353ca1a0168d4c26ee92a57a))
* typesVersions ([47d4dd5](https://github.com/ModyQyW/fabric/commit/47d4dd535112bb6cad9f1f239841d16edb596697))

## [10.7.0](https://github.com/ModyQyW/fabric/compare/v10.6.0...v10.7.0) (2024-03-27)

### Features

* **eslint:** add js/ts rules ([fd03d95](https://github.com/ModyQyW/fabric/commit/fd03d9500804a228417fb4bd91d333f2f73876e6))

## [10.6.0](https://github.com/ModyQyW/fabric/compare/v10.5.2...v10.6.0) (2024-03-22)

### Features

* support nuxt3 ([faccb58](https://github.com/ModyQyW/fabric/commit/faccb586e268bc8b69f4d4592690b1cd68eea55f))

### Bug Fixes

* **cli:** fix vscode judgement ([6b817df](https://github.com/ModyQyW/fabric/commit/6b817dfa4609ab80bfb358de01059fdb95a0c462))
* **eslint:** set different vue block order for vue2/3 ([a8401a1](https://github.com/ModyQyW/fabric/commit/a8401a17c495160c363b741d187ed60af8ea4551))

## [10.5.2](https://github.com/ModyQyW/fabric/compare/v10.5.1...v10.5.2) (2024-03-18)

### Bug Fixes

* **eslint:** disable typescript stylistic rules ([4f4bfa0](https://github.com/ModyQyW/fabric/commit/4f4bfa0bdc09a9fb425de03be8e68f6529b232c9))

## [10.5.1](https://github.com/ModyQyW/fabric/compare/v10.5.0...v10.5.1) (2024-03-18)

### Bug Fixes

* **eslint:** fix spell ([f682aa5](https://github.com/ModyQyW/fabric/commit/f682aa57de4516c51d32e73a7d8dd495d1bc79ac))

## [10.5.0](https://github.com/ModyQyW/fabric/compare/v10.4.0...v10.5.0) (2024-03-15)

### Features

* **cli:** add vscode support ([4b4d4d1](https://github.com/ModyQyW/fabric/commit/4b4d4d1f2645b647029259d9730020418d5c8fbc))
* **eslint:** perfectionist/sort-enums enable partition-by-comment ([567b7d0](https://github.com/ModyQyW/fabric/commit/567b7d0b1c242db36c7248e1023901709ee7eba0))
* **eslint:** stylelint enable stylistic rules ([95a0509](https://github.com/ModyQyW/fabric/commit/95a0509ebe03e919a34b26a9d3f1043bb12c01de))
* **eslint:** vue enable more rules ([a8b7538](https://github.com/ModyQyW/fabric/commit/a8b7538c1b3ea0dc3c1b278b25e741a442c7e472))
* **stylelint:** add stylelint-high-performance-animation ([0ec2d34](https://github.com/ModyQyW/fabric/commit/0ec2d34d0029fc8ad5f3ea611f54ece88e4ae301))
* upgrade to eslint-plugin-markdown 4.0.1 ([673cc9c](https://github.com/ModyQyW/fabric/commit/673cc9c621bafbd29f0f84f416c38e0765af5432))

### Bug Fixes

* **cli:** allow empty devDependencies or dependencies ([b6579a8](https://github.com/ModyQyW/fabric/commit/b6579a80488b34ba7d831a8ec0331f37a8293141))
* **cli:** fix pnpm workspace support ([ded3e1d](https://github.com/ModyQyW/fabric/commit/ded3e1d461521e891dda4cd0230361652df9f0bb))

## [10.4.0](https://github.com/ModyQyW/fabric/compare/v10.3.11...v10.4.0) (2024-02-24)

### Features

* **cli:** add editorconfig support ([5759c79](https://github.com/ModyQyW/fabric/commit/5759c79e3eb0c18b2a9e8821de79640da6f19ea8))
* **cli:** use eslint.config.mjs ([822facb](https://github.com/ModyQyW/fabric/commit/822facb6981ee5679983c60c22cb81b176ece755))

### Bug Fixes

* **cli:** fix spelling ([b133d5a](https://github.com/ModyQyW/fabric/commit/b133d5af471ff71c9452c43a7ef9e8ea683c0b26))
* **cli:** generate Prettier CJS ([0de8665](https://github.com/ModyQyW/fabric/commit/0de8665a70129126e877c7ad0a4eaa7bf77477a7))
* remove node check ([d8e18e2](https://github.com/ModyQyW/fabric/commit/d8e18e2ebf29c502c0c01b8a6b3060f23f055678))

## [10.3.11](https://github.com/ModyQyW/fabric/compare/v10.3.10...v10.3.11) (2024-02-21)

### Bug Fixes

* **eslint:** disable vue/multi-word-component-names ([78a2a16](https://github.com/ModyQyW/fabric/commit/78a2a165f2095fdf0970b8bbfbda6eb7d5912d4b))

## [10.3.10](https://github.com/ModyQyW/fabric/compare/v10.3.9...v10.3.10) (2024-02-21)

### Bug Fixes

* **constants:** add !.vuepress into GLOB_EXCLUDE ([4a2cb49](https://github.com/ModyQyW/fabric/commit/4a2cb49093d80f606682043c1552274687fe6a9f))
* **lint-staged:** improve lint-staged support ([d43d29a](https://github.com/ModyQyW/fabric/commit/d43d29a456f35f487e1af17eac87792ab518a70c))

## [10.3.9](https://github.com/ModyQyW/fabric/compare/v10.3.8...v10.3.9) (2024-02-20)

### Bug Fixes

* **cli:** filter packages before installed ([899d607](https://github.com/ModyQyW/fabric/commit/899d60743e00e09c9a0c126f32782eb63bdddc3d))
* **cli:** fix eslint packages ([c67e56d](https://github.com/ModyQyW/fabric/commit/c67e56db802fc83e7471b20c82550c4834f3210c))
* **cli:** fix lint-staged template ([7cf4231](https://github.com/ModyQyW/fabric/commit/7cf423188c933f0fcf8c4daebe7c38e5e4d10ef4))
* **lint-staged:** disable prettier on auto generated files ([6beb452](https://github.com/ModyQyW/fabric/commit/6beb452f816aa498ce4add58655f25f971c7c261))

## [10.3.8](https://github.com/ModyQyW/fabric/compare/v10.3.7...v10.3.8) (2024-02-19)

### Bug Fixes

* **cli:** eslint cjs config ([dfed0c6](https://github.com/ModyQyW/fabric/commit/dfed0c6a6e41bcf67b74930e66a9f0c23ad172cb))

## [10.3.7](https://github.com/ModyQyW/fabric/compare/v10.3.6...v10.3.7) (2024-02-19)

### Bug Fixes

* **cli:** fix eslint judge ([2513073](https://github.com/ModyQyW/fabric/commit/2513073c8a03ca880413bda7c200b5446c385b20))
* **cli:** fix typecheck judge ([7e76805](https://github.com/ModyQyW/fabric/commit/7e768056f83bb6760fbd11dacb0a7142118bd5ce))

## [10.3.6](https://github.com/ModyQyW/fabric/compare/v10.3.5...v10.3.6) (2024-02-19)

### Bug Fixes

* **cli:** reduce install count ([788fea6](https://github.com/ModyQyW/fabric/commit/788fea6581962b9cad97cc16145a75200d6ccc02))

## [10.3.5](https://github.com/ModyQyW/fabric/compare/v10.3.4...v10.3.5) (2024-02-19)

### Bug Fixes

* **cli:** remove cjs config, fix simple-git-hooks ([b5760a6](https://github.com/ModyQyW/fabric/commit/b5760a692108f56bdc9042780d4bb0b7607a934e))

## [10.3.4](https://github.com/ModyQyW/fabric/compare/v10.3.3...v10.3.4) (2024-02-19)

### Bug Fixes

* **cli:** simple-git-hooks scripts and packages ([3d49058](https://github.com/ModyQyW/fabric/commit/3d4905882d6b67477d6c78291341f2a62acf2657))

## [10.3.3](https://github.com/ModyQyW/fabric/compare/v10.3.2...v10.3.3) (2024-02-19)

### Bug Fixes

* **cli:** fix notInstalled judgement ([6dedc58](https://github.com/ModyQyW/fabric/commit/6dedc58fd2c20f1a7dbb2f045a5ccabbdc850118))

## [10.3.2](https://github.com/ModyQyW/fabric/compare/v10.3.1...v10.3.2) (2024-02-19)

### Bug Fixes

* **cli:** fix package.json writing ([05c8bc7](https://github.com/ModyQyW/fabric/commit/05c8bc7b33a04ddd1d13821c12ac7187ff1c5444))

## [10.3.1](https://github.com/ModyQyW/fabric/compare/v10.3.0...v10.3.1) (2024-02-19)

### Bug Fixes

* **cli:** skip install for installed packages ([36725aa](https://github.com/ModyQyW/fabric/commit/36725aa107b478aec213c1195c843bdd70083479))

## [10.3.0](https://github.com/ModyQyW/fabric/compare/v10.2.3...v10.3.0) (2024-02-18)

### Features

* add cli ([770bcdc](https://github.com/ModyQyW/fabric/commit/770bcdcff59142cd8635652e9b42771216da4bfc))

### Bug Fixes

* **eslint:** disable n/shebang ([0fc35a3](https://github.com/ModyQyW/fabric/commit/0fc35a352c6ce65915e2b3577d32778c3f525a7b))
* **lint-staged:** disable prettier on lock files ([fbe0c00](https://github.com/ModyQyW/fabric/commit/fbe0c00ba0244ac52ecc7deb78cca7fc6fa4c69e))
* **lint-staged:** narrow down prettier negative pattern scope ([ccf0319](https://github.com/ModyQyW/fabric/commit/ccf031983a8c33e1108f252d2d3961977628c250))
* **lint-staged:** use oxlint --fix on vue ([2d79ff6](https://github.com/ModyQyW/fabric/commit/2d79ff693d06a6727d4704bade4185194ed5d241))

## [10.2.3](https://github.com/ModyQyW/fabric/compare/v10.2.2...v10.2.3) (2024-01-31)

### Bug Fixes

* **stylelint:** fix vue config ([a513eec](https://github.com/ModyQyW/fabric/commit/a513eece977eaa635a398a4e0c915ece418af956))

## [10.2.2](https://github.com/ModyQyW/fabric/compare/v10.2.1...v10.2.2) (2024-01-31)

### Bug Fixes

* **eslint:** allow vue file more filename cases ([2eb5c02](https://github.com/ModyQyW/fabric/commit/2eb5c02219912d4cbfb6116b1e6631fa74c51dae))
* **eslint:** perfectionist/sort-objects partition-by-comment defaults to true ([5eb96fa](https://github.com/ModyQyW/fabric/commit/5eb96fac9424301713b6dae0cad15aae3c72b9f3))

## [10.2.1](https://github.com/ModyQyW/fabric/compare/v10.2.0...v10.2.1) (2024-01-30)

### Bug Fixes

* disable oxlint for vue ([c797c04](https://github.com/ModyQyW/fabric/commit/c797c04466d6661e418e8e4c0e365a0809039184))

## [10.2.0](https://github.com/ModyQyW/fabric/compare/v10.1.0...v10.2.0) (2024-01-30)

## [10.1.0](https://github.com/ModyQyW/fabric/compare/v10.0.0...v10.1.0) (2024-01-29)

### Features

* **eslint:** add eslint-plugin-react-perf ([6667ece](https://github.com/ModyQyW/fabric/commit/6667ecec69091669bf8d1af25230048bc7267546))

## [10.0.0](https://github.com/ModyQyW/fabric/compare/v9.0.6...v10.0.0) (2024-01-19)

### ⚠ BREAKING CHANGES

* update configs

### Features

* add constants ([6bdf5ca](https://github.com/ModyQyW/fabric/commit/6bdf5ca59a6f0b4021a1ba766ae66cbe37eeb727))
* allow custom eslint files ([8cf6162](https://github.com/ModyQyW/fabric/commit/8cf6162406aaaa29451eabe7eea7eef45a1308e5))
* **eslint:** custom options ([a18452c](https://github.com/ModyQyW/fabric/commit/a18452c8ecd41f887c183ef4cb65cd112a57ceee))
* **lint-staged:** add oxlint support, remove zhlint support ([b5ba1c6](https://github.com/ModyQyW/fabric/commit/b5ba1c65f6d6ad9ce17ee15963e648159287b55c))
* **markdownlint:** update support ([0e46e26](https://github.com/ModyQyW/fabric/commit/0e46e26c87da403d31a3fe7de13762449c2de970))
* **stylelint:** update config ([3b235bb](https://github.com/ModyQyW/fabric/commit/3b235bbae557faeab39bdb3fb15f02cb518630dc))
* update configs ([21aca25](https://github.com/ModyQyW/fabric/commit/21aca252e5a3bb7320ca0de62da95d40ef18bf1b))

### Bug Fixes

* fix build failed ([629ad18](https://github.com/ModyQyW/fabric/commit/629ad18ab28ef0d550217894d92f45dfb150d29c))
* fix config ([d22e30a](https://github.com/ModyQyW/fabric/commit/d22e30ac8d8570ec074795bba53cfc456227a1be))
* **lint-staged:** remove extra configs ([e55b4ff](https://github.com/ModyQyW/fabric/commit/e55b4ff6f3f4d0db29b710bab2f300b7eb59ac16))
* **lint-staged:** remove tsc related ([e746243](https://github.com/ModyQyW/fabric/commit/e746243e16d8842bfa478cc218c27fea0fe3848c))
* **lint-staged:** remove zhlint and tsc ([aa684ef](https://github.com/ModyQyW/fabric/commit/aa684efce0c67abbb2dff2c91ff5c82fae8e1936))

## [9.0.6](https://github.com/ModyQyW/fabric/compare/v9.0.5...v9.0.6) (2023-09-21)

### Bug Fixes

* ignore uni-pages.d.ts ([92c226f](https://github.com/ModyQyW/fabric/commit/92c226fa61d5f8cb05de6805dbc4ff6847620c66))

## [9.0.5](https://github.com/ModyQyW/fabric/compare/v9.0.4...v9.0.5) (2023-09-06)

### Bug Fixes

* **eslint:** disable stylistic by default ([b25cc22](https://github.com/ModyQyW/fabric/commit/b25cc2279b83beffedb2c9afc176b31cdc7389ab))

## [9.0.4](https://github.com/ModyQyW/fabric/compare/v9.0.3...v9.0.4) (2023-09-06)

## [9.0.3](https://github.com/ModyQyW/fabric/compare/v9.0.2...v9.0.3) (2023-08-16)

### Bug Fixes

* **stylelint:** add stylelint-prettier ([9cf0857](https://github.com/ModyQyW/fabric/commit/9cf085778389922e2441ac777be4594273007658))

## [9.0.2](https://github.com/ModyQyW/fabric/compare/v9.0.1...v9.0.2) (2023-08-10)

### Bug Fixes

* **eslint:** disable @unocss/order-attributify to avoid conflicts ([7ee6bb8](https://github.com/ModyQyW/fabric/commit/7ee6bb8a17ce2cee1160313bdc5a47f2b8b3f66d))

## [9.0.1](https://github.com/ModyQyW/fabric/compare/v9.0.0...v9.0.1) (2023-08-04)

### Bug Fixes

* fix eslint rules ([381142e](https://github.com/ModyQyW/fabric/commit/381142e501b562d0e65cbbed440006263e6f885e))

## [9.0.0](https://github.com/ModyQyW/fabric/compare/v8.3.3...v9.0.0) (2023-08-04)

### ⚠ BREAKING CHANGES

* requires prettier@3
* requires @typescript-eslint@6

### Features

* requires [@typescript-eslint](https://github.com/typescript-eslint)@6 ([2c0e632](https://github.com/ModyQyW/fabric/commit/2c0e6327ec2774dad90fe17d14b3d63778f0b0d7))
* requires prettier@3 ([1ed13d1](https://github.com/ModyQyW/fabric/commit/1ed13d1d54d31fd5922d4d381daa8fcbd3ca548d))

## [8.3.3](https://github.com/ModyQyW/fabric/compare/v8.3.2...v8.3.3) (2023-07-03)

### Bug Fixes

* ignore some tmp files ([d470819](https://github.com/ModyQyW/fabric/commit/d470819d6bbdb560d50815ee12ea43bb56b86326))

## [8.3.2](https://github.com/ModyQyW/fabric/compare/v8.3.1...v8.3.2) (2023-06-28)

### Bug Fixes

* resolve import/no-unresolved ([cc49ad0](https://github.com/ModyQyW/fabric/commit/cc49ad02d7296ce967d748d680c940203cefff47))

## [8.3.1](https://github.com/ModyQyW/fabric/compare/v8.3.0...v8.3.1) (2023-06-19)

## [8.3.0](https://github.com/ModyQyW/fabric/compare/v8.2.0...v8.3.0) (2023-06-09)

### Features

* support svelte ([1b8fa83](https://github.com/ModyQyW/fabric/commit/1b8fa83d6c1b1c028b6e18102c92fa1e6e31ba1a))

### Bug Fixes

* fix judgement ([4d98bcd](https://github.com/ModyQyW/fabric/commit/4d98bcd05cb4c9b889b2e60d46184ecf780706ee))

## [8.2.0](https://github.com/ModyQyW/fabric/compare/v8.1.0...v8.2.0) (2023-05-30)

### Features

* support solid ([d5bc9e1](https://github.com/ModyQyW/fabric/commit/d5bc9e1aa4c1c4fb6666521e34e24e401d40c162))

### Bug Fixes

* ignore vue-i18n virtual modules ([d03e37e](https://github.com/ModyQyW/fabric/commit/d03e37e6d50990e26e55bdc6616dd358d3e421ce))

## [8.1.0](https://github.com/ModyQyW/fabric/compare/v8.0.3...v8.1.0) (2023-05-18)

### Features

* enable unocss for eslint by default ([8341316](https://github.com/ModyQyW/fabric/commit/8341316ac83430db93e86001fdcfe673a1be1f95))

### Bug Fixes

* ignore virtual module ([3a0d50d](https://github.com/ModyQyW/fabric/commit/3a0d50d0bbc83c3d7388bb648f72f0c1f6e30d05))

## [8.0.3](https://github.com/ModyQyW/fabric/compare/v8.0.2...v8.0.3) (2023-05-09)

### Bug Fixes

* fix eslint rules ([bc86bb1](https://github.com/ModyQyW/fabric/commit/bc86bb11f0a4530d95eec46add9f809995a1ef24))

## [8.0.2](https://github.com/ModyQyW/fabric/compare/v8.0.1...v8.0.2) (2023-05-09)

### Bug Fixes

* fix typescript rules ([d74fddd](https://github.com/ModyQyW/fabric/commit/d74fddd6c598f3821945ccd99e682efbc5d5006d))

## [8.0.1](https://github.com/ModyQyW/fabric/compare/v8.0.0...v8.0.1) (2023-05-09)

### Bug Fixes

* split eslint rules ([cbe0cba](https://github.com/ModyQyW/fabric/commit/cbe0cba7fcac1847fda2b8de2ea1ea66ca0f7f2f))

## [8.0.0](https://github.com/ModyQyW/fabric/compare/v7.5.0...v8.0.0) (2023-05-08)

### ⚠ BREAKING CHANGES

* remove prettier plugin tailwindcss
* update eslint config
* target node16
* remove tsconfig.base.json

### Features

* support unocss ([d0600e3](https://github.com/ModyQyW/fabric/commit/d0600e3a51212d20c098e0f8d895d3bf6dad90c2))
* add stylelint-stylistic ([4b36200](https://github.com/ModyQyW/fabric/commit/4b362004c52a2ecba1125d4f733f9a8b4773fa5c))
* remove prettier plugin tailwindcss ([d2d5aae](https://github.com/ModyQyW/fabric/commit/d2d5aae712779ac3cf913d016e4b17bab73e40e4))
* remove tsconfig.base.json ([75ee893](https://github.com/ModyQyW/fabric/commit/75ee8935720c684256c9e391c6b8e34cc09031e2))
* update eslint config ([91379d0](https://github.com/ModyQyW/fabric/commit/91379d03176d2b623d1f8098ef6c866bc0defb86))
* update prettier config ([48afb4e](https://github.com/ModyQyW/fabric/commit/48afb4ef89f7f33c8371575dff853ea81ad4afb0))

### Bug Fixes

* eslint react rules ([f974f05](https://github.com/ModyQyW/fabric/commit/f974f05cf4fa193662af4057128ff922bbff69d9))
* fix judgement ([b04e9b0](https://github.com/ModyQyW/fabric/commit/b04e9b0764e6bc3067e913cf9ae7d8c9f830ed82))
* fix stylelint config ([539b864](https://github.com/ModyQyW/fabric/commit/539b86435a3504bace2e8ab6048081da80975a17))

### build

* target node16 ([0087754](https://github.com/ModyQyW/fabric/commit/008775484186ad75c774343d4ecc69300f24a94e))
