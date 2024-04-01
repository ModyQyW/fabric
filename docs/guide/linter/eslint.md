# ESLint

ESLint is a widely adopted linter, mainly for script files.

::: tip Other options
[Biome](https://biomejs.dev/) are the up-and-comers. You might consider using it if you think ESLint is slow, but you'll need to configure them yourself. But be careful: they are not 100% compatible with ESLint and you may get unexpected results.
:::

## Installation

You have to install ESLint first. Currently ESLint v8 is supported.

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

::: tip Use other config files
Try [eslint-ts-patch](https://github.com/antfu/eslint-ts-patch) if you want to use other config files.
:::

### ESM

```javascript
// eslint.config.mjs
// or eslint.config.js with "type": "module" in package.json
import { eslint } from '@modyqyw/fabric';
// or
// import { eslint } from '@modyqyw/fabric/eslint';

export default eslint();
```

### CJS

```javascript
// eslint.config.cjs
// or eslint.config.js without "type": "module" in package.json
const { eslint } = require('@modyqyw/fabric');
// or
// const { eslint } = require('@modyqyw/fabric/eslint');

module.exports = eslint();
```

### CLI

Update your `package.json` and add `lint:eslint` script.

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

The first parameter is used for basic customization, you can pass either `undefined` or an object. To explicitly enable or disable a plugin, you need to explicitly set the boolean value in the passed object.

The following plugins are currently supported:

- gitignore - Based on [eslint-config-flat-gitignore](https://github.com/antfu/eslint-config-flat-gitignore). Support for reading and using .gitignore and .eslintignore content as ignores options for flat configurations. Enabled by default.
- ignores - Based on ignores option. Enabled by default.
- imports - Based on [eslint-plugin-i](https://github.com/un-es/eslint-plugin-i) and [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import). Check import related issues. Enabled by default.
- javascript - Based on [@eslint/js](https://github.com/eslint/eslint/tree/main/packages/js). Check JavaScript related issues. Enabled by default.
- jsdoc - Based on [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc). Check JSDoc related issues. Enabled by default.
- jsonc - Based on [eslint-plugin-jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc). Check JSONC related issues. Enabled by default.
- markdown - Based on [eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown). Check Markdown related issues. Enabled by default.
- next: Based on [@next/eslint-plugin-next](https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next). Check Next related issues. Enabled by default if you have Next installed.
- node - Based on [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n). Check Node related issues. Enabled by default.
- nuxt - Based on [eslint-plugin-nuxt](https://github.com/nuxt/eslint-plugin-nuxt). Check Nuxt related issued. Enabled by default if you have Nuxt installed.
- perfectionist - Based on [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist). Check orders. Enabled by default.
- perttier - Based on [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) and [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier). Disabled code style rules. Enabled by default.
- react - Based on [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react), [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) and [eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh). Check React related issues. Enabled by default if you have React installed.
- reactNative - Based on [eslint-plugin-react-native](https://github.com/jsx-eslint/eslint-plugin-react-native). Check ReactNative related issues. Enabled by default if you have ReactNative installed.
- regexp - Based on [eslint-plugin-regexp](https://github.com/ota-meshi/eslint-plugin-regexp). Check RegExp related issues. Enabled by default.
- solid - Based on [eslint-plugin-solid](https://github.com/solidjs-community/eslint-plugin-solid). Check solid related issues. Enabled by default if you have solid installed.
- typescript - Based on [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint). Check TypeScript related issues. Enabled by default if you have TypeScript installed.
- unicorn - Based on [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn). Enabled by default.
- unocss - Based on [eslint-plugin-unocss](https://github.com/unocss/unocss/tree/main/packages/eslint-plugin). Check UnoCSS related issues. Enabled by default if you have Vue installed.
- vue - Based on [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) and [eslint-plugin-vue-scoped-css](https://github.com/future-architect/eslint-plugin-vue-scoped-css). Check Vue related issues. Enabled by default if you have Vue installed.
- yml - Based on [eslint-plugin-yml](https://github.com/ota-meshi/eslint-plugin-yml). Check YAML related issues. Enabled by default.

```javascript
// eslint.config.mjs
// or eslint.config.js with "type": "module" in package.json
import {
  hasNext,
  hasNuxt,
  hasReact,
  hasReactNative,
  hasSolid,
  hasTypeScript,
  hasUnoCss,
  hasVue,
  eslint,
} from '@modyqyw/fabric';

export default eslint({
  // based on eslint-plugin-flat-gitignore
  // true by default, enabled
  gitignore: true,
  // based on ignores option
  // true by default, enabled
  ignores: true,
  // based on eslint-plugin-i and eslint-plugin-import
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
  // based on eslint-plugin-prettier 和 eslint-config-prettier
  // true by default, enabled
  prettier: true,
  // based on eslint-plugin-react、eslint-plugin-react-hooks 和 eslint-plugin-react-refresh
  // enabled by default if you have React installed
  react: hasReact,
  // based on eslint-plugin-react-native
  // enabled by default if you have ReactNative installed
  reactNative: hasReactNative,
  // based on eslint-plugin-regexp
  // true by default, enabled
  regexp: true,
  // based on eslint-plugin-solid
  // enabled by default if you have solid installed
  solid: hasSolid,
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
// or eslint.config.js with "type": "module" in package.json
import { eslint } from '@modyqyw/fabric';

export default eslint({
  gitignore: {
    files = ['.gitignore', '.eslintignore'],
    strict = false,
  },
});
```

::: warning Potential conflicts

1. eslint-plugin-perfectionist may conflict with @ianvs/prettier-plugin-sort-imports, @trivago/prettier-plugin-sort-imports, prettier-plugin-organize-imports, prettier-plugin-organize-attributes. If you want to enable one of the four, turn off eslint-plugin-perfectionist, see [Prettier chapter customization section](../formatter/prettier.md#Customization).

2. eslint-plugin-jsonc does not conflict with prettier-plugin-packagejson by default. If you want to use eslint-plugin-jsonc to sort package.json, see [Combination section](#combination) and disable prettier-plugin-packagejson.

3. eslint-plugin-unocss may conflict with prettier-plugin-tailwindcss. When you use both TailwindCSS and UnoCSS, please disable one of them manually. If you want to disable prettier-plugin-tailwindcss, see [Prettier chapter Customization](../formatter/prettier.md#Customization).

:::

The second parameter is used for further customization, you can pass an object to override the generated configuration.

```javascript
// eslint.config.mjs
// or eslint.config.js with "type": "module" in package.json
import { eslint } from '@modyqyw/fabric';

export default eslint(undefined, [
  // By default, using console in scripts/**/* and cli.* does not report errors and warnings.
  // Adjusted so that using console in scripts/**/* and cli.* gives an error.
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
// or eslint.config.js with "type": "module" in package.json
import { combine } from '@modyqyw/fabric';
import { javascript, typescript } from '@modyqyw/fabric/eslint';

export default combine(javascript(), typescript());
```

You can also pass parameters to adjust some of the rules.

```javascript
// eslint.config.mjs
// or eslint.config.js with "type": "module" in package.json
import { combine } from '@modyqyw/fabric';
import { javascript, typescript } from '@modyqyw/fabric/eslint';

export default combine(
  javascript({ rules: { 'no-console': 'error' } }),
  typescript(),
);
```

Add Svelte support to the above (you need to install the dependencies yourself):

```javascript
// eslint.config.mjs
// or eslint.config.js with "type": "module" in package.json
import {
  GLOB_SCRIPT,
  GLOB_VUE,
  GLOB_SVELTE,
  GLOB_DTS,
  GLOB_TS,
  GLOB_TSX,
  combine,
  interopDefault,
} from '@modyqyw/fabric';
import { javascript, typescript } from '@modyqyw/fabric/eslint';
import * as _parserSvelte from 'svelte-eslint-parser';
import * as _parserBabel from '@babel/eslint-parser';
import * as _parserTypeScript from '@typescript-eslint/parser;
import * as _pluginSvelte from 'eslint-plugin-svelte';

const parserSvelte = interopDefault(_parserSvelte);
const parserBabel = interopDefault(_parserBabel);
const parserTypeScript = interopDefault(_parserTypeScript);
const pluginSvelte = interopDefault(_pluginSvelte);

export default combine(
  // match Svelte files
  javascript({ files: [GLOB_SCRIPT, GLOB_VUE, GLOB_SVELTE] }),
  typescript({ files: [GLOB_DTS, GLOB_TS, GLOB_TSX, GLOB_VUE, GLOB_SVELTE] }),
  // support Svelte
  [
    {
      files: ['**/*.svelte'],
      languageOptions: {
        ecmaFeatures: {
          globalReturn: false,
          jsx: false,
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
      plugins: {
        svelte: pluginSvelte,
      },
      processor: pluginSvelte.processors['.svelte'],
      rules: {
        ...pluginSvelte.configs.recommended.rules,
        ...pluginSvelte.configs.prettier.rules,
      },
    },
  ],
);
```

## Integration

### VSC

Install [the corresponding ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) first.

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
  "[markdown][yaml][json][jsonc]": {
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
}
```

### WebStorm

WebStorm comes with Prettier, see [VSC?](#vsc) to tweak it yourself.

### lint-staged

If you are using the lint-staged configuration provided by the package, see the [lint-staged chapter](../git/lint-staged.md).

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
};
```

### Why not check types?

> Typed rules come with a catch. By including `parserOptions.project` in your config, you incur the performance penalty of asking TypeScript to do a build of your project before ESLint can do its linting. For small projects this takes a negligible amount of time (a few seconds or less); for large projects, it can take longer.

Quoted from [typescript-eslint.io/linting/typed-linting#how-is-performance](https://typescript-eslint.io/linting/typed-linting#how-is-performance).

Running tsc / vue-tsc directly avoids this performance loss and allows for more complete type checking. See the [tsc chapter](../typescript-checker/tsc).
