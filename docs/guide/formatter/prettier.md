# Prettier

Prettier is a widely adopted code formatter with good support for JavaScript / TypeScript / JSX / TSX / CSS / SCSS / Vue, and it's my top pick for formatters.

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

:::

## Configuration

Create `prettier.config.mjs` in your project root:

```js
// prettier.config.mjs
import { prettier } from "@modyqyw/fabric/prettier";

export default prettier();
```

Update `package.json` and add `format` script.

```json
{
  "scripts": {
    "format": "prettier . \"!**/package-lock.json\" \"!**/yarn.lock\" \"!**/pnpm-lock.yaml\" --ignore-unknown --write --cache --log-level=warn"
  }
}
```

::: tip Ignoring files

While the ESLint config provides .gitignore, .eslintignore, and some built-in ignore files support, Prettier supports specifying multiple ignore pattern files, and uses both the .gitignore and .prettierignore ignore pattern files by default.

If you have other files to ignore, you can use negative patterns like above. The example below ignores all dts files, which is useful in projects that automatically generate dts files.

```json
{
  "scripts": {
    "format": "prettier . \"!**/package-lock.json\" \"!**/yarn.lock\" \"!**/pnpm-lock.yaml\" \"!**/*.d.ts\" --ignore-unknown --write --cache --log-level=warn"
  }
}
```

The example below ignores CHANGELOG.md, which is useful in projects that automatically generate a changelog file.

```json
{
  "scripts": {
    "format": "prettier . \"!**/package-lock.json\" \"!**/yarn.lock\" \"!**/pnpm-lock.yaml\" \"!**/CHANGELOG*.md\" --ignore-unknown --write --cache --log-level=warn"
  }
}
```

:::

## Customization

### Parameters

Passing parameters to the exported `prettier` method can customize, and the `prettier` method takes two parameters.

The first parameter is used for basic customization; you can pass no or empty objects to indicate the use of default values. To explicitly enable or disable a plugin, you need to explicitly set the boolean value in the passed object.

The following is the default configuration:

```javascript
// prettier.config.mjs
import { hasTailwindCss } from "@modyqyw/fabric";
import { prettier } from "@modyqyw/fabric/prettier";

export default prettier({
  // Based on prettier-plugin-jsdoc
  // Default true (enabled)
  jsdoc: true,
});
```

The second parameter is used for further customization, you can pass an object to override the generated configuration. If you want to tweak the plugin, you'll need to install the appropriate dependencies yourself and keep an eye out for [Plugin Conflicts](#plugin-conflicts).

```javascript
// prettier.config.mjs
import { prettier } from "@modyqyw/fabric/prettier";

export default prettier(
  {},
  {
    // use prettier-plugin-svelte and prettier-plugin-tailwindcss
    // prettier-plugin-tailwindcss must be the last one
    // plugins in the default configuration will be directly overridden
    plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],

    overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
  },
);
```

If you wish to add customization to the default configuration, you can do so like below, which also requires you to install the appropriate dependencies yourself and watch out for plugin conflicts:

```javascript
// prettier.config.mjs
import { prettier } from "@modyqyw/fabric";

const defaultConfig = prettier();

export default {
  ...defaultConfig,
  // use prettier-plugin-jsdoc、prettier-plugin-svelte and prettier-plugin-tailwindcss
  // prettier-plugin-tailwindcss must be the last one
  plugins: [
    ...defaultConfig.plugins,
    "prettier-plugin-svelte",
    "prettier-plugin-tailwindcss",
  ],

  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
```

## FAQ

### Integration of VSC?

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

### Integration of WebStorm?

WebStorm comes with Prettier, see [Integration of VSC?](#integration-of-vsc) to tweak it yourself.

### Integration of lint-staged?

If you are using the lint-staged configuration provided by the package, see the [lint-staged chapter](../git/lint-staged.md).

If you are not, you can refer to the following configuration.

```javascript
// lint-staged.config.mjs
import { filterFilenames } from "@modyqyw/fabric";

export default {
  "*": (filenames) => {
    const filtered = filterFilenames(filenames);
    return filtered.map(
      (f) => `prettier --ignore-unknown --write --cache ${f}`,
    );
  },
};
```

If you are hand-writing CHANGELOG.md, you may want to format it with Prettier.

```javascript
// lint-staged.config.mjs
import { GLOB_EXCLUDE, filterFilenames } from "@modyqyw/fabric";

export default {
  "*": (filenames) => {
    const filtered = filterFilenames(
      filenames,
      formatChangelog
        ? GLOB_EXCLUDE.filter((e) => !e.toUpperCase().includes("CHANGELOG"))
        : GLOB_EXCLUDE,
    );
    return filtered.map(
      (f) => `prettier --ignore-unknown --write --cache ${f}`,
    );
  },
};
```

### Integration of ESLint / Stylelint?

Cited from [vuejs/eslint-config-prettier](https://github.com/vuejs/eslint-config-prettier#use-separate-commands-for-linting-and-formatting):

> Running prettier inside the linter slows down the linting process, might clutter the editor with annoying warnings, and adds one layer of indirection where things may break. [Prettier's official documentation](https://prettier.io/docs/en/integrating-with-linters.html) recommends using separate commands for linting and formatting, i.e., Prettier for code formatting concerns and ESLint for code-quality concerns.

This library is consistent with its view that it is not recommended to call Prettier from within ESLint and Stylelint, and it is recommended to run Prettier separately. By default, running ESLint and Stylelint will not conflict with Prettier or other code formatters. See also the [ESLint chapter](../linter/eslint) and [Stylelint chapter](../linter/stylelint).

### Plugin conflicts?

| ESLint Plugins                                                      | Prettier Plugins                                                                                             | Stylelint Plugins             | Notes                                                                                                                                                                                                                  |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| eslint-plugin-perfectionist、eslint-plugin-import-x                 | @ianvs/prettier-plugin-sort-imports、@trivago/prettier-plugin-sort-imports、prettier-plugin-organize-imports |                               | They both handle the import order and conflict with each other, and are handled by default with eslint-plugin-perfectionist.                                                                                           |
| eslint-plugin-perfectionist、eslint-plugin-vue、eslint-plugin-react | prettier-plugin-organize-attributes                                                                          |                               | They both handle attribute ordering of components or elements, by default using eslint-plugin-vue to handle Vue component attribute ordering, and eslint-plugin-react to handle React component ordering.              |
| eslint-plugin-jsonc                                                 | prettier-plugin-packagejson                                                                                  |                               | If you use eslint-plugin-jsonc to sort package.json you may get conflicts.                                                                                                                                             |
| eslint-plugin-tailwindcss、eslint-plugin-unocss                     | prettier-plugin-tailwindcss                                                                                  |                               | All three handle the sorting of classes, and the ESLint plugin is enabled by default depending on whether it is installed or not; if it is installed at the same time, you need to explicitly enable only one of them. |
|                                                                     | prettier-plugin-css-order                                                                                    | stylelint-config-recess-order | Both handle the ordering of CSS properties, by default using stylelint-config-recess-order.                                                                                                                            |
