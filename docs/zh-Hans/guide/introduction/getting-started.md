# 起步

想先了解一下？没问题，看 [这里](./what-is-modyqyw-fabric.md)！

## 准备

- 良好的网络

  - 如果你无法顺畅地访问 GitHub，请尝试 [设置 Hosts](https://github.com/ineo6/hosts) 或使用科学上网。
  - 如果你无法顺畅地访问 NPM，请尝试使用 [nrm](https://github.com/Pana/nrm) 设置镜像、手动设置 [镜像](https://npmmirror.com/) 或使用科学上网。

- [Node.js](https://nodejs.org/) v20.11 或更高版本

  - 建议使用 [fnm](https://github.com/Schniz/fnm) 或 [volta](https://volta.sh/) 来管理 Node.js 版本。
  - 建议使用 LTS 版本（X.Y.Z 中 X 为双数的版本）。
  - 建议使用尽可能新的版本。

- 包管理工具

  - 建议使用 [pnpm](https://pnpm.io)。
  - 建议使用 [corepack](https://github.com/nodejs/corepack) 来启用 pnpm。

  ```shell
  # corepack 包含在 Node.js 中，无需额外安装
  corepack prepare --all --activate && corepack enable
  ```

  ::: tip yarn 使用提示
  最好在 `.yarnrc.yml` 中设置 `nodeLinker: "node_modules"`，这可以有效地避免破坏已有的项目，也可以避免幽灵依赖问题。

  yarn v1 无需设置。
  :::

  ::: tip pnpm 使用提示
  最好在 `.npmrc` 中设置 `shamefully-hoist=true`，这可以有效地避免破坏已有的项目，也可以避免幽灵依赖问题。
  :::

- 一个新项目

  - @modyqyw/fabric 没有考虑支持老旧项目，你可尝试逐步接入，但不保证绝对成功。
  - 如果你想要开发 Vue 项目，请使用 Composition API（组合式 API）。
  - 如果你想要开发 React 项目，请使用新的 JSX 转换和 Hooks。

- 一个类 Unix 的终端
  - 如果你正在使用 Windows 系统，请考虑使用 Git Bash（Git 安装附带）。
  - 如果你正在使用 Linux 或 macOS 系统，请考虑使用系统自带的终端。

## 安装

使用终端打开对应的项目目录，执行命令安装依赖。

::: code-group

```shell [npm]
npm install @modyqyw/fabric -D
```

```shell [yarn]
yarn add @modyqyw/fabric -D
```

```shell [pnpm]
pnpm install @modyqyw/fabric -D
```

```shell [bun(experimental)]
bun install @modyqyw/fabric -d
```

:::

就是这么简单！接下来，你可以根据你的需要来配置项目。

当然，你也可以使用 CLI（v10.3 开始提供）来配置项目，实现一条命令快速配置项目。

```shell
mf -h # 查看使用方法

mf --all # 配置所有选项

mf --prettier # 只配置 prettier
```

::: warning 适用提示

@modyqyw/fabric 没有考虑支持老旧项目。如果你直接使用 CLI 在旧项目上快速配置，这可能会破坏你的旧项目！

:::
