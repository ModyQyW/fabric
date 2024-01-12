# Prettier

Prettier is a widely-adopted code formatter with good support for JavaScript / TypeScript / JSX / TSX / CSS / SCSS / Vue, and it's my top pick for formatters.

::: tip Other options
[Biome](https://biomejs.dev/) 和 [dprint](https://dprint.dev/) are the up-and-comers. You might consider using them if you think Prettier is slow, but you'll need to configure them yourself. Be careful: they are not 100% compatible with Prettier, and their support for CSS / SCSS / Vue is limited, so you may get unexpected results.
:::

## Installation

You have to install Prettier first. Currently Prettier v3 is supported.

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
// prettier.config.mjs
// or prettier.config.js with "type": "module" in package.json
import { prettier } from '@modyqyw/fabric';
// or
// import { prettier } from '@modyqyw/fabric/prettier';

export default prettier();
```

### CJS

```js
// prettier.config.cjs
// or prettier.config.js without "type": "module" in package.json
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
    "format": "prettier . \"!*lock*\" --ignore-unknown --write --cache --log-level=warn"
  }
}
```

## Customization

### Parameters

Passing parameters to the exported `prettier` method can customize, and the `prettier` method takes two parameters.

The first parameter is used for basic customization, you can pass either `undefined` or an object. To explicitly enable or disable a plugin, you need to explicitly set the boolean value in the passed object.

The following plugins are currently supported:

- cssOrder - Based on [prettier-plugin-css-order](https://github.com/Siilwyn/prettier-plugin-css-order). Sort CSS or SCSS declarations. Disabled by default.
- ianvsSortImports - Based on [@ianvs/prettier-plugin-sort-imports](https://github.com/ianvs/prettier-plugin-sort-imports).Sort import declarations. Disabled by default.
- jsdoc - Based on [prettier-plugin-jsdoc](https://github.com/hosseinmd/prettier-plugin-jsdoc). Format JSDoc and TSDoc comments. Enabled by default.
- organizeAttributes - Based on [prettier-plugin-organize-attributes](https://github.com/NiklasPor/prettier-plugin-organize-attributes). Organize HTML / Vue attributes. Disabled by default.
- organizeImports - Based on [prettier-plugin-organize-imports](https://github.com/simonhaenisch/prettier-plugin-organize-imports). Sort import declarations. Disabled by default.
- packageJson - Based on [prettier-plugin-packagejson](https://github.com/matzkoh/prettier-plugin-packagejson). Sort package.json. Enabled by default.
- tailwindcss - Based on [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss). Sort HTML / Vue class attribute. Enabled by default if you have TailwindCSS installed.
- trivagoSortImports - Based on [@trivago/prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports). Sort import declarations. Disabled by default.

```javascript
// prettier.config.mjs
// or prettier.config.js with "type": "module" in package.json
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

1. prettier-plugin-css-order may conflict with stylelint-config-recess-order, so it is disabled by default. If you want to enable prettier-plugin-css-order, please disable stylelint-config-recess-order. See [Stylelint chapter Customization section](../linter/stylelint#Customization).

2. @ianvs/prettier-plugin-sort-imports, @trivago/prettier-plugin-sort-imports, and prettier-plugin-organize-imports are in conflict with each other, and may conflict with the eslint- plugin-perfectionist, so they are disabled by default. If you want to enable one of the three, please disable eslint-plugin-perfectionist. See [ESLint chapter Customization section](../linter/eslint#Customization).

3. prettier-plugin-organize-attributes may conflict with eslint-plugin-perfectionist, so it is disabled by default. If you want to enable prettier-plugin-organize-attributes, turn off eslint-plugin-perfectionist, see [ESLint chapter Customization section](../linter/eslint#Customization).

4. prettier-plugin-packagejson does not conflict with eslint-plugin-jsonc by default. If you want to use eslint-plugin-jsonc to sort package.json, please disable prettier-plugin-packagejson.

5. prettier-plugin-tailwindcss may conflict with eslint-plugin-unocss. When you use both TailwindCSS and UnoCSS, please disable one of them manually. If you want to disable eslint-plugin-unocss, see [ESLint chapter Customization section](../linter/eslint#Customization).

:::

The second parameter is used for further customization, you can pass an object to override the generated configuration (you will need to install the dependencies yourself).

```javascript
// prettier.config.mjs
// or prettier.config.js with "type": "module" in package.json
import { prettier } from '@modyqyw/fabric';

export default prettier(undefined, {
  // use prettier-plugin-svelte 和 prettier-plugin-tailwindcss
  // prettier-plugin-tailwindcss must be the last one
  // plugins in the default configuration will be directly overridden
  plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
});
```

If you wish to add custom configurations to the default configuration, you can do like below (you will need to install the dependencies yourself):

```javascript
// prettier.config.mjs
// or prettier.config.js with "type": "module" in package.json
import { prettier } from '@modyqyw/fabric';

const defaultConfig = prettier();

export default {
  ...defaultConfig,
  // use prettier-plugin-jsdoc、prettier-plugin-packagejson、prettier-plugin-svelte 和 prettier-plugin-tailwindcss
  // prettier-plugin-tailwindcss must be the last one
  plugins: [
    ...defaultConfig.plugins,
    'prettier-plugin-svelte',
    'prettier-plugin-tailwindcss',
  ],
};
```

## Integration

### How to integrate with VSC?

Install [the corresponding Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) first.

Update [user settings](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson) or [workspace settings](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings) as appropriate.

```json
{
  // Specifies the default formatter to Prettier.
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // Format on save.
  "editor.formatOnSave": true
}
```

### How to integrate with WebStorm?

WebStorm comes with Prettier, see [How to integrate with VSC?](#how-to-integrate-with-vsc) to tweak it yourself.

### How to integrate with lint-staged?

If you are using the lint-staged configuration provided by the package, see the [lint-staged chapter](../git/lint-staged.md).

If you are not, you can refer to the following configuration.

```javascript
// lint-staged.config.cjs
module.exports = {
  '*': 'prettier "!*lock*" --ignore-unknown --write --cache',
};
```

### Why not integrate with ESLint?

> Running Prettier inside the linter slows down the linting process, might clutter the editor with annoying warnings, and adds one layer of indirection where things may break. [Prettier's official documentation](https://prettier.io/docs/en/integrating-with-linters.html) recommends using separate commands for linting and formatting, i.e., Prettier for code formatting concerns and ESLint for code-quality concerns.

Quoted from [vuejs/eslint-config-prettier](https://github.com/vuejs/eslint-config-prettier#use-separate-commands-for-linting-and-formatting).
