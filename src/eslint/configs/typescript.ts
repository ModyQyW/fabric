import { GLOB_DTS, GLOB_TS, GLOB_TSX, GLOB_VUE } from '../../constants';
import { hasVue } from '../../env';
import { parserTypeScript, pluginTypeScript } from '../plugins';
import type { Config, TypeScriptOptions } from '../types';

export function typescript(options: TypeScriptOptions = {}): Config[] {
  const {
    files = hasVue
      ? [GLOB_DTS, GLOB_TS, GLOB_TSX, GLOB_VUE]
      : [GLOB_DTS, GLOB_TS, GLOB_TSX],
    rules = {},
  } = options;
  return [
    {
      files,
      languageOptions: {
        parser: parserTypeScript,
      },
      plugins: {
        '@typescript-eslint': pluginTypeScript,
      },
      rules: {
        ...pluginTypeScript.configs['eslint-recommended'].overrides[0].rules,
        ...pluginTypeScript.configs.recommended.rules,
        // indicate that the export exists only in the type system, not at runtime
        // requires project
        // '@typescript-eslint/consistent-type-imports': 'error',
        // https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful
        '@typescript-eslint/method-signature-style': 'error',
        // too ideal for business
        '@typescript-eslint/no-empty-function': 'off',
        // too ideal for business
        '@typescript-eslint/no-empty-interface': 'off',
        // too ideal for business
        '@typescript-eslint/no-explicit-any': 'off',
        // remove type side effects
        '@typescript-eslint/no-import-type-side-effects': 'off',
        // better to always declare variables and functions before using them
        '@typescript-eslint/no-use-before-define': 'error',
        'no-use-before-define': 'off',
        // allow for prototyping
        '@typescript-eslint/no-unused-vars': 'warn',
        ...rules,
      },
    },
  ];
}
