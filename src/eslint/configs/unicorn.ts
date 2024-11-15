import {
  GLOB_DTS,
  GLOB_SCRIPT,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
} from "../../constants.ts";
import { hasTypeScript, hasVue } from "../../env.ts";
import { pluginUnicorn } from "../plugins.ts";
import type { Config, UnicornOptions } from "../types.ts";

export function unicorn(options: UnicornOptions = {}): Config[] {
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
      name: "base/unicorn",
      files,
      plugins: {
        unicorn: pluginUnicorn,
      },
      rules: {
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/better-regex.md
        // Handled by eslint-plugin-regexp.
        // 'unicorn/better-regexp': 'off',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/catch-error-name.md
        "unicorn/catch-error-name": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/consistent-destructuring.md
        "unicorn/consistent-destructuring": "warn",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/consistent-existence-index-check.md
        "unicorn/consistent-existence-index-check": "warn",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/consistent-empty-array-spread.md
        "unicorn/consistent-empty-array-spread": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/consistent-function-scoping.md
        "unicorn/consistent-function-scoping": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/custom-error-definition.md
        "unicorn/custom-error-definition": "warn",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/empty-brace-spaces.md
        // Conflicts with Prettier.
        // 'unicorn/empty-brace-spaces': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/error-message.md
        "unicorn/error-message": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/escape-case.md
        "unicorn/escape-case": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/expiring-todo-comments.md
        "unicorn/expiring-todo-comments": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/explicit-length-check.md
        "unicorn/explicit-length-check": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/filename-case.md
        // Ignore some files only.
        "unicorn/filename-case": [
          "error",
          {
            case: "kebabCase",
            ignore: [
              // README.md, CHANGELOG.md, README.zh-Hans.md
              String.raw`\.md$`,
              // MyApp.vue, HelloWorld.vue
              String.raw`\.vue$`,
              // index.jsx, Index.jsx, HelloWorld.jsx, .etc
              String.raw`\.[jt]sx$`,
              // index.jsx, Index.jsx, .etc
              "^[Ii]ndex",
              // app.jsx, App.jsx, .etc
              "^[Aa]pp",
              // useCssVar, useDark, .etc
              "^use",
              // [...all].jsx, [...slug].jsx, users-[group].jsx, [[...slug]].jsx, .etc
              String.raw`\[.*\]`,
            ],
          },
        ],

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/import-style.md
        // Too ideal for business.
        // 'unicorn/import-style': 'off',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/new-for-builtins.md
        "unicorn/new-for-builtins": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-abusive-eslint-disable.md
        "unicorn/no-abusive-eslint-disable": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-anonymous-default-export.md
        "unicorn/no-anonymous-default-export": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-array-callback-reference.md
        "unicorn/no-array-callback-reference": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-array-for-each.md
        "unicorn/no-array-for-each": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-array-method-this-argument.md
        "unicorn/no-array-method-this-argument": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-array-push-push.md
        "unicorn/no-array-push-push": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-array-reduce.md
        "unicorn/no-array-reduce": "warn",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-await-expression-member.md
        "unicorn/no-await-expression-member": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-await-in-promise-methods.md
        "unicorn/no-await-in-promise-methods": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-console-spaces.md
        "unicorn/no-console-spaces": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-document-cookie.md
        "unicorn/no-document-cookie": "warn",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-empty-file.md
        "unicorn/no-empty-file": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-for-loop.md
        "unicorn/no-for-loop": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-hex-escape.md
        "unicorn/no-hex-escape": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-instanceof-array.md
        "unicorn/no-instanceof-array": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-invalid-fetch-options.md
        "unicorn/no-invalid-fetch-options": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-invalid-remove-event-listener.md
        "unicorn/no-invalid-remove-event-listener": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-keyword-prefix.md
        // Too ideal for business.
        // 'unicorn/no-keyword-prefix': 'off',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-length-as-slice-end.md
        "unicorn/no-length-as-slice-end": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-lonely-if.md
        "unicorn/no-lonely-if": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-magic-array-flat-depth.md
        "unicorn/no-magic-array-flat-depth": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-negated-condition.md
        "unicorn/no-negated-condition": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-negation-in-equality-check.md
        "unicorn/no-negation-in-equality-check": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-nested-ternary.md
        // Conlicts with Prettier.
        // 'unicorn/no-nested-ternary': 'off',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-new-array.md
        "unicorn/no-new-array": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-new-buffer.md
        "unicorn/no-new-buffer": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-null.md
        // Too ideal for business.
        // 'unicorn/no-null': 'off',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-object-as-default-parameter.md
        "unicorn/no-object-as-default-parameter": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-process-exit.md
        // Handled by eslint-plugin-n.
        // 'unicorn/no-process-exit': 'off',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-single-promise-in-promise-methods.md
        "unicorn/no-single-promise-in-promise-methods": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-static-only-class.md
        "unicorn/no-static-only-class": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-thenable.md
        "unicorn/no-thenable": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-this-assignment.md
        "unicorn/no-this-assignment": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-typeof-undefined.md
        "unicorn/no-typeof-undefined": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-unnecessary-await.md
        "unicorn/no-unnecessary-await": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-unnecessary-polyfills.md
        "unicorn/no-unnecessary-polyfills": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-unreadable-array-destructuring.md
        "unicorn/no-unreadable-array-destructuring": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-unreadable-iife.md
        "unicorn/no-unreadable-iife": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-unused-properties.md
        "unicorn/no-unused-properties": "warn",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-useless-fallback-in-spread.md
        "unicorn/no-useless-fallback-in-spread": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-useless-length-check.md
        "unicorn/no-useless-length-check": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-useless-promise-resolve-reject.md
        "unicorn/no-useless-promise-resolve-reject": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-useless-spread.md
        "unicorn/no-useless-spread": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-useless-switch-case.md
        "unicorn/no-useless-switch-case": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-useless-undefined.md
        "unicorn/no-useless-undefined": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-zero-fractions.md
        "unicorn/no-zero-fractions": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/number-literal-case.md
        // Conflicts with Prettier.
        // 'unicorn/number-literal-case': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/numeric-separators-style.md
        "unicorn/numeric-separators-style": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-add-event-listener.md
        "unicorn/prefer-add-event-listener": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-array-find.md
        "unicorn/prefer-array-find": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-array-flat-map.md
        "unicorn/prefer-array-flat-map": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-array-flat.md
        "unicorn/prefer-array-flat": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-array-index-of.md
        "unicorn/prefer-array-index-of": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-array-some.md
        "unicorn/prefer-array-some": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-at.md
        "unicorn/prefer-at": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-blob-reading-methods.md
        "unicorn/prefer-blob-reading-methods": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-code-point.md
        "unicorn/prefer-code-point": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-date-now.md
        "unicorn/prefer-date-now": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-default-parameters.md
        "unicorn/prefer-default-parameters": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-dom-node-append.md
        "unicorn/prefer-dom-node-append": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-dom-node-dataset.md
        "unicorn/prefer-dom-node-dataset": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-dom-node-remove.md
        "unicorn/prefer-dom-node-remove": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-dom-node-text-content.md
        "unicorn/prefer-dom-node-text-content": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-event-target.md
        "unicorn/prefer-event-target": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-export-from.md
        "unicorn/prefer-export-from": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-global-this.md
        "unicorn/prefer-global-this": "warn",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-includes.md
        "unicorn/prefer-includes": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-json-parse-buffer.md
        "unicorn/prefer-json-parse-buffer": "warn",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-keyboard-event-key.md
        "unicorn/prefer-keyboard-event-key": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-logical-operator-over-ternary.md
        "unicorn/prefer-logical-operator-over-ternary": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-math-min-max.md
        "unicorn/prefer-math-min-max": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-math-trunc.md
        "unicorn/prefer-math-trunc": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-modern-dom-apis.md
        "unicorn/prefer-modern-dom-apis": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-modern-math-apis.md
        "unicorn/prefer-modern-math-apis": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-module.md
        "unicorn/prefer-module": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-native-coercion-functions.md
        "unicorn/prefer-native-coercion-functions": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-negative-index.md
        "unicorn/prefer-negative-index": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-node-protocol.md
        "unicorn/prefer-node-protocol": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-number-properties.md
        "unicorn/prefer-number-properties": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-object-from-entries.md
        "unicorn/prefer-object-from-entries": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-optional-catch-binding.md
        // Will cause errors in Alipay MiniProgram.
        // 'unicorn/prefer-optional-catch-binding': 'off',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-prototype-methods.md
        "unicorn/prefer-prototype-methods": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-query-selector.md
        "unicorn/prefer-query-selector": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-reflect-apply.md
        "unicorn/prefer-reflect-apply": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-regexp-test.md
        "unicorn/prefer-regexp-test": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-set-has.md
        "unicorn/prefer-set-has": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-set-size.md
        "unicorn/prefer-set-size": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-spread.md
        "unicorn/prefer-spread": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-string-raw.md
        "unicorn/prefer-string-raw": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-string-replace-all.md
        "unicorn/prefer-string-replace-all": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-string-slice.md
        "unicorn/prefer-string-slice": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-string-starts-ends-with.md
        "unicorn/prefer-string-starts-ends-with": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-string-trim-start-end.md
        "unicorn/prefer-string-trim-start-end": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-structured-clone.md
        "unicorn/prefer-structured-clone": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-switch.md
        "unicorn/prefer-switch": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-ternary.md
        "unicorn/prefer-ternary": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-top-level-await.md
        "unicorn/prefer-top-level-await": "warn",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-type-error.md
        "unicorn/prefer-type-error": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prevent-abbreviations.md
        // Too ideal for business.
        // 'unicorn/prevent-abbreviations': 'off',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/relative-url-style.md
        "unicorn/relative-url-style": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/require-array-join-separator.md
        "unicorn/require-array-join-separator": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/require-number-to-fixed-digits-argument.md
        "unicorn/require-number-to-fixed-digits-argument": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/require-post-message-target-origin.md
        "unicorn/require-post-message-target-origin": "warn",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/string-content.md
        // 'unicorn/string-content': 'off',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/switch-case-braces.md
        "unicorn/switch-case-braces": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/template-indent.md
        // Conflicts with Prettier.
        // 'unicorn/template-indent': 'off',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/text-encoding-identifier-case.md
        "unicorn/text-encoding-identifier-case": "error",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/throw-new-error.md
        "unicorn/throw-new-error": "error",

        ...rules,
      },
    },
    {
      name: "base/unicorn/typescript",
      files: typescriptFiles,
      rules: {
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-unused-properties.md
        "unicorn/no-unused-properties": "off",

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/no-useless-undefined.md
        "unicorn/no-useless-undefined": [
          "error",
          { checkArguments: false, checkArrowFunctionBody: false },
        ],

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.0/docs/rules/prefer-json-parse-buffer.md
        "unicorn/prefer-json-parse-buffer": "off",

        ...typescriptRules,
      },
    },
  ];
}
