# ESLint

ESLint is a widely adopted linter, mainly for script files.

## Installation

You have to install ESLint first. Currently ESLint v9 is supported.

::: code-group

```shell [npm]
npm install eslint -D
```

```shell [yarn]
yarn add eslint -D
```

```shell [pnpm]
pnpm install eslint -D
```

:::

## Configuration

Create `eslint.config.mjs` in your project root:

```javascript
// eslint.config.mjs
import { eslint } from "@modyqyw/fabric/eslint";

export default eslint();
```

Update `package.json` and add `lint:eslint` script.

```json
{
  "scripts": {
    "lint:eslint": "eslint . --fix --cache"
  }
}
```

## Customization

### Parameters

Passing parameters to the exported `eslint` method can customize, and the `eslint` method takes two parameters.

The first parameter is used for basic customization; you can pass no or empty objects to indicate the use of default values. To explicitly enable a configuration, you need to explicitly set `true` or the configuration object in the passed object; to explicitly disable a configuration, you need to explicitly set `false` in the passed object.

The following is the default configuration:

```javascript
// eslint.config.mjs
import {
  hasNext,
  hasNuxt,
  hasReact,
  hasReactNative,
  hasTailwindCss,
  hasTypeScript,
  hasUnoCss,
  hasVue,
} from "@modyqyw/fabric";
import { eslint } from "@modyqyw/fabric/eslint";

export default eslint({
  // Based on eslint-plugin-flat-gitignore
  // Support reading and using .gitignore and .eslintignore content as ignores options for flat configurations
  // Default true (enabled)
  gitignore: true,
  // Based on ignores option
  // Default true (enabled)
  ignores: true,
  // Based on eslint-plugin-import-x
  // Check import related issues
  // Default true (enabled)
  imports: true,
  // Based on @eslint/js
  // Check JavaScript related issues
  // Default true (enabled)
  javascript: true,
  // Based on eslint-plugin-jsdoc
  // Check JSDoc related issues
  // Default false (disabled)
  jsdoc: false,
  // Based on eslint-plugin-jsonc and eslint-plugin-package-json
  // Check JSON related issues
  // Default true (enabled)
  jsonc: true,
  // Based on eslint-plugin-markdown
  // Check Markdown related issues
  // Default true (enabled)
  markdown: true,
  // Based on @next/eslint-plugin-next
  // Check Next related issues
  // Enabled by default if you have Next installed
  next: hasNext,
  // Based on eslint-plugin-n
  // Check Node configuration related issues
  // Default true (enabled)
  node: true,
  // Based on eslint-plugin-nuxt
  // Check Nuxt related issues
  // Enabled by default if you have Nuxt installed
  nuxt: hasNuxt,
  // Based on eslint-plugin-perfectionist
  // Check orders related issues
  // Default true (enabled)
  perfectionist: true,
  // Based on eslint-plugin-promise
  // Check Promise related issues
  // Default true (enabled)
  promise: true,
  // Based on eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-react-perf and eslint-plugin-react-refresh
  // Check React related issues, support Taro
  // Enabled by default if you have React installed
  react: hasReact,
  // Based on eslint-plugin-react-native
  // Check ReactNative related issues
  // Enabled by default if you have ReactNative installed
  reactNative: hasReactNative,
  // Based on eslint-plugin-regexp
  // Check RegExp related issues
  // Default true (enabled)
  regexp: true,
  // Based on eslint-plugin-tailwindcss
  // Check TailwindCSS related issues
  // Enabled by default if you have TailwindCSS installed
  tailwindcss: hasTailwindCss,
  // Based on eslint-plugin-toml
  // Check TOML related issues
  // Default true (enabled)
  toml: true,
  // Based on @typescript-eslint/eslint-plugin
  // Check TypeScript related issues
  // Enabled by default if you have TypeScript installed
  typescript: hasTypeScript,
  // Based on eslint-plugin-unicorn
  // Check performance and specification related issues
  // Default true (enabled)
  unicorn: true,
  // Based on eslint-plugin-unocss
  // Check UnoCSS related issues
  // Enabled by default if you have UnoCSS installed
  unocss: hasUnoCss,
  // Based on eslint-plugin-vue 和 eslint-plugin-vue-scoped-css
  // Check Vue related issues, support uni-app
  // Enabled by default if you have Vue installed
  vue: hasVue,
  // Based on eslint-plugin-yml
  // Check YML related issues
  // Default true (enabled)
  yml: true,
});
```

In addition to passing Boolean values, you can also pass configuration objects directly. This will be treated as enabling configuration and the passed configuration object will be used.

```javascript
// eslint.config.mjs
import { eslint } from "@modyqyw/fabric/eslint";

export default eslint({
  gitignore: {
    // Update configuration
    files: [".gitignore", ".eslintignore"],
    strict: false,
  },
});
```

The second parameter is used for further customization, you can pass an object to override the generated configuration. If you want to tweak the plugin, you'll need to install the appropriate dependencies yourself and keep an eye out for [Plugin Conflicts](#plugin-conflicts).

```javascript
// eslint.config.mjs
import { eslint } from "@modyqyw/fabric/eslint";

export default eslint({}, [
  // By default, using console in scripts/**/* and cli.* gives warnings.
  // Updated so that using console in scripts/**/* and cli.* gives errors.
  // Need to switch to specialized logging libraries such as winston, consola, pino, etc.
  {
    files: ["scripts/**/*", "cli.*"],
    rules: {
      "no-console": "error",
    },
  },
]);
```

### Combination

In addition to customizing with parameters, you can also customize with combinations.

For example, using only JavaScript and TypeScript rules:

```javascript
// eslint.config.mjs
import { combine, javascript, typescript } from "@modyqyw/fabric/eslint";

export default combine(javascript(), typescript());
```

You can also pass parameters to adjust some of the rules.

```javascript
// eslint.config.mjs
import { combine, javascript, typescript } from "@modyqyw/fabric/eslint";

export default combine(
  javascript({ rules: { "no-console": "error" } }),
  typescript(),
);
```

### Solid Support

You have to install [eslint-plugin-solid](https://github.com/solidjs-community/eslint-plugin-solid) yourself.

```javascript
// eslint.config.mjs
import {
  GLOB_JSX,
  GLOB_SCRIPT,
  GLOB_TSX,
  interopDefault,
} from "@modyqyw/fabric";
import { eslint } from "@modyqyw/fabric/eslint";
import * as _parserBabel from "@babel/eslint-parser";
import * as _parserTypeScript from "@typescript-eslint/parser";
import * as _pluginSolid from "eslint-plugin-solid";

const parserBabel = interopDefault(_parserBabel);
const parserTypeScript = interopDefault(_parserTypeScript);
const pluginSolid = interopDefault(_pluginSolid);

export default eslint(
  {},
  // Add Solid support
  [
    {
      name: "solid",
      files: [GLOB_JSX, GLOB_TSX],
      plugins: {
        solid: pluginSolid,
      },
      rules: {
        ...pluginSolid.configs.recommended.rules,
      },
    },
  ],
);
```

### Svelte Support

You have to install [eslint-plugin-svelte](https://github.com/sveltejs/eslint-plugin-svelte) and [svelte-eslint-parser](https://github.com/ota-meshi/svelte-eslint-parser) yourself.

```javascript
// eslint.config.mjs
import {
  GLOB_DTS,
  GLOB_SCRIPT,
  GLOB_SVELTE,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
  interopDefault,
} from "@modyqyw/fabric";
import { eslint } from "@modyqyw/fabric/eslint";
import * as _parserBabel from "@babel/eslint-parser";
import * as _parserTypeScript from "@typescript-eslint/parser";
import * as _pluginSvelte from "eslint-plugin-svelte";
import * as _parserSvelte from "svelte-eslint-parser";

const parserSvelte = interopDefault(_parserSvelte);
const parserBabel = interopDefault(_parserBabel);
const parserTypeScript = interopDefault(_parserTypeScript);
const pluginSvelte = interopDefault(_pluginSvelte);

export default eslint(
  // Match Svelte files
  {
    javascript: {
      files: [GLOB_SCRIPT, GLOB_VUE, GLOB_SVELTE],
    },
    typescript: {
      files: [GLOB_DTS, GLOB_TS, GLOB_TSX, GLOB_VUE, GLOB_SVELTE],
    },
  },
  // Add Svelte support
  [
    {
      name: "svelte",
      files: [GLOB_SVELTE],
      languageOptions: {
        parser: parserSvelte,
        parserOptions: {
          ecmaFeatures: {
            globalReturn: false,
            jsx: true,
          },
          ecmaVersion: "latest",
          extraFileExtensions: [".svelte"],
          parser: {
            js: parserBabel,
            jsx: parserBabel,
            ts: parserTypeScript,
            tsx: parserTypeScript,
          },
          requireConfigFile: false,
          sourceType: "module",
        },
      },
      plugins: {
        svelte: pluginSvelte,
      },
      processor: pluginSvelte.processors[".svelte"],
      rules: {
        ...pluginSvelte.configs.base.rules,
        ...pluginSvelte.configs.recommended.rules,
        ...pluginSvelte.configs.prettier.rules,
      },
    },
  ],
);
```

## Integration

### Integration of VSC?

Install [the corresponding ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml) first.

Update [user settings](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson) or [workspace settings](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings) as appropriate.

```jsonc
{
  // Enable ESLint flat config.
  "eslint.experimental.useFlatConfig": true,

  // Languages that ESLint validates.
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
  ],

  // ESLint auto-fix after JavaScript, JSX, TypeScript, TypeScript JSX manual save.
  "[javascript][javascriptreact][typescript][typescriptreact]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
    },
  },

  // ESLint auto-fix after Vue manual save.
  "[vue]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
    },
  },

  // ESLint auto-fix after markdown manual save.
  "[markdown]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
    },
  },

  // ESLint auto-fix after JSON, JSONC manual save.
  "[json][jsonc]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
    },
  },

  // ESLint auto-fix after YAML manual save.
  "[yaml]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
    },
  },

  // ESLint auto-fix after TOML manual save.
  "[toml]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
    },
  },
}
```

### Integration of WebStorm?

WebStorm comes with ESLint, see [Integration of VSC?](#integration-of-vsc) to tweak it yourself.

### Integration of lint-staged?

If you are using the lint-staged configuration provided by the package, see the [lint-staged chapter](../git/lint-staged).

If you are not, you can refer to the following configuration.

```javascript
// lint-staged.config.mjs
export default {
  "*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}":
    "eslint --fix --cache --no-error-on-unmatched-pattern",
  "*.{json,jsonc,json5}":
    "eslint --fix --cache --no-error-on-unmatched-pattern",
  "*.{yaml,yml}": "eslint --fix --cache --no-error-on-unmatched-pattern",
  "*.{toml}": "eslint --fix --cache --no-error-on-unmatched-pattern",
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
| eslint-plugin-tailwindcss、eslint-plugin-unocss                     | prettier-plugin-tailwindcss                                                                                  |                               | All three handle the sorting of classes, and the ESLint plugin is Enabled by default depending on whether it is installed or not; if it is installed at the same time, you need to explicitly enable only one of them. |
|                                                                     | prettier-plugin-css-order                                                                                    | stylelint-config-recess-order | Both handle the ordering of CSS properties, by default using stylelint-config-recess-order.                                                                                                                            |

### Check types?

Cited in [typescript-eslint.io/linting/typed-linting#how-is-performance](https://typescript-eslint.io/linting/typed-linting#how-is-performance):

> Typed rules come with a catch. By using typed linting in your config, you incur the performance penalty of asking TypeScript to do a build of your project before ESLint can do its linting. For small projects this takes a negligible amount of time (a few seconds or less); for large projects, it can take longer.
>
> Most of our users do not mind this cost as the power and safety of type-aware static analysis rules is worth the tradeoff. Additionally, most users primarily consume lint errors via IDE plugins which, through caching, do not suffer the same penalties. This means that generally they usually only run a complete lint before a push, or via their CI, where the extra time often doesn't matter.

Typed rules are Enabled by default when TypeScript configuration is enabled.

If you want the execution to be more efficient, specify `languageOptions.parserOptions.tsconfigRootDir` manually.

```javascript
// eslint.config.mjs
import { eslint } from "@modyqyw/fabric/eslint";

export default eslint({
  typescript: {
    parserOptions: {
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

If you don't think these rules are too friendly for you, you can turn them off.

```javascript
// eslint.config.mjs
import { eslint } from "@modyqyw/fabric/eslint";

export default eslint({
  typescript: {
    typeCheck: false,
  },
});
```

You should also run tsc / vue-tsc directly for more complete type checking. See the [tsc chapter](../typescript-checker/tsc).
