# oxlint

oxlint 是一个新兴的代码检查工具，默认情况下不需要任何配置，主要用于脚本文件。

::: tip oxlint 的定位
oxlint 不能完全取代 ESLint。相反地，因为 oxlint 非常快，所以 oxlint 可以作为 ESLint 的补充。你可以在运行 ESLint 前运行 oxlint，获取更快的反馈循环。
:::

## 安装

首先你需要安装 oxlint。目前支持 oxlint v0.2。

::: code-group

```shell [npm]
npm install oxlint -D
```

```shell [yarn]
yarn add oxlint -D
```

```shell [pnpm]
pnpm install oxlint -D
```

```shell [bun(experimental)]
bun install oxlint -d
```

:::

## 配置

### CLI

更新你的 `package.json`，增加 `lint:oxlint` 命令。

```json
{
  "scripts": {
    "lint:oxlint": "oxlint --deny=correctness --deny=perf"
  }
}
```

## 整合

### 如何和 lint-staged 整合使用？

如果你使用该库提供的 lint-staged 配置，请查看 [lint-staged 章节](../git/lint-staged.md)。

如果你没有使用该库提供的 lint-staged 配置，可以参考以下配置。

```javascript
// lint-staged.config.mjs
// or lint-staged.config.js with "type": "module" in package.json
export default {
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}': [
    'oxlint --deny=correctness --deny=perf --fix'
    'eslint --fix --cache --no-error-on-unmatched-pattern',
  ],
  '*.vue': [
    'oxlint --deny=correctness --deny=perf'
    'eslint --fix --cache --no-error-on-unmatched-pattern',
  ],
};
```
