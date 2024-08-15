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

:::

## Configuration

Create `lint-staged.config.mjs` in your project root:

```javascript
// lint-staged.config.mjs
import { lintStaged } from '@modyqyw/fabric/lint-staged';

export default lintStaged();
```

## Customization

### Parameters

Passing parameters to the exported `lintStaged` method can customize, and the `lintStaged` method takes two parameters.

The first parameter is used for basic customization; you can pass no or empty objects to indicate the use of default values. To explicitly enable or disable a plugin, you need to explicitly set the boolean value in the passed object.

The following is the default configuration:

```javascript
// lint-staged.config.mjs
import {
  hasBiome,
  hasESLint,
  hasMarkdownlintCli,
  hasOxlint,
  hasPrettier,
  hasStylelint,
} from '@modyqyw/fabric';
import { lintStaged } from '@modyqyw/fabric/lint-staged';

export default lintStaged({
  // Check with Biome.
  // Enabled by default if you have Biome installed.
  biome: hasBiome,
  // Lint scripts with ESLint.
  // Enabled by default if you have ESLint installed and you have not enabled Biome.
  eslint: hasESLint && hasBiome,
  // Lint JSON with ESLint when ESLint is enabled.
  // Enabled by default.
  lintJsonc: true,
  // Lint TOML with ESLint when ESLint is enabled.
  // Enabled by default.
  lintToml: true,
  // Lint YML with ESLint when ESLint is enabled.
  // Enabled by default.
  lintYml: true,
  // Lint markdown files with markdownlint-cli.
  // Enabled by default if you have markdownlint-cli installed.
  markdownlint: hasMarkdownlintCli,
  // Lint scripts with oxlint.
  // Enabled by default if you have oxlint installed and you have not enabled Biome.
  oxlint: hasOxlint && !hasBiome,
  // Format with Prettier.
  // Enabled by default if you have Prettier installed and you have not enabled Biome.
  prettier: hasPrettier && !hasBiome,
  // Format CHANGELOG.md with Prettier when Prettier is enabled.
  formatChangelog: false,
  // Lint styles with Stylelint.
  // Enabled by default if you have Stylelint installed and you have not enabled Biome.
  stylelint: hasStylelint && !hasBiome,
});
```

The second parameter is used for further customization, you can pass an object to override the generated configuration.

```javascript
// lint-staged.config.mjs
import { lintStaged } from '@modyqyw/fabric/lint-staged';

export default lintStaged(
  {},
  {
    // operations that require customization
  },
);
```

## FAQ

### Integration of simple-git-hooks?

If you are using the simple-git-hooks configuration provided by the package, see the [simple-git-hooks chapter](../git/simple-git-hooks.md).

If you are not, you can refer to the following configuration.

```javascript
// simple-git-hooks.cjs
module.exports = {
  'pre-commit': 'npx lint-staged',
};
```
