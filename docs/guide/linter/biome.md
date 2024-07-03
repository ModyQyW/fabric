# Biome

Biome is a high-performance toolchain for web projects, aimed to provide functionalities to maintain them. It is a performant linter and a fast formatter.

::: tip Positioning of Biome
Biome aims to completely replace ESLint and Prettier. Its speed is very fast, but it is not 100% compatible with ESLint, and it still needs further development.

Biome has good support for JavaScript, TypeScript, JSX, TSX, JSON and JSONC, but support for the others could be improved, so it is recommended to use it for JS, TS, JSX, and TSX projects, and not to mix it with other code checkers and code formatters.

For specific support, please refer to [Biome official document] (https://biomejs.dev/internals/language-support/).
:::

## Installation

You have to install Biome first. Currently Biome v1 is supported.

::: code-group

```shell [npm]
npm install @biomejs/biome -D
```

```shell [yarn]
yarn add @biomejs/biome -D
```

```shell [pnpm]
pnpm install @biomejs/biome -D
```

```shell [bun(experimental)]
bun install @biomejs/biome -d
```

:::

## Configuration

### JSON

Update your `biome.json`.

```json
{
  "extends": ["./node_modules/@modyqyw/fabric/biome.json"]
}
```

### CLI

Update your `package.json` and add `lint:biome` script.

```json
{
  "scripts": {
    "lint:biome": "@biomejs/biome lint --write"
  }
}
```

Replace `lint:biome` with `check` if you want to use formatting and linting at the same time.

```json
{
  "scripts": {
    "check": "@biomejs/biome check --write"
  }
}
```

## Integration

### VSC

Install [the corresponding Biome plugin](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) first.

Update [user settings](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson) or [workspace settings](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings) as appropriate.

```json
{
  "editor.codeActionsOnSave": {
    "quickfix.biome": "explicit",
    "source.organizeImports.biome": "explicit"
  }
}
```

### WebStorm

WebStorm can use [plugin](https://plugins.jetbrains.com/plugin/22761-biome) to get Biome support.

### lint-staged

If you are using the lint-staged configuration provided by the package, see the [lint-staged chapter](../git/lint-staged.md).

If you are not, you can refer to the following configuration.

```javascript
// lint-staged.config.mjs
// or lint-staged.config.js with "type": "module" in package.json
export default {
  '*': 'biome lint --write --no-errors-on-unmatched --files-ignore-unknown=true',
  // '*': 'biome check --write --no-errors-on-unmatched --files-ignore-unknown=true',
};
```
