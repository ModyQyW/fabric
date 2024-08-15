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

```shell [bun(experimental)]
bun install stylelint -d
```

:::

## Configuration

```javascript
// stylelint.config.mjs
import { stylelint } from '@modyqyw/fabric/stylelint';

export default stylelint();
```

Update `package.json` and add `lint:stylelint` script.

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

The first parameter is used for basic customization; you can pass no or empty objects to indicate the use of default values. To explicitly enable or disable a plugin, you need to explicitly set the boolean value in the passed object.

The following is the default configuration, Vue, CSS Modules and TailwindCSS support are included by default:

```javascript
// stylelint.config.mjs
import { hasScss } from '@modyqyw/fabric';
import { stylelint } from '@modyqyw/fabric/stylelint';

export default stylelint({
  // based on stylelint-order and stylelint-config-recess-order
  // enabled by default
  order: true,
  // based on stylelint-scss, stylelint-config-recommended-scss and stylelint-config-standard-scss
  // enabled by default if you have sass installed
  scss: hasScss,
});
```

The second parameter is used for further customization, you can pass an object to override the generated configuration. If you want to tweak the plugin, you'll need to install the appropriate dependencies yourself and keep an eye out for [Plugin Conflicts](#plugin-conflicts).

```javascript
// stylelint.config.mjs
import { stylelint } from '@modyqyw/fabric/stylelint';

export default stylelint(
  {},
  {
    rules: {
      // rules that require customization
    },
  },
);
```

If you wish to add customization to the default configuration, you can do so like below, which also requires you to install the appropriate dependencies yourself and watch out for plugin conflicts:

```javascript
// stylelint.config.mjs
import { stylelint } from '@modyqyw/fabric/stylelint';

const defaultConfig = stylelint();

export default {
  ...defaultConfig,
  rules: {
    ...defaultConfig.rules,
    // rules that require customization
  },
};
```

### LESS support

::: warning LESS status
LESS is not under active development and it is highly recommended to use SCSS or CSS Modules instead of LESS.
:::

You need to install [stylelint-config-standard-less](https://github.com/stylelint-scss/stylelint-config-standard-less) manually.

```javascript
// stylelint.config.mjs
import { stylelint } from '@modyqyw/fabric';

// Cannot enable both at the same time.
const defaultConfig = stylelint({ scss: false });

export default {
  ...defaultConfig,
  extends: [...defaultConfig.extends, 'stylelint-config-standard-less'],
  rules: {
    ...defaultConfig.rules,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          // css modules
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.4.0/index.js
          'value',
          // tailwindcss
          // https://tailwindcss.com/docs/functions-and-directives#directives
          'tailwind',
          'layer',
          'apply',
          'config',
          // LESS
          'plugin',
        ],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          // css modules
          // https://github.com/pascalduez/stylelint-config-css-modules/blob/4.4.0/index.js
          'export',
          'import',
          'local',
          'external',
          // css modules
          // also vue global selectors
          // also LESS
          // https://vuejs.org/api/sfc-css-features.html#scoped-css
          'global',
          // vue deep selectors
          // https://vuejs.org/api/sfc-css-features.html#deep-selectors
          'deep',
          // vue slotted selectors
          // https://vuejs.org/api/sfc-css-features.html#slotted-selectors
          'slotted',
        ],
      },
    ],
  },
};
```

## FAQ

### Integration of VSC?

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
      "source.fixAll.stylelint": "explicit",
    },
  },

  // Stylelint auto-fix after Vue manual save.
  "[vue]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": "explicit",
    },
  },
}
```

### Integration of WebStorm?

WebStorm comes with Stylelint, see [Integration of VSC?](#integration-of-vsc) to tweak it yourself.

### Integration of lint-staged?

If you are using the lint-staged configuration provided by the package, see the [lint-staged chapter](../git/lint-staged.md).

If you are not, you can refer to the following configuration.

```javascript
// lint-staged.config.mjs
export default {
  '*.{css,scss,vue}': 'stylelint --fix --cache --aei --ignore-path=.gitignore',
};
```

### Integration of Prettier?

Cited from [vuejs/eslint-config-prettier](https://github.com/vuejs/eslint-config-prettier#use-separate-commands-for-linting-and-formatting):

> Running prettier inside the linter slows down the linting process, might clutter the editor with annoying warnings, and adds one layer of indirection where things may break. [Prettier's official documentation](https://prettier.io/docs/en/integrating-with-linters.html) recommends using separate commands for linting and formatting, i.e., Prettier for code formatting concerns and ESLint for code-quality concerns.

This library is consistent with its view that it is not recommended to call Prettier from within ESLint and Stylelint, and it is recommended to run Prettier separately. By default, running ESLint and Stylelint will not conflict with Prettier or other code formatters. See also the [Prettier chapter](.../formatter/prettier)

### Plugin conflicts?

| ESLint Plugins                                                      | Prettier Plugins                                                                                             | Stylelint Plugins             | Notes                                                                                                                                                                                                                  |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| eslint-plugin-perfectionist、eslint-plugin-import-x                 | @ianvs/prettier-plugin-sort-imports、@trivago/prettier-plugin-sort-imports、prettier-plugin-organize-imports |                               | They both handle the import order and conflict with each other, and are handled by default with eslint-plugin-perfectionist.                                                                                           |
| eslint-plugin-perfectionist、eslint-plugin-vue、eslint-plugin-react | prettier-plugin-organize-attributes                                                                          |                               | They both handle attribute ordering of components or elements, by default using eslint-plugin-vue to handle Vue component attribute ordering, and eslint-plugin-react to handle React component ordering.              |
| eslint-plugin-jsonc                                                 | prettier-plugin-packagejson                                                                                  |                               | If you use eslint-plugin-jsonc to sort package.json you may get conflicts.                                                                                                                                             |
| eslint-plugin-tailwindcss、eslint-plugin-unocss                     | prettier-plugin-tailwindcss                                                                                  |                               | All three handle the sorting of classes, and the ESLint plugin is enabled by default depending on whether it is installed or not; if it is installed at the same time, you need to explicitly enable only one of them. |
|                                                                     | prettier-plugin-css-order                                                                                    | stylelint-config-recess-order | Both handle the ordering of CSS properties, by default using stylelint-config-recess-order.                                                                                                                            |
