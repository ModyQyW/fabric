# tsc

tsc is the official type checker that comes with TypeScript.

## Installation

You have to install TypeScript first. Currently TypeScript v5 is supported.

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

:::

## Configuration

You should use the tsconfig file provided with the project initialization whenever possible, or adjust on top of it. If the project initialization does not provide a tsconfig file, you can use [tsconfig/bases](https://github.com/tsconfig/bases), or adjust on top of it. The following is an example.

```json
{
  "extends": "@tsconfig/recommended/tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "lib": ["ESNext", "DOM"],
    "module": "ESNext",
    "target": "ESNext",
    "moduleResolution": "Bundler"
  },
  "include": ["src/**/*"]
}
```

::: tip Understanding tsconfig.json

Please refer to [The TSConfig Cheat Sheet](https://www.totaltypescript.com/tsconfig-cheat-sheet) and [TypeScript Official Documentation tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

:::

Update `package.json` and add `type-check` script.

```json
{
  "scripts": {
    "type-check": "tsc -p tsconfig.json --noEmit"
  }
}
```

For Vue projects, you need to change tsc to vue-tsc.

```json
{
  "scripts": {
    "type-check": "vue-tsc -p tsconfig.json --noEmit"
  }
}
```

::: tip Specify tsconfig files explicitly

Some projects may provide more than one tsconfig file for initialization, for example, create-vue provides 4 tsconfig.json files. If you don't explicitly specify the tsconfig file, tsc / vue-tsc will default to tsconfig.json, which may not work as you expect. If possible, specify the tsconfig file explicitly.

:::

::: tip Out of memory

When running a type check, you may encounter an out-of-memory problem. Please refer to https://github.com/vuejs/language-tools/issues/2210#issuecomment-1362480330 and https://github.com/vuejs/language-tools/issues/3817 #issuecomment-1925009568 for solutions.

:::

## FAQ

### Integration of VSC?

VSC comes with a TypeScript plugin. VSC comes with a TypeScript plugin. For Vue projects, please follow the [Official website](https://vuejs.org/guide/typescript/overview.html) to configure the settings accordingly.

### Integration of WebStorm?

WebStorm comes with a TypeScript plugin.

### lint-staged

tsc / vue-tsc needs to go through all the project files in order to be able to analyze them, which also means that it's not really possible to **only** run tsc / vue-tsc on a staging file. See [typescript#27379](https://github.com/microsoft/TypeScript/issues/27379), [lint-staged#1223](https://github.com/lint-staged/lint-staged/issues/1223) and [lint-staged#1352](https://github.com/lint-staged/lint-staged/pull/1352) for more information.

As an alternative, you should run tsc / vue-tsc before releasing a new version or in CI, or use [tsc-files](https://github.com/gustavopch/tsc-files) / [vue-tsc-files](https://github.com/iToXiQ/vue-tsc-files).

We encourage the former approach. If you wish to use the latter approach, you can refer to the following configuration.

```javascript
// lint-staged.config.mjs
export default {
  "*.{ts,tsx}": "tsc-files --noEmit",
  // For vue projects
  // "*.{ts,tsx,vue}": "vue-tsc-files --noEmit",
};
```
