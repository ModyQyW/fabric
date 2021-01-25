# @modyqyw/fabric

Shareable configs for different projects.

[Github](https://github.com/ModyQyW/fabric#readme) | [Gitee](https://gitee.com/ModyQyW/fabric#readme)

## Usage

```sh
npm i -D @modyqyw/fabric@~1.12.0
# or
# yarn add -D @modyqyw/fabric@~1.12.0
```

### .gitattributes

```sh
git config --global core.autocrlf false
```

```sh
# .gitattributes
* text=auto
```

A better example [here](https://stackoverflow.com/a/32278635).

### EditorConfig

```sh
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
    {
      files: ['*.css', '*.less', '*.scss'],
      options: {
        printWidth: 150,
        singleQuote: false,
        trailingComma: 'none',
      },
    },
  ],
};

```

A `.prettierignore` example [here](./.prettierignore).

### ESLint

```sh
npm i -D eslint@~7.18.0
# or
# yarn add -D eslint@~7.17.0
```

```js
// ${PROJECT_DIR}/.eslintrc.js
/* eslint-disable import/no-extraneous-dependencies */
// for js and ts
const config = require('@modyqyw/fabric/eslint/native');

// for react17, react-native, taro3, rax1, umi3 and next10, with js or ts
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
  rules: {
    ...config.rules,
    // write your own rules here
  },
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

// for scss
// const config = require('@modyqyw/fabric/stylelint/scss');

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    // write your own rules here
  },
};

```

Using `extends` is also ok.

```js
// ${PROJECT_DIR}/stylelint.config.js
module.exports = {
  extends: ['@modyqyw/fabric/stylelint/css'],
  // extends: ['@modyqyw/fabric/stylelint/less'],
  // extends: ['@modyqyw/fabric/stylelint/scss'],
  rules: {
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
  src/**:
    # useToken.js | remote-search.js | index.config.js
    .js: camelCase | kebab-case | point.case
    .ts: camelCase | kebab-case | point.case
    # index.tsx | FormItem.tsx
    .jsx: camelCase | PascalCase
    .tsx: camelCase | PascalCase
    # auth-redirect.vue | FromItem.vue
    .vue: kebab-case | PascalCase
    # index.css | Index.css | index.module.css
    .css: kebab-case | PascalCase | point.case
    .less: kebab-case | PascalCase | point.case
    .scss: kebab-case | PascalCase | point.case

ignore:
  - ./src/.umi
  - ./src/locales

```

### Commitlint

```sh
npm i -D @commitlint/cli@~11.0.0
# or
# yarn add -D @commitlint/cli@~11.0.0
```

```js
// ${PROJECT_DIR}/commitlint.config.js
/* eslint-disable import/no-extraneous-dependencies */
const config = require('@modyqyw/fabric/commitlint');

module.exports = {
  ...config,
};

```

### Husky & LintStaged

```sh
npm i -D husky@~4.3.8 lint-staged@~10.5.3
# or
# yarn add -D husky@~4.3.8 lint-staged@~10.5.3
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
    "lint:style": "stylelint ./**/*.{css,less,scss,vue} --fix",
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
    "*.{css,less,scss,vue}": "stylelint --fix"
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

## License

[MIT](./LICENSE)

Copyright (c) 2020-present ModyQyW
