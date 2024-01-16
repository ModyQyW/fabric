# tsc

tsc is the official type checker that comes with TypeScript.

::: tip Other options
[ezno](https://github.com/kaleidawave/ezno) 和 [stc](https://stc.dudy.dev/) are the up-and-comers. You might consider using them if you think tsc is slow, but you'll need to configure them yourself. Be careful: they are not 100% compatible with tsc and you may get unexpected results.
:::

## Installation

You have to install TypeScript first. Currently TypeScript v5 is supported.

::: code-group

```shell [npm]
npm install prettier -D
```

```shell [yarn]
yarn add prettier -D
```

```shell [pnpm]
pnpm install prettier -D
```

```shell [bun]
bun install prettier -d
```

:::

## Configuration

### tsconfig

You should use the tsconfig file provided with the project initialization whenever possible, or adjust on top of it.

If the tsconfig file was not provided with the project initialization, you can use [tsconfig/bases](https://github.com/tsconfig/bases), or adjust on top of it.

### CLI

Update your `package.json` and add `check:types` script.

```json
{
  "scripts": {
    "check:types": "tsc -p tsconfig.json --noEmit"
  }
}
```

For Vue projects, you need to change tsc to vue-tsc.

```json
{
  "scripts": {
    "check:types": "vue-tsc -p tsconfig.json --noEmit"
  }
}
```

::: tip Specify tsconfig files explicitly

Some projects may provide more than one tsconfig file for initialization, for example, create-vue provides 4 tsconfig.json files. If you don't explicitly specify the tsconfig file, tsc / vue-tsc will default to tsconfig.json, which may not work as you expect. If possible, specify the tsconfig file explicitly.

:::

## Integration

### How to integrate with VSC?

VSC comes with a TypeScript plugin. VSC comes with a TypeScript plugin. For Vue projects, please follow the [Official website](https://vuejs.org/guide/typescript/overview.html) to configure the settings accordingly.

### How to integrate with WebStorm?

WebStorm comes with a TypeScript plugin.

### Why not integrate with lint-staged?

tsc / vue-tsc needs to go through all the project files in order to be able to analyze them, which also means that it's not really possible to **only** run tsc / vue-tsc on a staging file. See [lint-staged#1223](https://github.com/lint-staged/lint-staged/issues/1223) and [lint-staged#1352](https://github.com/lint-staged/lint-staged/pull/1352) for more information.

As an alternative, you should run tsc / vue-tsc before releasing a new version or in CI.
