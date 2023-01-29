# @modyqyw/fabric

[![npm](https://img.shields.io/npm/v/@modyqyw/fabric)](https://www.npmjs.com/package/@modyqyw/fabric)
[![GitHub license](https://img.shields.io/github/license/ModyQyW/fabric)](https://github.com/ModyQyW/fabric/blob/main/LICENSE)

[English](./README.md) | 简体中文

开箱即用的共享规范，适用于不同的 JavaScript / TypeScript 项目。

要求：

- 最新的 Node LTS
- 最新的依赖管理工具（npm / yarn / pnpm）
- 如果在使用 npm 9，建议在 `.npmrc` 里设置 `legacy-peer-deps=true` 或使用 `--legacy-peer-deps`
  - 详见 [npm v9 - legacy-peer-deps](https://docs.npmjs.com/cli/v9/using-npm/config#legacy-peer-deps)
  - 使用该选项能有效避免自动安装 NPM 包的 `peerDependencies`
- 如果在使用 pnpm 7，建议在 `.npmrc` 里设置 `shamefully-hoist=true` 或使用 `--shamefully-hoist`
  - 详见 [pnpm - shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist)
  - 使用该选项能有效避免部分 NPM 包不够规范而导致的幽灵依赖问题（使用了一些没有定义在 `package.json` 中的包）
- 如果在使用 yarn 3，建议在 `.yarnrc.yml` 里设置 `nodeLinker: 'node-modules'`
  - 详见 [yarn - nodeLinker](https://yarnpkg.com/configuration/yarnrc#nodeLinker)
  - 使用该选项能有效避免破坏现有项目
- 对于 React 项目，使用新的 JSX 转换和 hooks
- 对于 Vue 项目，使用组合式 API，即 Composition API

下面使用 `npm`。如果需要镜像支持，不妨看看 [nrm](https://github.com/Pana/nrm) 和 [npmmirror](https://npmmirror.com/)。

## 使用

```sh
# 本地
npm install -D @modyqyw/fabric@6

# 全局
npm install --location=global @modyqyw/fabric@6
```

[node-semver](https://github.com/npm/node-semver) 有更多版本说明。

### 命名

命名应该要简洁明了，但它很难被 linter 检查。

跟随已有的规范是一个好选择。

- 对于 JavaScript / TypeScript
  - [kettannaito/naming-cheatsheet](https://github.com/kettanaito/naming-cheatsheet)
  - [ModyQyW/naming-cheatsheet](https://github.com/ModyQyW/naming-cheatsheet) - 简体中文版
- 对于 CSS / SCSS
  - [BEM](http://getbem.com/)
  - [CSS Modules](https://github.com/css-modules/css-modules)
  - [OOCSS](https://github.com/stubbornella/oocss/wiki)
  - [ACSS](https://css-tricks.com/lets-define-exactly-atomic-css/)
  - [SMACSS](http://smacss.com/)
- 可供参考的开源项目
  - [bootstrap](https://getbootstrap.com/)
  - [tailwindcss](https://tailwindcss.com/)
  - [mui](https://mui.com/)
  - [antd](https://ant.design/)
  - [vuetify](https://vuetifyjs.com/)
  - [element-plus](https://element-plus.org/)

### Git

看看 [Git](https://git-scm.com/doc)、[Git flow](https://nvie.com/posts/a-successful-git-branching-model/)、[GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)、[GitLab flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html) 和 [Gif LFS](https://git-lfs.github.com/)。

```sh
git config --global core.autocrlf false
git config --global init.defaultBranch main
```

对于 SSH 密钥，可以看看 [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)，它也适用于其它 git 系统，比如 [GitLab](https://gitlab.com/)。

`.gitignore` 例子可以看 [这里](./.gitignore)。

### EditorConfig

看看 [EditorConfig](https://editorconfig.org/)。

设置 `.editorconfig`。

```sh
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false

```

### tsconfig.json

看看 [tsconfig.json](https://aka.ms/tsconfig.json)。

**你只应该在一个没有 `tsconfig.json` 且使用了 Webpack、Vite 之类的打包工具的新项目里使用这个。请优先使用项目附带的 `tsconfig.json`，或考虑使用 [tsconfig/bases](https://github.com/tsconfig/bases) 提供的配置。**

```json
{
  "extends": "@modyqyw/fabric/tsconfig.base.json",
  "compilerOptions": {
    // 视情况设置 baseUrl
    "baseUrl": ".",
    // 视情况设置 module，默认 ESNext
    "module": "CommonJS",
    // 视情况设置 preserveValueImports，默认 true
    "preserveValueImports": false,
    // 视情况设置 lib，默认 ["ESNext"]
    "lib": ["ESNext", "DOM"],
    // 视情况设置 target，默认 ESNext
    "target": "ESNext",
    // 视情况设置 jsx，默认 preserve
    "jsx": "react-jsx",
    // 视情况设置 paths 以配置路径别名，默认 {}
    "paths": {
      "@/*": ["./src/*"]
    },
    // 如果出现了推断问题
    "preserveSymlinks": true,
    // 视情况设置 typeRoots，默认 ["./node_modules/@types", "./src/types", "./src/typings", "./types", "./typings"]
    "typeRoots": ["./node_modules/@types", "./src/types", "./src/typings", "./types", "./typings"],
    // 视情况设置 types，默认 []
    "types": [
      // uni-app
      "@dcloudio/types",
      // uni-helper
      "@uni-helper/uni-app-types",
      "@uni-helper/uni-cloud-types",
      "@uni-helper/uni-ui-types",
      // 支付宝小程序
      "@mini-types/alipay",
      // 微信小程序
      "miniprogram-api-typings",
      // element-plus
      "element-plus/global",
      // element-pro-components
      "element-pro-components/types/components",
      // node
      "node",
      // type-fest
      "type-fest",
      // unplugin-icons
      "unplugin-icons/types/react",
      "unplugin-icons/types/vue",
      // unplugin-vue-router
      "typed-router.d.ts",
      // unplugin-vue2-script-setup
      "unplugin-vue2-script-setup/types",
      "unplugin-vue2-script-setup/ref-macros",
      // vite-plugin-pages
      "vite-plugin-pages/client",
      "vite-plugin-pages/client-react",
      // vite-plugin-vue-layouts
      "vite-plugin-vue-layouts/client",
      // vite
      "vite/client",
      // vue3 script setup
      "vue/macros-global"
    ]
  },
  // volar 配置
  // https://github.com/johnsoncodehk/volar/blob/master/vue-language-tools/vue-language-core/schemas/vue-tsconfig.schema.json
  "vueCompilerOptions": {
    // uni-app
    "nativeTags": ["block", "component", "template", "slot"],
    "experimentalRuntimeMode": "runtime-uni-app",
    // legacy support
    "target": 2, // 2, 2.7, 3
    "experimentalTemplateCompilerOptions": {
      "compatConfig": { "MODE": 2 }
    }
  },
  // ts-node
  // npm install -D tsconfig-paths
  "ts-node": {
    "require": ["tsconfig-paths/register"]
  },
  // 视情况设置 include
  "include": [
    "**/*.js",
    "**/*.cjs",
    "**/*.mjs",
    "**/*.jsx",
    "**/*.ts",
    "**/*.cts",
    "**/*.mts",
    "**/*.tsx",
    "**/*.vue"
  ],
  // 视情况设置 exclude
  "exclude": [
    ".cache",
    ".temp",
    ".tmp",
    "cache",
    "temp",
    "tmp",
    "dist*",
    "node_modules",
    "playground"
  ]
}
```

查看 [tsconfig.base.json](./tsconfig.base.json) 了解所有的默认设置.

### Prettier

看看 [Prettier](https://prettier.io/)。Prettier 用于处理代码样式，所以它总是需要的。

```sh
npm install -D prettier@2
```

设置 `.prettierrc.cjs`。

```js
module.exports = {
  ...require('@modyqyw/fabric/prettier'),
};
```

### ESLint

看看 [ESLint](https://eslint.org/)。

```sh
npm install -D eslint@8
```

如果你正在使用 TypeScript，你需要安装额外的依赖。

```sh
npm install -D typescript@4 @typescript-eslint/eslint-plugin@5 @typescript-eslint/parser@5
```

设置 `.eslintrc.cjs`。

```js
module.exports = {
  root: true,
  extends: [require.resolve('@modyqyw/fabric/eslint')],
};
```

设置 `package.json`。

```json
{
  "scripts": {
    "lint": "npm run lint:eslint",
    "lint:eslint": "eslint . --fix --cache --no-error-on-unmatched-pattern"
  }
}
```

### Stylelint

看看 [Stylelint](https://stylelint.io/)。

```sh
npm install -D stylelint@14
```

设置 `.stylelintrc.cjs`。

```js
module.exports = {
  extends: ['@modyqyw/fabric/stylelint'],
};
```

设置 `package.json`。

```json
{
  "scripts": {
    "lint": "npm run lint:stylelint",
    "lint:stylelint": "stylelint \"./**/*.{css,scss,vue}\" --fix --cache --allow-empty-input"
  }
}
```

### Markdownlint

看看 [Markdown](https://commonmark.org/) 和 [Markdownlint](https://github.com/DavidAnson/markdownlint)。

```sh
npm install -D markdownlint-cli
```

设置 `.markdownlint.json`。

```json
{
  "MD001": false,
  "MD003": false,
  "MD013": false,
  "MD022": false,
  "MD024": false,
  "MD025": false,
  "MD033": false,
  "MD036": false,
  "MD050": false
}
```

设置 `package.json`。这里使用 `.gitignore` 作为忽略模式文件。

```json
{
  "scripts": {
    "lint": "npm run lint:markdownlint",
    "lint:markdownlint": "markdownlint . --fix --ignore-path=.gitignore"
  }
}
```

### Commitlint

看看 [Commitlint](https://commitlint.js.org/) 和 [Conventional Commits](https://www.conventionalcommits.org/)。

```sh
npm install -D @commitlint/cli@17 @commitlint/config-conventional@17 ts-node@10
```

设置 `.commitlintrc.cjs`。

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

### Commitizen

看看 [Commitizen](https://commitizen-tools.github.io/commitizen/)。

```sh
npm install -D commitizen@4 @commitlint/prompt@17
```

设置 `package.json`。

```json
{
  "scripts": {
    "commit": "git-cz"
  }
}
```

设置 `.czrc`。

```json
{
  "path": "@commitlint/prompt"
}
```

### LintStaged

看看 [LintStaged](https://github.com/okonet/lint-staged)。

```sh
npm install -D lint-staged@13
```

设置 `.lintstagedrc.cjs`。

```js
module.exports = {
  '*.md': 'markdownlint --fix',
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue,yaml,yml,json,jsonc,json5}':
    'eslint --fix --cache --no-error-on-unmatched-pattern',
  '*.{css,scss,vue}': 'stylelint --fix --cache --allow-empty-input',
};
```

### Husky

看看 [Husky](https://github.com/typicode/husky)。

```sh
npm install -D is-ci@3 husky@8

npx husky install

```

设置 `package.json`。

```json
{
  "scripts": {
    "prepare": "is-ci || husky install"
  }
}
```

设置 `.husky/commit-msg` 钩子。

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit $1

```

设置 `.husky/pre-commit` 钩子。

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install lint-staged

```

最后使用 `chmod`。

```sh
chmod +x .git/hooks/*
chmod +x .husky/*
```

### 部署

经验证明，自动化是最佳选择。你可能想要尝试下面的包，它们根据字母顺序排序。

- [auto-changelog](https://github.com/CookPete/auto-changelog)
- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)
- [keep a changelog](https://keepachangelog.com/)
- [np](https://github.com/sindresorhus/np)
- [release](https://github.com/vercel/release)
- [release-it](https://github.com/release-it/release-it) - 我们在使用这个。
- [semantic-release](https://semantic-release.gitbook.io/semantic-release/)
- [standard-version](https://github.com/conventional-changelog/standard-version)

## VSCode

- 安装插件。
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
  - [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)
  - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - 支持 TailwindCSS
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - 支持 Vue 3 和 Vue 2，对于 Vue 2 需要额外配置。推荐使用 [Takeover Mode](https://cn.vuejs.org/guide/typescript/overview.html#volar-takeover-mode)。
  - [uni-helper](https://marketplace.visualstudio.com/items?itemName=uni-helper.uni-helper-vscode) - 支持 uni-\*
  - [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) - 支持 UnoCSS
- 设置 `Settings.json`。

```json
{
  "css.validate": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.rulers": [{ "column": 100 }],
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "yaml",
    "json",
    "jsonc",
    "json5"
  ],
  "files.eol": "\n",
  "files.associations": {
    "*.wxml": "html",
    "*.wxs": "javascript",
    "*.wxss": "css",
    "*.axml": "html",
    "*.sjs": "javascript",
    "*.acss": "css",
    "*.swan": "html",
    "*.ttml": "html",
    "*.ttss": "css",
    "*.jxml": "html",
    "*.jxss": "css",
    "*.wpy": "vue",
    "*.json": "jsonc",
    "*.json5": "jsonc",
    "*.nvue": "vue",
    "*.uvue": "vue",
    "*.ux": "vue"
  },
  "less.validate": false,
  "scss.validate": false,
  "stylelint.snippet": ["css", "less", "scss", "vue"],
  "stylelint.validate": ["css", "less", "scss", "vue"],
  "[html]": {
    "editor.formatOnSave": true
  },
  "[javascript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[javascriptreact]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[typescript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[typescriptreact]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[css]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  },
  "[scss]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  },
  "[vue]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true
    }
  },
  "[json]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[jsonc]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[json5]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[markdown]": {
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.markdownlint": true
    }
  },
  "[yaml]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[yml]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  }
}
```

## 迁移

### 从 5.x 迁移到 6.x

- 升级 node 版本到最新的 LTS。
- 移除 eslint `vanilla`、`svelte`、`solid`、`css`、`json`、`yaml`、`functional`、`unicorn`、`sonar` 配置，新增 `base` 配置。`base` 配置包含了 `vanilla`、`json`、`yaml`、`unicorn` 和 `sonar` 配置。所以实际上 `svelte`、`solid` 和 `css` 被移除了，因为我们不再使用它们。
- 移除 stylelint `less` 和 `svelte` 配置，因为我们不再使用它们。
- 移除具名导出。你应该直接导入对应的文件，请参考 README。
- 构建工具切换成 `rollup`。

### 从 4.x 迁移到 5.x

- 升级 node 版本到最新的 LTS。
- 升级 pnpm / npm / yarn 版本以匹配 node 版本。
- 升级 eslint 版本到最新的 8。
- 升级 stylelint 版本到最新的 14。
- 升级 prettier 版本到最新的 2。
- 升级 postcss 版本到最新的 8。
- Prettier 总是需要的。
- 移除 CLI。在大部分情况下不需要使用它，在小部分情况下它不是个必需项。你总是可以跟随 README 来配置你的项目，或者直接使用你原本的配置。
- 移除 commitlint 配置。直接使用 `@commitlint/config-conventional` 即可。
- 移除 SASS 支持。SCSS 更通用。
- 升级 React 项目，使用新的 JSX 转换和 hooks。
- 升级 Vue 项目，使用组合式 API，即 Composition API。

### 从 3.x 迁移到 4.x

- 升级 node 版本到最新的 12、14 或 16。
- 升级 npm 版本到 6、7 或 8。
- 升级 eslint 版本到最新的 7 或 8。
- 升级 stylelint 版本到最新的 14。
- 升级 prettier 版本到最新的 2。
- 升级 postcss 版本到最新的 8。
- 分离 Prettier。
- 增加 `tsconfig.json` 支持。
- 升级 CLI 以匹配以上改动。现在 CLI 使用 `mo-fabric` 而不是 `modyqyw-fabric`。

### 从 2.x 迁移到 3.x

- 升级 node 版本到 ^12.22.6, ^14.17.6 或 ^16.8.0。
- 升级 npm 版本到 ^6.14.15 或 ^7.21.0。
- 支持 CommonJS require 和 ESM import。
- 改变 Prettier/ESLint/Stylelint/Commitlint 配置。

```js
const { prettier, eslint, stylelint, commitlint } = require('@modyqyw/fabric');

import { prettier, eslint, stylelint, commitlint } from '@modyqyw/fabric';
...

```

- 使用 `eslint.vanilla` 而不是 `eslint.native`。
- 使用 `stylelint.scss` 而不是 `stylelint.sass`。

### 从 1.x 迁移到 2.x

升级 node 和依赖版本即可。

## 性能

有时候你会发现 `Prettier` 需要的时间比预期多得多。跟着 [这个评论](https://github.com/prettier/eslint-plugin-prettier/issues/445#issuecomment-1013713942) 做看看是否有所帮助。

## 例子

看看 [dependency graph](https://github.com/ModyQyW/fabric/network/dependents?package_id=UGFja2FnZS0xNTg3ODMzNDM2)。

## 致谢

根据字母顺序排序。

- [airbnb/css](https://github.com/airbnb/css)
- [airbnb/javascript](https://github.com/airbnb/javascript)
- [AlloyTeam/eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)
- [antfu/eslint-config](https://github.com/antfu/eslint-config)
- [basarat/typescript-book](https://github.com/basarat/typescript-book)
- [google/styleguide](https://google.github.io/styleguide)
- [mdo/code-guide](https://github.com/mdo/code-guide)
- [remix-run/remix/remix-eslint-config](https://github.com/remix-run/remix/tree/main/packages/remix-eslint-config)
- [standard/standard](https://github.com/standard/standard)
- [vercel/style-guide](https://github.com/vercel/style-guide)

## License

[MIT](./LICENSE)

Copyright (c) 2020-present ModyQyW

## [赞助者们](https://github.com/ModyQyW/sponsors)

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/ModyQyW/sponsors/sponsorkit/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/ModyQyW/sponsors/sponsorkit/sponsors.svg"/>
  </a>
</p>
