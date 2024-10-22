import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from "../../constants";
import { parserJsonc, pluginJsonc, pluginPackageJson } from "../plugins";
import type { Config, JsoncOptions } from "../types";

export function jsonc(options: JsoncOptions = {}): Config[] {
  const { files = [GLOB_JSON, GLOB_JSON5, GLOB_JSONC], rules = {} } = options;
  return [
    {
      name: "jsonc",
      files,
      languageOptions: {
        parser: parserJsonc,
      },
      plugins: {
        jsonc: pluginJsonc,
        "package-json": pluginPackageJson,
      },
      rules: {
        // https://github.com/ota-meshi/eslint-plugin-jsonc/blob/v2.16.0/lib/configs/base.ts
        strict: "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",

        // https://github.com/ota-meshi/eslint-plugin-jsonc/blob/v2.16.0/lib/configs/recommended-with-jsonc.ts
        "jsonc/no-bigint-literals": "error",
        "jsonc/no-binary-expression": "error",
        "jsonc/no-binary-numeric-literals": "error",
        "jsonc/no-dupe-keys": "error",
        "jsonc/no-escape-sequence-in-identifier": "error",
        // 'jsonc/no-floating-decimal': 'error',
        "jsonc/no-hexadecimal-numeric-literals": "error",
        "jsonc/no-infinity": "error",
        "jsonc/no-multi-str": "error",
        "jsonc/no-nan": "error",
        "jsonc/no-number-props": "error",
        "jsonc/no-numeric-separators": "error",
        "jsonc/no-octal-numeric-literals": "error",
        "jsonc/no-octal": "error",
        "jsonc/no-parenthesized": "error",
        "jsonc/no-plus-sign": "error",
        "jsonc/no-regexp-literals": "error",
        "jsonc/no-sparse-arrays": "error",
        "jsonc/no-template-literals": "error",
        "jsonc/no-undefined-value": "error",
        "jsonc/no-unicode-codepoint-escapes": "error",
        "jsonc/no-useless-escape": "error",
        // 'jsonc/quote-props': 'error',
        // 'jsonc/quotes': 'error',
        // 'jsonc/space-unary-ops': 'error',
        "jsonc/valid-json-number": "error",
        "jsonc/vue-custom-block/no-parsing-error": "error",

        // https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/blob/v0.15.4/src/configs/recommended.ts
        "package-json/order-properties": "error",
        "package-json/repository-shorthand": "error",
        "package-json/sort-collections": "error",
        "package-json/unique-dependencies": "error",
        "package-json/valid-local-dependency": "error",
        "package-json/valid-name": "error",
        "package-json/valid-package-def": "error",
        "package-json/valid-repository-directory": "error",
        "package-json/valid-version": "error",

        ...rules,
      },
    },
  ];
}
