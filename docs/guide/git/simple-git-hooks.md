# simple-git-hooks

simple-git-hooks is a widely adopted Git tool that helps you manage Git hooks easily.

::: tip Other options
[husky](https://typicode.github.io/husky/) is a more widely adopted tool, but it modifies the Git hooks directory, which you may not like. You might consider using it, but you'll need to configure it yourself.
:::

## Installation

You have to install simple-git-hooks first. Currently simple-git-hooks v2 is supported.

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

:::

## Configuration

Create `prettier.config.mjs` in your project root:

```javascript
// simple-git-hooks.cjs
require('esbuild-register');
const { simpleGitHooks } = require('@modyqyw/fabric/simple-git-hooks');

module.exports = simpleGitHooks();
```

Update `package.json` and add `prepare` script.

```json
{
  "scripts": {
    "prepare": "is-ci || simple-git-hooks"
  }
}
```

## Customization

### Parameters

Passing parameters to the exported `simpleGitHooks` method can customize, and the `simpleGitHooks` method takes two parameters.

The first parameter is used for basic customization; you can pass no or empty objects to indicate the use of default values. To explicitly enable or disable a plugin, you need to explicitly set the boolean value in the passed object.

The following is the default configuration:

- commitlint - Use commitlint to lint commit messages. Enabled by default if you have commitlint installed.
- lintStaged - Use lint-staged to execute commands against staged git files. Enabled by default if you have lint-staged installed.

```javascript
// simple-git-hooks.cjs
require('esbuild-register');
const { hasCommitlint, hasLintStaged } = require('@modyqyw/fabric');
const { simpleGitHooks } = require('@modyqyw/fabric/simple-git-hooks');

module.exports = simpleGitHooks({
  // Lint commit messages with commitlint.
  // Enabled by default if you have commitlint installed.
  commitlint: hasCommitlint,
  // Execute commands against staged git files with lint-staged.
  // Enabled by default if you have lint-staged installed.
  lintStaged: hasLintStaged,
});
```

The second parameter is used for further customization, you can pass an object to override the generated configuration.

```javascript
// simple-git-hooks.cjs
require('esbuild-register');
const { simpleGitHooks } = require('@modyqyw/fabric');

module.exports = simpleGitHooks(
  {},
  {
    // configs that require customization
  },
);
```
