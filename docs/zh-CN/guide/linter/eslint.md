# ESLint

代码检查工具是主要关心代码质量、可能关心代码风格的工具，可配置项丰富。使用代码检查工具可以静态分析代码，提前发现部分问题。

ESLint 是被广泛采用的代码检查工具，它对 JavaScript / TypeScript / JSX / TSX / Vue 支持良好。

::: tip 其它选择
[Biome](https://biomejs.dev/) 和 [oxlint](https://github.com/oxc-project/oxc#-linter) 是后起之秀。如果你感觉 ESLint 速度比较慢，你可以考虑使用它们，但需要你自行配置。但必须留意：它们和 ESLint 并不是 100% 兼容的，你可能会得到意想不到的结果。
:::

## 安装

首先你需要安装 ESLint。

::: code-group

```shell [npm]
npm install eslint -D
```

```shell [yarn]
yarn add eslint -D
```

```shell [pnpm]
pnpm install eslint -D
```

```shell [bun]
bun install eslint -d
```

:::

## 配置

你需要检查你的 `package.json` 是否存在 `"type": "module"`。如果存在，请查看 [ESM 部分](#esm)，否则请查看 [CJS 部分](#cjs)。

::: tip 使用其它配置文件
如果你想要使用其它配置文件，请使用 [eslint-ts-patch](https://github.com/antfu/eslint-ts-patch)。
:::

### ESM

```javascript
// eslint.config.js with "type": "module" in package.json
import { eslint } from '@modyqyw/fabric';
// 或者
// import { eslint } from '@modyqyw/fabric/eslint';

export default eslint();
```

### CJS

```javascript
// eslint.config.js without "type": "module" in package.json
const { eslint } = require('@modyqyw/fabric');
// 或者
// const { eslint } = require('@modyqyw/fabric/eslint');

module.exports = eslint();
```

### CLI

更新你的 `package.json`，增加 `lint:eslint` 命令。

```json
{
  "scripts": {
    "lint:eslint": "eslint . --fix --cache"
  }
}
```

## 自定义

### 参数自定义

给导出的 `eslint` 方法传参可以自定义配置，`eslint` 方法接收两个参数。

第一个参数用于基本自定义，你可以传递 `undefined` 或对象。要明确地启用或禁用某一个配置，需要明确在传递的对象中设置 boolean 值。

目前支持以下配置：

- gitignore：基于 [eslint-config-flat-gitignore](https://github.com/antfu/eslint-config-flat-gitignore)，支持读取并使用 .gitignore 和 .eslintignore 内容作为平面配置的 ignores 选项，默认启用
- ignores：基于平面配置的 ignores 选项，默认启用
- imports：基于 [eslint-plugin-i](https://github.com/un-es/eslint-plugin-i) 和 [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)，检查导入相关问题，默认启用
- javascript：基于 [@eslint/js](https://github.com/eslint/eslint/tree/main/packages/js)，检查 JavaScript 相关问题，默认启用
- jsdoc：基于 [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)，检查 JSDoc 相关问题，默认禁用
- jsonc：基于 [eslint-plugin-jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc)，检查 JSONC 相关问题，默认启用
- markdown：基于 [eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown)，检查 Markdown 相关问题，默认启用
- next：基于 [@next/eslint-plugin-next](https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next)，检查 Next 相关问题，安装 Next 后默认启用，否则默认禁用
- node：基于 [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)，检查 Node 相关问题，默认启用
- nuxt：基于 [eslint-plugin-nuxt](https://github.com/nuxt/eslint-plugin-nuxt)，检查 Nuxt 相关问题，安装 Nuxt 后默认启用，否则默认禁用
- perfectionist：基于 [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist)，检查排序，默认启用
- perttier：基于 [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) 和 [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)，禁用代码样式规则，默认启用
- react：基于 [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)、[eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) 和 [eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh)，检查 React 相关问题，安装 React 后默认启用，否则默认禁用
- reactNative：基于 [eslint-plugin-react-native](https://github.com/jsx-eslint/eslint-plugin-react-native)，检查 ReactNative 相关问题，安装 ReactNative 后默认启用，否则默认禁用
- regexp：基于 [eslint-plugin-regexp](https://github.com/ota-meshi/eslint-plugin-regexp)，检查正则相关问题，默认启用
- solid：基于 [eslint-plugin-solid](https://github.com/solidjs-community/eslint-plugin-solid)，检查 solid 相关问题，安装 solid 后默认启用，否则默认禁用
- typescript：基于 [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)，检查 TypeScript 相关问题，安装 TypeScript 后默认启用，否则默认禁用
- unicorn：基于 [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)，默认启用
- unocss：基于 [eslint-plugin-unocss](https://github.com/unocss/unocss/tree/main/packages/eslint-plugin)，检查 UnoCSS 相关问题，安装 UnoCSS 后默认启用，否则默认禁用
- vue：基于 [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) 和 [eslint-plugin-vue-scoped-css](https://github.com/future-architect/eslint-plugin-vue-scoped-css)，检查 Vue 相关问题，安装 Vue 后默认启用，否则默认禁用
- yml：基于 [eslint-plugin-yml](https://github.com/ota-meshi/eslint-plugin-yml)，检查 YML 相关问题，默认启用

```javascript
// eslint.config.js with "type": "module" in package.json
import {
  hasNext,
  hasNuxt,
  hasReact,
  hasReactNative,
  hasSolid,
  hasTypeScript,
  hasUnoCss,
  hasVue,
  eslint,
} from '@modyqyw/fabric';

export default eslint({
  // 基于 eslint-plugin-flat-gitignore
  // 默认为 true，即启用
  gitignore: true,
  // 基于平面配置的 ignores 选项
  // 默认为 true，即启用
  ignores: true,
  // 基于 eslint-plugin-i 和 eslint-plugin-import
  // 默认为 true，即启用
  imports: true,
  // 基于 @eslint/js
  // 默认为 true，即启用
  javascript: true,
  // 基于 eslint-plugin-jsdoc
  // 默认为 false，即禁用
  jsdoc: false,
  // 基于 eslint-plugin-jsonc
  // 默认为 true，即启用
  jsonc: true,
  // 基于 eslint-plugin-markdown
  // 默认为 true，即启用
  markdown: true,
  // 基于 @next/eslint-plugin-next
  // 安装 Next 后默认启用，否则默认禁用
  next: hasNext,
  // 基于 eslint-plugin-n
  // 默认为 true，即启用
  node: true,
  // 基于 eslint-plugin-nuxt
  // 安装 Nuxt 后默认启用，否则默认禁用
  nuxt: hasNuxt,
  // 基于 eslint-plugin-perfectionist
  // 默认为 true，即启用
  perfectionist: true,
  // 基于 eslint-plugin-prettier 和 eslint-config-prettier
  // 默认为 true，即启用
  prettier: true,
  // 基于 eslint-plugin-react、eslint-plugin-react-hooks 和 eslint-plugin-react-refresh
  // 安装 React 后默认启用，否则默认禁用
  react: hasReact,
  // 基于 eslint-plugin-react-native
  // 安装 ReactNative 后默认启用，否则默认禁用
  reactNative: hasReactNative,
  // 基于 eslint-plugin-regexp
  // 默认为 true，即启用
  regexp: true,
  // 基于 eslint-plugin-solid
  // 安装 solid 后默认启用，否则默认禁用
  solid: hasSolid,
  // 基于 @typescript-eslint/eslint-plugin
  // 安装 TypeScript 后默认启用，否则默认禁用
  typescript: hasTypeScript,
  // 基于 eslint-plugin-unicorn
  // 默认为 true，即启用
  unicorn: true,
  // 基于 eslint-plugin-unocss
  // 安装 UnoCSS 后默认启用，否则默认禁用
  unocss: hasUnoCss,
  // 基于 eslint-plugin-vue 和 eslint-plugin-vue-scoped-css
  // 安装 Vue 后默认启用，否则默认禁用
  vue: hasVue,
  // 基于 eslint-plugin-yml
  // 默认为 true，即启用
  yml: true,
});
```

除了传递 Boolean 值，你也可以直接传递配置项。

```javascript
// eslint.config.js with "type": "module" in package.json
import { eslint } from '@modyqyw/fabric';

export default eslint({
  gitignore: {
    files = ['.gitignore', '.eslintignore'],
    strict = false,
  },
});
```

::: warning 潜在冲突

1. eslint-plugin-perfectionist 可能与 @ianvs/prettier-plugin-sort-imports、@trivago/prettier-plugin-sort-imports、prettier-plugin-organize-imports、prettier-plugin-organize-attributes 冲突。如果你想启用四者之一，请关闭 eslint-plugin-perfectionist，见 [Prettier 章节自定义部分](../formatter/prettier.md#自定义)。

2. eslint-plugin-jsonc 默认情况下不会与 prettier-plugin-packagejson 冲突。如果你想要使用 eslint-plugin-jsonc 对 package.json 排序，见 [组合自定义](#组合自定义)，并禁用 prettier-plugin-packagejson，。

3. eslint-plugin-unocss 可能与 prettier-plugin-tailwindcss 冲突。当你同时使用 TailwindCSS 和 UnoCSS 时，请手动关闭其中之一。如果你想禁用 prettier-plugin-tailwindcss，见 [Prettier 章节自定义部分](../formatter/prettier.md#自定义)。

:::

第二个参数用于更进一步的自定义，你可以传递一个对象，用于调整生成的配置。

```javascript
// eslint.config.js with "type": "module" in package.json
import { eslint } from '@modyqyw/fabric';

export default eslint(undefined, [
  // 默认地，在 scripts/**/* 和 cli.* 中使用 console 不会报错和警告
  // 调整后，在 scripts/**/* 和 cli.* 中使用 console 会报错
  // 需要改用专门的日志库，如 winston、consola、pino 等
  {
    files: ['scripts/**/*', 'cli.*'],
    rules: {
      'no-console': 'error',
    },
  },
]);
```

### 组合自定义

除了使用参数自定义外，你还可以通过组合来实现自定义。

比如只使用 JavaScript 和 TypeScript 规则：

```javascript
// eslint.config.js with "type": "module" in package.json
import { combine } from '@modyqyw/fabric';
import { javascript, typescript } from '@modyqyw/fabric/eslint';

export default combine(javascript(), typescript());
```

你也可以传递参数，来调整部分规则。

```javascript
// eslint.config.js with "type": "module" in package.json
import { combine } from '@modyqyw/fabric';
import { javascript, typescript } from '@modyqyw/fabric/eslint';

export default combine(
  javascript({ rules: { 'no-console': 'error' } }),
  typescript(),
);
```

在上面的基础上，增加 Svelte 支持（需要自行安装相应的依赖）：

```javascript
// eslint.config.js with "type": "module" in package.json
import {
  GLOB_SCRIPT,
  GLOB_VUE,
  GLOB_SVELTE,
  GLOB_DTS,
  GLOB_TS,
  GLOB_TSX,
  combine,
  interopDefault,
} from '@modyqyw/fabric';
import { javascript, typescript } from '@modyqyw/fabric/eslint';
import * as _parserSvelte from 'svelte-eslint-parser';
import * as _parserBabel from '@babel/eslint-parser';
import * as _parserTypeScript from '@typescript-eslint/parser;
import * as _pluginSvelte from 'eslint-plugin-svelte';

const parserSvelte = interopDefault(_parserSvelte);
const parserBabel = interopDefault(_parserBabel);
const parserTypeScript = interopDefault(_parserTypeScript);
const pluginSvelte = interopDefault(_pluginSvelte);

export default combine(
  // 匹配 Svelte 文件
  javascript({ files: [GLOB_SCRIPT, GLOB_VUE, GLOB_SVELTE] }),
  typescript({ files: [GLOB_DTS, GLOB_TS, GLOB_TSX, GLOB_VUE, GLOB_SVELTE] }),
  // 增加 Svelte 支持
  [
    {
      files: ['**/*.svelte'],
      languageOptions: {
        ecmaFeatures: {
          globalReturn: false,
          jsx: true,
        },
        ecmaVersion: 'latest',
        extraFileExtensions: ['.svelte'],
        parser: {
          js: parserBabel,
          jsx: parserBabel,
          ts: parserTypeScript,
          tsx: parserTypeScript,
        },
        requireConfigFile: false,
        sourceType: 'module',
      },
      plugins: {
        svelte: pluginSvelte,
      },
      processor: pluginSvelte.processors['.svelte'],
      rules: {
        ...pluginSvelte.configs.recommended.rules,
        ...pluginSvelte.configs.prettier.rules,
      },
    },
  ],
);
```

## 整合

### 如何和 VSC 整合使用？

先安装 [对应的 ESLint 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)。

修改全局用户配置如下，这将会指定 ESLint 检查 JavaScript、JSX、TypeScript、TSX 和 Vue，并在保存时自动修复。不知道怎么修改？看 [这里](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson)。

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue"
  ],
  "[javascript][javascriptreact][typescript][typescriptreact]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    }
  },
  "[vue]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    }
  }
}
```

修改工作目录配置如下，这将会指定 ESLint 启用平面配置，额外检查 JSON、JSONC、JSON5、YAML、YML、Markdown，并在保存时自动修复。不知道怎么修改？看 [这里](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings)。

```json
{
  "eslint.experimental.useFlatConfig": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "markdown",
    "json",
    "jsonc",
    "yaml"
  ],
  "[markdown][yaml][json][jsonc]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    }
  }
}
```

::: tip 为什么不在全局用户配置内完成所有配置？

代码世界并不只有一种配置，你正在协作的项目有可能并不支持使用 ESLint 检查 JSON、JSONC、JSON5、YAML、YML 和 Markdown。建议在确定支持的项目内增加相应的配置。

:::

### 如何与 WebStorm 整合使用？

WebStorm 自带 ESLint，可参考 [如何与 VSC 整合使用？](#如何和-vsc-整合使用) 自行调整。

### 如何和 lint-staged 整合使用？

如果你使用该库提供的 lint-staged 配置，请查看 [lint-staged 章节](../git/lint-staged.md)。

如果你没有使用该库提供的 lint-staged 配置，可以参考以下配置。

```javascript
// lint-staged.config.cjs
module.exports = {
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}':
    'eslint --fix --cache --no-error-on-unmatched-pattern',
  '*.{json,jsonc,json5}':
    'eslint --fix --cache --no-error-on-unmatched-pattern',
  '*.{yaml,yml}': 'eslint --fix --cache --no-error-on-unmatched-pattern',
};
```
