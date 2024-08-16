# Biome

Biome 是一个用于 Web 项目的高性能工具链，旨在为开发者提供维护项目的工具，它既可以作为代码检查工具，也可以作为代码格式化器。

::: tip Biome 的定位
Biome 速度非常快，但它和已有的常见工具（如 ESLint、Stylelint 和 Prettier）并非 100% 兼容，目前仍然需要进一步的发展。

Biome 对 JavaScript、TypeScript、JSX、TSX、JSON 和 JSONC 支持度良好，对其它支持度有待改进，因此建议将其用于 JS、TS、JSX 和 TSX 项目，不要与其它代码检查工具、代码格式化器混合使用。

Biome 具体支持情况请参考 [Biome 官方文档](https://biomejs.dev/zh-cn/internals/language-support/)。
:::

## 安装

首先你需要安装 Biome。目前支持 Biome v1。

::: code-group

```shell [npm]
npm install @biomejs/biome -D
```

```shell [yarn]
yarn add @biomejs/biome -D
```

```shell [pnpm]
pnpm install @biomejs/biome -D
```

:::

## 配置

在项目根目录下创建 `biome.json`。

```json
{
  "extends": ["@modyqyw/fabric/biome.json"]
}
```

更新 `package.json`，增加 `format:biome` 命令。

```json
{
  "scripts": {
    "format:biome": "@biomejs/biome format --write"
  }
}
```

如果你希望同时使用代码格式化和代码检查，请使用 `check` 命令代替 `format:biome` 命令。

```json
{
  "scripts": {
    "check": "@biomejs/biome check --write"
  }
}
```

如果需要自定义，请参考 [Biome 官方文档 / 配置](https://biomejs.dev/zh-cn/reference/configuration/)。

## FAQ

### 整合 VSC？

先安装 [对应的 Biome 插件](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)。

视实际情况修改 [用户设置](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson) 或 [工作区设置](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings)。

```json
{
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true
}
```

如果你希望同时使用代码格式化和代码检查：

```json
{
  "editor.codeActionsOnSave": {
    "quickfix.biome": "explicit",
    "source.organizeImports.biome": "explicit"
  },
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true
}
```

### 整合 WebStorm？

WebStorm 可以使用 [插件](https://plugins.jetbrains.com/plugin/22761-biome) 以获取 Biome 支持。

### 整合 lint-staged？

如果你使用该库提供的 lint-staged 配置，请查看 [lint-staged 章节](../git/lint-staged.md)。

如果你没有使用该库提供的 lint-staged 配置，可以参考以下配置。

```javascript
// lint-staged.config.mjs
export default {
  "*": "biome format --write --no-errors-on-unmatched --files-ignore-unknown=true",
  // 如果你希望同时使用代码格式化和代码检查
  // '*': 'biome check --write --no-errors-on-unmatched --files-ignore-unknown=true',
};
```
