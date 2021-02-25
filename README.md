# @modyqyw/fabric

Shareable specification for different front-end projects.

[Github](https://github.com/ModyQyW/fabric#readme) | [Gitee](https://gitee.com/ModyQyW/fabric#readme)

## Usage

```sh
npm i -D @modyqyw/fabric@~1.16.0
# or
# yarn add -D @modyqyw/fabric@~1.16.0
```

### .gitattributes

```sh
git config --global core.autocrlf false
```

For SSH keys, check [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh), which also works for other git systems like Gitee.

```sh
# ${PROJECT_DIR}/.gitattributes
* text=auto

```

A better example [here](https://stackoverflow.com/a/32278635).

### EditorConfig

```sh
# ${PROJECT_DIR}/.editorconfig
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

```

### Prettier

```sh
npm i -D prettier@~2.2.1
# or
# yarn add -D prettier@~2.2.1
```

```js
// ${PROJECT_DIR}/prettier.config.js
/* eslint-disable import/no-extraneous-dependencies */
const config = require('@modyqyw/fabric/prettier');

module.exports = {
  ...config,
  // write your own rules here like below
  overrides: [
    ...config.overrides,
    {
      files: ['*.css', '*.less', '*.sass', '*.scss'],
      options: {
        printWidth: 160,
      },
    },
  ],
};

```

A `.prettierignore` example [here](./.prettierignore).

### ESLint

```sh
npm i -D eslint@~7.20.0
# or
# yarn add -D eslint@~7.20.0
```

```js
// ${PROJECT_DIR}/.eslintrc.js
/* eslint-disable import/no-extraneous-dependencies */
// for js and ts
const config = require('@modyqyw/fabric/eslint/native');

// for react17, react-native0.63, taro3, rax1, remax2, umi3 and next10
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
  settings: {
    ...config.settings,
    // write your own settings here
  }
};

```

A `.eslintignore` example [here](./.eslintignore).

### Stylelint

```sh
npm i -D stylelint@~13.9.0
# or
# yarn add -D stylelint@~13.9.0
```

```js
// ${PROJECT_DIR}/stylelint.config.js
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

A `.stylelintignore` example [here](./.stylelintignore).

### MarkdownLint

```sh
npm i -D markdownlint-cli@~0.26.0
# or
# yarn add -D markdownlint-cli@~0.26.0
```

```json
// ${PROJECT_DIR}/.markdownlint.json
{
  "MD013": false,
  "MD033": false
}

```

A `.markdownlintignore` example [here](./.markdownlintignore).

### LsLint

```sh
npm i -D @ls-lint/ls-lint@~1.9.2
# or
# yarn add -D @ls-lint/ls-lint@~1.9.2
```

```yml
# ${PROJECT_DIR}/.ls-lint.yml
ls:
  config:
    .js: kebab-case | point.case
    .ts: kebab-case | point.case
    .config.js: kebab-case
    .config.ts: kebab-case
  build:
    .js: kebab-case
    .ts: kebab-case
    .config.js: kebab-case
    .config.ts: kebab-case
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
    .jsx: PascalCase | kebab-case
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

### Commitlint & Commitizen

```sh
npm i -D commitlint@~11.0.0 commitizen@~4.2.3
# or
# yarn add -D commitlint@~11.0.0 commitizen@~4.2.3
```

```js
// ${PROJECT_DIR}/commitlint.config.js
/* eslint-disable import/no-extraneous-dependencies */
const config = require('@modyqyw/fabric/commitlint');

module.exports = {
  ...config,
};

```

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

### Husky & LintStaged

```sh
npm i -D husky@~4.3.8 lint-staged@~10.5.4
# or
# yarn add -D husky@~4.3.8 lint-staged@~10.5.4
```

```json
{
  ...,
  "scripts": {
    ...,
    "lint": "npm run lint:json && npm run lint:markdown && npm run lint:script && npm run lint:style && npm run lint:ls",
    "lint:json": "prettier ./**/*.json --write",
    "lint:markdown": "markdownlint . --fix",
    "lint:script": "eslint . --ext .js,.jsx,.ts,.tsx,.vue --fix",
    "lint:style": "stylelint ./**/*.{css,less,sass,scss,vue} --fix",
    "lint:ls": "ls-lint ."
  },
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-commit": "ls-lint . && lint-staged"
    }
  },
  "lint-staged": {
    "*.json": "prettier --write",
    "*.md": "markdownlint --fix",
    "*.{js,jsx,ts,tsx,vue}": "eslint --fix",
    "*.{css,less,sass,scss,vue}": "stylelint --fix"
  }
}

```

When using `vue-cli-service`, `lint:style` can be replaced with `vue-cli-service lint --fix`.

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
