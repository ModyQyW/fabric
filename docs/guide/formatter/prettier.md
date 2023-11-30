# Prettier

## Installation

You have to install Prettier first.

::: code-group

```shell [npm]
npm install prettier -D
```

```shell [yarn]
yarn add prettier -D
```

```shell [pnpm]
pnpm install prettier -D
```

```shell [bun]
bun install prettier -d
```

:::

## Configuration

You need to check your `package.json` for the presence of `"type": "module"`. If it exists, check the [ESM section](#esm), otherwise check the [CJS section](#cjs).

### ESM

```js
// prettier.config.js with "type": "module" in package.json
// or prettier.config.mjs
import { prettier } from '@modyqyw/fabric';
// or
// import { prettier } from '@modyqyw/fabric/prettier';

export default prettier();
```

### CJS

```js
// prettier.config.js without "type": "module" in package.json
// or prettier.config.cjs
const { prettier } = require('@modyqyw/fabric');
// or
// const { prettier } = require('@modyqyw/fabric/prettier');

module.exports = prettier();
```

### CLI

Update your `package.json` and add `format` script.

```json
{
  "scripts": {
    "format": "prettier . \"!package-lock.json\" \"!yarn.lock\" \"!pnpm-lock.yaml\" \"bun.lock\"  --ignore-unknown --write --cache"
  }
}
```

## Customization

Passing parameters to the exported `prettier` method can customize, and the `prettier` method takes two parameters.

### Basic

The first parameter is used for basic customization, you can pass either `undefined` or an object. To explicitly enable or disable a plugin, you need to explicitly set the boolean value in the passed object.

The following plugins are currently supported:

- [prettier-plugin-css-order](https://github.com/Siilwyn/prettier-plugin-css-order) - Sort CSS or SCSS declarations. Disabled by default.
- [@ianvs/prettier-plugin-sort-imports](https://github.com/ianvs/prettier-plugin-sort-imports) - Sort import declarations. Disabled by default.
- [prettier-plugin-jsdoc](https://github.com/hosseinmd/prettier-plugin-jsdoc) - Format JSDoc and TSDoc comments. Enabled by default.
- [prettier-plugin-organize-attributes](https://github.com/NiklasPor/prettier-plugin-organize-attributes) - Organize HTML / Vue attributes. Disabled by default.
- [prettier-plugin-organize-imports](https://github.com/simonhaenisch/prettier-plugin-organize-imports) - Sort import declarations. Disabled by default.
- [prettier-plugin-packagejson](https://github.com/matzkoh/prettier-plugin-packagejson) - Sort package.json. Enabled by default.
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) - Sort HTML / Vue class attribute. Enabled by default if you have TailwindCSS installed.
- [@trivago/prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports) - Sort import declarations. Disabled by default.

```javascript
// prettier.config.js with "type": "module" in package.json
import { hasTailwindCss, prettier } from '@modyqyw/fabric';

export default prettier({
  // prettier-plugin-css-order
  // false by default, disabled
  cssOrder: false,
  // @ianvs/prettier-plugin-sort-imports
  // false by default, disabled
  ianvsSortImports: false,
  // prettier-plugin-jsdoc
  // true by default, enabled
  jsdoc: true,
  // prettier-plugin-organize-attributes
  // false by default, disabled
  organizeAttributes: false,
  // prettier-plugin-organize-imports
  // false by default, disabled
  organizeImports: false,
  // prettier-plugin-packagejson
  // true by default, enabled
  packageJson: true,
  // prettier-plugin-tailwindcss
  // enabled by default if you have TailwindCSS installed
  tailwindcss: hasTailwindCss,
  // @trivago/prettier-plugin-sort-imports
  // false by default, disabled
  trivagoSortImports: false,
});
```

::: warning Potential conflicts

1. prettier-plugin-css-order may conflict with stylelint-config-recess-order, so it is disabled by default. If you want to enable prettier-plugin-css-order, please disable stylelint-config-recess-order. See [Stylelint chapter Customization section](../linter/stylelint#customization).

2. @ianvs/prettier-plugin-sort-imports, @trivago/prettier-plugin-sort-imports, and prettier-plugin-organize-imports are in conflict with each other, and may conflict with the eslint- plugin-perfectionist, so they are disabled by default. If you want to enable one of the three, please disable eslint-plugin-perfectionist. See [ESLint chapter Customization section](../linter/eslint#customization).

3. prettier-plugin-organize-attributes may conflict with eslint-plugin-perfectionist, so it is disabled by default. If you want to enable prettier-plugin-organize-attributes, turn off eslint-plugin-perfectionist, see [ESLint chapter Customization section](../linter/eslint#customization).

4. prettier-plugin-packagejson does not conflict with eslint-plugin-jsonc by default. If you want to use eslint-plugin-jsonc to sort package.json, please disable prettier-plugin-packagejson.

5. prettier-plugin-tailwindcss may conflict with eslint-plugin-unocss. When you use both TailwindCSS and UnoCSS, please disable one of them manually. If you want to disable eslint-plugin-unocss, see [ESLint chapter Customization section](../linter/eslint#customization).

:::

### Enhanced

The second parameter is used for advanced customization, where you can pass an object to override the generated configuration.

```javascript
// prettier.config.js with "type": "module" in package.json
import { prettier } from '@modyqyw/fabric';

export default prettier(undefined, {
  // use prettier-plugin-svelte 和 prettier-plugin-tailwindcss
  // prettier-plugin-tailwindcss must be the last one
  // plugins in the default configuration will be directly overridden
  plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
});
```

If you wish to add custom configurations to the default configuration, you can do like below:

```javascript
// prettier.config.js with "type": "module" in package.json
import { prettier } from '@modyqyw/fabric';

const defaultConfig = prettier();

export default {
  ...defaultConfig,
  // use prettier-plugin-jsdoc、prettier-plugin-packagejson、prettier-plugin-svelte 和 prettier-plugin-tailwindcss
  // prettier-plugin-tailwindcss must be the last one
  plugins: [
    ...defaultConfig,
    'prettier-plugin-svelte',
    'prettier-plugin-tailwindcss',
  ],
};
```

## Integration

### How to integrate with VSC?

Install [the corresponding Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) first.

Update the global user configuration as follows, this will specify the default code formatter as Prettier, after which you can use shortcuts to format the code manually. Don't know how to update it? See [here](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson).

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

If you want to auto format within a specific project, you can modify the working directory configuration as follows, which will automatically format the code after each save. Don't know how to modify it? See [here](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings).

```json
{
  "editor.formatOnSave": true
}
```

::: tip Why not always auto formatting?

The code world doesn't have just one configuration, and chances are that the project you're collaborating on doesn't use a code formatter, but instead uses libraries such as [ESLint Stylistic](https://eslint.style/), [stylelint-stylistic](https://github.com/elirasza/stylelint-stylistic) and other libraries that integrate with linters. At this point, if you do auto formatting, it may cause the project code to be messed up and continue to report warnings or errors. It is recommended to use auto-formatting within projects that are sure to use code formatters.

:::

### How to integrate with lint-staged?

Please see [lint-staged chapter](../git/lint-staged.md).

### Why not integrate with ESLint?

> Running Prettier inside the linter slows down the linting process, might clutter the editor with annoying warnings, and adds one layer of indirection where things may break. [Prettier's official documentation](https://prettier.io/docs/en/integrating-with-linters.html) recommends using separate commands for linting and formatting, i.e., Prettier for code formatting concerns and ESLint for code-quality concerns.

Quoted from [vuejs/eslint-config-prettier](https://github.com/vuejs/eslint-config-prettier#use-separate-commands-for-linting-and-formatting).
