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

:::

## 配置

在项目根目录下创建 `prettier.config.mjs`：

```javascript
// prettier.config.mjs
import { prettier } from '@modyqyw/fabric/prettier';

export default prettier();
```

更新 `package.json`，增加 `format` 命令。

```json
{
  "scripts": {
    "format": "prettier . \"!**/package-lock.json\" \"!**/yarn.lock\" \"!**/pnpm-lock.yaml\" --ignore-unknown --write --cache --log-level=warn"
  }
}
```

::: tip 忽略文件

ESLint 配置提供了 .gitignore、.eslintignore 和一部分内置忽略文件支持，而 prettier 支持指定多个忽略模式文件，默认会使用 .gitignore 和 .prettierignore 两个忽略模式文件。

如果你有其它的文件需要忽略，你可以像上面例子使用负模式。下面的例子忽略了所有 dts 文件，在自动生成 dts 文件的项目中很有用。

```json
{
  "scripts": {
    "format": "prettier . \"!**/package-lock.json\" \"!**/yarn.lock\" \"!**/pnpm-lock.yaml\" \"!**/*.d.ts\" --ignore-unknown --write --cache --log-level=warn"
  }
}
```

下面的例子忽略了 CHANGELOG.md，在自动生成改动日志的项目中很有用。

```json
{
  "scripts": {
    "format": "prettier . \"!**/package-lock.json\" \"!**/yarn.lock\" \"!**/pnpm-lock.yaml\" \"!**/CHANGELOG*.md\" --ignore-unknown --write --cache --log-level=warn"
  }
}
```

:::

## 自定义

### 参数自定义

给导出的 `prettier` 方法传参可以自定义配置，`prettier` 方法接收两个参数。

第一个参数用于基本自定义，你可以不传递或传递空对象表示使用默认值。要明确地启用或禁用某一个插件，需要明确在传递的对象中设置 boolean 值。

以下是默认配置：

```javascript
// prettier.config.mjs
import { hasTailwindCss } from '@modyqyw/fabric';
import { prettier } from '@modyqyw/fabric/prettier';

export default prettier({
  // 基于 prettier-plugin-jsdoc
  // 默认为 true，即启用
  jsdoc: true,
});
```

第二个参数用于更进一步的自定义，你可以传递一个对象，用于覆盖生成的配置。如果你想要调整插件相关，你需要自行安装相应的依赖并留意 [插件冲突](#插件冲突)。

```javascript
// prettier.config.mjs
import { prettier } from '@modyqyw/fabric';

export default prettier(
  {},
  {
    // 使用 prettier-plugin-svelte 和 prettier-plugin-tailwindcss
    // prettier-plugin-tailwindcss 一定要放在最后
    // 默认配置内的 plugins 将被直接覆盖
    plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],

    overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
  },
);
```

如果你希望在默认配置上增加自定义配置，你可以像下面这样做，这也需要你自行安装相应的依赖并留意插件冲突：

```javascript
// prettier.config.mjs
import { prettier } from '@modyqyw/fabric/prettier';

const defaultConfig = prettier();

export default {
  ...defaultConfig,
  // 使用 prettier-plugin-jsdoc、prettier-plugin-svelte 和 prettier-plugin-tailwindcss
  // prettier-plugin-tailwindcss 一定要放在最后
  plugins: [
    ...defaultConfig.plugins,
    'prettier-plugin-svelte',
    'prettier-plugin-tailwindcss',
  ],

  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};
```

## FAQ

### 整合 VSC？

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

### 整合 WebStorm？

WebStorm 自带 Prettier，可参考 [整合 VSC?](#整合-vsc) 自行调整。

### 整合 lint-staged？

如果你使用该库提供的 lint-staged 配置，请查看 [lint-staged 章节](../git/lint-staged.md)。

如果你没有使用该库提供的 lint-staged 配置，可以参考以下配置。

```javascript
// lint-staged.config.mjs
import { filterFilenames } from '@modyqyw/fabric';

export default {
  '*': (filenames) => {
    const filtered = filterFilenames(filenames);
    return filtered.map(
      (f) => `prettier --ignore-unknown --write --cache ${f}`,
    );
  },
};
```

如果你正在手写 CHANGELOG.md，你可能想要使用 Prettier 来做格式化。

```javascript
// lint-staged.config.mjs
import { GLOB_EXCLUDE, filterFilenames } from '@modyqyw/fabric';

export default {
  '*': (filenames) => {
    const filtered = filterFilenames(
      filenames,
      formatChangelog
        ? GLOB_EXCLUDE.filter((e) => !e.toUpperCase().includes('CHANGELOG'))
        : GLOB_EXCLUDE,
    );
    return filtered.map(
      (f) => `prettier --ignore-unknown --write --cache ${f}`,
    );
  },
};
```

### 整合 ESLint / Stylelint？

引自 [vuejs/eslint-config-prettier](https://github.com/vuejs/eslint-config-prettier#use-separate-commands-for-linting-and-formatting)：

> 在 linter 中运行 Prettier 会减慢 linting 过程，可能会因为警告而使编辑器变得混乱，并添加一层可能会导致问题的间接层。[Prettier 的官方文档](https://prettier.io/docs/en/integrating-with-linters.html) 建议使用单独的命令进行代码检查和代码格式化，即 Prettier 用于代码格式化问题，ESLint 用于代码质量问题。

这个库的观点与其一致，不建议在 ESLint 和 Stylelint 中调用 Prettier，建议单独运行 Prettier。默认地，运行 ESLint 和 Stylelint 不会与 Prettier 或其它代码格式化器冲突。另请查看 [ESLint 章节](../linter/eslint) 和 [Stylelint 章节](../linter/stylelint)。

### 插件冲突？

| ESLint 插件                                                         | Prettier 插件                                                                                                | Stylelint 插件                | 备注                                                                                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| eslint-plugin-perfectionist、eslint-plugin-import-x                 | @ianvs/prettier-plugin-sort-imports、@trivago/prettier-plugin-sort-imports、prettier-plugin-organize-imports |                               | 它们都处理导入顺序，彼此冲突，默认使用 eslint-plugin-perfectionist 处理                                                          |
| eslint-plugin-perfectionist、eslint-plugin-vue、eslint-plugin-react | prettier-plugin-organize-attributes                                                                          |                               | 它们都会处理组件或元素的属性排序，默认使用 eslint-plugin-vue 处理 Vue 组件属性排序，使用 eslint-plugin-react 处理 React 组件排序 |
| eslint-plugin-jsonc                                                 | prettier-plugin-packagejson                                                                                  |                               | 如果使用 eslint-plugin-jsonc 对 package.json 排序可能会产生冲突                                                                  |
| eslint-plugin-tailwindcss、eslint-plugin-unocss                     | prettier-plugin-tailwindcss                                                                                  |                               | 三者都会处理 class 的排序，默认根据是否安装来开启 ESLint 插件，如果同时安装需要明确只启用一个                                    |
|                                                                     | prettier-plugin-css-order                                                                                    | stylelint-config-recess-order | 两者都处理 CSS 属性顺序，默认使用 stylelint-config-recess-order 处理                                                             |
