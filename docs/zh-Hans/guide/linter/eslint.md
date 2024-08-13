# ESLint

ESLint 是被广泛采用的代码检查工具，主要用于脚本文件。

## 安装

首先你需要安装 ESLint。目前支持 ESLint v9。

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

```shell [bun(experimental)]
bun install eslint -d
```

:::

## 配置

在项目根目录下创建 `eslint.config.mjs`：

```javascript
import { eslint } from '@modyqyw/fabric/eslint';

export default eslint();
```

更新 `package.json`，增加 `lint:eslint` 命令：

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

第一个参数用于基本自定义，你可以不传递或传递空对象表示使用默认值。要明确启用某一个配置，需要明确在传递的对象中设置 `true` 或配置对象；要明确禁用某一个配置，需要明确在传递的对象中设置 `false`。

#### 基本

- gitignore：基于 [eslint-config-flat-gitignore](https://github.com/antfu/eslint-config-flat-gitignore)，支持读取并使用 .gitignore 和 .eslintignore 内容作为平面配置的 ignores 选项，默认启用
- ignores：基于平面配置的 ignores 选项，默认启用
- javascript：基于 [@eslint/js](https://github.com/eslint/eslint/tree/main/packages/js)，检查 JavaScript 相关问题，默认启用
- jsdoc：基于 [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)，检查 JSDoc 相关问题，默认禁用
- typescript：基于 [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)，检查 TypeScript 相关问题，安装 TypeScript 后默认启用，否则默认禁用
- imports：基于 [eslint-plugin-import-x](https://github.com/un-es/eslint-plugin-import-x)，检查导入相关问题，默认启用
- node：基于 [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)，检查 Node 配置相关问题，默认启用
- perfectionist：基于 [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist)，检查排序，默认启用
- regexp：基于 [eslint-plugin-regexp](https://github.com/ota-meshi/eslint-plugin-regexp)，检查正则相关问题，默认启用
- unicorn：基于 [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)，检查性能和规范相关问题，默认启用

#### 库/框架

- react：基于 [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)、[eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)、[eslint-plugin-react-perf](https://github.com/cvazac/eslint-plugin-react-perf)、[eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh)，检查 React 相关问题，支持 Taro，安装 React 后默认启用，否则默认禁用
- reactNative：基于 [eslint-plugin-react-native](https://github.com/jsx-eslint/eslint-plugin-react-native)，检查 ReactNative 相关问题，安装 ReactNative 后默认启用，否则默认禁用
- next：基于 [@next/eslint-plugin-next](https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next)，检查 Next 相关问题，安装 Next 后默认启用，否则默认禁用
- vue：基于 [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) 和 [eslint-plugin-vue-scoped-css](https://github.com/future-architect/eslint-plugin-vue-scoped-css)，检查 Vue 相关问题，支持 uni-app，安装 Vue 后默认启用，否则默认禁用
- nuxt：基于 [@nuxt/eslint-plugin](https://github.com/nuxt/eslint) 和 [eslint-plugin-nuxt](https://github.com/nuxt/eslint-plugin-nuxt)，检查 Nuxt 相关问题，安装 Nuxt 后默认启用，否则默认禁用
- tailwindcss：基于 [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)，检查 TailwindCSS 相关问题，安装 TailwindCSS 后默认启用，否则默认禁用
- unocss：基于 [eslint-plugin-unocss](https://github.com/unocss/unocss/tree/main/packages/eslint-plugin)，检查 UnoCSS 相关问题，安装 UnoCSS 后默认启用，否则默认禁用

#### 特殊语言

- jsonc：基于 [eslint-plugin-jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc) 和 [eslint-plugin-package-json](https://github.com/JoshuaKGoldberg/eslint-plugin-package-json)，检查 JSON 相关问题，默认启用
- markdown：基于 [eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown)，检查 Markdown 相关问题，默认启用
- toml: 基于 [eslint-plugin-toml](https://github.com/ota-meshi/eslint-plugin-toml)，检查 TOML 相关问题，默认启用
- yml：基于 [eslint-plugin-yml](https://github.com/ota-meshi/eslint-plugin-yml)，检查 YML 相关问题，默认启用

#### 示例

以下是默认配置。

```javascript
// eslint.config.mjs
import {
  hasNext,
  hasNuxt,
  hasReact,
  hasReactNative,
  hasTailwindCss,
  hasTypeScript,
  hasUnoCss,
  hasVue,
} from '@modyqyw/fabric';
import { eslint } from '@modyqyw/fabric/eslint';

export default eslint({
  // 基于 eslint-plugin-flat-gitignore
  // 默认为 true，即启用
  gitignore: true,
  // 基于平面配置的 ignores 选项
  // 默认为 true，即启用
  ignores: true,
  // 基于 eslint-plugin-import-x
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
  // 基于 eslint-plugin-react、eslint-plugin-react-hooks、eslint-plugin-react-perf 和 eslint-plugin-react-refresh
  // 安装 React 后默认启用，否则默认禁用
  react: hasReact,
  // 基于 eslint-plugin-react-native
  // 安装 ReactNative 后默认启用，否则默认禁用
  reactNative: hasReactNative,
  // 基于 eslint-plugin-regexp
  // 默认为 true，即启用
  regexp: true,
  // 基于 eslint-plugin-tailwindcss
  // 安装 TailwindCSS 后默认启用，否则默认禁用
  tailwindcss: hasTailwindCss,
  // 基于 eslint-plugin-toml
  // 默认为 true，即启用
  toml: true,
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

除了传递 Boolean 值，你也可以直接传递配置项。这将视为启用配置，并使用传入的配置项。

```javascript
// eslint.config.mjs
import { eslint } from '@modyqyw/fabric/eslint';

export default eslint({
  // 调整配置
  gitignore: {
    files: ['.gitignore', '.eslintignore'],
    strict: false,
  },
});
```

第二个参数可用于更进一步的自定义，你可以传递一个对象，用于调整生成的配置。

```javascript
// eslint.config.mjs
import { eslint } from '@modyqyw/fabric/eslint';

export default eslint({}, [
  // 默认地，在 scripts/**/* 和 cli.* 中使用 console 会警告
  // 调整后，在 scripts/**/* 和 cli.* 中使用 console 会报错
  // 需要改用专门的日志库，如 winston、consola、pino 等
  {
    name: 'scripts',
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
// eslint.config.mjs
import { combine, javascript, typescript } from '@modyqyw/fabric/eslint';

export default combine(javascript(), typescript());
```

你也可以传递参数，来调整部分规则。

```javascript
// eslint.config.mjs
import { combine, javascript, typescript } from '@modyqyw/fabric/eslint';

export default combine(
  javascript({ rules: { 'no-console': 'error' } }),
  typescript(),
);
```

### Solid 支持

你需要自行安装 [eslint-plugin-solid](https://github.com/solidjs-community/eslint-plugin-solid)。

```javascript
// eslint.config.mjs
import {
  GLOB_JSX,
  GLOB_SCRIPT,
  GLOB_TSX,
  interopDefault,
} from '@modyqyw/fabric';
import { eslint } from '@modyqyw/fabric/eslint';
import * as _parserBabel from '@babel/eslint-parser';
import * as _parserTypeScript from '@typescript-eslint/parser';
import * as _pluginSolid from 'eslint-plugin-solid';

const parserBabel = interopDefault(_parserBabel);
const parserTypeScript = interopDefault(_parserTypeScript);
const pluginSolid = interopDefault(_pluginSolid);

export default eslint(
  {},
  // 增加 Solid 支持
  [
    {
      name: 'solid',
      files: [GLOB_JSX, GLOB_TSX],
      plugins: {
        solid: pluginSolid,
      },
      rules: {
        ...pluginSolid.configs.recommended.rules,
      },
    },
  ],
);
```

### Svelte 支持

你需要手动安装 [eslint-plugin-svelte](https://github.com/sveltejs/eslint-plugin-svelte) 和 [svelte-eslint-parser](https://github.com/ota-meshi/svelte-eslint-parser)。

```javascript
// eslint.config.mjs
import {
  GLOB_DTS,
  GLOB_SCRIPT,
  GLOB_SVELTE,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
  interopDefault,
} from '@modyqyw/fabric';
import { eslint } from '@modyqyw/fabric/eslint';
import * as _parserBabel from '@babel/eslint-parser';
import * as _parserTypeScript from '@typescript-eslint/parser';
import * as _pluginSvelte from 'eslint-plugin-svelte';
import * as _parserSvelte from 'svelte-eslint-parser';

const parserSvelte = interopDefault(_parserSvelte);
const parserBabel = interopDefault(_parserBabel);
const parserTypeScript = interopDefault(_parserTypeScript);
const pluginSvelte = interopDefault(_pluginSvelte);

export default eslint(
  // 匹配 Svelte 文件
  {
    javascript: {
      files: [GLOB_SCRIPT, GLOB_VUE, GLOB_SVELTE],
    },
    typescript: {
      files: [GLOB_DTS, GLOB_TS, GLOB_TSX, GLOB_VUE, GLOB_SVELTE],
    },
  },
  // 增加 Svelte 支持
  [
    {
      name: 'svelte',
      files: [GLOB_SVELTE],
      languageOptions: {
        parser: parserSvelte,
        parserOptions: {
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
      },
      plugins: {
        svelte: pluginSvelte,
      },
      processor: pluginSvelte.processors['.svelte'],
      rules: {
        ...pluginSvelte.configs.base.rules,
        ...pluginSvelte.configs.recommended.rules,
        ...pluginSvelte.configs.prettier.rules,
      },
    },
  ],
);
```

## FAQ

### 整合 VSC？

先安装 [对应的 ESLint 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 和 [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml)。

视实际情况修改 [用户设置](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson) 或 [工作区设置](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings)。

```jsonc
{
  // 启用 ESLint 平面配置
  // "eslint.experimental.useFlatConfig": true, // ESLint 插件 < 3.0.10
  "eslint.useFlatConfig": true, // ESLint 插件 >= 3.0.10

  // ESLint 检查的语言
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
  ],

  // JavaScript、JSX、TypeScript、TypeScript JSX 手动保存后 ESLint 自动修复
  "[javascript][javascriptreact][typescript][typescriptreact]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
    },
  },

  // Vue 手动保存后 ESLint 自动修复
  "[vue]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
    },
  },

  // markdown 手动保存后 ESLint 自动修复
  "[markdown]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
    },
  },

  // JSON、JSONC 手动保存后 ESLint 自动修复
  "[json][jsonc]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
    },
  },

  // YAML 手动保存后 ESLint 自动修复
  "[yaml]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
    },
  },

  // TOML 手动保存后 ESLint 自动修复
  "[toml]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
    },
  },
}
```

### 整合 WebStorm？

WebStorm 自带 ESLint，可参考 [整合 VSC?](#整合-vsc) 自行调整。

### 整合 lint-staged？

如果你使用该库提供的 lint-staged 配置，请查看 [lint-staged 章节](../git/lint-staged.md)。

如果你没有使用该库提供的 lint-staged 配置，可以参考以下配置。

```javascript
// lint-staged.config.mjs
// or lint-staged.config.js with "type": "module" in package.json
export default {
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}':
    'eslint --fix --cache --no-error-on-unmatched-pattern',
  '*.{json,jsonc,json5}':
    'eslint --fix --cache --no-error-on-unmatched-pattern',
  '*.{yaml,yml}': 'eslint --fix --cache --no-error-on-unmatched-pattern',
  '*.{toml}': 'eslint --fix --cache --no-error-on-unmatched-pattern',
};
```

### 整合 Prettier？

引自 [vuejs/eslint-config-prettier](https://github.com/vuejs/eslint-config-prettier#use-separate-commands-for-linting-and-formatting)：

> 在 linter 中运行 Prettier 会减慢 linting 过程，可能会因为警告而使编辑器变得混乱，并添加一层可能会导致问题的间接层。[Prettier 的官方文档](https://prettier.io/docs/en/integrating-with-linters.html) 建议使用单独的命令进行代码检查和代码格式化，即 Prettier 用于代码格式化问题，ESLint 用于代码质量问题。

这个库的观点与其一致，不建议在 ESLint 中调用 Prettier，建议单独运行 Prettier。默认地，运行 ESLint 不会与 Prettier 或其它代码格式化器冲突。另请查看 [Prettier 章节](../formatter/prettier.md)。

部分 Prettier 插件与 ESLint 插件可能有冲突，请谨慎添加：

| ESLint 插件                                     | Prettier 插件                                                                                                                                     | 备注                                                            |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| eslint-plugin-perfectionist                     | @ianvs/prettier-plugin-sort-imports、@trivago/prettier-plugin-sort-imports、prettier-plugin-organize-imports、prettier-plugin-organize-attributes | 五者彼此冲突，请只开启其中之一                                  |
| eslint-plugin-vue                               | prettier-plugin-organize-attributes                                                                                                               | 两者彼此冲突，请只开启其中之一                                  |
| eslint-plugin-react                             | prettier-plugin-organize-attributes                                                                                                               | 两者彼此冲突，请只开启其中之一                                  |
| eslint-plugin-jsonc                             | prettier-plugin-packagejson                                                                                                                       | 如果使用 eslint-plugin-jsonc 对 package.json 排序可能会产生冲突 |
| eslint-plugin-tailwindcss、eslint-plugin-unocss | prettier-plugin-tailwindcss                                                                                                                       | 三者彼此冲突，请只开启其中之一                                  |

### 插件冲突？

eslint-plugin-tailwindcss 和 eslint-plugin-unocss 彼此冲突，在同时安装了 TailwindCSS 和 UnoCSS 时，请手动关闭其中之一。

### 检查类型？

引自 [typescript-eslint.io/linting/typed-linting#how-is-performance](https://typescript-eslint.io/linting/typed-linting#how-is-performance)。

> 类型规则有一个问题。通过在配置中包含 `parserOptions.project`，你会因要求 TypeScript 在 ESLint 进行代码检查之前构建项目而遭受性能损失。对于小型项目，这需要的时间可以忽略不计（几秒或更短）；对于大型项目，可能需要更长的时间。
>
> 我们的大多数用户并不介意这笔成本，因为类型感知静态分析规则的功能和安全性值得权衡。此外，大多数用户主要通过 IDE 插件处理代码检查错误，而通过缓存不会耗费过多的时间。这意味着通常他们通常只在推送前或通过 CI 运行完整的代码检查，额外花费的时间通常可以接受。

在启用 TypeScript 配置时默认启用类型规则。如果你认为这些规则对你来说并不太友好，可以关闭它们。

```javascript
// eslint.config.mjs
import { eslint } from '@modyqyw/fabric/eslint';

export default eslint({
  typescript: {
    typeCheck: false,
  },
});
```

你也应该直接运行 tsc / vue-tsc 以进行更为完整的类型检查。请查看 [tsc 章节](../typescript-checker/tsc)。
