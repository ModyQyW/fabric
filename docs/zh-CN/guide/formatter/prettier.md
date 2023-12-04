# Prettier

代码格式化器是只关心代码风格、不关心代码质量的工具，可配置项有限。使用代码格式化器可以节省代码风格的争论时间，使项目和团队代码风格统一。

[Prettier](./prettier.md) 是被广泛采用的代码格式化器，它对 JavaScript / TypeScript / JSX / TSX / CSS / SCSS / Vue 支持良好。

::: tip 其它选择
[Biome](https://biomejs.dev/) 和 [dprint](https://dprint.dev/) 是后起之秀。如果你感觉 Prettier 速度比较慢，你可以考虑使用它们。但必须留意：它们和 Prettier 并不是 100% 兼容的，它们对 CSS / SCSS / Vue 的支持也有限，你可能会得到意想不到的结果。
:::

::: warning 不要混用代码格式化器
在任何情况下，你都不应该混用多个代码格式化器。
:::

## 安装

首先你需要安装 Prettier。

::: code-group

```shell [npm]
npm install prettier -D
```

```shell [yarn]
yarn add prettier -D
```

```shell [pnpm]
pnpm install prettier -D
```

```shell [bun]
bun install prettier -d
```

:::

## 配置

你需要检查你的 `package.json` 是否存在 `"type": "module"`。如果存在，请查看 [ESM 部分](#esm)，否则请查看 [CJS 部分](#cjs)。

### ESM

```javascript
// prettier.config.js with "type": "module" in package.json
// or prettier.config.mjs
import { prettier } from '@modyqyw/fabric';
// 或者
// import { prettier } from '@modyqyw/fabric/prettier';

export default prettier();
```

### CJS

```javascript
// prettier.config.js without "type": "module" in package.json
// or prettier.config.cjs
const { prettier } = require('@modyqyw/fabric');
// 或者
// const { prettier } = require('@modyqyw/fabric/prettier');

module.exports = prettier();
```

### CLI

更新你的 `package.json`，增加 `format` 命令。

```json
{
  "scripts": {
    "format": "prettier . \"!*lock*\" --ignore-unknown --write --cache"
  }
}
```

## 自定义

给导出的 `prettier` 方法传参可以自定义配置，`prettier` 方法接收两个参数。

### 基本自定义

第一个参数用于基本自定义，你可以传递 `undefined` 或对象。要明确地启用或禁用某一个插件，需要明确在传递的对象中设置 boolean 值。

目前支持以下插件：

- [prettier-plugin-css-order](https://github.com/Siilwyn/prettier-plugin-css-order)：对 CSS / SCSS 声明排序，默认禁用
- [@ianvs/prettier-plugin-sort-imports](https://github.com/ianvs/prettier-plugin-sort-imports)：对 import 声明排序，默认禁用
- [prettier-plugin-jsdoc](https://github.com/hosseinmd/prettier-plugin-jsdoc)：格式化 JSDoc 和 TSDoc，默认启用
- [prettier-plugin-organize-attributes](https://github.com/NiklasPor/prettier-plugin-organize-attributes)：对 HTML / Vue 属性排序，默认禁用
- [prettier-plugin-organize-imports](https://github.com/simonhaenisch/prettier-plugin-organize-imports)：对 import 声明排序，默认禁用
- [prettier-plugin-packagejson](https://github.com/matzkoh/prettier-plugin-packagejson)：对 package.json 排序，默认启用
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)：对 HTML / Vue class 属性排序，安装 TailwindCSS 后默认启用，否则默认禁用
- [@trivago/prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports)：对 import 声明排序，默认禁用

```javascript
// prettier.config.js with "type": "module" in package.json
import { hasTailwindCss, prettier } from '@modyqyw/fabric';

export default prettier({
  // 对应 prettier-plugin-css-order
  // 默认为 false，即禁用
  cssOrder: false,
  // 对应 @ianvs/prettier-plugin-sort-imports
  // 默认为 false，即禁用
  ianvsSortImports: false,
  // 对应 prettier-plugin-jsdoc
  // 默认为 true，即启用
  jsdoc: true,
  // 对应 prettier-plugin-organize-attributes
  // 默认为 false，即禁用
  organizeAttributes: false,
  // 对应 prettier-plugin-organize-imports
  // 默认为 false，即禁用
  organizeImports: false,
  // 对应 prettier-plugin-packagejson
  // 默认为 true，即启用
  packageJson: true,
  // 对应 prettier-plugin-tailwindcss
  // 安装 TailwindCSS 后默认启用，否则默认禁用
  tailwindcss: hasTailwindCss,
  // 对应 @trivago/prettier-plugin-sort-imports
  // 默认为 false，即禁用
  trivagoSortImports: false,
});
```

::: warning 潜在冲突

1. prettier-plugin-css-order 可能与 stylelint-config-recess-order 冲突，所以默认禁用。如果你想启用 prettier-plugin-css-order，请关闭 stylelint-config-recess-order，见 [Stylelint 章节自定义部分](../linter/stylelint#自定义)。

2. @ianvs/prettier-plugin-sort-imports、@trivago/prettier-plugin-sort-imports、prettier-plugin-organize-imports 三者相互冲突，而且可能与 eslint-plugin-perfectionist 冲突，所以默认禁用。如果你想启用三者之一，请关闭 eslint-plugin-perfectionist，见 [ESLint 章节自定义部分](../linter/eslint#自定义)。

3. prettier-plugin-organize-attributes 可能与 eslint-plugin-perfectionist 冲突，所以默认禁用。如果你想启用 prettier-plugin-organize-attributes，请关闭 eslint-plugin-perfectionist，见 [ESLint 章节自定义部分](../linter/eslint#自定义)。

4. prettier-plugin-packagejson 默认情况下不会与 eslint-plugin-jsonc 冲突。如果你想要使用 eslint-plugin-jsonc 对 package.json 排序，请禁用 prettier-plugin-packagejson。

5. prettier-plugin-tailwindcss 可能与 eslint-plugin-unocss 冲突。当你同时使用 TailwindCSS 和 UnoCSS 时，请手动关闭其中之一。如果你想禁用 eslint-plugin-unocss，见 [ESLint 章节自定义部分](../linter/eslint#自定义)。

:::

### 高级自定义

第二个参数用于高级自定义，你可以传递一个对象，用于覆盖生成的配置。

```javascript
// prettier.config.js with "type": "module" in package.json
import { prettier } from '@modyqyw/fabric';

export default prettier(undefined, {
  // 使用 prettier-plugin-svelte 和 prettier-plugin-tailwindcss
  // prettier-plugin-tailwindcss 一定要放在最后
  // 默认配置内的 plugins 将被直接覆盖
  plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
});
```

如果你希望在默认配置上增加自定义配置，你可以像下面这样做：

```javascript
// prettier.config.js with "type": "module" in package.json
import { prettier } from '@modyqyw/fabric';

const defaultConfig = prettier();

export default {
  ...defaultConfig,
  // 使用 prettier-plugin-jsdoc、prettier-plugin-packagejson、prettier-plugin-svelte 和 prettier-plugin-tailwindcss
  // prettier-plugin-tailwindcss 一定要放在最后
  plugins: [
    ...defaultConfig,
    'prettier-plugin-svelte',
    'prettier-plugin-tailwindcss',
  ],
};
```

## 整合

### 如何和 VSC 整合使用？

先安装 [对应的 Prettier 插件](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)。

修改全局用户配置如下，这将会指定默认的代码格式化器为 Prettier，之后你可以使用快捷键手动格式化代码。不知道怎么修改？看 [这里](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson)。

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

如果你想要在特定的项目内自动格式化，可以修改工作目录配置如下，这将会在每次保存后自动格式化代码。不知道怎么修改？看 [这里](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings)。

```json
{
  "editor.formatOnSave": true
}
```

::: tip 为什么不在全局用户配置内配置自动格式化代码？

代码世界并不只有一种配置，你正在协作的项目有可能并不使用代码格式化器，而是使用了 [ESLint Stylistic](https://eslint.style/)、[stylelint-stylistic](https://github.com/elirasza/stylelint-stylistic) 等与代码检查工具集成的库。这时候如果你使用代码格式化器自动格式化，可能会导致项目代码混乱且持续报告警告或错误。建议在确定使用代码格式化器的项目内使用自动格式化。

:::

### 如何与 WebStorm 整合使用？

WebStorm 自带 Prettier，可参考 [如何与 VSC 整合使用？](#如何和-vsc-整合使用) 自行调整。

### 如何和 lint-staged 整合使用？

如果你使用该库提供的 lint-staged 配置，请查看 [lint-staged 章节](../git/lint-staged.md)。

如果你没有使用该库提供的 lint-staged 配置，可以参考以下配置。

```javascript
// lint-staged.config.cjs
module.exports = {
  '*': 'prettier "!*lock*" --ignore-unknown --write --cache',
};
```

### 为什么不和 ESLint 整合使用？

> 在 linter 中运行 Prettier 会减慢 linting 过程，可能会因为警告而使编辑器变得混乱，并添加一层可能会导致问题的间接层。[Prettier 的官方文档](https://prettier.io/docs/en/integrating-with-linters.html) 建议使用单独的命令进行代码检查和代码格式化，即 Prettier 用于代码格式化问题，ESLint 用于代码质量问题。

引自 [vuejs/eslint-config-prettier](https://github.com/vuejs/eslint-config-prettier#use-separate-commands-for-linting-and-formatting)。
