# @modyqyw/fabric

Shareable configs for different projects.

[Github](https://github.com/MillCloud/fabric#readme) | [Gitee](https://gitee.com/millcloud/fabric#readme)

## Usage

```sh
npm i -D prettier@~2.1.0 eslint@~7.13.0 stylelint@~13.7.2 @modyqyw/fabric@~1.0.0
# or
#yarn add -D prettier@~2.1.0 eslint@~7.13.0 stylelint@~13.7.2 @modyqyw/fabric@~1.0.0
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

## More Configs

- `@modyqyw/prettier-config` - [Github](https://github.com/MillCloud/prettier-config#readme) [Gitee](https://gitee.com/millcloud/prettier-config#readme)
- `@modyqyw/eslint-config` - [Github](https://github.com/MillCloud/eslint-config#readme) [Gitee](https://gitee.com/millcloud/eslint-config#readme)
- `@modyqyw/stylelint-config` - [Github](https://github.com/MillCloud/stylelint-config#readme) [Gitee](https://gitee.com/millcloud/stylelint-config#readme)

`@modyqyw/eslint-config` and `@modyqyw/stylelint-config` do not use any `Prettier` config and plugin, while `@modyqyw/fabric` does.

## License

[MIT](./LICENSE)

Copyright (c) 2020-present MillCloud
