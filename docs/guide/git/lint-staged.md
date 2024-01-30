# lint-staged

lint-staged is a widely adopted Git tool that executes commands against staged git files to prevent erroneous code from entering the repository.

## Installation

You have to install lint-staged first. Currently lint-staged v15 is supported.

::: code-group

```shell [npm]
npm install lint-staged -D
```

```shell [yarn]
yarn add lint-staged -D
```

```shell [pnpm]
pnpm install lint-staged -D
```

```shell [bun(experimental)]
bun install lint-staged -d
```

:::

## Configuration

### ESM

```javascript
// lint-staged.config.mjs
// or lint-staged.config.js with "type": "module" in package.json
import { lintStaged } from '@modyqyw/fabric';
// or
// import { lintStaged } from '@modyqyw/fabric/lint-staged';

export default lintStaged();
```

### CJS

```javascript
// lint-staged.config.cjs
// or lint-staged.config.js without "type": "module" in package.json
const { lintStaged } = require('@modyqyw/fabric');
// or
// const { lintStaged } = require('@modyqyw/fabric/lint-staged');

module.exports = lintStaged();
```

## Customization

### Parameters

Passing parameters to the exported `lintStaged` method can customize, and the `lintStaged` method takes two parameters.

The first parameter is used for basic customization, you can pass either `undefined` or an object. To explicitly enable or disable a plugin, you need to explicitly set the boolean value in the passed object.

The following plugins are currently supported:

- eslint - Lint scripts with ESLint. Enabled by default if you have ESLint installed.
- jsonc - Lint JSON files with ESLint when ESLint is enabled. Enabled by default.
- yml - Lint YML files with ESLint when ESLint is enabled. Enabled by default.
- oxlint - Lint scripts with oxlint. Enabled by default if you have oxlint installed.
- stylelint - Lint styles with Stylelint. Enabled by default if you have Stylelint installed.
- markdownlint - Lint markdown files with markdownlint. Enabled by default if you have markdownlint-cli installed.
- prettier：Format with Prettier. Enabled by default if you have Prettier installed.

```javascript
// lint-staged.config.mjs
// or lint-staged.config.js with "type": "module" in package.json
import {
  lintStaged,
  hasESLint,
  hasOxlint,
  hasStylelint,
  hasMarkdownlintCli,
  hasPrettier,
} from '@modyqyw/fabric';

export default lintStaged({
  eslint: hasESLint,
  jsonc: true,
  yml: true,
  oxlint: hasOxlint,
  stylelint: hasStylelint,
  markdownlint: hasMarkdownlintCli,
  prettier: hasPrettier,
});
```

The second parameter is used for further customization, you can pass an object to override the generated configuration.

```javascript
// lint-staged.config.mjs
// or lint-staged.config.js with "type": "module" in package.json
import { lintStaged } from '@modyqyw/fabric';

export default lintStaged(undefined, {
  // operations that require customization
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
  'pre-commit': 'npx lint-staged',
};
```
