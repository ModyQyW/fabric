import {
  GLOB_MARKDOWN,
  GLOB_MARKDOWN_SCRIPT,
  GLOB_MARKDOWN_VUE,
} from '../../constants';
import { pluginMarkdown } from '../plugins';
import type { Config, Rules } from '../types';

export function markdown({
  markdownFiles = [GLOB_MARKDOWN],
  markdownInnerFiles = [GLOB_MARKDOWN_SCRIPT, GLOB_MARKDOWN_VUE],
  rules = {},
}: {
  markdownFiles?: string[];
  markdownInnerFiles?: string[];
  rules?: Rules;
} = {}): Config[] {
  return [
    {
      files: markdownFiles,
      plugins: {
        markdown: pluginMarkdown,
      },
      processor: 'markdown/markdown',
    },
    {
      files: markdownInnerFiles,
      rules: {
        ...pluginMarkdown.configs.recommended.overrides[1].rules,
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'import/no-unresolved': 'off',
        'n/no-extraneous-import': 'off',
        'n/no-extraneous-require': 'off',
        'n/no-missing-import': 'off',
        'n/no-missing-require': 'off',
        'n/no-unpublished-bin': 'off',
        'n/no-unpublished-import': 'off',
        'n/no-unpublished-require': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'unicorn/prefer-module': 'off',
        ...rules,
      },
    },
  ];
}
