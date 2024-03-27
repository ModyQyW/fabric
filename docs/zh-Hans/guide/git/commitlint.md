# commitlint

commitlint 是被广泛采用的 Git 工具，检查提交信息，帮助团队遵守提交约定。

## 安装

首先你需要安装 commitlint。目前支持 commitlint v18。

::: code-group

```shell [npm]
npm install @commitlint/cli -D
```

```shell [yarn]
yarn add @commitlint/cli -D
```

```shell [pnpm]
pnpm install @commitlint/cli -D
```

```shell [bun(experimental)]
bun install @commitlint/cli -d
```

:::

## 配置

### ESM

```javascript
// commitlint.config.mjs
// or commitlint.config.js with "type": "module" in package.json
import { commitlint } from '@modyqyw/fabric';
// or
// import { commitlint } from '@modyqyw/fabric/commitlint';

export default commitlint();
```

### CJS

```javascript
// commitlint.config.cjs
// or commitlint.config.js without "type": "module" in package.json
const { commitlint } = require('@modyqyw/fabric');
// or
// const { commitlint } = require('@modyqyw/fabric/commitlint');

module.exports = commitlint();
```

## 自定义

### 参数自定义

给导出的 `commitlint` 方法传参可以自定义配置，`commitlint` 方法接收两个参数。

第一个参数用于基本自定义，你可以传递 `undefined` 或对象。要明确地启用或禁用某一个配置，需要明确在传递的对象中设置 boolean 值。

目前支持以下配置：

- style：提交信息的风格，默认为 `'conventional'`，可选 `'angular'`
- monorepo：是否支持 monorepo，默认为 `true`，表示自动检测，可选 `false`（禁用）、`'learn'`、`'nx'`、`'pnpm-workspace'`、`'rush'`

```javascript
// commitlint.config.mjs
// or commitlint.config.js with "type": "module" in package.json
import {
  commitlint,
  hasLerna,
  hasNx,
  hasPnpmWorkspace,
  hasRush,
} from '@modyqyw/fabric';

export default commitlint({
  style: 'conventional',
  monorepo: hasPnpmWorkspace
    ? 'pnpm-workspace'
    : hasLerna
      ? 'lerna'
      : hasNx
        ? 'nx'
        : hasRush
          ? 'rush'
          : false,
});
```

::: tip 编写提交信息
对于新手来说，编写提交信息并非易事。幸运的是，有很多种方式来简化这一过程。

你可以安装 [VSC 插件](https://marketplace.visualstudio.com/search?term=commit&target=VSCode&category=All%20categories&sortBy=Relevance) 和 [WebStorm 插件](https://plugins.jetbrains.com/search?products=webstorm&search=commit)，辅助编写提交信息。

对于命令行，你可以使用 [commitizen](https://github.com/commitizen/cz-cli)，并使用 @commitlint/prompt 实现与 commitlint 的整合。后者详见 [Commitlint Guide: Use prompt](https://commitlint.js.org/#/guides-use-prompt)。
:::

第二个参数用于更进一步的自定义，你可以传递一个对象，用于覆盖生成的配置。

```javascript
// commitlint.config.mjs
// or commitlint.config.js with "type": "module" in package.json
import { commitlint } from '@modyqyw/fabric';

export default commitlint(undefined, {
  // 需要自定义的配置
  ...,
})
```

## 整合

### simple-git-hooks

如果你使用该库提供的 simple-git-hooks 配置，请查看 [simple-git-hooks 章节](../git/simple-git-hooks.md)。

如果你没有使用该库提供的 simple-git-hooks 配置，可以参考以下配置。

```javascript
// simple-git-hooks.cjs
module.exports = {
  'commit-msg': 'npx commitlint --edit ${1}',
};
```
