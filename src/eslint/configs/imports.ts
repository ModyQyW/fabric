import {
  GLOB_DTS,
  GLOB_SCRIPT,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
} from "../../constants.ts";
import { hasTypeScript, hasVue } from "../../env.ts";
import { pluginImportX } from "../plugins.ts";
import type { Config, ImportsOptions } from "../types.ts";

export function imports(options: ImportsOptions = {}): Config[] {
  const {
    files = [GLOB_SCRIPT, GLOB_VUE],
    rules = {},
    typescriptFiles = hasTypeScript && hasVue
      ? [GLOB_DTS, GLOB_TS, GLOB_TSX, GLOB_VUE]
      : [GLOB_DTS, GLOB_TS, GLOB_TSX],
    typescriptRules = {},
  } = options;
  return [
    {
      name: "base/imports",
      files,
      plugins: {
        import: pluginImportX,
      },
      rules: {
        // https://github.com/un-ts/eslint-plugin-import-x/blob/v4.6.1/docs/rules/export.md
        "import/export": "error",

        // https://github.com/un-ts/eslint-plugin-import-x/blob/v4.6.1/docs/rules/extensions.md
        // https://vite.dev/guide/performance.html#reduce-resolve-operations
        "import/extensions": [
          "warn",
          "ignorePackages",
          { checkTypeImports: true },
        ],

        // https://github.com/un-ts/eslint-plugin-import-x/blob/v4.6.1/docs/rules/no-mutable-exports.md
        "import/no-mutable-exports": "error",

        // https://github.com/un-ts/eslint-plugin-import-x/blob/v4.6.1/docs/rules/no-named-as-default.md
        "import/no-named-as-default": "warn",

        // https://github.com/un-ts/eslint-plugin-import-x/blob/v4.6.1/docs/rules/no-named-as-default-member.md
        "import/no-named-as-default-member": "warn",

        // https://github.com/un-ts/eslint-plugin-import-x/blob/v4.6.1/docs/rules/default.md
        "import/default": "error",

        // https://github.com/un-ts/eslint-plugin-import-x/blob/v4.6.1/docs/rules/named.md
        "import/named": "error",

        // https://github.com/un-ts/eslint-plugin-import-x/blob/v4.6.1/docs/rules/namespace.md
        "import/namespace": "error",

        // https://github.com/un-ts/eslint-plugin-import-x/blob/v4.6.1/docs/rules/no-self-import.md
        "import/no-self-import": "error",

        // https://github.com/un-ts/eslint-plugin-import-x/blob/v4.6.1/docs/rules/no-duplicates.md
        "import/no-duplicates": "warn",

        // https://github.com/un-ts/eslint-plugin-import-x/blob/v4.6.1/docs/rules/no-unresolved.md
        "import/no-unresolved": [
          "error",
          {
            commonjs: true,
            ignore: [
              String.raw`^virtual\:`,
              String.raw`^\~`,
              String.raw`^\@`,
              String.raw`^windi\:`,
              String.raw`windi\.css`,
              String.raw`^uno\:`,
              String.raw`uno\.css`,
              "vue-router/auto",
              "vue-router/auto-routes",
              "@intlify/unplugin-vue-i18n",
            ],
          },
        ],

        // https://github.com/un-ts/eslint-plugin-import-x/blob/v4.6.1/docs/rules/order.md
        "import/order": [
          "error",
          {
            groups: [
              "builtin",
              "external",
              "internal",
              "parent",
              "sibling",
              "index",
              "object",
              "type",
            ],
            pathGroups: [
              {
                pattern: "~/**",
                group: "internal",
              },
              {
                pattern: "~~/**",
                group: "internal",
              },
              {
                pattern: "@/**",
                group: "internal",
              },
              {
                pattern: "@@/**",
                group: "internal",
              },
            ],
          },
        ],

        ...rules,
      },
      settings: {
        // https://github.com/un-ts/eslint-plugin-import-x#import-xcore-modules
        "import/core-modules": ["electron"],

        // https://github.com/un-ts/eslint-plugin-import-x#import-xextensions
        "import/extensions": [".js", ".cjs", ".mjs", ".jsx"],

        // https://github.com/un-ts/eslint-plugin-import-x#import-xignore
        "import/ignore": [
          "node_modules",
          String.raw`\.(scss|sass|less|css|svg|json)$`,
        ],

        // https://github.com/un-ts/eslint-plugin-import-x#resolvers
        "import/resolver": "oxc",
      },
    },
    {
      name: "base/imports/typescript",
      files: typescriptFiles,
      rules: {
        // https://github.com/un-ts/eslint-plugin-import-x/blob/v4.6.1/docs/rules/no-named-as-default-member.md
        // https://typescript-eslint.io/troubleshooting/typed-linting/performance/#eslint-plugin-import
        "import/no-named-as-default-member": "off",

        // https://github.com/un-ts/eslint-plugin-import-x/blob/v4.6.1/docs/rules/default.md
        // https://typescript-eslint.io/troubleshooting/typed-linting/performance/#eslint-plugin-import
        "import/default": "off",

        // https://github.com/un-ts/eslint-plugin-import-x/blob/v4.6.1/docs/rules/named.md
        // https://typescript-eslint.io/troubleshooting/typed-linting/performance/#eslint-plugin-import
        "import/named": "off",

        // https://github.com/un-ts/eslint-plugin-import-x/blob/v4.6.1/docs/rules/namespace.md
        // https://typescript-eslint.io/troubleshooting/typed-linting/performance/#eslint-plugin-import
        "import/namespace": "off",

        // https://github.com/un-ts/eslint-plugin-import-x/blob/v4.6.1/docs/rules/no-unresolved.md
        // See https://github.com/iamturns/eslint-config-airbnb-typescript#why-is-importno-unresolved-disabled
        "import/no-unresolved": "off",

        ...typescriptRules,
      },
      settings: {
        // https://github.com/un-ts/eslint-plugin-import-x#import-xextensions
        "import/extensions": [
          ".js",
          ".cjs",
          ".mjs",
          ".jsx",
          ".ts",
          ".cts",
          ".mts",
          ".tsx",
          ".d.ts",
        ],

        // https://github.com/un-ts/eslint-plugin-import-x#import-xparsers
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".cts", ".mts", ".tsx", ".d.ts"],
        },

        // https://github.com/un-ts/eslint-plugin-import-x#resolvers
        "import/resolver": "oxc",
      },
    },
  ];
}
