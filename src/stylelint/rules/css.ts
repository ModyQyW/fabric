const rules: Partial<{ [name: string]: any }> = {
  'at-rule-no-unknown': [
    true,
    {
      ignoreAtRules: ['tailwind', 'value'],
    },
  ],
  'color-function-notation': null,
  'comment-empty-line-before': [
    'always',
    {
      except: ['first-nested'],
      ignore: ['stylelint-commands'],
      ignoreComments: [/^#ifdef/, /^#ifndef/, /^#endif/],
    },
  ],
  'property-no-unknown': [
    true,
    {
      ignoreProperties: ['composes', 'compose-with'],
      ignoreSelectors: [':export', /^:import/],
    },
  ],
  'selector-pseudo-class-no-unknown': [
    true,
    { ignorePseudoClasses: ['export', 'import', 'deep', 'slotted', 'global', 'local', 'external'] },
  ],
  'selector-pseudo-element-no-unknown': [
    true,
    { ignorePseudoElements: ['v-deep', 'v-slotted', 'v-global'] },
  ],
  'selector-type-no-unknown': null,
  'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
  'value-keyword-case': [
    'lower',
    {
      ignoreProperties: ['font-family'],
    },
  ],
};

export default rules;
