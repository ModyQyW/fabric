# Prettier

Prettier 是被广泛采用的代码格式化器，它对 JavaScript / TypeScript / JSX / TSX / CSS / SCSS / Vue 支持良好。

::: tip 其它选择
[Biome](https://biomejs.dev/) 和 [dprint](https://dprint.dev/) 是后起之秀。如果你感觉 Prettier 速度比较慢，你可以考虑使用它们，但需要你自行配置。必须留意：它们和 Prettier 并不是 100% 兼容的，它们对 CSS / SCSS / Vue 的支持也有限，你可能会得到意想不到的结果。
:::

## 安装

首先你需要安装 Prettier。目前支持 Prettier v3。

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

```shell [bun(experimental)]
bun install prettier -d
```

:::

## 配置

### ESM

```javascript
// prettier.config.mjs
// or prettier.config.js with "type": "module" in package.json
import { prettier } from '@modyqyw/fabric';
// or
// import { prettier } from '@modyqyw/fabric/prettier';

export default prettier();
```

### CJS

```javascript
// prettier.config.cjs
// or prettier.config.js without "type": "module" in package.json
const { prettier } = require('@modyqyw/fabric');
// or
// const { prettier } = require('@modyqyw/fabric/prettier');

module.exports = prettier();
```

### CLI

更新你的 `package.json`，增加 `format` 命令。

```json
{
  "scripts": {
    "format": "prettier . \"!*lock*\" --ignore-unknown --write --cache --log-level=warn"
  }
}
```

## 自定义

### 参数自定义

给导出的 `prettier` 方法传参可以自定义配置，`prettier` 方法接收两个参数。

第一个参数用于基本自定义，你可以传递 `undefined` 或对象。要明确地启用或禁用某一个插件，需要明确在传递的对象中设置 boolean 值。

目前支持以下配置：

- cssOrder：基于 [prettier-plugin-css-order](https://github.com/Siilwyn/prettier-plugin-css-order)，对 CSS / SCSS 声明排序，默认禁用
- ianvsSortImports：基于 [@ianvs/prettier-plugin-sort-imports](https://github.com/ianvs/prettier-plugin-sort-imports)，对 import 声明排序，默认禁用
- jsdoc：基于 [prettier-plugin-jsdoc](https://github.com/hosseinmd/prettier-plugin-jsdoc)，格式化 JSDoc 和 TSDoc，默认启用
- organizeAttributes：基于 [prettier-plugin-organize-attributes](https://github.com/NiklasPor/prettier-plugin-organize-attributes)，对 HTML / Vue 属性排序，默认禁用
- organizeImports：基于 [prettier-plugin-organize-imports](https://github.com/simonhaenisch/prettier-plugin-organize-imports)，对 import 声明排序，默认禁用
- packageJson：基于 [prettier-plugin-packagejson](https://github.com/matzkoh/prettier-plugin-packagejson)，对 package.json 排序，默认启用
- tailwindcss：基于 [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)，对 HTML / Vue class 属性排序，安装 TailwindCSS 后默认启用，否则默认禁用
- trivagoSortImports：基于 [@trivago/prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports)，对 import 声明排序，默认禁用

```javascript
// prettier.config.mjs
// or prettier.config.js with "type": "module" in package.json
import { hasTailwindCss, prettier } from '@modyqyw/fabric';

export default prettier({
  // 基于 prettier-plugin-css-order
  // 默认为 false，即禁用
  cssOrder: false,
  // 基于 @ianvs/prettier-plugin-sort-imports
  // 默认为 false，即禁用
  ianvsSortImports: false,
  // 基于 prettier-plugin-jsdoc
  // 默认为 true，即启用
  jsdoc: true,
  // 基于 prettier-plugin-organize-attributes
  // 默认为 false，即禁用
  organizeAttributes: false,
  // 基于 prettier-plugin-organize-imports
  // 默认为 false，即禁用
  organizeImports: false,
  // 基于 prettier-plugin-packagejson
  // 默认为 true，即启用
  packageJson: true,
  // 基于 prettier-plugin-tailwindcss
  // 安装 TailwindCSS 后默认启用，否则默认禁用
  tailwindcss: hasTailwindCss,
  // 基于 @trivago/prettier-plugin-sort-imports
  // 默认为 false，即禁用
  trivagoSortImports: false,
});
```

::: warning 潜在冲突

1. prettier-plugin-css-order 可能与 stylelint-config-recess-order 冲突，所以默认禁用。如果你想启用 prettier-plugin-css-order，请禁用 stylelint-config-recess-order，见 [Stylelint 章节自定义部分](../linter/stylelint#自定义)。

2. @ianvs/prettier-plugin-sort-imports、@trivago/prettier-plugin-sort-imports、prettier-plugin-organize-imports 三者相互冲突，而且可能与 eslint-plugin-perfectionist 冲突，所以默认禁用。如果你想启用三者之一，请关闭 eslint-plugin-perfectionist，见 [ESLint 章节自定义部分](../linter/eslint#自定义)。

3. prettier-plugin-organize-attributes 可能与 eslint-plugin-perfectionist 冲突，所以默认禁用。如果你想启用 prettier-plugin-organize-attributes，请禁用 eslint-plugin-perfectionist，见 [ESLint 章节自定义部分](../linter/eslint#自定义)。

4. prettier-plugin-packagejson 默认情况下不会与 eslint-plugin-jsonc 冲突。如果你想要使用 eslint-plugin-jsonc 对 package.json 排序，请禁用 prettier-plugin-packagejson。

5. prettier-plugin-tailwindcss 可能与 eslint-plugin-unocss 冲突。当你同时使用 TailwindCSS 和 UnoCSS 时，请手动关闭其中之一。如果你想禁用 eslint-plugin-unocss，见 [ESLint 章节自定义部分](../linter/eslint#自定义)。

:::

第二个参数用于更进一步的自定义，你可以传递一个对象，用于覆盖生成的配置（需要自行安装相应的依赖）。

```javascript
// prettier.config.mjs
// or prettier.config.js with "type": "module" in package.json
import { prettier } from '@modyqyw/fabric';

export default prettier(undefined, {
  // 使用 prettier-plugin-svelte 和 prettier-plugin-tailwindcss
  // prettier-plugin-tailwindcss 一定要放在最后
  // 默认配置内的 plugins 将被直接覆盖
  plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
});
```

如果你希望在默认配置上增加自定义配置，你可以像下面这样做（需要自行安装相应的依赖）：

```javascript
// prettier.config.mjs
// or prettier.config.js with "type": "module" in package.json
import { prettier } from '@modyqyw/fabric';

const defaultConfig = prettier();

export default {
  ...defaultConfig,
  // 使用 prettier-plugin-jsdoc、prettier-plugin-packagejson、prettier-plugin-svelte 和 prettier-plugin-tailwindcss
  // prettier-plugin-tailwindcss 一定要放在最后
  plugins: [
    ...defaultConfig.plugins,
    'prettier-plugin-svelte',
    'prettier-plugin-tailwindcss',
  ],
};
```

## 整合

### 如何和 VSC 整合使用？

先安装 [对应的 Prettier 插件](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)。

视实际情况修改 [用户设置](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson) 或 [工作区设置](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings)。

```jsonc
{
  // 指定默认代码格式化器为 Prettier
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // 保存自动格式化
  "editor.formatOnSave": true,
}
```

### 如何与 WebStorm 整合使用？

WebStorm 自带 Prettier，可参考 [如何与 VSC 整合使用？](#如何和-vsc-整合使用) 自行调整。

### 如何和 lint-staged 整合使用？

如果你使用该库提供的 lint-staged 配置，请查看 [lint-staged 章节](../git/lint-staged.md)。

如果你没有使用该库提供的 lint-staged 配置，可以参考以下配置。

```javascript
// lint-staged.config.mjs
// or lint-staged.config.js with "type": "module" in package.json
export default {
  '*': 'prettier "!*lock*" --ignore-unknown --write --cache',
};
```

### 为什么不和 ESLint 整合使用？

> 在 linter 中运行 Prettier 会减慢 linting 过程，可能会因为警告而使编辑器变得混乱，并添加一层可能会导致问题的间接层。[Prettier 的官方文档](https://prettier.io/docs/en/integrating-with-linters.html) 建议使用单独的命令进行代码检查和代码格式化，即 Prettier 用于代码格式化问题，ESLint 用于代码质量问题。

引自 [vuejs/eslint-config-prettier](https://github.com/vuejs/eslint-config-prettier#use-separate-commands-for-linting-and-formatting)。
