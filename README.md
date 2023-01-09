# @modyqyw/fabric

[![npm](https://img.shields.io/npm/v/@modyqyw/fabric)](https://www.npmjs.com/package/@modyqyw/fabric)
[![GitHub license](https://img.shields.io/github/license/ModyQyW/fabric)](https://github.com/ModyQyW/fabric/blob/main/LICENSE)

English | [简体中文](./README.zh-hans.md)

Opinionated shareable specification for different JavaScript/TypeScript projects.

Requires:

- Latest Node LTS and package manager (pnpm / npm / yarn)
- Set `shamefully-hoist=true` in `.npmrc` or use `--shamefully-hoist` when using pnpm 7
- Set `legacy-peer-deps=true` in `.npmrc` or use `--legacy-peer-deps` when using npm 8
- Set `nodeLinker: 'node-modules'` in `.yarnrc.yml` when using yarn 3
- Use new JSX transform and hooks for React projects
- Use Composition API for Vue projects

Using `npm` below. Check [nrm](https://github.com/Pana/nrm) and [npmmirror](https://npmmirror.com/) for mirror support.

## Usage

```sh
# locally
npm install -D @modyqyw/fabric@5

# globally
npm install --location=global @modyqyw/fabric@5
```

See more about versions in [node-semver](https://github.com/npm/node-semver).

### Naming

Naming is very hard and hardly be checked by linters. Simplicity and clarity should be the highest priority for naming.

Following an existing specification is a good choice.

- For JavaScript / TypeScript
  - [kettannaito/naming-cheatsheet](https://github.com/kettanaito/naming-cheatsheet)
- For CSS / LESS / SCSS
  - [BEM](http://getbem.com/)
  - [CSS Modules](https://github.com/css-modules/css-modules)
  - [OOCSS](https://github.com/stubbornella/oocss/wiki)
  - [ACSS](https://css-tricks.com/lets-define-exactly-atomic-css/)
  - [SMACSS](http://smacss.com/)
- Helpful Open Source Projects
  - [bootstrap](https://getbootstrap.com/)
  - [tailwindcss](https://tailwindcss.com/)
  - [mui](https://mui.com/)
  - [antd](https://ant.design/)
  - [vuetify](https://vuetifyjs.com/)
  - [element-plus](https://element-plus.org/)

### Git

Learn about [Git](https://git-scm.com/doc), [Git flow](https://nvie.com/posts/a-successful-git-branching-model/), [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow), [GitLab flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html) and [Gif LFS](https://git-lfs.github.com/).

```sh
git config --global core.autocrlf false
git config --global init.defaultBranch main
```

For SSH keys, check [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh), which also works for other git systems like [GitLab](https://gitlab.com/) and [Gitee](https://gitee.com/).

A `.gitignore` example [here](./.gitignore).

### EditorConfig

Learn about [EditorConfig](https://editorconfig.org/).

Set up `.editorconfig`.

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

Learn about [tsconfig.json](https://aka.ms/tsconfig.json).

**You should only use this in a new project that doesn't have `tsconfig.json` and is using a bundler like Webpack, Vite, etc. Please prefer to use the `tsconfig.json` that comes with the project, or consider using the configuration provided by [tsconfig/bases](https://github.com/tsconfig/bases).**

```json
{
  "extends": "@modyqyw/fabric/tsconfig.base.json",
  "compilerOptions": {
    // on-demand set baseUrl
    "baseUrl": ".",
    // on-demand set module, default ESNext
    "module": "CommonJS",
    // on-demand set preserveValueImports, default true
    "preserveValueImports": false,
    // on-demand set lib, default ["ESNext"]
    "lib": ["ESNext", "DOM", "DOM.iterable"],
    // on-demand set target, default ESNext
    "target": "ESNext",
    // on-demand set jsx, default preserve
    "jsx": "react-jsx",
    // on-demand set paths for path aliases, default {}
    "paths": {
      "@/*": ["./src/*"]
    },
    // if you are facing a infer problem
    "preserveSymlinks": true,
    // on-demand set types, default []
    "types": [
      // uni-app
      "@dcloudio/types",
      // alipay miniprogram
      "@mini-types/alipay",
      // element-plus
      "element-plus/global",
      // element-pro-components
      "element-pro-components/types/components",
      // jest
      "jest",
      // jsdom
      "jsdom",
      // wechat miniprogram
      "miniprogram-api-typings",
      // node
      "node",
      // type-fest
      "type-fest",
      // unplugin-icons
      "unplugin-icons/types/react",
      "unplugin-icons/types/vue",
      "unplugin-icons/types/svelte",
      "unplugin-icons/types/solid",
      // unplugin-vue-router
      "typed-router.d.ts",
      // unplugin-vue2-script-setup
      "unplugin-vue2-script-setup/types",
      "unplugin-vue2-script-setup/ref-macros",
      // vitest
      "vitest/globals",
      // vite-plugin-pages
      "vite-plugin-pages/client",
      "vite-plugin-pages/client-react",
      "vite-plugin-pages/client-solid",
      // vite-plugin-vue-layouts
      "vite-plugin-vue-layouts/client",
      // vite
      "vite/client",
      // vue3 script setup
      "vue/macros-global",
      // webpack
      "webpack-env"
    ]
  },
  // volar configs
  // https://github.com/johnsoncodehk/volar/blob/master/extensions/vscode-vue-language-features/schemas/vue-tsconfig.schema.json
  "vueCompilerOptions": {
    ...
  },
  // ts-node
  // npm install -D tsconfig-paths
  "ts-node": {
    "require": ["tsconfig-paths/register"]
  },
  // on-demand set include
  "include": [
    "**/.*.js",
    "**/.*.cjs",
    "**/.*.mjs",
    "**/.*.ts",
    "**/.*.cts",
    "**/.*.mts",
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
  // on-demand set exclude
  "exclude": [".cache", ".temp", ".tmp", "cache", "temp", "tmp", "dist*", "node_modules"]
}
```

See [tsconfig.base.json](./tsconfig.base.json) for default configs.

### Prettier

Learn about [Prettier](https://prettier.io/). Prettier is always required to handle code styles.

```sh
npm install -D prettier@2
```

Set up `.prettierrc.cjs`.

```js
module.exports = {
  ...require('@modyqyw/fabric/prettier'),
};
```

### ESLint

Learn about [ESLint](https://eslint.org/).

```sh
npm install -D eslint@8 @babel/core@7 @babel/eslint-parser@7
```

Additional dependencies are needed if you are using TypeScript.

```sh
npm install -D typescript@4 @typescript-eslint/eslint-plugin@5 @typescript-eslint/parser@5
```

Set up `.eslintrc.cjs`.

```js
module.exports = {
  root: true,
  extends: [
    // vanilla is always required
    require.resolve('@modyqyw/fabric/eslint/vanilla'),

    // typescript
    // require.resolve('@modyqyw/fabric/eslint/typescript'),

    // react
    // require.resolve('@modyqyw/fabric/eslint/react'),

    // react-native
    // require.resolve('@modyqyw/fabric/eslint/react-native'),

    // next
    // require.resolve('@modyqyw/fabric/eslint/next'),

    // vue3
    // require.resolve('@modyqyw/fabric/eslint/vue'),

    // vue2
    // require.resolve('@modyqyw/fabric/eslint/vue2'),

    // nuxt
    // require.resolve('@modyqyw/fabric/eslint/nuxt'),

    // svelte
    // require.resolve('@modyqyw/fabric/eslint/svelte'),

    // solid
    // require.resolve('@modyqyw/fabric/eslint/solid'),

    // css
    // require.resolve('@modyqyw/fabric/eslint/css'),

    // json, jsonc, json5
    // require.resolve('@modyqyw/fabric/eslint/json'),

    // yaml, yml
    // require.resolve('@modyqyw/fabric/eslint/yaml'),

    // functional
    // require.resolve('@modyqyw/fabric/eslint/functional'),

    // unicorn
    // require.resolve('@modyqyw/fabric/eslint/unicorn'),

    // sonar
    // require.resolve('@modyqyw/fabric/eslint/sonar'),

    // miniprogram
    // require.resolve('@modyqyw/fabric/eslint/miniprogram'),
  ],
};
```

Set up `package.json`. Use `.gitignore` as the ignore pattern file here.

```json
{
  "scripts": {
    "lint": "npm run lint:eslint",
    "lint:eslint": "eslint . --ext=.js,.cjs,.mjs,.jsx,.ts,.cts,.mts,.tsx,.vue,.svelte,.yaml,.yml,.json,.jsonc,.json5 --fix --cache --no-error-on-unmatched-pattern --ignore-path=.gitignore"
  }
}
```

#### jest support

```javascript
// .eslintrc.cjs
module.exports = {
  env: {
    jest: true,
  },
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/*.{spec.test}.*'],
      extends: ['plugin:jest/recommended'],
    },
  ],
};
```

I prefer `vitest` personally.

#### testing-library support

```javascript
// .eslintrc.cjs
module.exports = {
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/*.{spec.test}.*'],
      extends: [
        // react
        // 'plugin:testing-library/react',
        // vue
        // 'plugin:testing-library/vue',
      ],
    },
  ],
};
```

#### cypress support

```javascript
// .eslintrc.cjs
module.exports = {
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/*.{spec.test}.*'],
      extends: ['plugin:cypress/recommended'],
    },
  ],
};
```

### Stylelint

Learn about [Stylelint](https://stylelint.io/).

```sh
npm install -D stylelint@14
```

Set up `.stylelintrc.cjs`.

```js
module.exports = {
  extends: [
    // css is always required
    '@modyqyw/fabric/stylelint/css',

    // less
    // '@modyqyw/fabric/stylelint/less',

    // scss
    // '@modyqyw/fabric/stylelint/scss',

    // vue
    // '@modyqyw/fabric/stylelint/vue',

    // svelte
    // '@modyqyw/fabric/stylelint/svelte',

    // miniprogram
    // '@modyqyw/fabric/stylelint/miniprogram',
  ],
};
```

Set up `package.json`. Use `.gitignore` as the ignore pattern file here.

```json
{
  "scripts": {
    "lint": "npm run lint:stylelint",
    "lint:stylelint": "stylelint \"./**/*.{css,less,scss,vue,svelte}\" --fix --cache --allow-empty-input --ignore-path=.gitignore"
  }
}
```

### Markdownlint

Learn about [Markdown](https://commonmark.org/) and [Markdownlint](https://github.com/DavidAnson/markdownlint).

```sh
npm install -D markdownlint-cli
```

Set up `.markdownlint.json`.

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

Set up `package.json`. Use `.gitignore` as the ignore pattern file here.

```json
{
  "scripts": {
    "lint": "npm run lint:markdownlint",
    "lint:markdownlint": "markdownlint . --fix --ignore-path=.gitignore"
  }
}
```

### Commitlint

Learn about [Commitlint](https://commitlint.js.org/) and [Conventional Commits](https://www.conventionalcommits.org/).

```sh
npm install -D @commitlint/cli@17 @commitlint/config-conventional@17 ts-node@10
```

Set up `.commitlintrc.cjs`.

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

### Commitizen

Learn about [Commitizen](https://commitizen-tools.github.io/commitizen/).

```sh
npm install -D commitizen@4 @commitlint/prompt@17
```

Set up `package.json`.

```json
{
  "scripts": {
    "commit": "cz"
  }
}
```

Set up `.czrc`.

```json
{
  "path": "@commitlint/prompt"
}
```

### LintStaged

Learn about [LintStaged](https://github.com/okonet/lint-staged).

```sh
npm install -D lint-staged@13
```

Set up `.lintstagedrc.cjs`.

```js
module.exports = {
  '*.md': 'markdownlint --fix',
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue,svelte,yaml,yml,json,jsonc,json5}':
    'eslint --fix --cache --no-error-on-unmatched-pattern --ignore-path=.gitignore',
  '*.{css,less,scss,vue,svelte}':
    'stylelint --fix --cache --allow-empty-input --ignore-path=.gitignore',
};
```

### Husky

Learn about [Husky](https://github.com/typicode/husky).

```sh
npm install -D is-ci@3 husky@7

npx husky install

```

Set up `package.json`.

```json
{
  "scripts": {
    "prepare": "is-ci || husky install"
  }
}
```

Set up `.husky/commit-msg` hook.

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit $1

```

Set up `.husky/pre-commit` hook.

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install lint-staged

```

Finally use `chmod`.

```sh
chmod +x .git/hooks/*
chmod +x .husky/*
```

### Deploy

Experience has proven that automation is the best option. You may want to try packages below, sorted according to alphabetical order.

- [auto-changelog](https://github.com/CookPete/auto-changelog)
- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)
- [keep a changelog](https://keepachangelog.com/)
- [np](https://github.com/sindresorhus/np)
- [release](https://github.com/vercel/release)
- [release-it](https://github.com/release-it/release-it) - We are using it.
- [semantic-release](https://semantic-release.gitbook.io/semantic-release/)
- [standard-version](https://github.com/conventional-changelog/standard-version)

## VSCode

- Install plugins.
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
  - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
  - [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) - For svelte
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - For TailwindCSS
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - For Vue 3 and Vue 2, extra configs required if for Vue 2. [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471) is recommended.
  - [uni-helper](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper) - For uni-\*
  - [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) - For UnoCSS
  - [WindiCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - For TailwindCSS / WindiCSS
- Set up `Settings.json`.

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

## Migrate

### Migrate 5.x from 4.x

- Upgrade your node version to latest LTS.
- Upgrade your pnpm / npm / yarn version to match your node version.
- Upgrade your eslint version to latest 8.
- Upgrade your stylelint version to latest 14.
- Upgrade your prettier version to latest 2.
- Upgrade your postcss version to latest 8.
- Prettier is always required.
- CLI is removed. It is not needed in most cases, and not a necessity in other cases. You can always follow README to config your project, or just use your own config.
- Commitlint config is removed. Use `@commitlint/config-conventional` directly.
- SASS support is removed. SCSS is more popular.
- Update your React projects with new JSX transform and hooks.
- Update your Vue projects with Composition API.

### Migrate 4.x from 3.x

- Upgrade your node version to latest 12, 14 or 16.
- Upgrade your npm version to latest 6, 7 or 8.
- Upgrade your eslint version to latest 7 or 8.
- Upgrade your stylelint version to latest 14.
- Upgrade your prettier version to latest 2.
- Upgrade your postcss version to latest 8.
- Split prettier.
- Add `tsconfig.json` support.
- Update CLI to match above changes. Use `mo-fabric` instead of `modyqyw-fabric`.

### Migrate 3.x from 2.x

- Upgrade your node version to ^12.22.6, ^14.17.6 or ^16.8.0.
- Upgrade your npm version to ^6.14.15 or ^7.21.0.
- Support CommonJS require and ESM import.
- Prettier/ESLint/Stylelint/Commitlint config changed.

```js
const { prettier, eslint, stylelint, commitlint } = require('@modyqyw/fabric');

import { prettier, eslint, stylelint, commitlint } from '@modyqyw/fabric';
...

```

- Use `eslint.vanilla` instead of `eslint.native`.
- Use `stylelint.scss` instead of `stylelint.sass`.

### Migrate 2.x from 1.x

Just upgrade your node and dependencies versions.

## Performance

Sometimes you may find `Prettier` requires too much time. Check [this comment](https://github.com/prettier/eslint-plugin-prettier/issues/445#issuecomment-1013713942) and see if it helps.

## Examples

See [dependency graph](https://github.com/ModyQyW/fabric/network/dependents?package_id=UGFja2FnZS0xNTg3ODMzNDM2).

## Acknowledge

Sorted according to alphabetical order.

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

## [Sponsors](https://github.com/ModyQyW/sponsors)

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/ModyQyW/sponsors/sponsorkit/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/ModyQyW/sponsors/sponsorkit/sponsors.svg"/>
  </a>
</p>
