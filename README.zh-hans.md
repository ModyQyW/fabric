# @modyqyw/fabric

[English](./README.md) | 简体中文

开箱即用的共享规范，适用于不同的 JavaScript / TypeScript 项目。

需要：

- 最新的 Node LTS 和相应的 pnpm / npm / yarn
- 如果在使用 pnpm 6 / 7，在 `.npmrc` 里设置 `shamefully-hoist=true`
- 如果在使用 npm 7 / 8，在安装依赖时使用 `--legacy-peer-deps`
- 如果在使用 yarn 2 / 3，在 `.yarnrc.yml` 里设置 `nodeLinker: 'node-modules'`
- 对于 React 项目，使用新的 JSX 转换和 hooks
- 对于 Vue 项目，使用组合式 API，即 Composition API

下面使用 `pnpm`。如果需要镜像支持，不妨看看 [nrm](https://github.com/Pana/nrm)。

## 使用

```sh
# 本地
pnpm install -D @modyqyw/fabric@^5.0.0-alpha.2

# 全局
pnpm install -g @modyqyw/fabric@^5.0.0-alpha.2
```

[node-semver](https://github.com/npm/node-semver) 有更多版本信息供你查看。

### 命名

命名非常困难，而且很难被 linter 检查。但是，仍然有一些相关的命名建议。

- JavaScript/TypeScript
  - [kettannaito/naming-cheatsheet](https://github.com/kettanaito/naming-cheatsheet)
  - [ModyQyW/naming-cheatsheet](https://github.com/ModyQyW/naming-cheatsheet) - 中文版本
- CSS/LESS/SCSS
  - [BEM](http://getbem.com/)
  - [OOCSS](https://github.com/stubbornella/oocss/wiki)
  - [ACSS](https://css-tricks.com/lets-define-exactly-atomic-css/)
  - [SMACSS](http://smacss.com/)
  - [CSS Modules](https://github.com/css-modules/css-modules)

除此之外，你也可以在一些开源项目里学习命名。

- [bootstrap](https://getbootstrap.com/)
- [tailwindcss](https://tailwindcss.com/)
- [mui](https://mui.com/)
- [antd](https://ant.design/)
- [vuetify](https://vuetifyjs.com/)
- [element-plus](https://element-plus.org/)

**在我看来，命名最重要的是简洁明了。**

### Git

看看 [Git](https://git-scm.com/doc)、[Git flow](https://nvie.com/posts/a-successful-git-branching-model/)、[Github flow](https://guides.github.com/introduction/flow/)、[Gitlab flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html) 和 [Gif LFS](https://git-lfs.github.com/)。

```sh
git config --global core.autocrlf false
git config --global init.defaultBranch main
```

对于 SSH 密钥，可以看看 [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)，它也适用于其它 git 系统，比如 [Gitlab](https://gitlab.com/) 和 [Gitee](https://gitee.com/)。

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

**你只应该在一个没有 `tsconfig.json` 的新项目里使用这个。**扩展，然后自定义。

```json
{
  "extends": "./node_modules/@modyqyw/fabric/tsconfig.base.json",
  "compilerOptions": {
    // 视情况设置 baseUrl
    "baseUrl": ".",
    // 视情况设置 lib，默认 ["ESNext"]
    "lib": ["ESNext", "DOM", "DOM.iterable"],
    // 视情况设置 target，设置 ESNext
    "target": "ESNext",
    // 视情况设置 jsx，默认 preserve
    "jsx": "react-jsx",
    // 视情况设置 paths 以配置路径别名，默认 {}
    "paths": {
      "@/*": ["./src/*"]
    },
    // 如果出现了推断问题
    "preserveSymlinks": true,
    // 视情况设置 types，默认 []
    "types": [
      // uni-app
      "@dcloudio/types",
      // element-plus
      "element-plus/global",
      // jest
      "jest",
      // jsdom
      "jsdom",
      // alipay miniprogram
      "mini-types",
      // wechat miniprogram
      "miniprogram-api-typings",
      // node
      "node",
      // type-fest
      "type-fest",
      // unplugin-icons
      "unplugin-icons/types/react",
      "unplugin-icons/types/vue",
      // unplugin-vue2-script-setup
      "unplugin-vue2-script-setup/ref-macros",
      "unplugin-vue2-script-setup/types",
      // vitest
      "vitest",
      "vitest/global",
      // vite-plugin-pages
      "vite-plugin-pages/client",
      "vite-plugin-pages/client-react",
      // vite-plugin-vue-layouts
      "vite-plugin-vue-layouts/client",
      // vite
      "vite/client",
      // vue3 setup
      "vue/macros-global",
      // webpack
      "webpack-env"
    ]
  },
  // volar、@vue/runtime-dom 和 vue2
  "vueCompilerOptions": {
    "experimentalCompatMode": 2,
    "experimentalTemplateCompilerOptions": {
      "compatConfig": { "MODE": 2 }
    }
  },
  // ts-node
  // pnpm install -D tsconfig-paths
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
    "**/*.vue",
    "**/*.svelte"
  ],
  // 视情况设置 exclude
  "exclude": [".cache", ".temp", ".tmp", "cache", "temp", "tmp", "dist*", "node_modules"]
}

```

查看 [tsconfig.base.json](./tsconfig.base.json) 了解所有的默认设置.

### Prettier

看看 [Prettier](https://prettier.io/)。Prettier 用于处理代码样式，所以它总是需要的。

```sh
pnpm install -D prettier@^2.6.2
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
pnpm install -D eslint@^8.13.0 @babel/core@^7.17.9 @babel/eslint-parser@^7.17.0
```

如果你正在使用 TypeScript，你需要安装额外的依赖。

```sh
pnpm install -D typescript@^4.6.3 @typescript-eslint/eslint-plugin@^5.19.0 @typescript-eslint/parser@^5.19.0
```

设置 `.eslintrc.cjs`。

```js
module.exports = {
  extends: [
    // vanilla 总是需要的
    '@modyqyw/fabric/eslint/vanilla',

    // react
    // '@modyqyw/fabric/eslint/react',

    // react + 小程序
    // '@modyqyw/fabric/eslint/reactMiniprogram',

    // vue2
    // '@modyqyw/fabric/eslint/vue2',

    // vue2 + typescript
    // '@modyqyw/fabric/eslint/vue2Typescript',

    // vue3
    // '@modyqyw/fabric/eslint/vue',

    // vue3 + typescript
    // '@modyqyw/fabric/eslint/vueTypescript',

    // vue 2 / vue3 + 小程序
    // '@modyqyw/fabric/eslint/vueMiniprogram',

    // svelte
    // '@modyqyw/fabric/eslint/svelte',

    // svelte + typescript
    // '@modyqyw/fabric/eslint/svelteTypescript',
  ],
};

```

设置 `package.json`。这里使用 `.gitignore` 作为忽略模式文件。

```json
{
  "scripts": {
    "lint": "pnpm run lint:eslint",
    "lint:eslint": "eslint . --fix --ext=.js,.cjs,.mjs,.jsx,.ts,.cts,.mts,.tsx,.vue,.svelte --ignore-path=.gitignore"
  }
}

```

### Stylelint

看看 [Stylelint](https://stylelint.io/)。

```sh
pnpm install -D stylelint@^14.7.0
```

设置 `.stylelintrc.cjs`。

```js
module.exports = {
  extends: [
    // css 总是需要的
    '@modyqyw/fabric/stylelint/css',

    // less
    // '@modyqyw/fabric/stylelint/less',

    // scss
    // '@modyqyw/fabric/stylelint/scss',
  ],
};

```

设置 `package.json`。这里使用 `.gitignore` 作为忽略模式文件。

```json
{
  "scripts": {
    "lint": "pnpm run lint:stylelint",
    "lint:stylelint": "stylelint \"./**/*.{css,less,scss,vue,svelte}\" --fix --allow-empty-input --ignore-path=.gitignore"
  }
}

```

### Markdownlint

看看 [Markdown](https://commonmark.org/) 和 [Markdownlint](https://github.com/DavidAnson/markdownlint)。

```sh
pnpm install -D markdownlint-cli@^0.31.1
```

设置 `.markdownlint.json`。

```json
{
  "MD003": false,
  "MD013": false,
  "MD022": false,
  "MD024": false,
  "MD025": false,
  "MD033": false,
  "MD050": false
}

```

设置 `package.json`。这里使用 `.gitignore` 作为忽略模式文件。

```json
{
  "scripts": {
    "lint": "pnpm run lint:markdownlint",
    "lint:markdownlint": "markdownlint . --fix --ignore-path=.gitignore"
  }
}

```

### Commitlint

看看 [Commitlint](https://commitlint.js.org/) 和 [Conventional Commits](https://www.conventionalcommits.org/)。

```sh
pnpm install -D @commitlint/cli@^16.2.3
```

设置 `.commitlintrc.cjs`。

```js
module.exports = {
  extends: ['@modyqyw/fabric/commitlint'],
};

```

### Commitizen

看看 [Commitizen](https://commitizen-tools.github.io/commitizen/)。

```sh
pnpm install -D commitizen@^4.2.4 @commitlint/prompt@^16.2.3
```

设置 `package.json`。

```json
{
  "scripts": {
    "commit": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "@commitlint/prompt"
    }
  }
}

```

### LintStaged

看看 [LintStaged](https://github.com/okonet/lint-staged)。

```sh
pnpm install -D lint-staged@^12.3.8
```

设置 `.lintstagedrc.cjs`。

```js
module.exports = {
  '*.md': 'markdownlint --fix',
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue,svelte}': 'eslint --fix',
  '*.{css,less,scss,vue,svelte}': 'stylelint --fix',
};

```

### Husky

看看 [Husky](https://github.com/typicode/husky)。

```sh
pnpm install -D is-ci@^3.0.1 husky@^7.0.4

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
  - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
  - [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) - 支持 svelte
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - 支持 TailwindCSS
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - 支持 Vue 3 和 Vue 2，对于 Vue 2 需要额外配置
  - [uni-helper](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper) - 支持 uni-*
  - [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) - 支持 UnoCSS
  - [WindiCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - 支持 TailwindCSS / WindiCSS
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
    "svelte",
    "typescript",
    "typescriptreact",
    "vue"
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
    "*.ux": "vue"
  },
  "less.validate": false,
  "scss.validate": false,
  "stylelint.snippet": ["css", "less", "scss", "vue", "svelte"],
  "stylelint.validate": ["css", "less", "scss", "vue", "svelte"],
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
  "[less]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  },
  "[scss]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  },
  "[svelte]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true
    }
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true
    }
  },
  "[json]": {
    "editor.formatOnSave": true
  },
  "[jsonc]": {
    "editor.formatOnSave": true
  },
  "[markdown]": {
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.markdownlint": true
    }
  },
  "[yaml]": {
    "editor.formatOnSave": true
  }
}
```

## 迁移

### 从 4.x 迁移到 5.x

- 升级 node 版本到最新的 LTS。
- 升级 pnpm / npm / yarn 版本以匹配 node 版本。
- 升级 eslint 版本到最新的 8。
- 升级 stylelint 版本到最新的 14。
- 升级 prettier 版本到最新的 2。
- 升级 postcss 版本到最新的 8。
- Prettier 总是需要的。
- 移除 CLI。在大部分情况下不需要使用它，在小部分情况下它不是个必需项。你总是可以跟随 README 来配置你的项目，或者直接使用你原本的配置。
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
- [standard/standard](https://github.com/standard/standard)
- [vercel/style-guide](https://github.com/vercel/style-guide)

## License

[MIT](./LICENSE)

Copyright (c) 2020-present ModyQyW
