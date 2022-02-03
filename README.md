# @modyqyw/fabric

Opinionated shareable specification for different JavaScript/TypeScript projects.

Requires:

- Latest Node 12/14/16
- Latest npm 6/7/8
- Set `shamefully-hoist=true` in `.npmrc` if using latest pnpm 6 instead of npm
- Set `nodeLinker: 'node-modules'` in `.yarnrc.yml` if using latest yarn 2/3 instead of npm
- ESLint 8
- Stylelint 14
- Postcss 8

Check @modyqyw/fabric@3 For ESLint 7, Stylelint 13 and Postcss 7.

Using `pnpm` in examples below. Check [nrm](https://github.com/Pana/nrm) for mirror support.

[Github](https://github.com/ModyQyW/fabric#readme) | [Gitee](https://gitee.com/ModyQyW/fabric#readme)

## Usage

```sh
# locally
pnpm install -D @modyqyw/fabric@~4.11.0

# globally
pnpm install -g @modyqyw/fabric@~4.11.0
```

See more about version [here](https://github.com/npm/node-semver).

### CLI

CLI is used to config your new projects easier.

```sh
# if you install globally
# in current dir
mo-fabric config
# specify PROJECT_DIR
mo-fabric config ./

# if you install locally
# in current dir
./node_modules/.bin/mo-fabric config
```

**CLI will not keep your original configs. Use CLI in old projects on your own risk.**

### Naming

Naming is very hard and hardly be checked by linters. However, there are still relevant naming suggestions available.

- JavaScript/TypeScript - [kettannaito/naming-cheatsheet](https://github.com/kettanaito/naming-cheatsheet)
- CSS/LESS/SCSS/SASS - [BEM](http://getbem.com/), [OOCSS](https://github.com/stubbornella/oocss/wiki), [ACSS](https://css-tricks.com/lets-define-exactly-atomic-css/), [SMACSS](http://smacss.com/), [CSS Modules](https://github.com/css-modules/css-modules)

Besides, you can learn naming from some open-source projects, such as [bootstrap](https://getbootstrap.com/), [tailwindcss](https://tailwindcss.com/), [primer css](https://primer.style/css/), [bulma](https://bulma.io/), [mui](https://mui.com/), [antd](https://ant.design/), [vuetify](https://vuetifyjs.com/) and [element-plus](https://element-plus.org/).

In my opinion, simplicity and clarity are the highest priority for naming.

### Git

Learn about [Git](https://git-scm.com/doc), [Git flow](https://nvie.com/posts/a-successful-git-branching-model/), [Github flow](https://guides.github.com/introduction/flow/), [Gitlab flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html) and [Gif LFS](https://git-lfs.github.com/).

```sh
git config --global core.autocrlf false
git config --global init.defaultBranch main
```

For SSH keys, check [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh), which also works for other git systems like [Gitlab](https://gitlab.com/) and [Gitee](https://gitee.com/).

Set up `.gitattributes`.

```sh
* text=auto

```

A better `.gitattributes` example [here](https://stackoverflow.com/a/32278635).

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

You should ONLY use this in a new project without `tsconfig.json`. Extends, then customize.

```json
{
  "extends": "./node_modules/@modyqyw/fabric/tsconfig.base.json",
  "compilerOptions": {
    // set baseUrl
    "baseUrl": ".",
    // on-demand set lib, default ["ESNext"]
    "lib": ["ESNext", "DOM", "DOM.iterable"],
    // on-demand set target, default ESNext
    "target": "ESNext",
    // on-demand set jsx, default preserve
    "jsx": "react-jsx",
    // on-demand set paths, default {}
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
    ],
    // on-demand set types, default ESNext
    "target": "ES5"
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
    "./**/.*.js",
    "./**/.*.cjs",
    "./**/.*.mjs",
    "./**/*.js",
    "./**/*.cjs",
    "./**/*.mjs",
    "./**/*.jsx",
    "./**/.*.ts",
    "./**/.*.cts",
    "./**/.*.mts",
    "./**/*.ts",
    "./**/*.cts",
    "./**/*.mts",
    "./**/*.tsx",
    "./**/*.vue",
    "./**/*.svelte"
  ],
  // on-demand set exclude
  "exclude": [".cache", ".temp", ".tmp", "dist*", "node_modules"]
}

```

See [tsconfig.base.json](./tsconfig.base.json) for default configs.

### Prettier

Learn about [Prettier](https://prettier.io/).

```sh
pnpm install -D prettier@~2.5.1
```

Set up `.prettierrc.cjs`.

```js
const { prettier } = require('@modyqyw/fabric');

module.exports = {
  ...prettier,
};

```

### ESLint

Learn about [ESLint](https://eslint.org/).

```sh
pnpm install -D eslint@~8.8.0 @babel/core@~7.17.0 @babel/eslint-parser@~7.17.0
```

If you are using typescript, additional dependencies are needed.

```sh
pnpm install -D typescript@~4.5.5 @typescript-eslint/eslint-plugin@~5.10.2 @typescript-eslint/parser@~5.10.2
```

Set up `.eslintrc.cjs`.

```js
const { eslint } = require('@modyqyw/fabric');

module.exports = {
  // vanilla
  ...eslint.vanilla,

  // vanilla + prettier
  // ...eslint.vanillaPrettier,

  // react17
  // ...eslint.react,

  // react17 + prettier
  // ...eslint.reactPrettier,

  // vue2
  // ...eslint.vue2,

  // vue2 + prettier
  // ...eslint.vue2Prettier,

  // vue2 + typescript
  // ...eslint.vue2Typescript,

  // vue2 + typescript + prettier
  // ...eslint.vue2TypescriptPrettier,

  // vue3
  // ...eslint.vue3,

  // vue3 + prettier
  // ...eslint.vue3Prettier,

  // vue3 + typescript
  // ...eslint.vue3Typescript,

  // vue3 + typescript + prettier
  // ...eslint.vue3TypescriptPrettier,

  // svelte
  // ...eslint.svelte,

  // svelte + prettier
  // ...eslint.sveltePrettier,

  // svelte + typescript
  // ...eslint.svelteTypescript,

  // svelte + typescript + prettier
  // ...eslint.svelteTypescriptPrettier,
};

```

Set up `package.json`. Use `.gitignore` as the ignore pattern file here.

```json
{
  ...,
  "scripts": {
    ...,
    "lint": "pnpm run lint:eslint",
    "lint:eslint": "eslint . --fix --ext=.js,.cjs,.mjs,.jsx,.ts,.cts,.mts,.tsx,.vue,.svelte --ignore-path=.gitignore"
  }
}

```

You should declare `paths` in `tsconfig.json` if you are using path aliases.

### Stylelint

Learn about [Stylelint](https://stylelint.io/).

```sh
pnpm install -D stylelint@~14.3.0
```

Set up `.stylelintrc.cjs`.

```js
const { stylelint } = require('@modyqyw/fabric');

module.exports = {
  // css
  ...stylelint.css,

  // css + prettier
  // ...stylelint.cssPrettier,

  // less
  // ...stylelint.less,

  // less + prettier
  // ...stylelint.lessPrettier,

  // scss / sass
  // ...stylelint.scss,

  // scss / sass + prettier
  // ...stylelint.scssPrettier,
};

```

Set up `package.json`. Use `.gitignore` as the ignore pattern file here.

```json
{
  ...,
  "scripts": {
    ...,
    "lint": "pnpm run lint:stylelint",
    "lint:stylelint": "stylelint \"./**/*.{css,less,scss,sass,vue,svelte}\" --fix --allow-empty-input --ignore-path=.gitignore"
  }
}

```

### Markdownlint

Learn about [Markdown](https://commonmark.org/) and [Markdownlint](https://github.com/DavidAnson/markdownlint).

```sh
pnpm install -D markdownlint-cli@~0.30.0
```

Set up `.markdownlint.json`.

```json
{
  "MD003": false,
  "MD013": false,
  "MD022": false,
  "MD024": false,
  "MD025": false,
  "MD033": false
}

```

Set up `package.json`. Use `.gitignore` as the ignore pattern file here.

```json
{
  ...,
  "scripts": {
    ...,
    "lint": "pnpm run lint:markdownlint",
    "lint:markdownlint": "markdownlint . --fix --ignore-path=.gitignore"
  }
}

```

### Commitlint

Learn about [Commitlint](https://commitlint.js.org/) and [Conventional Commits](https://www.conventionalcommits.org/).

```sh
pnpm install -D @commitlint/cli@~16.1.0
```

Set up `.commitlintrc.cjs`.

```js
const { commitlint } = require('@modyqyw/fabric');

module.exports = {
  ...commitlint,
};

```

### Commitizen

Learn about [Commitizen](https://commitizen-tools.github.io/commitizen/).

```sh
pnpm install -D commitizen@~4.2.4
```

Set up `package.json`.

```json
{
  ...,
  "scripts": {
    ...,
    "commit": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/@commitlint/cz-commitlint"
    }
  }
}

```

### LintStaged

Learn about [LintStaged](https://github.com/okonet/lint-staged).

```sh
pnpm install -D lint-staged@~12.3.3

```

Set up `.lintstagedrc.cjs`.

```js
module.exports = {
  '*.md': 'markdownlint --fix',
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue,svelte}': 'eslint --fix',
  '*.{css,less,scss,sass,vue,svelte}': 'stylelint --fix',
};

```

### Husky

Learn about [Husky](https://github.com/typicode/husky).

```sh
pnpm install -D is-ci@~3.0.1 husky@~7.0.4

npx husky install

```

Set up `package.json`.

```json
{
  ...,
  "scripts": {
    ...,
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

- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)
- [np](https://github.com/sindresorhus/np)
- [release](https://github.com/vercel/release)
- [release-it](https://github.com/release-it/release-it)
- [semantic-release](https://semantic-release.gitbook.io/semantic-release/)
- [standard-version](https://github.com/conventional-changelog/standard-version)

## VSCode

- Install plugins.
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
  - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - 1.x version
  - [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) - For svelte
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - For TailwindCSS
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - For vue3 and vue2, extra configs required if for vue2
  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - For vue2
  - [uni-helper](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper) - If you are dealing with uni-*
  - [WindiCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - For TailwindCSS / WindiCSS
- Set up `Settings.json`.

```json
{
  "css.validate": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
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
    "*.json5: "jsonc",
    "*.nvue": "vue",
    "*.ux": "vue"
  },
  "less.validate": false,
  "scss.validate": false,
  "stylelint.snippet": ["css", "less", "scss", "sass", "vue", "svelte"],
  "stylelint.validate": ["css", "less", "scss", "sass", "vue", "svelte"],
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
  "[sass]": {
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

If you are using Volar, remember to disable / remove Vetur and `"editor.defaultFormatter": "octref.vetur"`.

If you are using TailwindCSS / WindiCSS, `"editor.formatOnSave": true` may be a better choice.

## Migrate

### Migrate 4.x from 3.x

- Upgrade your node version to latest 12, 14 or 16.
- Upgrade your npm version to latest 6, 7 or 8.
- Upgrade your eslint version to latest 7 or 8.
- Upgrade your stylelint version to latest 14.
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

- [AlloyTeam - eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)
- [antfu - eslint-config](https://github.com/antfu/eslint-config)
- [Airbnb CSS/SASS Style Guide](https://github.com/airbnb/css)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Airbnb React Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- [Code Guide](https://codeguide.co/)
- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- [standardjs](https://standardjs.com/)
- [TypeScript Deep Dive - TypeScript Style Guide](https://basarat.gitbook.io/typescript/styleguide)

## License

[MIT](./LICENSE)

Copyright (c) 2020-present ModyQyW
