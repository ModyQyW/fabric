# @modyqyw/fabric

Shareable specification for different front-end projects.

[Github](https://github.com/ModyQyW/fabric#readme) | [Gitee](https://gitee.com/ModyQyW/fabric#readme)

## Usage

```sh
# locally
npm i -D @modyqyw/fabric@~1.31.2
# or
# yarn add -D @modyqyw/fabric@~1.31.2

# globally
npm i -g @modyqyw/fabric@~1.31.2
# or
# yarn add -g @modyqyw/fabric@~1.31.2
```

### CLI (beta)

**This is still a beta feature and may cause your project to crash. Please use it in your new projects and give feedback. It will get smarter in the foreseeable future.**

CLI is used to config your project easier. Just call it after installing globally.

```sh
# in current dir
modyqyw-fabric config
# specify PROJECT_DIR
modyqyw-fabric config ./
```

Or, you can use scripts in `${PROJECT_DIR}package.json` if you install locally.

```json
{
  ...,
  "scripts": {
    ...,
    "config": "modyqyw-fabric config"
  }
}

```

```sh
npm run config
# or
# yarn run config
```

### Naming

Naming is very hard and hardly be checked by linters. However, there are still relevant naming suggestions available.

- JavaScript/TypeScript - [kettannaito/naming-cheatsheet](https://github.com/kettanaito/naming-cheatsheet#readme)
- CSS/LESS/SASS/SCSS - [BEM](http://getbem.com/), [OOCSS](https://github.com/stubbornella/oocss/wiki), [ACSS](https://css-tricks.com/lets-define-exactly-atomic-css/), [SMACSS](http://smacss.com/)

Besides, you can learn naming from some open-source projects, such as [Vuetify](https://vuetifyjs.com/), [MaterialUI](https://material-ui.com/), [Bootstrap](https://getbootstrap.com/), [TailwindCSS](https://tailwindcss.com/) and [Bulma](https://bulma.io/).

In my opinion, simplicity and clarity are the highest priority for naming.

### Git

Learn about [Git](https://git-scm.com/doc), [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) and [GifLFS](https://git-lfs.github.com/).

```sh
git config --global core.autocrlf false
git config --global init.defaultBranch main
```

For SSH keys, check [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh), which also works for other git systems like [Gitee](https://gitee.com/).

Set up `${PROJECT_DIR}/.gitattributes`.

```sh
* text=auto

```

A better `${PROJECT_DIR}/.gitattributes` example [here](https://stackoverflow.com/a/32278635).

A `${PROJECT_DIR}/.gitignore` example [here](./.gitignore).

### EditorConfig

Learn about [EditorConfig](https://editorconfig.org/).

Set up `${PROJECT_DIR}/.editorconfig`.

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

### Prettier

Learn about [Prettier](https://prettier.io/).

```sh
npm i -D prettier@~2.2.1
# or
# yarn add -D prettier@~2.2.1
```

Set up `${PROJECT_DIR}/.prettierrc.js`.

```js
/* eslint-disable import/no-extraneous-dependencies */
const config = require('@modyqyw/fabric/prettier');

module.exports = {
  ...config,
  // write your own rules here
  overrides: [
    ...config.overrides,
    // write your own overrides here
  ],
};

```

Set up `${PROJECT_DIR}/package.json`.

```json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:json",
    "lint:json": "prettier ./**/*.json --write"
  }
}

```

A `${PROJECT_DIR}/.prettierignore` example [here](./config/.prettierignore).

### ESLint

Learn about [ESLint](https://eslint.org/).

```sh
npm i -D eslint@~7.26.0 @babel/core@~7.14.0 @babel/eslint-parser@~7.13.14
# or
# yarn add -D eslint@~7.26.0 @babel/core@~7.14.0 @babel/eslint-parser@~7.13.14
```

If you are using typescript, additional dependencies are needed.

```sh
npm i -D typescript@~4.2.4 @typescript-eslint/eslint-plugin@~4.22.1 @typescript-eslint/parser@~4.22.1
# or
# yarn add -D typescript@~4.2.4 @typescript-eslint/eslint-plugin@~4.22.1 @typescript-eslint/parser@~4.22.1
```

Set up `${PROJECT_DIR}/.eslintrc.js`.

```js
/* eslint-disable import/no-extraneous-dependencies */
// for js and ts
const config = require('@modyqyw/fabric/eslint/native');

// for react17, react-native0.64, taro3, rax1, remax2, umi3 and next10
// with js or ts
// const config = require('@modyqyw/fabric/eslint/react');

// for vue2, uni-app and nuxt2, with js
// const config = require('@modyqyw/fabric/eslint/vue2');

// for vue2, uni-app and nuxt2, with ts
// const config = require('@modyqyw/fabric/eslint/vue2-typescript');

// for vue3 and uni-app, with js
// const config = require('@modyqyw/fabric/eslint/vue3');

// for vue3 and uni-app, with ts
// const config = require('@modyqyw/fabric/eslint/vue3-typescript');

module.exports = {
  ...config,
  plugins: [
    ...config.plugins,
    // write your own plugins here
  ],
  extends: [
    ...config.extends,
    // write your own extends here
  ],
  env: {
    ...config.env,
    // write your own env here
  },
  globals: {
    ...config.globals,
    // write your own globals here
  },
  rules: {
    ...config.rules,
    // write your own rules here
  },
  overrides: [
    ...config.overrides,
    // write your own overrides here
  ],
  settings: {
    ...config.settings,
    // write your own settings here
  },
};

```

Set up `${PROJECT_DIR}/package.json`.

```json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:script",
    "lint:script": "eslint . --ext .js,.jsx,.ts,.tsx,.vue --fix"
  }
}

```

When using `vue-cli-service`, `eslint . --ext .js,.jsx,.ts,.tsx,.vue --fix` can be replaced with `vue-cli-service lint --fix`.

A `${PROJECT_DIR}/.eslintignore` example [here](./config/.eslintignore).

### Stylelint

Learn about [Stylelint](https://stylelint.io/).

```sh
npm i -D stylelint@~13.13.1
# or
# yarn add -D stylelint@~13.13.1
```

Set up `${PROJECT_DIR}/.stylelintrc.js`.

```js
/* eslint-disable import/no-extraneous-dependencies */
// for css
const config = require('@modyqyw/fabric/stylelint/css');

// for less
// const config = require('@modyqyw/fabric/stylelint/less');

// for sass
// const config = require('@modyqyw/fabric/stylelint/sass');

// for scss
// const config = require('@modyqyw/fabric/stylelint/scss');

module.exports = {
  ...config,
  extends: [
    ...config.extends,
    // write your own extends here
  ],
  rules: {
    ...config.rules,
    // write your own rules here
  },
};

```

Set up `${PROJECT_DIR}/package.json`.

```json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:style",
    "lint:style": "stylelint ./**/*.{css,less,sass,scss,vue} --fix"
  }
}

```

A `${PROJECT_DIR}/.stylelintignore` example [here](./config/.stylelintignore).

### Markdownlint

Learn about [Markdown](https://commonmark.org/) and [Markdownlint](https://github.com/DavidAnson/markdownlint#readme).

```sh
npm i -D markdownlint-cli@~0.27.1
# or
# yarn add -D markdownlint-cli@~0.27.1
```

Set up `${PROJECT_DIR}/.markdownlint.json`.

```json
{
  "MD013": false,
  "MD033": false
}

```

Set up `${PROJECT_DIR}/package.json`.

```json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:markdown",
    "lint:markdown": "markdownlint . --fix"
  }
}

```

A `${PROJECT_DIR}/.markdownlintignore` example [here](./config/.markdownlintignore).

### LintMD

Learn about [LintMD](https://github.com/lint-md/lint-md#readme), which aims at Chinese markdown files.

```sh
npm i -D lint-md-cli@~0.1.2
# or
# # yarn add -D lint-md-cli@~0.1.2
```

Set up `${PROJECT_DIR}/.lintmdrc`.

```sh
{
  "excludeFiles": [],
  "rules": {
    "no-long-code": [
      "error",
      {
        "length": 80,
        "exclude": ["css", "less", "sass", "scss"]
      }
    ]
  }
}

```

Set up `${PROJECT_DIR}/package.json`.

```json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:markdown",
    "lint:markdown": "lint-md . --fix"
  }
}

```

Attention: when I try to migrate to `@lint-md/cli`, I get an error `env: node\r: No such file or directory`. If you have any idea, please help me.

### LsLint

Learn about [LsLint](https://ls-lint.org/).

```sh
npm i -D @ls-lint/ls-lint@~1.9.2
# or
# yarn add -D @ls-lint/ls-lint@~1.9.2
```

Set up `${PROJECT_DIR}/.ls-lint.yml`.

```yml
ls:
  config:
    .js: kebab-case
    .ts: kebab-case
    .config.js: kebab-case
    .config.ts: kebab-case
  build:
    .js: kebab-case
    .ts: kebab-case
    .config.js: kebab-case
    .config.ts: kebab-case
  components:
    .js: PascalCase | kebab-case
    .jsx: PascalCase | kebab-case
    .ts: PascalCase | kebab-case
    .tsx: PascalCase | kebab-case
    .vue: PascalCase | kebab-case
  mock:
    .js: kebab-case
    .ts: kebab-case
  src:
    .js: kebab-case
    .ts: kebab-case
    .d.ts: kebab-case
    .config.js: kebab-case
    .config.ts: kebab-case
    .jsx: kebab-case
    .tsx: kebab-case
    .vue: kebab-case
    .css: kebab-case
    .less: kebab-case
    .sass: kebab-case
    .scss: kebab-case
    .module.css: kebab-case
    .module.less: kebab-case
    .module.sass: kebab-case
    .module.scss: kebab-case
  src/composables:
    .js: camelCase
    .ts: camelCase
  src/hooks:
    .js: camelCase
    .ts: camelCase
  src/**/components:
    .js: PascalCase | kebab-case
    .jsx: PascalCase | kebab-case
    .ts: PascalCase | kebab-case
    .tsx: PascalCase | kebab-case
    .vue: PascalCase | kebab-case
  src/**/test:
    .js: kebab-case
    .ts: kebab-case
    .spec.js: kebab-case
    .spec.ts: kebab-case
    .test.js: kebab-case
    .test.ts: kebab-case
  src/**/__test__:
    .js: kebab-case
    .ts: kebab-case
    .spec.js: kebab-case
    .spec.ts: kebab-case
    .test.js: kebab-case
    .test.ts: kebab-case
  src/**/tests:
    .js: kebab-case
    .ts: kebab-case
    .spec.js: kebab-case
    .spec.ts: kebab-case
    .test.js: kebab-case
    .test.ts: kebab-case
  src/**/__tests__:
    .js: kebab-case
    .ts: kebab-case
    .spec.js: kebab-case
    .spec.ts: kebab-case
    .test.js: kebab-case
    .test.ts: kebab-case
  pages:
    .js: kebab-case
    .ts: kebab-case
    .d.ts: kebab-case
    .config.js: kebab-case
    .config.ts: kebab-case
    .jsx: kebab-case
    .tsx: kebab-case
    .vue: kebab-case
    .css: kebab-case
    .less: kebab-case
    .sass: kebab-case
    .scss: kebab-case
    .module.css: kebab-case
    .module.less: kebab-case
    .module.sass: kebab-case
    .module.scss: kebab-case
  store:
    .js: kebab-case
    .ts: kebab-case
  styles:
    .css: kebab-case
    .less: kebab-case
    .sass: kebab-case
    .scss: kebab-case
    .module.css: kebab-case
    .module.less: kebab-case
    .module.sass: kebab-case
    .module.scss: kebab-case
  typings:
    .js: kebab-case
    .ts: kebab-case
    .d.ts: kebab-case
  types:
    .js: kebab-case
    .ts: kebab-case
    .d.ts: kebab-case
  test:
    .js: kebab-case
    .ts: kebab-case
    .spec.js: kebab-case
    .spec.ts: kebab-case
    .test.js: kebab-case
    .test.ts: kebab-case
  __test__:
    .js: kebab-case
    .ts: kebab-case
    .spec.js: kebab-case
    .spec.ts: kebab-case
    .test.js: kebab-case
    .test.ts: kebab-case
  tests:
    .js: kebab-case
    .ts: kebab-case
    .spec.js: kebab-case
    .spec.ts: kebab-case
    .test.js: kebab-case
    .test.ts: kebab-case
  __tests__:
    .js: kebab-case
    .ts: kebab-case
    .spec.js: kebab-case
    .spec.ts: kebab-case
    .test.js: kebab-case
    .test.ts: kebab-case

ignore:
  - ./src/.next
  - ./src/.nuxt
  - ./src/.rax
  - ./src/.umi
  - ./src/App.js
  - ./src/App.ts
  - ./src/App.jsx
  - ./src/App.tsx
  - ./src/App.vue
  - ./src/App.css
  - ./src/App.less
  - ./src/App.sass
  - ./src/App.scss

```

Set up `${PROJECT_DIR}/package.json`.

```json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:ls",
    "lint:ls": "ls-lint ."
  }
}

```

### Commitlint

Learn about [Commitlint](https://commitlint.js.org/).

```sh
npm i -D @commitlint/cli@~12.1.1
# or
# yarn add -D @commitlint/cli@~12.1.1
```

Set up `${PROJECT_DIR}/.commitlintrc.js`.

```js
/* eslint-disable import/no-extraneous-dependencies */
const config = require('@modyqyw/fabric/commitlint');

module.exports = {
  ...config,
};

```

You may also want to try [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog#readme) or [semantic-release](https://semantic-release.gitbook.io/semantic-release/).

### Commitizen

Learn about [Commitizen](https://commitizen-tools.github.io/commitizen/).

```sh
npm i -D commitizen@~4.2.4
# or
# yarn add -D commitizen@~4.2.4
```

Set up `${PROJECT_DIR}/package.json`.

```json
{
  ...,
  "scripts": {
    ...,
    "commit": "cz"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}

```

You may also want to try [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog#readme) or [semantic-release](https://semantic-release.gitbook.io/semantic-release/).

### LintStaged

Learn about [LintStaged](https://github.com/okonet/lint-staged#readme).

```sh
npm install -D lint-staged@~10.5.4
# or
# yarn add -D lint-staged@~10.5.4

```

Set up `${PROJECT_DIR}/.lintstagedrc.js`.

```js
module.exports = {
  '*.json': 'prettier --write',
  '*.{css,less,sass,scss,vue}': 'stylelint --fix',
  '*.{js,jsx,ts,tsx,vue}': 'eslint --fix',
  '*.{md,markdown}': 'markdownlint --fix && lint-md --fix',
};

```

When using `vue-cli-service`, `eslint --fix` can be replaced with `vue-cli-service lint --fix`.

### Husky

Learn about [Husky](https://github.com/typicode/husky#readme).

```sh
npm install -D is-ci@~3.0.0 husky@~6.0.0
# or
# yarn add -D is-ci@~3.0.0 husky@~6.0.0

npx husky install

```

Set up `${PROJECT_DIR}/package.json`.

```json
{
  ...,
  "scripts": {
    ...,
    "prepare": "is-ci || husky install"
  }
}

```

Set up `${PROJECT_DIR}/.husky/commit-msg` hook.

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit $1

```

Set up `${PROJECT_DIR}/.husky/pre-commit` hook.

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install ls-lint . && npx --no-install lint-staged

```

Finally use `chmod`.

```sh
chmod +x .git/hooks/*
chmod +x .husky/*
```

If you want to use `husky@4`, steps are shown below.

```sh
npm i -D husky@~4.3.8
# or
# yarn add -D husky@~4.3.8
```

Set up `${PROJECT_DIR}/package.json`.

```json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-commit": "ls-lint . && lint-staged"
    }
  }
}

```

## VSCode

- Install plugins.
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [language-stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)
  - [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
  - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
  - [uni-helper](https://marketplace.visualstudio.com/items?itemName=ModyQyW.vscode-uni-helper) - If you are dealing with uni-*
- Set up `Settings.json`. Then `F1 => File: Save`.

```json
{
  "css.validate": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.markdownlint": true,
    "source.fixAll.stylelint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.rulers": [{ "column": 80 }],
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
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
    "*.nvue": "vue",
    "*.ux": "vue"
  },
  "less.validate": false,
  "scss.validate": false,
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  }
}
```

## Acknowledge

Sorted according to alphabetical order.

- [Airbnb CSS/SASS Style Guide](https://github.com/airbnb/css#readme)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#readme)
- [Airbnb React Style Guide](https://github.com/airbnb/javascript/tree/master/react#readme)
- [Code Guide](https://codeguide.co/)
- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- [TypeScript Deep Dive - TypeScript Style Guide](https://basarat.gitbook.io/typescript/styleguide)

## License

[MIT](./LICENSE)

Copyright (c) 2020-present ModyQyW
