module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-recess-order',
    'stylelint-config-recommended',
    'stylelint-config-prettier',
  ],
  rules: {
    // tailwindcss
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'value', 'layer'],
      },
    ],
    // css modules
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes', 'compose-with'],
        ignoreSelectors: [':export', /^:import/],
      },
    ],
    // css modules
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export', 'import', 'deep', 'slotted', 'global', 'local', 'external'],
      },
    ],
    // miniprogram
    'selector-type-no-unknown': null,
    // miniprogram
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    // prettier
    'prettier/prettier': true,
  },
  overrides: [
    {
      files: ['*.svelte', '**/*.svelte'],
      customSyntax: 'postcss-html',
    },
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
