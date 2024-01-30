# Stylelint

Stylelint 是被广泛采用的代码检查工具，主要用于样式文件。

## 安装

首先你需要安装 Stylelint。目前支持 Stylelint v16。

::: code-group

```shell [npm]
npm install stylelint -D
```

```shell [yarn]
yarn add stylelint -D
```

```shell [pnpm]
pnpm install stylelint -D
```

```shell [bun(experimental)]
bun install stylelint -d
```

:::

## 配置

### ESM

```javascript
// stylelint.config.mjs
// or stylelint.config.js with "type": "module" in package.json
import { stylelint } from '@modyqyw/fabric';
// or
// import { stylelint } from '@modyqyw/fabric/stylelint';

export default stylelint();
```

### CJS

```javascript
// stylelint.config.cjs
// or stylelint.config.js without "type": "module" in package.json
const { stylelint } = require('@modyqyw/fabric');
// or
// const { stylelint } = require('@modyqyw/fabric/stylelint');

module.exports = stylelint();
```

### CLI

更新你的 `package.json`，增加 `lint:stylelint` 命令。

```json
{
  "scripts": {
    "lint:stylelint": "stylelint \"./**/*.{css,scss,vue}\" --fix --cache --aei --ignore-path=.gitignore"
  }
}
```

## 自定义

### 参数自定义

给导出的 `stylelint` 方法传参可以自定义配置，`stylelint` 方法接收两个参数。

第一个参数用于基本自定义，你可以传递 `undefined` 或对象。要明确地启用或禁用某一个配置，需要明确在传递的对象中设置 boolean 值。

目前支持以下配置：

- order：基于 [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order)，对 CSS 属性排序，默认启用
- scss：基于 [stylelint-scss](https://github.com/stylelint-scss/stylelint-scss)，提供 SCSS 支持，安装 [sass](https://github.com/sass/dart-sass) 后默认启用，否则默认禁用
- style：使用什么风格的配置，默认 `'recommended'`，可选 `'standard'`

```javascript
// stylelint.config.mjs
// or stylelint.config.js with "type": "module" in package.json
import { stylelint, hasScss } from '@modyqyw/fabric';

export default stylelint({
  // 基于 stylelint-config-recess-order
  // 默认为 true，即启用
  order: true,
  // 基于 stylelint-scss
  // 安装 sass 后默认启用，否则默认禁用
  scss: hasScss,
  // 使用什么风格的配置
  // 默认 'recommended'
  // 可选 'standard'
  style: 'recommended',
});
```

::: warning 潜在冲突

1. stylelint-config-recess-order 可能与 prettier-plugin-css-order 冲突，默认禁用 prettier-plugin-css-order。如果你想启用 prettier-plugin-css-order，见 [Prettier 章节自定义部分](../formatter/prettier.md#自定义)，并禁用 stylelint-config-recess-order。

:::

第二个参数用于更进一步的自定义，你可以传递一个对象，用于覆盖生成的配置。

```javascript
// stylelint.config.mjs
// or stylelint.config.js with "type": "module" in package.json
import { stylelint } from '@modyqyw/fabric';

export default stylelint(undefined, {
  rules: {
    // 需要自定义的规则
    ...,
  },
});
```

如果你希望在默认配置上增加自定义配置（比如支持 LESS），你可以像下面这样做（需要自行安装相应的依赖）：

```javascript
// stylelint.config.mjs
// or stylelint.config.js with "type": "module" in package.json
import { stylelint } from '@modyqyw/fabric';

const defaultConfig = stylelint();

export default {
  ...defaultConfig,
  rules: {
    ...defaultConfig.rules,
    // 需要自定义的规则
    ...,
  },
};
```

::: warning 潜在冲突

配置默认支持 Vue、TailwindCSS 和 Module CSS。在自定义规则时，请小心调整，避免覆盖规则导致报错。

:::

## 整合

### 如何和 VSC 整合使用？

先安装 [对应的 Stylelint 插件](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)。

视实际情况修改 [用户设置](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson) 或 [工作区设置](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings)。

```jsonc
{
  // 禁用内置的 CSS 检查
  "css.validate": false,

  // 禁用内置的 LESS 检查
  "less.validate": false,

  // 禁用内置的 SCSS 检查
  "scss.validate": false,

  // 启用 Stylelint 代码片段的语言
  "stylelint.snippet": ["css", "scss", "vue"],

  // Stylelint 检查的语言
  "stylelint.validate": ["css", "scss", "vue"],

  // CSS、SCSS 手动保存后 Stylelint 自动修复
  "[css][scss]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": "explicit",
    },
  },

  // Vue 手动保存后 Stylelint 自动修复
  "[vue]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": "explicit",
    },
  },
}
```

### 如何与 WebStorm 整合使用？

WebStorm 自带 Stylelint，可参考 [如何与 VSC 整合使用？](#如何和-vsc-整合使用) 自行调整。

### 如何和 lint-staged 整合使用？

如果你使用该库提供的 lint-staged 配置，请查看 [lint-staged 章节](../git/lint-staged.md)。

如果你没有使用该库提供的 lint-staged 配置，可以参考以下配置。

```javascript
// lint-staged.config.mjs
// or lint-staged.config.js with "type": "module" in package.json
export default {
  '*.{css,scss,vue}': 'stylelint --fix --cache --aei --ignore-path=.gitignore',
};
```
