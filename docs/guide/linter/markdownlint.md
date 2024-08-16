# markdownlint

markdownlint is the linter for [markdown file](https://commonmark.org/).

## 安装

You have to install markdownlint-cli first. Currently markdownlint-cli v0.41 is supported.

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

:::

## Configuration

Create `.markdownlint.json` in your project root:

```json
{
  "$schema": "https://raw.githubusercontent.com/DavidAnson/markdownlint/main/schema/markdownlint-config-schema.json",
  "extends": "@modyqyw/fabric/markdownlint.json"
}
```

Update `package.json` and add `lint:markdownlint` script.

```json
{
  "scripts": {
    "lint:markdownlint": "markdownlint . --fix --ignore-path=.gitignore"
  }
}
```

## FAQ

### Integration of VSC?

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

### Integration of WebStorm?

WebStorm can use [plugin](https://plugins.jetbrains.com/plugin/20851-markdownlint) to get markdownlint support.

### Integration of lint-staged?

If you are using the lint-staged configuration provided by the package, see the [lint-staged chapter](../git/lint-staged.md).

If you are not, you can refer to the following configuration.

```javascript
// lint-staged.config.mjs
export default {
  "*.md": "markdownlint --fix --ignore-path=.gitignore",
};
```
