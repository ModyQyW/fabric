# tsc

tsc 是 TypeScript 官方附带的类型检查工具。

::: tip 其它选择
[ezno](https://github.com/kaleidawave/ezno) 和 [stc](https://stc.dudy.dev/) 是后起之秀。如果你感觉 tsc 速度比较慢，你可以考虑使用它们，但需要你自行配置。必须留意：它们和 tsc 并不是 100% 兼容的，你可能会得到意想不到的结果。
:::

## 安装

首先你需要安装 TypeScript。目前支持 TypeScript v5。

::: code-group

```shell [npm]
npm install typescript -D
```

```shell [yarn]
yarn add typescript -D
```

```shell [pnpm]
pnpm install typescript -D
```

```shell [bun(experimental)]
bun install typescript -d
```

:::

tsc 不支持 Vue。如果你正在开发 Vue 项目，你需要使用 [vue-tsc](https://www.npmjs.com/package/vue-tsc)。

::: code-group

```shell [npm]
npm install typescript vue-tsc -D
```

```shell [yarn]
yarn add typescript vue-tsc -D
```

```shell [pnpm]
pnpm install typescript vue-tsc -D
```

```shell [bun(experimental)]
bun install typescript vue-tsc -d
```

:::

## 配置

### tsconfig

你应该尽可能地使用项目初始化时提供的 tsconfig 文件，或在其基础上调整。

如果项目初始化没有提供 tsconfig 文件，你可以使用 [tsconfig/bases](https://github.com/tsconfig/bases)，或在其基础上调整。

### CLI

更新你的 `package.json`，增加 `check:types` 命令。

```json
{
  "scripts": {
    "typecheck": "tsc -p tsconfig.json --noEmit"
  }
}
```

对于 Vue 项目，需要将 tsc 改成 vue-tsc。

```json
{
  "scripts": {
    "typecheck": "vue-tsc -p tsconfig.json --noEmit"
  }
}
```

::: tip 明确指定 tsconfig 文件

某些项目初始化可能会提供多个 tsconfig 文件，比如 create-vue 会提供 4 个 tsconfig.json 文件。如果你不明确指定 tsconfig 文件，tsc / vue-tsc 会默认使用 tsconfig.json，这可能不会按照你的预期工作。尽可能明确指定 tsconfig 文件。

:::

## 整合

### 如何和 VSC 整合使用？

VSC 自带 TypeScript 插件。对于 Vue 项目，请根据 [官网说明](https://cn.vuejs.org/guide/typescript/overview.html) 进行相应的设置。

### 如何与 WebStorm 整合使用？

WebStorm 自带 TypeScript 插件。

### 为什么不和 lint-staged 整合使用？

tsc / vue-tsc 需要查看所有项目文件才能分析它们，这也意味着没法真正地 **只** 在暂存文件上运行 tsc / vue-tsc。更多可查看 [lint-staged#1223](https://github.com/lint-staged/lint-staged/issues/1223) 和 [lint-staged#1352](https://github.com/lint-staged/lint-staged/pull/1352) 说明。

作为替代，你应该在发布新版本前或在 CI 中运行 tsc / vue-tsc。
