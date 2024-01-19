# simple-git-hooks

simple-git-hooks is a widely adopted Git tool that helps you manage Git hooks easily.

::: tip Other options
[husky](https://typicode.github.io/husky/) is a more widely adopted tool, but husky is bulky and husky modifies the Git hooks directory, which you may not like. You might consider using it, but you'll need to configure it yourself.
:::

## Installation

You have to install simple-git-hooks first. Currently simple-git-hooks v2 is supported.

::: code-group

```shell [npm]
npm install simple-git-hooks -D
```

```shell [yarn]
yarn add simple-git-hooks -D
```

```shell [pnpm]
pnpm install simple-git-hooks -D
```

```shell [bun(experimental)]
bun install simple-git-hooks -d
```

:::

## Configuration

simple-git-hooks only supports CJS currently.

```javascript
// simple-git-hooks.cjs
const { simpleGitHooks } = require('@modyqyw/fabric');
// or
// const { simpleGitHooks } = require('@modyqyw/fabric/simple-git-hooks');

module.exports = simpleGitHooks();
```

## Customization

### Parameters

Passing parameters to the exported `simpleGitHooks` method can customize, and the `simpleGitHooks` method takes two parameters.

The first parameter is used for basic customization, you can pass either `undefined` or an object. To explicitly enable or disable a plugin, you need to explicitly set the boolean value in the passed object.

The following plugins are currently supported:

- commitlint - Use commitlint to lint commit messages. Enabled by default if you have commitlint installed.
- lintStaged - Use lint-staged to execute commands against staged git files. Enabled by default if you have lint-staged installed.

```javascript
// simple-git-hooks.cjs
const {
  simpleGitHooks,
  hasCommitlint,
  hasLintStaged,
} = require('@modyqyw/fabric');

module.exports = simpleGitHooks({
  commitlint: hasCommitlint,
  lintStaged: hasLintStaged,
});
```

The second parameter is used for further customization, you can pass an object to override the generated configuration.

```javascript
// simple-git-hooks.cjs
const { simpleGitHooks } = require('@modyqyw/fabric');

module.exports = simpleGitHooks(undefined, {
  // configs that require customization
  ...,
})
```
