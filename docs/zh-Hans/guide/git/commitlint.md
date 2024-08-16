# commitlint

commitlint 是被广泛采用的 Git 工具，检查提交信息，帮助团队遵守提交约定。

## 安装

首先你需要安装 commitlint。目前支持 commitlint v19。

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

:::

## 配置

在项目根目录下创建 `commitlint.config.mjs`：

```javascript
// commitlint.config.mjs
import { commitlint } from "@modyqyw/fabric/commitlint";

export default commitlint();
```

## 自定义

### 参数自定义

给导出的 `commitlint` 方法传参可以自定义配置，`commitlint` 方法接收两个参数。

第一个参数用于基本自定义，你可以不传递或传递空对象表示使用默认值。要明确地启用或禁用某一个配置，需要明确在传递的对象中设置 boolean 值。

以下是默认配置：

```javascript
// commitlint.config.mjs
import { hasLerna, hasNx, hasPnpmWorkspace, hasRush } from "@modyqyw/fabric";
import { commitlint } from "@modyqyw/fabric/commitlint";

export default commitlint({
  // 是否提供 monorepo 支持
  // 默认为 true，即自动检测
  // 可选 false（禁用）、'learn'、'nx'、'pnpm-workspace'、'rush'
  monorepo: true,
  // 提交信息风格
  // 默认为 'conventional'，即约定式提交
  // 可选 'angular'
  style: "conventional",
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
import { commitlint } from "@modyqyw/fabric/commitlint";

export default commitlint(
  {},
  {
    // 需要自定义的配置
  },
);
```

## FAQ

### 整合 simple-git-hooks？

如果你使用该库提供的 simple-git-hooks 配置，请查看 [simple-git-hooks 章节](../git/simple-git-hooks.md)。

如果你没有使用该库提供的 simple-git-hooks 配置，可以参考以下配置。

```javascript
// simple-git-hooks.cjs
module.exports = {
  "commit-msg": "npx commitlint --edit ${1}",
};
```
