# @modyqyw/fabric

Shareable configs for different projects.

## Usage

```sh
npm i -D prettier@~2.1.0 eslint@~7.13.0 stylelint@~13.7.2 @modyqyw/fabric@~0.0.2
# or
#yarn add -D prettier@~2.1.0 eslint@~7.13.0 stylelint@~13.7.2 @modyqyw/fabric@~0.0.2
```

### Prettier

```js
// ${PROJECT_DIR}/prettier.config.js
const config = require("@modyqyw/fabric/prettier");

module.exports = {
  ...config,
};
```

### ESLint

```js
// ${PROJECT_DIR}/.eslintrc.js
const config = require("@modyqyw/fabric/eslint");

module.exports = {
  ...config.native, // for js and ts
  // ...config.react, // for react, react-native and taro3, with js or ts
  // ...config.vue2Typescript, // for vue2 and uni-app with ts
  // ...config.vue2, // for vue2 and uni-app with js
  // ...config.vue3Typescript, // for vue3 and uni-app with ts
  // ...config.vue3, // for vue3 and uni-app with js
};
```

### Stylelint

```js
// ${PROJECT_DIR}/stylelint.config.js
const config = require("@modyqyw/fabric/stylelint");

module.exports = {
  ...config.css, // for css
  // ...config.less, // for less
  // ...config.scss, // for scss
};
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
