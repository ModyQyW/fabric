import {
  GLOB_MARKDOWN,
  GLOB_MARKDOWN_SCRIPT,
  GLOB_MARKDOWN_VUE,
} from '../../constants';
import { pluginMarkdown } from '../plugins';
import type { Config, MarkdownOptions } from '../types';

export function markdown(options: MarkdownOptions = {}): Config[] {
  const {
    markdownFiles = [GLOB_MARKDOWN],
    markdownInnerFiles = [GLOB_MARKDOWN_SCRIPT, GLOB_MARKDOWN_VUE],
    rules = {},
  } = options;
  return [
    {
      plugins: {
        markdown: pluginMarkdown,
      },
    },
    {
      files: markdownFiles,
      processor: 'markdown/markdown',
    },
    {
      files: markdownInnerFiles,
      rules: {
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'eol-last': 'off', // eslint-plugin-markdown 4.0.1
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
        'no-undef': 'off', // eslint-plugin-markdown 4.0.1
        'no-unused-expressions': 'off', // eslint-plugin-markdown 4.0.1
        'no-unused-vars': 'off', // eslint-plugin-markdown 4.0.1
        'padded-blocks': 'off', // eslint-plugin-markdown 4.0.1
        strict: 'off', // eslint-plugin-markdown 4.0.1
        'unicode-bom': 'off', // eslint-plugin-markdown 4.0.1
        'unicorn/prefer-module': 'off',
        ...rules,
      },
    },
  ];
}
