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

在项目根目录下创建 `stylelint.config.mjs`：

```javascript
// stylelint.config.mjs
import { stylelint } from '@modyqyw/fabric/stylelint';

export default stylelint();
```

更新 `package.json`，增加 `lint:stylelint` 命令。

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

第一个参数用于基本自定义，你可以不传递或传递空对象表示使用默认值。要明确地启用或禁用某一个配置，需要明确在传递的对象中设置 boolean 值。

以下是默认配置，Vue、CSS Modules 和 TailwindCSS 支持默认包含在内：

```javascript
// stylelint.config.mjs
import { hasScss } from '@modyqyw/fabric';
import { stylelint } from '@modyqyw/fabric/stylelint';

export default stylelint({
  // 基于 stylelint-order 和 stylelint-config-recess-order
  // 默认为 true，即启用
  order: true,
  // 基于 stylelint-scss、stylelint-config-recommended-scss 和 stylelint-config-standard-scss
  // 安装 sass 后默认启用，否则默认禁用
  scss: hasScss,
});
```

第二个参数用于更进一步的自定义，你可以传递一个对象，用于覆盖生成的配置。如果你想要调整插件相关，你需要自行安装相应的依赖并留意 [插件冲突](#插件冲突)。

```javascript
// stylelint.config.mjs
import { stylelint } from '@modyqyw/fabric/stylelint';

export default stylelint(
  {},
  {
    rules: {
      // 需要自定义的规则
    },
  },
);
```

如果你希望在默认配置上增加自定义配置，你可以像下面这样做，这也需要你自行安装相应的依赖并留意插件冲突：

```javascript
// stylelint.config.mjs
import { stylelint } from '@modyqyw/fabric/stylelint';

const defaultConfig = stylelint();

export default {
  ...defaultConfig,
  rules: {
    ...defaultConfig.rules,
    // 需要自定义的规则
  },
};
```

### LESS 支持

::: warning LESS 状态
LESS 并未处于积极开发状态，强烈建议使用 SCSS 或 CSS Modules 而不是 LESS。
:::

你需要手动安装 [stylelint-config-standard-less](https://github.com/stylelint-scss/stylelint-config-standard-less)。

```javascript
// stylelint.config.mjs
import { stylelint } from '@modyqyw/fabric';

// 不可同时启用
const defaultConfig = stylelint({ scss: false });

export default {
  ...defaultConfig,
  extends: [...defaultConfig.extends, 'stylelint-config-standard-less'],
  rules: {
    ...defaultConfig.rules,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          // css modules
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.4.0/index.js
          'value',
          // tailwindcss
          // https://tailwindcss.com/docs/functions-and-directives#directives
          'tailwind',
          'layer',
          'apply',
          'config',
          // LESS
          'plugin',
        ],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          // css modules
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.4.0/index.js
          'export',
          'import',
          'local',
          'external',
          // css modules
          // also vue global selectors
          // also LESS
          // https://vuejs.org/api/sfc-css-features.html#scoped-css
          'global',
          // vue deep selectors
          // https://vuejs.org/api/sfc-css-features.html#deep-selectors
          'deep',
          // vue slotted selectors
          // https://vuejs.org/api/sfc-css-features.html#slotted-selectors
          'slotted',
        ],
      },
    ],
  },
};
```

## FAQ

### 整合 VSC？

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

### 整合 WebStorm？

WebStorm 自带 Stylelint，可参考 [整合 VSC?](#整合-vsc) 自行调整。

### 整合 lint-staged？

如果你使用该库提供的 lint-staged 配置，请查看 [lint-staged 章节](../git/lint-staged.md)。

如果你没有使用该库提供的 lint-staged 配置，可以参考以下配置。

```javascript
// lint-staged.config.mjs
export default {
  '*.{css,scss,vue}': 'stylelint --fix --cache --aei --ignore-path=.gitignore',
};
```

### 整合 Prettier？

引自 [vuejs/eslint-config-prettier](https://github.com/vuejs/eslint-config-prettier#use-separate-commands-for-linting-and-formatting)：

> 在 linter 中运行 Prettier 会减慢 linting 过程，可能会因为警告而使编辑器变得混乱，并添加一层可能会导致问题的间接层。[Prettier 的官方文档](https://prettier.io/docs/en/integrating-with-linters.html) 建议使用单独的命令进行代码检查和代码格式化，即 Prettier 用于代码格式化问题，ESLint 用于代码质量问题。

这个库的观点与其一致，不建议在 ESLint 和 Stylelint 中调用 Prettier，建议单独运行 Prettier。默认地，运行 ESLint 和 Stylelint 不会与 Prettier 或其它代码格式化器冲突。另请查看 [Prettier 章节](../formatter/prettier.md)。

### 插件冲突？

| ESLint 插件                                                         | Prettier 插件                                                                                                | Stylelint 插件                | 备注                                                                                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| eslint-plugin-perfectionist、eslint-plugin-import-x                 | @ianvs/prettier-plugin-sort-imports、@trivago/prettier-plugin-sort-imports、prettier-plugin-organize-imports |                               | 它们都处理导入顺序，彼此冲突，默认使用 eslint-plugin-perfectionist 处理                                                          |
| eslint-plugin-perfectionist、eslint-plugin-vue、eslint-plugin-react | prettier-plugin-organize-attributes                                                                          |                               | 它们都会处理组件或元素的属性排序，默认使用 eslint-plugin-vue 处理 Vue 组件属性排序，使用 eslint-plugin-react 处理 React 组件排序 |
| eslint-plugin-jsonc                                                 | prettier-plugin-packagejson                                                                                  |                               | 如果使用 eslint-plugin-jsonc 对 package.json 排序可能会产生冲突                                                                  |
| eslint-plugin-tailwindcss、eslint-plugin-unocss                     | prettier-plugin-tailwindcss                                                                                  |                               | 三者都会处理 class 的排序，默认根据是否安装来开启 ESLint 插件，如果同时安装需要明确只启用一个                                    |
|                                                                     | prettier-plugin-css-order                                                                                    | stylelint-config-recess-order | 两者都处理 CSS 属性顺序，默认使用 stylelint-config-recess-order 处理                                                             |
