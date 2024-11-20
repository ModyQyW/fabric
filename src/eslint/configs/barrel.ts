import {
  GLOB_DTS,
  GLOB_SCRIPT,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
} from "../../constants.ts";
import { hasTypeScript, hasVue } from "../../env.ts";
import { pluginNoBarrelFiles } from "../plugins.ts";
import type { Config, BarrelOptions } from "../types.ts";

export function barrel(options: BarrelOptions = {}): Config[] {
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
        "no-barrel-files": pluginNoBarrelFiles,
      },
      rules: {
        "no-barrel-files/no-barrel-files": "error",

        ...rules,
      },
    },
    {
      name: "base/imports/typescript",
      files: typescriptFiles,
      rules: {
        ...typescriptRules,
      },
    },
  ];
}
