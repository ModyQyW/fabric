import {
  GLOB_DTS,
  GLOB_SCRIPT,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
} from "../../constants";
import { hasTypeScript, hasVue } from "../../env";
import { pluginPromise } from "../plugins";
import type { Config, PromiseOptions } from "../types";

export function promise(options: PromiseOptions = {}): Config[] {
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
      name: "promise",
      files,
      plugins: {
        promise: pluginPromise,
      },
      rules: {
        "promise/always-return": "error",
        // 'promise/avoid-new': 'off',
        "promise/catch-or-return": "error",
        "promise/no-callback-in-promise": "warn",
        "promise/no-multiple-resolved": "warn",
        // 'promise/no-native': 'off',
        "promise/no-nesting": "warn",
        "promise/no-new-statics": "error",
        "promise/no-promise-in-callback": "warn",
        "promise/no-return-in-finally": "warn",
        "promise/no-return-wrap": "error",
        "promise/param-names": "error",
        "promise/prefer-await-to-callbacks": "warn",
        "promise/prefer-await-to-then": "warn",
        "promise/spec-only": "warn",
        "promise/valid-params": "warn",

        ...rules,
      },
    },
    {
      name: "promise-typescript",
      files: typescriptFiles,
      rules: {
        ...typescriptRules,
      },
    },
  ];
}
