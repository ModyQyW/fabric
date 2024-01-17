# commitlint

commitlint is a widely adopted Git tool that lints commit messages and helps your team adhere to a commit convention.

## Installation

首先你需要安装 commitlint。目前支持 commitlint v18。

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

You need to check your `package.json` for the presence of `"type": "module"`. If it exists, check the [ESM section](#esm), otherwise check the [CJS section](#cjs).

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
  style: 'conventional',
  monorepo: hasPnpmWorkspace
    ? 'pnpm-workspace'
    : hasLerna
      ? 'lerna'
      : hasNx
        ? 'nx'
        : hasRush
          ? 'rush'
          : false,
});
```

The second parameter is used for further customization, you can pass an object to override the generated configuration.

```javascript
// commitlint.config.mjs
// or commitlint.config.js with "type": "module" in package.json
import { commitlint } from '@modyqyw/fabric';

export default commitlint(undefined, {
  // configs that require customization
  ...,
})
```

## Integration

### How to integrate with simple-git-hooks?

If you are using the simple-git-hooks configuration provided by the package, see the [simple-git-hooks chapter](../git/simple-git-hooks.md).

If you are not, you can refer to the following configuration.

```javascript
// simple-git-hooks.cjs
module.exports = {
  'commit-msg': 'npx commitlint --edit ${1}',
};
```
