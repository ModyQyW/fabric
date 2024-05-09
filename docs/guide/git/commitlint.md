# commitlint

commitlint is a widely adopted Git tool that lints commit messages and helps your team adhere to a commit convention.

## Installation

You have to install commitlint-cli first. Currently commitlint-cli v18 is supported.

::: code-group

```shell [npm]
npm install @commitlint/cli -D
```

```shell [yarn]
yarn add @commitlint/cli -D
```

```shell [pnpm]
pnpm install @commitlint/cli -D
```

```shell [bun(experimental)]
bun install @commitlint/cli -d
```

:::

## 配置

### ESM

```javascript
// commitlint.config.mjs
// or commitlint.config.js with "type": "module" in package.json
import { commitlint } from '@modyqyw/fabric';
// or
// import { commitlint } from '@modyqyw/fabric/commitlint';

export default commitlint();
```

### CJS

```javascript
// commitlint.config.cjs
// or commitlint.config.js without "type": "module" in package.json
const { commitlint } = require('@modyqyw/fabric');
// or
// const { commitlint } = require('@modyqyw/fabric/commitlint');

module.exports = commitlint();
```

## Customization

### Parameters

Passing parameters to the exported `commitlint` method can customize, and the `commitlint` method takes two parameters.

The first parameter is used for basic customization, you can pass either `undefined` or an object. To explicitly enable or disable a plugin, you need to explicitly set the boolean value in the passed object.

The following plugins are currently supported:

- style - The style of the submission. Defaults to `'conventional'`. Can be `'angular'`.
- monorepo - Whether monorepo is supported. Defaults to `true` for automatic detection. Can be `false` (disabled), `'learn'`, `'nx'`, `'pnpm-workspace'`, `'rush'`.

```javascript
// commitlint.config.mjs
// or commitlint.config.js with "type": "module" in package.json
import {
  commitlint,
  hasLerna,
  hasNx,
  hasPnpmWorkspace,
  hasRush,
} from '@modyqyw/fabric';

export default commitlint({
  monorepo: hasPnpmWorkspace
    ? 'pnpm-workspace'
    : hasLerna
      ? 'lerna'
      : hasNx
        ? 'nx'
        : hasRush
          ? 'rush'
          : false,
  style: 'conventional',
});
```

::: tip Writing a commit message
Writing a commit message is not an easy task for the uninitiated. Fortunately, there are many ways to simplify the process.

You can install the [VSC Plugin](https://marketplace.visualstudio.com/search?term=commit&target=VSCode&category=All%20categories&sortBy=Relevance) and [ WebStorm plugin](https://plugins.jetbrains.com/search?products=webstorm&search=commit) to assist in writing commit messages.

For the command line, you can use [commitizen](https://github.com/commitizen/cz-cli) and implement integration with commitlint using @commitlint/prompt. See [Commitlint Guide: Using prompt](https://commitlint.js.org/#/guides-use-prompt) for details on the latter.
:::

The second parameter is used for further customization, you can pass an object to override the generated configuration.

```javascript
// commitlint.config.mjs
// or commitlint.config.js with "type": "module" in package.json
import { commitlint } from '@modyqyw/fabric';

export default commitlint(undefined, {
  // configs that require customization
});
```

## Integration

### simple-git-hooks

If you are using the simple-git-hooks configuration provided by the package, see the [simple-git-hooks chapter](../git/simple-git-hooks.md).

If you are not, you can refer to the following configuration.

```javascript
// simple-git-hooks.cjs
module.exports = {
  'commit-msg': 'npx commitlint --edit ${1}',
};
```
