# oxlint

oxlint is an emerging linter that requires no configuration by default and is mainly used for script files.

::: tip Positioning of tip oxlint
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

::: tip Ignoring files

While the ESLint config provides .gitignore, .eslintignore, and some built-in ignore files support, oxlint only supports specifying a single ignore pattern file, and uses both the .gitignore and .eslintignore ignore pattern files by default.

If you have other files to ignore, you can use `--ignore-pattern` like below. It ignores all dts files, which is useful in projects that automatically generate dts files.

```json
{
  "scripts": {
    "lint:oxlint": "oxlint --deny=correctness --deny=perf --ignore-pattern=*.d.ts --fix"
  }
}
```

:::

## Integration

### lint-staged

If you are using the lint-staged configuration provided by the package, see the [lint-staged chapter](../git/lint-staged.md).

If you are not, you can refer to the following configuration.

```javascript
// lint-staged.config.mjs
// or lint-staged.config.js with "type": "module" in package.json
import { filterFilenames } from '@modyqyw/fabric';

export default {
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}': (filenames) => {
    const filtered = filterFilenames(filenames);
    return [
      `oxlint --deny=correctness --deny=perf --fix ${filtered.join(' ')}`,
      `eslint --fix --cache --no-error-on-unmatched-pattern ${filtered.join(' ')}`,
    ];
  },
};
```
