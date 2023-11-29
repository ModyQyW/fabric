import { GLOB_DTS, GLOB_TS, GLOB_TSX, GLOB_VUE } from '../../constants';
import { hasTypeScript, hasVue } from '../../env';
import { parserTypeScript, pluginTypeScript } from '../plugins';
import type { Config, Rules } from '../types';

export function typescript({ rules = {} }: { rules?: Rules } = {}): Config[] {
  return [
    {
      files:
        hasVue && hasTypeScript
          ? [GLOB_DTS, GLOB_TS, GLOB_TSX, GLOB_VUE]
          : [GLOB_DTS, GLOB_TS, GLOB_TSX],
      languageOptions: {
        parser: parserTypeScript,
      },
      plugins: {
        '@typescript-eslint': pluginTypeScript,
      },
      rules: {
        ...pluginTypeScript.configs['eslint-recommended'].overrides[0].rules,
        ...pluginTypeScript.configs.recommended.rules,
        // too ideal for business
        '@typescript-eslint/no-empty-function': 'off',
        // too ideal for business
        '@typescript-eslint/no-empty-interface': 'off',
        // too ideal for business
        '@typescript-eslint/no-explicit-any': 'off',
        // allow for prototyping
        '@typescript-eslint/no-unused-vars': 'warn',
        ...rules,
      },
    },
  ];
}
