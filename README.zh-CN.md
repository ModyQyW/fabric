# @modyqyw/fabric

[![npm](https://img.shields.io/npm/v/@modyqyw/fabric)](https://www.npmjs.com/package/@modyqyw/fabric)
[![GitHub license](https://img.shields.io/github/license/ModyQyW/fabric)](https://github.com/ModyQyW/fabric/blob/main/LICENSE)

[English](./README.md) | 简体中文

开箱即用的共享规范，适用于不同的 JavaScript / TypeScript 项目。

要求：

- 最新的 Node LTS
- 最新的依赖管理工具（npm / yarn / pnpm）
- 如果在使用 pnpm 8，建议在 `.npmrc` 里设置 `shamefully-hoist=true` 或使用 `--shamefully-hoist`
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
npm install -D @modyqyw/fabric@8

# 全局
npm install --location=global @modyqyw/fabric@8
```

[node-semver](https://github.com/npm/node-semver) 有更多版本说明。

### 命名

命名应该要简洁明了，但它很难被 linter 检查。所以跟随已有的规范是一个好选择。

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
git config --global core.ignorecase false
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

在大部分情况下你都应该考虑使用框架或库附带的 `tsconfig.json`。如果它们没有提供，[tsconfig/bases](https://github.com/tsconfig/bases) 是一个不错的选择。

### Prettier

看看 [Prettier](https://prettier.io/)。

```sh
npm install -D prettier@3
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
npm install -D eslint@8 @babel/core@7 @babel/eslint-parser@7
```

如果你正在使用 TypeScript，你需要安装额外的依赖。

```sh
npm install -D typescript@5 @typescript-eslint/eslint-plugin@6 @typescript-eslint/parser@6
```

设置 `.eslintrc.cjs`。

```js
module.exports = {
  extends: [require.resolve('@modyqyw/fabric/eslint')],
};
```

设置 `package.json`。这里使用 `.gitignore` 作为忽略模式文件。

```json
{
  "scripts": {
    "lint": "npm run lint:eslint",
    "lint:eslint": "eslint . --fix --cache --ignore-path=.gitignore"
  }
}
```

### Stylelint

看看 [Stylelint](https://stylelint.io/)。

```sh
npm install -D stylelint@15
```

设置 `.stylelintrc.cjs`。

```js
module.exports = {
  extends: ['@modyqyw/fabric/stylelint'],
};
```

设置 `package.json`。这里使用 `.gitignore` 作为忽略模式文件。

```json
{
  "scripts": {
    "lint": "npm run lint:stylelint",
    "lint:stylelint": "stylelint \"./**/*.{css,scss,vue}\" --fix --cache --ignore-path=.gitignore"
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

如果你在通过工具生成 `CHANGELOG.md`，你可能想要忽略它。

```json
{
  "scripts": {
    "lint": "npm run lint:markdownlint",
    "lint:markdownlint": "markdownlint . --fix --ignore=CHANGELOG.md --ignore-path=.gitignore"
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

### Publint

看看 [Publint](https://publint.dev/)。

```sh
npm install -D publint@0.1
```

运行 `publint` 检查你的库即可。

### LintStaged

看看 [LintStaged](https://github.com/okonet/lint-staged)。

```sh
npm install -D lint-staged@13 sort-package-json@2
```

设置 `.lintstagedrc.cjs`。

```js
module.exports = {
  'package.json': 'sort-package-json',
  '*.md': 'markdownlint --fix --ignore-path=.gitignore',
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue,json,jsonc,json5,yaml,yml}': 'eslint --fix --cache --ignore-path=.gitignore',
  '*.{css,scss,vue}': 'stylelint --fix --cache --ignore-path=.gitignore',
};
```

如果你在通过工具生成 `CHANGELOG.md`，你可能想要忽略它。

```js
module.exports = {
  'package.json': 'sort-package-json',
  '*.md': 'markdownlint --fix --ignore=CHANGELOG.md --ignore-path=.gitignore',
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue,json,jsonc,json5,yaml,yml': 'eslint --fix --cache --ignore-path=.gitignore',
  '*.{css,scss,vue}': 'stylelint --fix --cache --ignore-path=.gitignore',
};
```

### SimpleGitHooks

看看 [SimpleGitHooks](https://github.com/toplenboren/simple-git-hooks)。`Husky` 和 `SimpleGitHooks` 你只需要一个。

```sh
npm install -D is-ci@3 simple-git-hooks@2
```

设置 `package.json`.

```json
{
  "scripts": {
    "prepare": "is-ci || simple-git-hooks"
  }
}
```

设置 `.simple-git-hooks.cjs`.

```js
module.exports = {
  "pre-commit": "npx lint-staged",
  "commit-msg": "npx commitlint --edit ${1}",
};

```

### Husky

看看 [Husky](https://github.com/typicode/husky)。`Husky` 和 `SimpleGitHooks` 你只需要一个。

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
- [bumpp](https://github.com/antfu/bumpp)
- [changelogen](https://github.com/unjs/changelogen)
- [changelogithub](https://github.com/antfu/changelogithub)
- [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) - 我们在使用这个
- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)
- [keep-a-changelog](https://github.com/oscarotero/keep-a-changelog)
- [np](https://github.com/sindresorhus/np)
- [release](https://github.com/vercel/release)
- [release-it](https://github.com/release-it/release-it)
- [semantic-release](https://semantic-release.gitbook.io/semantic-release/)

## VSCode

- 安装插件。
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
  - [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - 支持 Vue 3 和 Vue 2，对于 Vue 2 需要额外配置。推荐使用 [Takeover Mode](https://cn.vuejs.org/guide/typescript/overview.html#volar-takeover-mode)。
  - [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) - 支持 UnoCSS。如果你更喜欢 TailwindCSS，可以使用 [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)。
- 设置 `Settings.json`。

```json
{
  "css.validate": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // "editor.formatOnSave": true, // 需要的话启用它
  "editor.rulers": [{ "column": 100 }],
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "svelte",
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
  "scss.validate": false,
  "stylelint.snippet": ["css", "scss", "vue"],
  "stylelint.validate": ["css", "scss", "vue"],
  // 需要的话启用它
  // "[html]": {
  //   "editor.formatOnSave": true
  // },
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
    // "editor.formatOnSave": true, // 需要的话启用它
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
