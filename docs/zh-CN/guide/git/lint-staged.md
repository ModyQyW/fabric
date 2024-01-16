# lint-staged

lint-staged 是被广泛采用的 Git 工具，针对暂存的 git 文件执行命令，避免错误代码进入代码库。

## 安装

首先你需要安装 lint-staged。目前支持 lint-staged v15。

::: code-group

```shell [npm]
npm install lint-staged -D
```

```shell [yarn]
yarn add lint-staged -D
```

```shell [pnpm]
pnpm install lint-staged -D
```

```shell [bun]
bun install lint-staged -d
```

:::

## 配置

你需要检查你的 `package.json` 是否存在 `"type": "module"`。如果存在，请查看 [ESM 部分](#esm)，否则请查看 [CJS 部分](#cjs)。

### ESM

```javascript
// lint-staged.config.mjs
// or lint-staged.config.js with "type": "module" in package.json
import { lintStaged } from '@modyqyw/fabric';
// or
// import { lintStaged } from '@modyqyw/fabric/lint-staged';

export default lintStaged();
```

### CJS

```javascript
// lint-staged.config.cjs
// or lint-staged.config.js without "type": "module" in package.json
const { lintStaged } = require('@modyqyw/fabric');
// or
// const { lintStaged } = require('@modyqyw/fabric/lint-staged');

module.exports = lintStaged();
```

## 自定义

### 参数自定义

给导出的 `lintStaged` 方法传参可以自定义配置，`lintStaged` 方法接收两个参数。

第一个参数用于基本自定义，你可以传递 `undefined` 或对象。要明确地启用或禁用某一个配置，需要明确在传递的对象中设置 boolean 值。

目前支持以下配置：

- eslint：使用 ESLint 检查脚本文件，安装 ESLint 后默认启用，否则默认禁用
- jsonc：在启用 ESLint 的情况下，使用 ESLint 检查 JSON 文件，默认启用
- yml：在启用 ESLint 的情况下，使用 ESLint 检查 YML 文件，默认启用
- oxlint：使用 oxlint 检查脚本文件，安装 oxlint 后默认启用，否则默认禁用
- stylelint：使用 Stylelint 检查样式文件，安装 Stylelint 后默认启用，否则默认禁用
- markdownlint：使用 markdownlint 检查 markdown 文件，安装 markdownlint-cli 后默认启用，否则默认禁用
- prettier：使用 Prettier 格式化代码，安装 Prettier 后默认启用，否则默认禁用

```javascript
// lint-staged.config.mjs
// or lint-staged.config.js with "type": "module" in package.json
import {
  lintStaged,
  hasESLint,
  hasOxlint,
  hasStylelint,
  hasMarkdownlintCli,
  hasPrettier,
} from '@modyqyw/fabric';

export default lintStaged({
  eslint: hasESLint,
  jsonc: true,
  yml: true,
  oxlint: hasOxlint,
  stylelint: hasStylelint,
  markdownlint: hasMarkdownlintCli,
  prettier: hasPrettier,
});
```

第二个参数用于更进一步的自定义，你可以传递一个对象，用于覆盖生成的配置。

```javascript
// lint-staged.config.mjs
// or lint-staged.config.js with "type": "module" in package.json
import { lintStaged } from '@modyqyw/fabric';

export default lintStaged(undefined, {
  // 需要自定义的操作
  ...,
})
```

## 整合

### 如何与 simple-git-hooks 整合使用？

如果你使用该库提供的 simple-git-hooks 配置，请查看 [simple-git-hooks 章节](../git/simple-git-hooks.md)。

如果你没有使用该库提供的 simple-git-hooks 配置，可以参考以下配置。

```javascript
// simple-git-hooks.cjs
module.exports = {
  'pre-commit': 'npx lint-staged',
};
```
