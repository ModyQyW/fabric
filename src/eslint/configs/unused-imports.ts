import {
  GLOB_DTS,
  GLOB_SCRIPT,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
} from "../../constants.ts";
import { hasTypeScript, hasVue } from "../../env.ts";
import { pluginUnusedImports } from "../plugins.ts";
import type { Config, UnusedImportsOptions } from "../types.ts";

export function unusedImports(options: UnusedImportsOptions = {}): Config[] {
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
      name: "base/unused-imports",
      files,
      plugins: {
        "unused-imports": pluginUnusedImports,
      },
      rules: {
        "no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "warn",
          {
            args: "after-used",
            argsIgnorePattern: "^_",
            ignoreRestSiblings: true,
            vars: "all",
            varsIgnorePattern: "^_",
          },
        ],

        ...rules,
      },
    },
    {
      name: "base/unused-imports/typescript",
      files: typescriptFiles,
      rules: {
        "@typescript-eslint/no-unused-vars": "off",

        ...typescriptRules,
      },
    },
  ];
}
