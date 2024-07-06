# simple-git-hooks

simple-git-hooks 是被广泛采用的 Git 工具，帮助你轻松地管理 Git 钩子。

::: tip 其它选择
[husky](https://typicode.github.io/husky/) 是一个被更广泛采用的工具，但是 husky 修改了 Git 钩子目录，你可能不会喜欢这种做法。你可以考虑使用它，但需要你自行配置。
:::

## 安装

首先你需要安装 simple-git-hooks。目前支持 simple-git-hooks v2。

::: code-group

```shell [npm]
npm install simple-git-hooks is-ci esbuild-register -D
```

```shell [yarn]
yarn add simple-git-hooks is-ci esbuild-register -D
```

```shell [pnpm]
pnpm install simple-git-hooks is-ci esbuild-register -D
```

```shell [bun(experimental)]
bun install simple-git-hooks is-ci esbuild-register -d
```

:::

## 配置

simple-git-hooks 目前只支持 CJS。

### CJS

```javascript
// simple-git-hooks.cjs
const { simpleGitHooks } = require('@modyqyw/fabric');
// or
// const { simpleGitHooks } = require('@modyqyw/fabric/simple-git-hooks');

module.exports = simpleGitHooks();
```

### CLI

更新你的 `package.json`，增加 `prepare` 命令。

```json
{
  "scripts": {
    "prepare": "is-ci || simple-git-hooks"
  }
}
```

## 自定义

### 参数自定义

给导出的 `simpleGitHooks` 方法传参可以自定义配置，`simpleGitHooks` 方法接收两个参数。

第一个参数用于基本自定义，你可以传递 `undefined` 或对象。要明确地启用或禁用某一个配置，需要明确在传递的对象中设置 boolean 值。

目前支持以下配置：

- commitlint：使用 commitlint 检查提交信息，安装 commitlint 后默认启用，否则默认禁用
- lintStaged：使用 lint-staged 针对暂存的 git 文件执行命令，安装 lint-staged 后默认启用，否则默认禁用

```javascript
// simple-git-hooks.cjs
require('esbuild-register');
const {
  hasCommitlint,
  hasLintStaged,
  simpleGitHooks,
} = require('@modyqyw/fabric');

module.exports = simpleGitHooks({
  commitlint: hasCommitlint,
  lintStaged: hasLintStaged,
});
```

第二个参数用于更进一步的自定义，你可以传递一个对象，用于覆盖生成的配置。

```javascript
// simple-git-hooks.cjs
require('esbuild-register');
const { simpleGitHooks } = require('@modyqyw/fabric');

module.exports = simpleGitHooks(undefined, {
  // 需要自定义的配置
});
```
