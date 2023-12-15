# tsc

A TypeScript checker is a tool for checking types in TypeScript code. tsc is the official type checker that comes with TypeScript.

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

VSC comes with a TypeScript plugin. For Vue projects, you need to install the [corresponding Vue plugin](https://marketplace.visualstudio.com/items?itemName=Vue.volar) and set it up according to the instructions.

### How to integrate with WebStorm?

WebStorm comes with a TypeScript plugin.

### How to integrate with lint-staged?

If you are using the lint-staged configuration provided by the package, see the [lint-staged chapter](../git/lint-staged.md).

If you are not, you can refer to the following configuration.

```javascript
// lint-staged.config.cjs
module.exports = {
  '*.{ts,cts,mts,tsx}': () => 'tsc -p tsconfig.json --noEmit',
  '*.vue': () => 'vue-tsc -p tsconfig.json --noEmit',
};
```
