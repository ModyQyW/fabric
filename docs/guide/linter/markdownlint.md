# markdownlint

markdownlint is the linter for [markdown file](https://commonmark.org/).

## 安装

You have to install markdownlint-cli first. Currently markdownlint-cli v0.38 is supported.

::: code-group

```shell [npm]
npm install markdownlint-cli -D
```

```shell [yarn]
yarn add markdownlint-cli -D
```

```shell [pnpm]
pnpm install markdownlint-cli -D
```

```shell [bun(experimental)]
bun install markdownlint-cli -d
```

:::

## Configuration

### json

Update your `.markdownlint.json` file.

```json
{
  "$schema": "https://raw.githubusercontent.com/DavidAnson/markdownlint/main/schema/markdownlint-config-schema.json",
  "extends": "@modyqyw/fabric/markdownlint.json"
}
```

### CLI

Update your `package.json` and add `lint:markdownlint` script.

```json
{
  "scripts": {
    "lint:markdownlint": "markdownlint . --fix --ignore-path=.gitignore"
  }
}
```

## Integration

### How to integrate with VSC?

Install [the corresponding markdownlint plugin](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) first.

Update [user settings](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson) or [workspace settings](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings) as appropriate.

```json
{
  // markdownlint auto-fix after markdown manual save.
  "[markdown]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.markdownlint": "explicit"
    }
  }
}
```

### How to integrate with WebStorm?

WebStorm can use [plugin](https://plugins.jetbrains.com/plugin/20851-markdownlint) to get markdownlint support.

### How to integrate with lint-staged?

If you are using the lint-staged configuration provided by the package, see the [lint-staged chapter](../git/lint-staged.md).

If you are not, you can refer to the following configuration.

```javascript
// lint-staged.config.mjs
// or lint-staged.config.js with "type": "module" in package.json
export default {
  '*.md': 'markdownlint --fix --ignore-path=.gitignore',
};
```
