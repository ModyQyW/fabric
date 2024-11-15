import globals from "globals";
import { GLOB_SCRIPT, GLOB_VUE } from "../../constants.ts";
import { parserBabel } from "../plugins.ts";
import type { Config, JavaScriptOptions } from "../types.ts";

export function javascript(options: JavaScriptOptions = {}): Config[] {
  const {
    files = [GLOB_SCRIPT, GLOB_VUE],
    rules = {},
    parserOptions = {},
    languageOptions = {},
  } = options;
  return [
    {
      name: "languages/javascript",
      files,
      languageOptions: {
        ecmaVersion: "latest",
        globals: {
          ...globals.browser,
          ...globals.es2025,
          ...globals.node,
          dd: "readonly", // https://open.dingtalk.com/
          jd: "readonly", // https://mp.jd.com/
          ks: "readonly", // https://mp.kuaishou.com/
          my: "readonly", // https://opendocs.alipay.com/mini
          plus: "readonly", // http://www.html5plus.org/doc/h5p.html
          qh: "readonly", // https://mp.360.cn/
          qq: "readonly", // https://q.qq.com/
          swan: "readonly", // https://smartprogram.baidu.com/docs
          tt: "readonly", // https://developer.open-douyin.com/ https://open.feishu.cn/
          uni: "readonly", // https://uniapp.dcloud.io/
          uniCloud: "readonly", // https://uniapp.dcloud.io
          weex: "readonly", // https://weex.apache.org/
          wx: "readonly", // https://developers.weixin.qq.com/miniprogram/dev/framework/
        },
        parser: parserBabel,
        parserOptions: {
          ecmaFeatures: {
            globalReturn: false,
            jsx: true,
          },
          ecmaVersion: "latest",
          requireConfigFile: false,
          sourceType: "module",
          ...parserOptions,
        },
        sourceType: "module",
        ...languageOptions,
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      rules: {
        // https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
        "constructor-super": "error",
        "for-direction": "error",
        "getter-return": "error",
        "no-async-promise-executor": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-const-assign": "error",
        "no-constant-binary-expression": "error",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-empty-static-block": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-import-assign": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",
        "no-new-native-nonconstructor": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-prototype-builtins": "error",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-self-assign": "error",
        "no-setter-return": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-this-before-super": "error",
        "no-undef": "error",
        // 'no-unexpected-multiline': 'error', // Conflicts with Prettier.
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unsafe-optional-chaining": "error",
        "no-unused-labels": "error",
        "no-unused-private-class-members": "error",
        "no-unused-vars": "error",
        "no-useless-backreference": "error",
        "no-useless-catch": "error",
        "no-useless-escape": "error",
        "no-with": "error",
        "require-yield": "error",
        "use-isnan": "error",
        "valid-typeof": "error",

        // https://eslint.org/docs/latest/rules/no-array-constructor
        // Comes with https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v55.0.0/docs/rules/no-new-array.md.
        "no-array-constructor": "error",
        // https://eslint.org/docs/latest/rules/no-console
        // Use consola, pino, winston, etc.
        "no-console": "warn",
        // https://eslint.org/docs/latest/rules/no-eval
        "no-eval": "error",
        // https://eslint.org/docs/latest/rules/no-implied-eval
        "no-implied-eval": "error",
        // https://eslint.org/docs/latest/rules/no-lonely-if
        // Comes with https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v55.0.0/docs/rules/no-lonely-if.md.
        "no-lonely-if": "error",
        // https://eslint.org/docs/latest/rules/no-shadow
        "no-shadow": "warn",
        // https://eslint.org/docs/latest/rules/no-throw-literal
        "no-throw-literal": "error",
        // https://eslint.org/docs/latest/rules/no-use-before-define
        "no-use-before-define": "warn",
        // https://eslint.org/docs/latest/rules/no-var
        "no-var": "error",
        // https://eslint.org/docs/latest/rules/prefer-const
        "prefer-const": "error",
        // https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
        "prefer-promise-reject-errors": "off",
        // https://eslint.org/docs/latest/rules/prefer-rest-params
        "prefer-rest-params": "error",
        // https://eslint.org/docs/latest/rules/prefer-spread
        "prefer-spread": "error",
        // https://eslint.org/docs/latest/rules/require-await
        "require-await": "off",

        ...rules,
      },
    },
  ];
}
