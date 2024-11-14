import { GLOB_VUE } from "../../constants.ts";
import { hasNuxt3, hasTypeScript } from "../../env.ts";
import { pluginNuxt2, pluginNuxt3 } from "../plugins.ts";
import type { Config, NuxtOptions, Rules } from "../types.ts";

const nuxt3Rules: Rules = {
  "nuxt/prefer-import-meta": "error",
};

const nuxt2Rules: Rules = {
  // https://github.com/nuxt/eslint-plugin-nuxt/blob/v4.0.0/lib/configs/base.js
  "nuxt/no-env-in-context": "error",
  "nuxt/no-env-in-hooks": "error",
  "nuxt/no-globals-in-created": "error",
  "nuxt/no-this-in-fetch-data": "error",
  "nuxt/no-cjs-in-config": "error",

  // https://github.com/nuxt/eslint-plugin-nuxt/blob/v4.0.0/lib/configs/recommended.js
  "nuxt/no-timing-in-fetch-data": "error",
};

export function nuxt(options: NuxtOptions = {}): Config[] {
  const { files = [GLOB_VUE], rules = {}, typescriptRules = {} } = options;
  return [
    {
      name: "nuxt",
      files,
      plugins: {
        nuxt: hasNuxt3 ? pluginNuxt3 : pluginNuxt2,
      },
      rules: {
        ...(hasNuxt3 ? nuxt3Rules : nuxt2Rules),

        ...rules,

        ...(hasTypeScript ? typescriptRules : {}),
      },
    },
    hasNuxt3
      ? {
          name: "nuxt-config",
          files: ["**/nuxt.config.?([cm])[jt]s?(x)"],
          rules: {
            "nuxt/nuxt-config-keys-order": "error",
          },
        }
      : {},
  ];
}
