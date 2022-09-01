import type * as Stylelint from 'stylelint';

export const config: Stylelint.Config = {
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
      rules: {
        'function-no-unknown': [true, { ignoreFunctions: ['v-bind'] }],
        'selector-pseudo-element-no-unknown': [
          true,
          { ignorePseudoElements: ['v-deep', 'v-slotted', 'v-global'] },
        ],
      },
    },
  ],
};

export default config;
