import {
  GLOB_DTS,
  GLOB_SCRIPT,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
} from "../../constants.ts";
import { hasTypeScript, hasVue } from "../../env.ts";
import { pluginN } from "../plugins.ts";
import type { Config, NodeOptions } from "../types.ts";

export function node(options: NodeOptions = {}): Config[] {
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
      name: "base/node",
      files,
      plugins: {
        n: pluginN,
      },
      rules: {
        // https://github.com/eslint-community/eslint-plugin-n/blob/v17.15.1/lib/configs/_commons.js
        "n/no-deprecated-api": "error",
        "n/no-extraneous-import": "error",
        "n/no-extraneous-require": "error",
        "n/no-exports-assign": "error",
        // 'n/no-missing-import': 'error', // Handled by eslint-plugin-import-x.
        // 'n/no-missing-require': 'error', // Handled by eslint-plugin-import-x.
        "n/no-process-exit": "error",
        "n/no-unpublished-bin": "error",
        "n/no-unpublished-import": "error",
        "n/no-unpublished-require": "error",
        // 'n/no-unsupported-features/es-builtins': 'error',
        // 'n/no-unsupported-features/es-syntax': 'error',
        // 'n/no-unsupported-features/node-builtins': 'error',
        "n/process-exit-as-throw": "error",
        // 'n/hashbang': 'error', // Allow source code to use hashbang for building.

        ...rules,
      },
    },
    {
      name: "base/node/typescript",
      files: typescriptFiles,
      rules: {
        ...typescriptRules,
      },
    },
  ];
}
