import {
  GLOB_DTS,
  GLOB_SCRIPT,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
} from "../../constants.ts";
import { hasTypeScript, hasVue } from "../../env.ts";
import { pluginUnocss } from "../plugins.ts";
import type { Config, UnoCssOptions } from "../types.ts";

export function unocss(options: UnoCssOptions = {}): Config[] {
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
      name: "frameworks/unocss",
      files,
      plugins: {
        "@unocss": pluginUnocss,
      },
      rules: {
        // https://unocss.dev/integrations/eslint
        "@unocss/order": "warn",

        ...rules,
      },
    },
    {
      name: "frameworks/unocss/typescript",
      files: typescriptFiles,
      rules: {
        ...typescriptRules,
      },
    },
  ];
}
