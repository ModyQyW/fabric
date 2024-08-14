# Biome

Biome is an all-in-one high-performance toolchain for web projects, aimed to provide functionalities to maintain them. It is a performant linter and a fast formatter.

::: tip Positioning of Biome
Biome is very fast, but it is not 100% compatible with existing common tools (such as ESLint, Stylelint and Prettier) and still needs further development.

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

Create `biome.json` in your project root:

```json
{
  "extends": ["@modyqyw/fabric/biome.json"]
}
```

Update `package.json` and add `format:biome` script.

```json
{
  "scripts": {
    "format:biome": "@biomejs/biome format --write"
  }
}
```

Replace `format:biome` with `check` if you want to use formatting and linting at the same time.

```json
{
  "scripts": {
    "check": "@biomejs/biome check --write"
  }
}
```

If customization is required, please refer to [Biome Official Documentation / Configuration](https://biomejs.dev/reference/configuration/).

## FAQ

### Integration of VSC?

Install [the corresponding Biome plugin](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) first.

Update [user settings](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson) or [workspace settings](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings) as appropriate.

```json
{
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true
}
```

If you want to use formatting and linting at the same time:

```json
{
  "editor.codeActionsOnSave": {
    "quickfix.biome": "explicit",
    "source.organizeImports.biome": "explicit"
  },
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true
}
```

### Integration of WebStorm?

WebStorm can use [plugin](https://plugins.jetbrains.com/plugin/22761-biome) to get Biome support.

### Integration of lint-staged?

If you are using the lint-staged configuration provided by the package, see the [lint-staged chapter](../git/lint-staged.md).

If you are not, you can refer to the following configuration.

```javascript
// lint-staged.config.mjs
export default {
  '*': 'biome format --write --no-errors-on-unmatched --files-ignore-unknown=true',
  // If you want to use formatting and linting at the same time
  // '*': 'biome check --write --no-errors-on-unmatched --files-ignore-unknown=true',
};
```
