# @modyqyw/fabric

Shareable configs for different projects.

[Github](https://github.com/MillCloud/fabric#readme) | [Gitee](https://gitee.com/millcloud/fabric#readme)

## Usage

```sh
npm i -D prettier@~2.2.1 eslint@~7.14.0 stylelint@~13.8.0 @modyqyw/fabric@~1.2.0
npm i -D @commitlint/cli@～11.0.0 husky@~4.3.0 lint-staged@~10.5.2
# or
# yarn add -D prettier@~2.2.1 eslint@~7.14.0 stylelint@~13.8.0 @modyqyw/fabric@~1.2.0
# yarn add -D @commitlint/cli@～11.0.0 husky@~4.3.0 lint-staged@~10.5.2
```

### Prettier

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

```js
// ${PROJECT_DIR}/.eslintrc.js
/* eslint-disable import/no-extraneous-dependencies */
const config = require("@modyqyw/fabric/eslint/native"); // for js and ts
// const config = require("@modyqyw/fabric/eslint/react"); // for react, react-native and taro3, with js or ts
// const config = require("@modyqyw/fabric/eslint/vue2-typescript"); // for vue2 and uni-app with ts
// const config = require("@modyqyw/fabric/eslint/vue2"); // for vue2 and uni-app with js
// const config = require("@modyqyw/fabric/eslint/vue3-typescript"); // for vue3 and uni-app with ts
// const config = require("@modyqyw/fabric/eslint/vue3"); // for vue3 and uni-app with js

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    // write your own rules here
  }
};
```

Do not use `const config = require("@modyqyw/fabric/eslint");` unless you are using vue.

### Stylelint

```js
// ${PROJECT_DIR}/stylelint.config.js
/* eslint-disable import/no-extraneous-dependencies */
const config = require("@modyqyw/fabric/stylelint/css"); // for css
// const config = require("@modyqyw/fabric/stylelint/less"); // for less
// const config = require("@modyqyw/fabric/stylelint/scss"); // for scss

module.exports = {
  ...config,
};
```

### Commitlint

```js
// ${PROJECT_DIR}/commitlint.config.js
/* eslint-disable import/no-extraneous-dependencies */
const config = require("@modyqyw/fabric/commitlint");

module.exports = {
  ...config
};
```

### LsLint

```yml
# ${PROJECT_DIR}/.ls-lint.yml
ls:
  src/**:
    .js: kebab-case
    .jsx: kebab-case | PascalCase
    .ts: kebab-case
    .tsx: kebab-case | PascalCase
    .vue: kebab-case | PascalCase
    .scss: kebab-case
    .less: kebab-case

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
    "./src/**/*.{css,less,scss}": [
      "stylelint --fix"
    ],
    "./src/**/*.{js,jsx,ts,tsx,vue}": [
      "vue-cli-service lint --fix",
    ],
    "./src/**/*.vue": [
      "stylelint --fix"
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

## More Configs

- `@modyqyw/prettier-config` - [Github](https://github.com/MillCloud/prettier-config#readme) [Gitee](https://gitee.com/millcloud/prettier-config#readme)
- `@modyqyw/eslint-config` - [Github](https://github.com/MillCloud/eslint-config#readme) [Gitee](https://gitee.com/millcloud/eslint-config#readme)
- `@modyqyw/stylelint-config` - [Github](https://github.com/MillCloud/stylelint-config#readme) [Gitee](https://gitee.com/millcloud/stylelint-config#readme)

`@modyqyw/eslint-config` and `@modyqyw/stylelint-config` do not use any `Prettier` config and plugin, while `@modyqyw/fabric` does.

## License

[MIT](./LICENSE)

Copyright (c) 2020-present MillCloud
