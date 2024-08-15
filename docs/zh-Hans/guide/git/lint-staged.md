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

:::

## 配置

在项目根目录下创建 `lint-staged.config.mjs`：

```javascript
// lint-staged.config.mjs
import { lintStaged } from '@modyqyw/fabric/lint-staged';

export default lintStaged();
```

## 自定义

### 参数自定义

给导出的 `lintStaged` 方法传参可以自定义配置，`lintStaged` 方法接收两个参数。

第一个参数用于基本自定义，你可以不传递或传递空对象表示使用默认值。要明确地启用或禁用某一个插件，需要明确在传递的对象中设置 boolean 值。

以下是默认配置：

```javascript
// lint-staged.config.mjs
import {
  hasBiome,
  hasESLint,
  hasMarkdownlintCli,
  hasOxlint,
  hasPrettier,
  hasStylelint,
} from '@modyqyw/fabric';
import { lintStaged } from '@modyqyw/fabric/lint-staged';

export default lintStaged({
  // 使用 Biome 检查
  // 安装 Biome 后默认启用，否则默认禁用
  biome: hasBiome,
  // 使用 ESLint 检查脚本文件
  // 安装 ESLint 且没有启用 Biome 时默认启用，否则默认禁用
  eslint: hasESLint && !hasBiome,
  // 在启用 ESLint 的情况下，使用 ESLint 检查 JSON 文件
  // 默认启用
  lintJsonc: true,
  // 在启用 ESLint 的情况下，使用 ESLint 检查 TOML 文件
  // 默认启用
  lintToml: true,
  // 在启用 ESLint 的情况下，使用 ESLint 检查 YML 文件
  // 默认启用
  lintYml: true,
  // 使用 markdownlint-cli 检查 markdown 文件
  // 安装 markdownlint-cli 后默认启用，否则默认禁用
  markdownlint: hasMarkdownlintCli,
  // 使用 oxlint 检查脚本文件
  // 安装 oxlint 且没有启用 Biome 时默认启用，否则默认禁用
  oxlint: hasOxlint && !hasBiome,
  // 使用 Prettier 格式化代码
  // 安装 Prettier 且没有启用 Biome 时默认启用，否则默认禁用
  prettier: hasPrettier && !hasBiome,
  // 在启用 Prettier 的情况下，使用 Prettier 格式化 CHANGELOG.md 文件
  // 默认禁用
  formatChangelog: false,
  // 使用 Stylelint 检查样式文件
  // 安装 Stylelint 且没有启用 Biome 时默认启用，否则默认禁用
  stylelint: hasStylelint && !hasBiome,
});
```

第二个参数用于更进一步的自定义，你可以传递一个对象，用于覆盖生成的配置。

```javascript
// lint-staged.config.mjs
import { lintStaged } from '@modyqyw/fabric/lint-staged';

export default lintStaged(
  {},
  {
    // 需要自定义的操作
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
  'pre-commit': 'npx lint-staged',
};
```
