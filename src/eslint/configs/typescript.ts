import { GLOB_DTS, GLOB_TS, GLOB_TSX, GLOB_VUE } from "../../constants";
import { hasVue } from "../../env";
import { parserTypeScript, pluginTypeScript } from "../plugins";
import type { Config, TypeScriptOptions } from "../types";

export function typescript(options: TypeScriptOptions = {}): Config[] {
  const {
    files = hasVue
      ? [GLOB_DTS, GLOB_TS, GLOB_TSX, GLOB_VUE]
      : [GLOB_DTS, GLOB_TS, GLOB_TSX],
    rules = {},
    parserOptions = {},
    languageOptions = {},
    typeCheck = true,
  } = options;
  return [
    {
      name: "typescript",
      files,
      languageOptions: {
        parser: parserTypeScript,
        ...(typeCheck
          ? {
              parserOptions: {
                projectService: {
                  allowDefaultProject: ["*.js", "*.config.*"],
                },
                ...parserOptions,
              },
            }
          : {
              parserOptions: {
                ...parserOptions,
              },
            }),
        ...languageOptions,
      },
      plugins: {
        // @ts-expect-error not matched
        "@typescript-eslint": pluginTypeScript,
      },
      rules: {
        // https://github.com/typescript-eslint/typescript-eslint/blob/v8.5.0/packages/eslint-plugin/src/configs/eslint-recommended-raw.ts
        "constructor-super": "off", // ts(2335) & ts(2377)
        "getter-return": "off", // ts(2378)
        "no-const-assign": "off", // ts(2588)
        "no-dupe-args": "off", // ts(2300)
        "no-dupe-class-members": "off", // ts(2393) & ts(2300)
        "no-dupe-keys": "off", // ts(1117)
        "no-func-assign": "off", // ts(2630)
        "no-import-assign": "off", // ts(2632) & ts(2540)
        // TODO - remove this once we no longer support ESLint v8
        // 'no-new-symbol': 'off', // ts(7009)
        "no-new-native-nonconstructor": "off", // ts(7009)
        "no-obj-calls": "off", // ts(2349)
        "no-redeclare": "off", // ts(2451)
        "no-setter-return": "off", // ts(2408)
        "no-this-before-super": "off", // ts(2376) & ts(17009)
        "no-undef": "off", // ts(2304) & ts(2552)
        "no-unreachable": "off", // ts(7027)
        "no-unsafe-negation": "off", // ts(2365) & ts(2322) & ts(2358)
        // 'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
        // 'prefer-const': 'error', // ts provides better types with const
        // 'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
        // 'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply

        // https://github.com/typescript-eslint/typescript-eslint/blob/v8.5.0/packages/eslint-plugin/src/configs/recommended.ts
        "@typescript-eslint/ban-ts-comment": "error",
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-duplicate-enum-values": "error",
        "@typescript-eslint/no-empty-object-type": "error",
        // '@typescript-eslint/no-explicit-any': 'error',
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unsafe-declaration-merging": "error",
        "@typescript-eslint/no-unsafe-function-type": "error",
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-wrapper-object-types": "error",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/triple-slash-reference": "error",

        // https://github.com/typescript-eslint/typescript-eslint/blob/v8.5.0/packages/eslint-plugin/src/configs/recommended-type-checked-only.ts
        ...(typeCheck
          ? {
              "@typescript-eslint/await-thenable": "error",
              "@typescript-eslint/no-array-delete": "error",
              "@typescript-eslint/no-base-to-string": "error",
              "@typescript-eslint/no-duplicate-type-constituents": "error",
              "@typescript-eslint/no-floating-promises": "error",
              "@typescript-eslint/no-for-in-array": "error",
              "no-implied-eval": "off",
              "@typescript-eslint/no-implied-eval": "error",
              "@typescript-eslint/no-misused-promises": "error",
              "@typescript-eslint/no-redundant-type-constituents": "error",
              "@typescript-eslint/no-unnecessary-type-assertion": "error",
              "@typescript-eslint/no-unsafe-argument": "warn",
              "@typescript-eslint/no-unsafe-assignment": "warn",
              "@typescript-eslint/no-unsafe-call": "warn",
              "@typescript-eslint/no-unsafe-enum-comparison": "error",
              "@typescript-eslint/no-unsafe-member-access": "warn",
              "@typescript-eslint/no-unsafe-return": "warn",
              "@typescript-eslint/no-unsafe-unary-minus": "error",
              "no-throw-literal": "off",
              "@typescript-eslint/only-throw-error": "error",
              "prefer-promise-reject-errors": "off",
              "@typescript-eslint/prefer-promise-reject-errors": "error",
              "require-await": "off",
              "@typescript-eslint/require-await": "error",
              "@typescript-eslint/restrict-plus-operands": "error",
              "@typescript-eslint/restrict-template-expressions": "error",
              "@typescript-eslint/unbound-method": "error",
            }
          : {}),

        // https://typescript-eslint.io/rules/consistent-type-imports/
        "@typescript-eslint/consistent-type-imports": "error",
        // https://typescript-eslint.io/rules/method-signature-style/
        // https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful
        "@typescript-eslint/method-signature-style": "error",
        // https://typescript-eslint.io/rules/no-import-type-side-effects/
        "@typescript-eslint/no-import-type-side-effects": "error",
        // https://typescript-eslint.io/rules/no-use-before-define/
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "warn",

        ...rules,
      },
    },
  ];
}
