import {
  GLOB_DTS,
  GLOB_SCRIPT,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
} from "../../constants.ts";
import { hasTypeScript, hasVue } from "../../env.ts";
import { pluginTailwindcss } from "../plugins.ts";
import type { Config, TailwindCssOptions } from "../types.ts";

export function tailwindcss(options: TailwindCssOptions = {}): Config[] {
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
      name: "frameworks/tailwindcss",
      files,
      plugins: {
        tailwindcss: pluginTailwindcss,
      },
      rules: {
        // https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/v3.17.5/docs/rules/classnames-order.md
        "tailwindcss/classnames-order": "warn",

        // https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/v3.17.5/docs/rules/enforces-negative-arbitrary-values.md
        "tailwindcss/enforces-negative-arbitrary-values": "warn",

        // https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/v3.17.5/docs/rules/enforces-shorthand.md
        "tailwindcss/enforces-shorthand": "warn",

        // https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/v3.17.5/docs/rules/migration-from-tailwind-2.md
        "tailwindcss/migration-from-tailwind-2": "warn",

        // https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/v3.17.5/docs/rules/no-arbitrary-value.md
        "tailwindcss/no-arbitrary-value": "off",

        // https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/v3.17.5/docs/rules/no-custom-classname.md
        "tailwindcss/no-custom-classname": "off",

        // https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/v3.17.5/docs/rules/no-contradicting-classname.md∑
        "tailwindcss/no-contradicting-classname": "error",

        // https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/v3.17.5/docs/rules/no-unnecessary-arbitrary-value.md
        "tailwindcss/no-unnecessary-arbitrary-value": "warn",

        ...rules,
      },
    },
    {
      name: "frameworks/tailwindcss/typescript",
      files: typescriptFiles,
      rules: {
        ...typescriptRules,
      },
    },
  ];
}
