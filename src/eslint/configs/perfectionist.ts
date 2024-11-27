import {
  GLOB_DTS,
  GLOB_SCRIPT,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
} from "../../constants.ts";
import { hasTypeScript, hasVue } from "../../env.ts";
import { pluginPerfectionist } from "../plugins.ts";
import type { Config, PerfectionistOptions } from "../types.ts";

export function perfectionist(options: PerfectionistOptions = {}): Config[] {
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
      name: "base/perfectionist",
      files,
      plugins: {
        perfectionist: pluginPerfectionist,
      },
      rules: {
        // https://perfectionist.dev/rules/sort-array-includes
        "perfectionist/sort-array-includes": "error",

        // https://perfectionist.dev/rules/sort-classes
        "perfectionist/sort-classes": "error",

        // https://perfectionist.dev/rules/sort-decorators
        "perfectionist/sort-decorators": "error",

        // https://perfectionist.dev/rules/sort-enums
        "perfectionist/sort-enums": "error",

        // https://perfectionist.dev/rules/sort-exports
        "perfectionist/sort-exports": "error",

        // https://perfectionist.dev/rules/sort-heritage-clauses
        "perfectionist/sort-heritage-clauses": "error",

        // https://perfectionist.dev/rules/sort-imports
        "import/order": "off",
        "perfectionist/sort-imports": [
          "error",
          {
            internalPattern: ["^~{1,2}/.*", "^@{1,2}/.*"],
            newlinesBetween: "ignore",
            groups: [
              "builtin",
              "external",
              "internal",
              "parent",
              "sibling",
              "side-effect",
              "side-effect-style",
              "index",
              "object",
              "style",
              "external-type",
              "builtin-type",
              "internal-type",
              "parent-type",
              "sibling-type",
              "index-type",
              "unknown",
            ],
          },
        ],

        // https://perfectionist.dev/rules/sort-interfaces
        "@typescript-eslint/adjacent-overload-signatures": "off",
        "perfectionist/sort-interfaces": "error",

        // https://perfectionist.dev/rules/sort-intersection-types
        // deprecated
        // "@typescript-eslint/sort-type-constituents": "off",
        "perfectionist/sort-intersection-types": [
          "error",
          {
            groups: [
              "conditional",
              "function",
              "import",
              "intersection",
              "keyword",
              "literal",
              "named",
              "object",
              "operator",
              "tuple",
              "union",
              "nullish",
              "unknown",
            ],
          },
        ],

        // https://perfectionist.dev/rules/sort-jsx-props
        "perfectionist/sort-jsx-props": [
          "error",
          {
            groups: ["reserved", "unknown", "callback"],
            customGroups: {
              reserved: ["children", "dangerouslySetInnerHTML", "key", "ref"],
              callback: "on*",
            },
          },
        ],

        // https://perfectionist.dev/rules/sort-maps
        "perfectionist/sort-maps": "error",

        // https://perfectionist.dev/rules/sort-modules
        "perfectionist/sort-modules": "error",

        // https://perfectionist.dev/rules/sort-named-exports
        "perfectionist/sort-named-exports": "error",

        // https://perfectionist.dev/rules/sort-named-imports
        "perfectionist/sort-named-imports": "error",

        // https://perfectionist.dev/rules/sort-object-types
        // '@typescript-eslint/adjacent-overload-signatures': 'off',
        "perfectionist/sort-object-types": "error",

        // https://perfectionist.dev/rules/sort-objects
        "sort-keys": "off",
        "perfectionist/sort-objects": [
          "error",
          {
            groups: ["top", "unknown", "method"],
            customGroups: {
              top: ["name", "key", "id", "queryKey", "queryFn"],
            },
          },
        ],

        // https://perfectionist.dev/rules/sort-sets
        "perfectionist/sort-sets": "error",

        // https://perfectionist.dev/rules/sort-switch-case
        "perfectionist/sort-switch-case": "error",

        // https://perfectionist.dev/rules/sort-union-types
        // deprecated
        // '@typescript-eslint/sort-type-constituents': 'off',
        "perfectionist/sort-union-types": [
          "error",
          {
            groups: [
              "conditional",
              "function",
              "import",
              "intersection",
              "keyword",
              "literal",
              "named",
              "object",
              "operator",
              "tuple",
              "union",
              "nullish",
              "unknown",
            ],
          },
        ],

        // https://perfectionist.dev/rules/sort-variable-declarations
        "perfectionist/sort-variable-declarations": "error",

        ...rules,
      },
      settings: {
        perfectionist: {
          type: "natural",
          order: "asc",
          ignoreCase: true,
          ignorePattern: [],
          specialCharacters: "keep",
          locales: "en-US",
          partitionByComment: true,
          partitionByNewLine: true,
        },
      },
    },
    {
      name: "base/perfectionist/typescript",
      files: typescriptFiles,
      rules: {
        ...typescriptRules,
      },
    },
  ];
}
