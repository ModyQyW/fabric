# @modyqyw/fabric

Opinionated shareable specification for different JavaScript/TypeScript projects.

Requires:

- Latest Node LTS and matching pnpm / npm / yarn
- Set `shamefully-hoist=true` in `.npmrc` if using latest pnpm 6 / 7 instead of npm
- Use `--legacy-peer-deps` when using npm 7 / 8 to install
- Set `nodeLinker: 'node-modules'` in `.yarnrc.yml` if using latest yarn 2 / 3 instead of npm
- Use new JSX transform and hooks for React projects
- Use Composition API for Vue projects

Using `pnpm` below. Check [nrm](https://github.com/Pana/nrm) for mirror support.

## Usage

```sh
# locally
pnpm install -D @modyqyw/fabric@^5.0.0-alpha.1

# globally
pnpm install -g @modyqyw/fabric@^5.0.0-alpha.1
```

See more about version in [node-semver](https://github.com/npm/node-semver).

### Naming

Naming is very hard and hardly be checked by linters. However, there are still relevant naming suggestions available.

- JavaScript/TypeScript
  - [kettannaito/naming-cheatsheet](https://github.com/kettanaito/naming-cheatsheet)
- CSS/LESS/SCSS
  - [BEM](http://getbem.com/)
  - [OOCSS](https://github.com/stubbornella/oocss/wiki)
  - [ACSS](https://css-tricks.com/lets-define-exactly-atomic-css/)
  - [SMACSS](http://smacss.com/)
  - [CSS Modules](https://github.com/css-modules/css-modules)

Besides, you can learn naming from some open-source projects.

- [bootstrap](https://getbootstrap.com/)
- [tailwindcss](https://tailwindcss.com/)
- [mui](https://mui.com/)
- [antd](https://ant.design/)
- [vuetify](https://vuetifyjs.com/)
- [element-plus](https://element-plus.org/)

**IMO simplicity and clarity are the highest priority for naming.**

### Git

Learn about [Git](https://git-scm.com/doc), [Git flow](https://nvie.com/posts/a-successful-git-branching-model/), [Github flow](https://guides.github.com/introduction/flow/), [Gitlab flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html) and [Gif LFS](https://git-lfs.github.com/).

```sh
git config --global core.autocrlf false
git config --global init.defaultBranch main
```

For SSH keys, check [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh), which also works for other git systems like [Gitlab](https://gitlab.com/) and [Gitee](https://gitee.com/).

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

**You should only use this in a new project without `tsconfig.json`.** Extends, then customize.

```json
{
  "extends": "./node_modules/@modyqyw/fabric/tsconfig.base.json",
  "compilerOptions": {
    // on-demand set baseUrl
    "baseUrl": ".",
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
  // volar, @vue/runtime-dom and vue2
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
  // on-demand set include
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
  // on-demand set exclude
  "exclude": [".cache", ".temp", ".tmp", "cache", "temp", "tmp", "dist*", "node_modules"]
}

```

See [tsconfig.base.json](./tsconfig.base.json) for default configs.

### Prettier

Learn about [Prettier](https://prettier.io/). Prettier is always required to handle code styles.

```sh
pnpm install -D prettier@^2.6.2
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
pnpm install -D eslint@^8.13.0 @babel/core@^7.17.9 @babel/eslint-parser@^7.17.0
```

Additional dependencies are needed if you are using TypeScript.

```sh
pnpm install -D typescript@^4.6.3 @typescript-eslint/eslint-plugin@^5.18.0 @typescript-eslint/parser@^5.18.0
```

Set up `.eslintrc.cjs`.

```js
module.exports = {
  extends: [
    // vanilla is always required
    '@modyqyw/fabric/eslint/vanilla',

    // react
    // '@modyqyw/fabric/eslint/react',

    // react + miniprogram
    // '@modyqyw/fabric/eslint/reactMiniprogram',

    // vue2
    // '@modyqyw/fabric/eslint/vue2',

    // vue2 + typescript
    // '@modyqyw/fabric/eslint/vue2Typescript',

    // vue3
    // '@modyqyw/fabric/eslint/vue',

    // vue3 + typescript
    // '@modyqyw/fabric/eslint/vueTypescript',

    // vue 2 / vue3 + miniprogram
    // '@modyqyw/fabric/eslint/vueMiniprogram',

    // svelte
    // '@modyqyw/fabric/eslint/svelte',

    // svelte + typescript
    // '@modyqyw/fabric/eslint/svelteTypescript',
  ],
};

```

Set up `package.json`. Use `.gitignore` as the ignore pattern file here.

```json
{
  "scripts": {
    "lint": "pnpm run lint:eslint",
    "lint:eslint": "eslint . --fix --ext=.js,.cjs,.mjs,.jsx,.ts,.cts,.mts,.tsx,.vue,.svelte --ignore-path=.gitignore"
  }
}

```

### Stylelint

Learn about [Stylelint](https://stylelint.io/).

```sh
pnpm install -D stylelint@^14.6.1
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
  ],
};

```

Set up `package.json`. Use `.gitignore` as the ignore pattern file here.

```json
{
  "scripts": {
    "lint": "pnpm run lint:stylelint",
    "lint:stylelint": "stylelint \"./**/*.{css,less,scss,vue,svelte}\" --fix --allow-empty-input --ignore-path=.gitignore"
  }
}

```

### Markdownlint

Learn about [Markdown](https://commonmark.org/) and [Markdownlint](https://github.com/DavidAnson/markdownlint).

```sh
pnpm install -D markdownlint-cli@^0.31.1
```

Set up `.markdownlint.json`.

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

Set up `package.json`. Use `.gitignore` as the ignore pattern file here.

```json
{
  "scripts": {
    "lint": "pnpm run lint:markdownlint",
    "lint:markdownlint": "markdownlint . --fix --ignore-path=.gitignore"
  }
}

```

### Commitlint

Learn about [Commitlint](https://commitlint.js.org/) and [Conventional Commits](https://www.conventionalcommits.org/).

```sh
pnpm install -D @commitlint/cli@^16.2.3
```

Set up `.commitlintrc.cjs`.

```js
module.exports = {
  extends: ['@modyqyw/fabric/commitlint'],
};

```

### Commitizen

Learn about [Commitizen](https://commitizen-tools.github.io/commitizen/).

```sh
pnpm install -D commitizen@^4.2.4 @commitlint/prompt@^16.2.3
```

Set up `package.json`.

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

Learn about [LintStaged](https://github.com/okonet/lint-staged).

```sh
pnpm install -D lint-staged@^12.3.7
```

Set up `.lintstagedrc.cjs`.

```js
module.exports = {
  '*.md': 'markdownlint --fix',
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue,svelte}': 'eslint --fix',
  '*.{css,less,scss,vue,svelte}': 'stylelint --fix',
};

```

### Husky

Learn about [Husky](https://github.com/typicode/husky).

```sh
pnpm install -D is-ci@^3.0.1 husky@^7.0.4

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
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - For Vue 3 and Vue 2, extra configs required if for Vue 2
  - [uni-helper](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper) - If you are dealing with uni-*
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

## Migrate

### Migrate 5.x from 4.x

- Upgrade your node version to latest LTS.
- Upgrade your pnpm / npm / yarn version to match your node version.
- Upgrade your eslint / stylelint / prettier / postcss version to latest.
- Prettier is always required.
- CLI is removed. It is not needed in most cases, and not a necessity in other cases. You can always follow README to config your project, or just use your own config.
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
- Split Prettier. You can use ESLint/Stylelint with/without Prettier now. Default without Prettier.
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
- [standard/standard](https://github.com/standard/standard)
- [vercel/style-guide](https://github.com/vercel/style-guide)

## License

[MIT](./LICENSE)

Copyright (c) 2020-present ModyQyW
