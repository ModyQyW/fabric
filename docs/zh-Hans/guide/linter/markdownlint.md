# markdownlint

markdownlint 是用于 [markdown 文件](https://commonmark.org/) 的代码检查工具。

## 安装

首先你需要安装 markdownlint-cli。目前支持 markdownlint-cli v0.42。

::: code-group

```shell [npm]
npm install markdownlint-cli -D
```

```shell [yarn]
yarn add markdownlint-cli -D
```

```shell [pnpm]
pnpm install markdownlint-cli -D
```

:::

## 配置

在项目根目录下创建 `.markdownlint.json`。

```json
{
  "$schema": "https://raw.githubusercontent.com/DavidAnson/markdownlint/main/schema/markdownlint-config-schema.json",
  "extends": "@modyqyw/fabric/markdownlint.json"
}
```

更新 `package.json`，增加 `lint:markdownlint` 命令。

```json
{
  "scripts": {
    "lint:markdownlint": "markdownlint . --fix --ignore-path=.gitignore"
  }
}
```

如果需要自定义，请参考 [markdownlint README](https://github.com/DavidAnson/markdownlint#readme)。

## FAQ

### 整合 VSC？

先安装 [对应的 markdownlint 插件](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)。

视实际情况修改 [用户设置](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson) 或 [工作区设置](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings)。

```json
{
  // markdown 手动保存后 markdownlint 自动修复
  "[markdown]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.markdownlint": "explicit"
    }
  }
}
```

### 整合 WebStorm？

WebStorm 可以使用 [插件](https://plugins.jetbrains.com/plugin/20851-markdownlint) 以获取 markdownlint 支持。

### 整合 lint-staged？

如果你使用该库提供的 lint-staged 配置，请查看 [lint-staged 章节](../git/lint-staged.md)。

如果你没有使用该库提供的 lint-staged 配置，可以参考以下配置。

```javascript
// lint-staged.config.mjs
export default {
  "*.md": "markdownlint --fix --ignore-path=.gitignore",
};
```
