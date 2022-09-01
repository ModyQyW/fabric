import type * as Stylelint from 'stylelint';

export const config: Stylelint.Config = {
  overrides: [
    {
      files: ['*.svelte', '**/*.svelte'],
      customSyntax: 'postcss-html',
    },
  ],
};

export default config;
