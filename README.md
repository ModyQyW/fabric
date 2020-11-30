# @modyqyw/fabric

Shareable configs for different projects.

[Github](https://github.com/MillCloud/fabric#readme) | [Gitee](https://gitee.com/millcloud/fabric#readme)

## Usage

Install the dependency first.

```sh
npm i -D @modyqyw/fabric@~1.3.7
# or
# yarn add -D @modyqyw/fabric@~1.3.7
```

Then follow the corresponding guides.

### Prettier

```sh
npm i -D prettier@~2.2.1
# or
# yarn add -D prettier@~2.2.1
```

```js
// ${PROJECT_DIR}/prettier.config.js
/* eslint-disable import/no-extraneous-dependencies */
const config = require("@modyqyw/fabric/prettier");

module.exports = {
  ...config,
  // write your own rules here
};

```

### ESLint

```sh
npm i -D eslint@~7.14.0
# or
# yarn add -D eslint@~7.14.0
```

```js
// ${PROJECT_DIR}/.eslintrc.js
/* eslint-disable import/no-extraneous-dependencies */
// for js and ts
const config = require("@modyqyw/fabric/eslint/native");

// for react, react-native, taro3 and rax, with js or ts
// const config = require("@modyqyw/fabric/eslint/react");

// for vue2 and uni-app, with js
// const config = require("@modyqyw/fabric/eslint/vue2");

// for vue2 and uni-app, with ts
// const config = require("@modyqyw/fabric/eslint/vue2-typescript");

// for vue3 and uni-app, with js
// const config = require("@modyqyw/fabric/eslint/vue3");

// for vue3 and uni-app, with ts
// const config = require("@modyqyw/fabric/eslint/vue3-typescript");

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    // write your own rules here
  },
};

```

### Stylelint

```sh
npm i -D stylelint@~13.8.0
# or
# yarn add -D stylelint@~13.8.0
```

```js
// ${PROJECT_DIR}/stylelint.config.js
/* eslint-disable import/no-extraneous-dependencies */
// for css
const config = require("@modyqyw/fabric/stylelint/css");

// for less
// const config = require("@modyqyw/fabric/stylelint/less");

// for scss
// const config = require("@modyqyw/fabric/stylelint/scss");

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
  extends: ["@modyqyw/fabric/stylelint/css"],
  // extends: ["@modyqyw/fabric/stylelint/less"],
  // extends: ["@modyqyw/fabric/stylelint/scss"],
  rules: {
    // write your own rules here
  },
};

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
const config = require("@modyqyw/fabric/commitlint");

module.exports = {
  ...config
};
```

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
    .js: kebab-case | PascalCase | point.case
    .jsx: kebab-case | PascalCase | point.case
    .ts: kebab-case | PascalCase | point.case
    .tsx: kebab-case | PascalCase | point.case
    .vue: kebab-case | PascalCase
    .css: kebab-case | point.case
    .less: kebab-case | point.case
    .scss: kebab-case | point.case

ignore:
  - .git
  - node_modules

```

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

### Husky & LintStaged

```sh
npm i -D husky@~4.3.0 lint-staged@~10.5.2
# or
# yarn add -D husky@~4.3.0 lint-staged@~10.5.2
```

```json
{
  ...,
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "./src/**/*.{css,less,scss,vue}": [
      "stylelint --fix"
    ],
    "./src/**/*.{js,jsx,ts,tsx,vue}": [
      "eslint --fix"
    ],
    ".": [
      "ls-lint"
    ]
  }
}
```

## VSCode

- Install plugins.
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- Set up `Settings.json`. Then `F1 => File: Save`.

```json
{
  "css.validate": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
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

Copyright (c) 2020-present MillCloud
