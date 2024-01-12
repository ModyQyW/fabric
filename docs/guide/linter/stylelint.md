# Stylelint

Stylelint is a widely adopted linter, mainly for style files.

## Installation

You have to install Stylelint first. Currently Stylelint v16 is supported.

::: code-group

```shell [npm]
npm install stylelint -D
```

```shell [yarn]
yarn add stylelint -D
```

```shell [pnpm]
pnpm install stylelint -D
```

```shell [bun]
bun install stylelint -d
```

:::

## Configuration

You need to check your `package.json` for the presence of `"type": "module"`. If it exists, check the [ESM section](#esm), otherwise check the [CJS section](#cjs).

### ESM

```javascript
// stylelint.config.mjs
// or stylelint.config.js with "type": "module" in package.json
import { stylelint } from '@modyqyw/fabric';
// or
// import { stylelint } from '@modyqyw/fabric/stylelint';

export default stylelint();
```

### CJS

```javascript
// stylelint.config.cjs
// or stylelint.config.js without "type": "module" in package.json
const { stylelint } = require('@modyqyw/fabric');
// or
// const { stylelint } = require('@modyqyw/fabric/stylelint');

module.exports = stylelint();
```

### CLI

Update your `package.json` and add `lint:stylelint` script.

```json
{
  "scripts": {
    "lint:stylelint": "stylelint \"./**/*.{css,scss,vue}\" --fix --cache --aei --ignore-path=.gitignore"
  }
}
```

## Customization

### Parameters

Passing parameters to the exported `stylelint` method can customize, and the `stylelint` method takes two parameters.

The first parameter is used for basic customization, you can pass either `undefined` or an object. To explicitly enable or disable a plugin, you need to explicitly set the boolean value in the passed object.

The following plugins are currently supported:

- order - Based on [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order). Sort CSS properties. Enabled by default.
- scss - Based on [stylelint-scss](https://github.com/stylelint-scss/stylelint-scss). Support SCSS. Enabled by default if you have [sass](https://github.com/sass/dart-sass) installed.
- style - What style of configuration to use. By default `'recommended'` and can be `'standard'`.

```javascript
// stylelint.config.mjs
// or stylelint.config.js with "type": "module" in package.json
import { hasScss } from '@modyqyw/fabric';

export default stylelint({
  // based on stylelint-config-recess-order
  // enabled by default
  order: true,
  // based on stylelint-scss
  // enabled by default if you have sass installed
  scss: hasScss,
  // what style of configuration to use
  // by default `'recommended'`
  // can be `'standard'`
  style: 'recommended',
});
```

::: warning Potential conflicts

1. stylelint-config-recess-order may conflict with prettier-plugin-css-order and prettier-plugin-css-order is disabled by default. If you want to enable prettier-plugin-css-order, see [Prettier chapter Customization section](../formatter/prettier.md#Customization) and disabled stylelint-config-recess-order.

:::

The second parameter is used for further customization, you can pass an object to override the generated configuration.

```javascript
// stylelint.config.mjs
// or stylelint.config.js with "type": "module" in package.json
import { stylelint } from '@modyqyw/fabric';

export default stylelint(undefined, {
  rules: {
    // rules that require customization
  },
});
```

If you wish to add customization to the default configuration (e.g., support for LESS), you can do so as follows (you will need to install the dependencies yourself):

```javascript
// stylelint.config.mjs
// or stylelint.config.js with "type": "module" in package.json
import { stylelint } from '@modyqyw/fabric';

const defaultConfig = stylelint();

export default {
  ...defaultConfig,
  rules: {
    ...defaultConfig.rules,
    // rules that require customization
  },
};
```

::: warning Potential conflicts

The configuration supports Vue, TailwindCSS and Module CSS by default. When customizing the rules, please adjust them carefully to avoid overriding them and causing errors.

:::

## Integration

### How to integrate with VSC?

Install [the corresponding Stylelint plugin](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) first.

Update [user settings](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson) or [workspace settings](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings) as appropriate.

```jsonc
{
  // Disable the built-in CSS linter.
  "css.validate": false,

  // Disable the built-in LESS linter.
  "less.validate": false,

  // Disable the built-in SCSS linter.
  "scss.validate": false,

  // Languages that enable Stylelint snippets.
  "stylelint.snippet": ["css", "scss", "vue"],

  // Languages that ESLint validates.
  "stylelint.validate": ["css", "scss", "vue"],

  // Stylelint auto-fix after CSS, SCSS manual save.
  "[css][scss]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": "explicit"
    }
  },

  // Stylelint auto-fix after Vue manual save.
  "[vue]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": "explicit"
    }
  }
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
  '*.{css,scss,vue}': 'stylelint --fix --cache --aei --ignore-path=.gitignore';
};
```
