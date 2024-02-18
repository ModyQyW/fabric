# oxlint

oxlint is an emerging linter that requires no configuration by default and is mainly used for script files.

::: Positioning of tip oxlint
oxlint is not a complete replacement for ESLint; rather, oxlint complements ESLint because oxlint is very fast. You can run oxlint before running ESLint to get a faster feedback loop.
:::

## Installation

You have to install oxlint first. Currently oxlint v0.2 is supported.

::: code-group

```shell [npm]
npm install oxlint -D
```

```shell [yarn]
yarn add oxlint -D
```

```shell [pnpm]
pnpm install oxlint -D
```

```shell [bun(experimental)]
bun install oxlint -d
```

:::

## Configuration

### CLI

Update your `package.json` and add `lint:oxlint` script.

```json
{
  "scripts": {
    "lint:oxlint": "oxlint --deny=correctness --deny=perf --fix"
  }
}
```

## Integration

### How to integrate with lint-staged?

If you are using the lint-staged configuration provided by the package, see the [lint-staged chapter](../git/lint-staged.md).

If you are not, you can refer to the following configuration.

```javascript
// lint-staged.config.mjs
// or lint-staged.config.js with "type": "module" in package.json
export default {
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}': [
    'oxlint --deny=correctness --deny=perf --fix'
    'eslint --fix --cache --no-error-on-unmatched-pattern',
  ],
};
```
