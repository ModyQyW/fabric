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

```shell [bun(experimental)]
bun install eslint -d
```

:::

## Configuration

Create `eslint.config.mjs` in your project root:

```javascript
// eslint.config.mjs
import { eslint } from '@modyqyw/fabric/eslint';

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

#### Base

- gitignore - Based on [eslint-config-flat-gitignore](https://github.com/antfu/eslint-config-flat-gitignore). Support for reading and using .gitignore and .eslintignore content as ignores options for flat configurations. Enabled by default.
- ignores - Based on ignores option. Enabled by default.
- javascript - Based on [@eslint/js](https://github.com/eslint/eslint/tree/main/packages/js). Check JavaScript related issues. Enabled by default.
- jsdoc - Based on [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc). Check JSDoc related issues. Enabled by default.
- typescript - Based on [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint). Check TypeScript related issues. Enabled by default if you have TypeScript installed.
- imports - Based on [eslint-plugin-import-x](https://github.com/un-es/eslint-plugin-import-x). Check import related issues. Enabled by default.
- node - Based on [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n). Check Node configuration related issues. Enabled by default.
- perfectionist - Based on [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist). Check orders. Enabled by default.
- regexp - Based on [eslint-plugin-regexp](https://github.com/ota-meshi/eslint-plugin-regexp). Check RegExp related issues. Enabled by default.
- unicorn - Based on [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn). Check performance and specification related issues. Enabled by default.

#### Library / Framework

- react - Based on [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react), [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks), [eslint-plugin-react-perf](https://github.com/cvazac/eslint-plugin-react-perf) and [eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh). Check React related issues. Support Taro. Enabled by default if you have React installed.
- reactNative - Based on [eslint-plugin-react-native](https://github.com/jsx-eslint/eslint-plugin-react-native). Check ReactNative related issues. Enabled by default if you have ReactNative installed.
- next: Based on [@next/eslint-plugin-next](https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next). Check Next related issues. Enabled by default if you have Next installed.
- vue - Based on [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) and [eslint-plugin-vue-scoped-css](https://github.com/future-architect/eslint-plugin-vue-scoped-css). Check Vue related issues. Enabled by default if you have Vue installed.
- nuxt - Based on [eslint-plugin-nuxt](https://github.com/nuxt/eslint-plugin-nuxt). Check Nuxt related issued. Enabled by default if you have Nuxt installed.
- tailwindcss - Based on [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss). Check TailwindCSS related issues. Enabled by default if you have TailwindCSS installed.
- unocss - Based on [eslint-plugin-unocss](https://github.com/unocss/unocss/tree/main/packages/eslint-plugin). Check UnoCSS related issues. Enabled by default if you have Vue installed.

#### Specific Languages

- jsonc - Based on [eslint-plugin-jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc) and [eslint-plugin-package-json](https://github.com/JoshuaKGoldberg/eslint-plugin-package-json). Check JSON related issues. Enabled by default.
- markdown - Based on [eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown). Check Markdown related issues. Enabled by default.
- toml - Based on [eslint-plugin-toml](https://github.com/ota-meshi/eslint-plugin-toml). Check TOML related issues. Enabled by default.
- yml - Based on [eslint-plugin-yml](https://github.com/ota-meshi/eslint-plugin-yml). Check YAML related issues. Enabled by default.

#### Examples

The following is the default configuration.

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
} from '@modyqyw/fabric';
import { eslint } from '@modyqyw/fabric/eslint';

export default eslint({
  // based on eslint-plugin-flat-gitignore
  // true by default, enabled
  gitignore: true,
  // based on ignores option
  // true by default, enabled
  ignores: true,
  // based on eslint-plugin-import-x
  // true by default, enabled
  imports: true,
  // based on @eslint/js
  // true by default, enabled
  javascript: true,
  // based on eslint-plugin-jsdoc
  // false by default, disabled
  jsdoc: false,
  // based on eslint-plugin-jsonc
  // true by default, enabled
  jsonc: true,
  // based on eslint-plugin-markdown
  // true by default, enabled
  markdown: true,
  // based on @next/eslint-plugin-next
  // enabled by default if you have Next installed
  next: hasNext,
  // based on eslint-plugin-n
  // true by default, enabled
  node: true,
  // based on eslint-plugin-nuxt
  // enabled by default if you have Nuxt installed
  nuxt: hasNuxt,
  // based on eslint-plugin-perfectionist
  // true by default, enabled
  perfectionist: true,
  // based on eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-react-perf and eslint-plugin-react-refresh
  // enabled by default if you have React installed
  react: hasReact,
  // based on eslint-plugin-react-native
  // enabled by default if you have ReactNative installed
  reactNative: hasReactNative,
  // based on eslint-plugin-regexp
  // true by default, enabled
  regexp: true,
  // based on eslint-plugin-tailwindcss
  // enabled by default if you have TailwindCSS installed
  tailwindcss: hasTailwindCss,
  // based on eslint-plugin-toml
  // true by default, enabled
  toml: true,
  // based on @typescript-eslint/eslint-plugin
  // enabled by default if you have TypeScript installed
  typescript: hasTypeScript,
  // based on eslint-plugin-unicorn
  // true by default, enabled
  unicorn: true,
  // based on eslint-plugin-unocss
  // enabled by default if you have UnoCSS installed
  unocss: hasUnoCss,
  // based on eslint-plugin-vue 和 eslint-plugin-vue-scoped-css
  // enabled by default if you have Vue installed
  vue: hasVue,
  // based on eslint-plugin-yml
  // true by default, enabled
  yml: true,
});
```

In addition to passing Boolean values, you can also pass configuration items directly. This will be treated as enabling the configuration and the passed-in configuration item will be used.

```javascript
// eslint.config.mjs
import { eslint } from '@modyqyw/fabric/eslint';

export default eslint({
  gitignore: {
    // Update configuration
    files: ['.gitignore', '.eslintignore'],
    strict: false,
  },
});
```

The second parameter can be used for further customization, you can pass an object to override the generated configuration.

```javascript
// eslint.config.mjs
import { eslint } from '@modyqyw/fabric/eslint';

export default eslint({}, [
  // By default, using console in scripts/**/* and cli.* gives warnings.
  // Updated so that using console in scripts/**/* and cli.* gives errors.
  // Need to switch to specialized logging libraries such as winston, consola, pino, etc.
  {
    files: ['scripts/**/*', 'cli.*'],
    rules: {
      'no-console': 'error',
    },
  },
]);
```

### Combination

In addition to customizing with parameters, you can also customize with combinations.

For example, using only JavaScript and TypeScript rules:

```javascript
// eslint.config.mjs
import { combine, javascript, typescript } from '@modyqyw/fabric/eslint';

export default combine(javascript(), typescript());
```

You can also pass parameters to adjust some of the rules.

```javascript
// eslint.config.mjs
import { combine, javascript, typescript } from '@modyqyw/fabric/eslint';

export default combine(
  javascript({ rules: { 'no-console': 'error' } }),
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
} from '@modyqyw/fabric';
import { eslint } from '@modyqyw/fabric/eslint';
import * as _parserBabel from '@babel/eslint-parser';
import * as _parserTypeScript from '@typescript-eslint/parser';
import * as _pluginSolid from 'eslint-plugin-solid';

const parserBabel = interopDefault(_parserBabel);
const parserTypeScript = interopDefault(_parserTypeScript);
const pluginSolid = interopDefault(_pluginSolid);

export default eslint(
  {},
  // Add Solid support
  [
    {
      name: 'solid',
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
} from '@modyqyw/fabric';
import { eslint } from '@modyqyw/fabric/eslint';
import * as _parserBabel from '@babel/eslint-parser';
import * as _parserTypeScript from '@typescript-eslint/parser';
import * as _pluginSvelte from 'eslint-plugin-svelte';
import * as _parserSvelte from 'svelte-eslint-parser';

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
      name: 'svelte',
      files: [GLOB_SVELTE],
      languageOptions: {
        parser: parserSvelte,
        parserOptions: {
          ecmaFeatures: {
            globalReturn: false,
            jsx: true,
          },
          ecmaVersion: 'latest',
          extraFileExtensions: ['.svelte'],
          parser: {
            js: parserBabel,
            jsx: parserBabel,
            ts: parserTypeScript,
            tsx: parserTypeScript,
          },
          requireConfigFile: false,
          sourceType: 'module',
        },
      },
      plugins: {
        svelte: pluginSvelte,
      },
      processor: pluginSvelte.processors['.svelte'],
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
// or lint-staged.config.js with "type": "module" in package.json
export default {
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}':
    'eslint --fix --cache --no-error-on-unmatched-pattern',
  '*.{json,jsonc,json5}':
    'eslint --fix --cache --no-error-on-unmatched-pattern',
  '*.{yaml,yml}': 'eslint --fix --cache --no-error-on-unmatched-pattern',
  '*.{toml}': 'eslint --fix --cache --no-error-on-unmatched-pattern',
};
```

### Integration of Prettier?

Cited from [vuejs/eslint-config-prettier](https://github.com/vuejs/eslint-config-prettier#use-separate-commands-for-linting-and-formatting):

> Running prettier inside the linter slows down the linting process, might clutter the editor with annoying warnings, and adds one layer of indirection where things may break. [Prettier's official documentation](https://prettier.io/docs/en/integrating-with-linters.html) recommends using separate commands for linting and formatting, i.e., Prettier for code formatting concerns and ESLint for code-quality concerns.

This library is consistent with its view that it is not recommended to call Prettier from within ESLint, and it is recommended to run Prettier separately. By default, running ESLint will not conflict with Prettier or other code formatters. See also the [Prettier chapter](.../formatter/prettier/prettier)

Some Prettier plugins may conflict with the ESLint plugin, so add them with caution:

| ESLint Plugins                                  | Prettier Plugins                                                                                                                                                                                                                                                     | Notes                                                                    |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| eslint-plugin-perfectionist                     | @ianvs/prettier-plugin-sort-imports, @trivago/prettier-plugin-sort-imports, prettier-plugin-organize-imports, prettier-plugin-organize-imports, prettier-plugin-organize-imports, and prettier-plugin-organize-imports. imports, prettier-plugin-organize-attributes | The five conflict with each other, please enable only one of them.       |
| eslint-plugin-vue                               | prettier-plugin-organize-attributes                                                                                                                                                                                                                                  | Both conflict with each other, please enable only one of them.           |
| eslint-plugin-react                             | prettier-plugin-organize-attributes                                                                                                                                                                                                                                  | Both conflict with each other, please enable only one of them.           |
| eslint-plugin-jsonc                             | prettier-plugin-packagejson                                                                                                                                                                                                                                          | Conflicts may occur if you use eslint-plugin-jsonc to sort package.json. |
| eslint-plugin-tailwindcss, eslint-plugin-unocss | prettier-plugin-tailwindcss                                                                                                                                                                                                                                          | The three conflict with each other, please enable only one of them.      |

### 插件冲突？

eslint-plugin-tailwindcss and eslint-plugin-unocss conflict with each other, so manually disable one of them if both TailwindCSS and UnoCSS are installed.

### 检查类型？

Cited in [typescript-eslint.io/linting/typed-linting#how-is-performance](https://typescript-eslint.io/linting/typed-linting#how-is-performance):

> Typed rules come with a catch. By using typed linting in your config, you incur the performance penalty of asking TypeScript to do a build of your project before ESLint can do its linting. For small projects this takes a negligible amount of time (a few seconds or less); for large projects, it can take longer.
>
> Most of our users do not mind this cost as the power and safety of type-aware static analysis rules is worth the tradeoff. Additionally, most users primarily consume lint errors via IDE plugins which, through caching, do not suffer the same penalties. This means that generally they usually only run a complete lint before a push, or via their CI, where the extra time often doesn't matter.

Type-aware rules are enabled by default when TypeScript configuration is enabled. If you don't think these rules are too friendly for you, you can turn them off.

```javascript
// eslint.config.mjs
import { eslint } from '@modyqyw/fabric/eslint';

export default eslint({
  typescript: {
    typeCheck: false,
  },
});
```

You should also run tsc / vue-tsc directly for more complete type checking. See the [tsc chapter](../typescript-checker/tsc).
