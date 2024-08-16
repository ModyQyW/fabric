# oxlint

oxlint 是一个新兴的代码检查工具，默认情况下不需要任何配置，主要用于脚本文件。

::: tip oxlint 的定位
oxlint 不能完全取代 ESLint。相反地，因为 oxlint 非常快，所以 oxlint 可以作为 ESLint 的补充。你可以在运行 ESLint 前运行 oxlint，获取更快的反馈循环。
:::

## 安装

首先你需要安装 oxlint。目前支持 oxlint v0.7。

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

:::

## 配置

更新 `package.json`，增加 `lint:oxlint` 命令。

```json
{
  "scripts": {
    "lint:oxlint": "oxlint --fix"
  }
}
```

::: tip 忽略文件

ESLint 配置提供了 .gitignore、.eslintignore 和一部分内置忽略文件支持，而 oxlint 只支持指定单个忽略模式文件，默认会使用 .gitignore 和 .eslintignore 两个忽略模式文件。

如果你有其它的文件需要忽略，你可以像下面例子使用 `--ignore-pattern`。这个例子忽略了所有 dts 文件，在自动生成 dts 文件的项目中很有用。

```json
{
  "scripts": {
    "lint:oxlint": "oxlint --ignore-pattern=*.d.ts --fix"
  }
}
```

:::

## FAQ

### 整合 VSC？

安装 [对应的 oxlint 插件](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode) 即可。

### 整合 WebStorm？

目前还没有相应插件，请追踪 [oxc discussions 3269](https://github.com/oxc-project/oxc/discussions/3269) 和 [Oxlint support for all Intellij-based IDEs](https://youtrack.jetbrains.com/issue/WEB-64726/Oxlint-support-for-all-Intellij-based-IDEs)。

### 整合 lint-staged？

如果你使用该库提供的 lint-staged 配置，请查看 [lint-staged 章节](../git/lint-staged.md)。

如果你没有使用该库提供的 lint-staged 配置，可以参考以下配置。

```javascript
// lint-staged.config.mjs
import { filterFilenames } from "@modyqyw/fabric";

export default {
  "*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}": (filenames) => {
    const filtered = filterFilenames(filenames);
    return [
      `oxlint --fix ${filtered.join(" ")}`,
      `eslint --fix --cache --no-error-on-unmatched-pattern ${filtered.join(" ")}`,
    ];
  },
};
```
