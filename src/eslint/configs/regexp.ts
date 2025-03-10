import {
  GLOB_DTS,
  GLOB_SCRIPT,
  GLOB_TS,
  GLOB_TSX,
  GLOB_VUE,
} from "../../constants.ts";
import { hasTypeScript, hasVue } from "../../env.ts";
import { pluginRegexp } from "../plugins.ts";
import type { Config, RegExpOptions } from "../types.ts";

export function regexp(options: RegExpOptions = {}): Config[] {
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
      name: "base/regexp",
      files,
      plugins: {
        regexp: pluginRegexp,
      },
      rules: {
        // https://github.com/ota-meshi/eslint-plugin-regexp/blob/v2.7.0/lib/configs/rules/recommended.ts
        "no-control-regex": "error",
        "no-misleading-character-class": "error",
        "no-regex-spaces": "error",
        "prefer-regex-literals": "error",
        "no-invalid-regexp": "off",
        "no-useless-backreference": "off",
        "no-empty-character-class": "off",
        "regexp/confusing-quantifier": "warn",
        "regexp/control-character-escape": "error",
        "regexp/match-any": "error",
        "regexp/negation": "error",
        "regexp/no-contradiction-with-assertion": "error",
        "regexp/no-dupe-characters-character-class": "error",
        "regexp/no-dupe-disjunctions": "error",
        "regexp/no-empty-alternative": "warn",
        "regexp/no-empty-capturing-group": "error",
        "regexp/no-empty-character-class": "error",
        "regexp/no-empty-group": "error",
        "regexp/no-empty-lookarounds-assertion": "error",
        "regexp/no-empty-string-literal": "error",
        "regexp/no-escape-backspace": "error",
        "regexp/no-extra-lookaround-assertions": "error",
        "regexp/no-invalid-regexp": "error",
        "regexp/no-invisible-character": "error",
        "regexp/no-lazy-ends": "warn",
        "regexp/no-legacy-features": "error",
        "regexp/no-misleading-capturing-group": "error",
        "regexp/no-misleading-unicode-character": "error",
        "regexp/no-missing-g-flag": "error",
        "regexp/no-non-standard-flag": "error",
        "regexp/no-obscure-range": "error",
        "regexp/no-optional-assertion": "error",
        "regexp/no-potentially-useless-backreference": "warn",
        "regexp/no-super-linear-backtracking": "error",
        "regexp/no-trivially-nested-assertion": "error",
        "regexp/no-trivially-nested-quantifier": "error",
        "regexp/no-unused-capturing-group": "error",
        "regexp/no-useless-assertions": "error",
        "regexp/no-useless-backreference": "error",
        "regexp/no-useless-character-class": "error",
        "regexp/no-useless-dollar-replacements": "error",
        "regexp/no-useless-escape": "error",
        "regexp/no-useless-flag": "warn",
        "regexp/no-useless-lazy": "error",
        "regexp/no-useless-non-capturing-group": "error",
        "regexp/no-useless-quantifier": "error",
        "regexp/no-useless-range": "error",
        "regexp/no-useless-set-operand": "error",
        "regexp/no-useless-string-literal": "error",
        "regexp/no-useless-two-nums-quantifier": "error",
        "regexp/no-zero-quantifier": "error",
        "regexp/optimal-lookaround-quantifier": "warn",
        "regexp/optimal-quantifier-concatenation": "error",
        "regexp/prefer-character-class": "error",
        "regexp/prefer-d": "error",
        "regexp/prefer-plus-quantifier": "error",
        "regexp/prefer-predefined-assertion": "error",
        "regexp/prefer-question-quantifier": "error",
        "regexp/prefer-range": "error",
        "regexp/prefer-set-operation": "error",
        "regexp/prefer-star-quantifier": "error",
        "regexp/prefer-unicode-codepoint-escapes": "error",
        "regexp/prefer-w": "error",
        "regexp/simplify-set-operations": "error",
        "regexp/sort-flags": "error",
        "regexp/strict": "error",
        "regexp/use-ignore-case": "error",

        ...rules,
      },
    },
    {
      name: "base/regexp/typescript",
      files: typescriptFiles,
      rules: {
        ...typescriptRules,
      },
    },
  ];
}
