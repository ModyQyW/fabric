const rules: Partial<{ [name: string]: any }> = {
  'at-rule-no-unknown': [
    true,
    {
      // for @tailwind
      ignoreAtRules: ['tailwind'],
    },
  ],
  'comment-empty-line-before': [
    'always',
    {
      except: ['first-nested'],
      ignore: ['stylelint-commands'],
      // for uni-app
      ignoreComments: [/^#ifdef/, /^#ifndef/, /^#endif/],
    },
  ],
  'property-no-unknown': [
    true,
    {
      // for :import, :export
      ignoreSelectors: [':import', ':export'],
    },
  ],
  'selector-pseudo-class-no-unknown': [
    true,
    // for :export, :deep, :slotted, :global
    { ignorePseudoClasses: ['export', 'deep', 'slotted', 'global'] },
  ],
  'selector-pseudo-element-no-unknown': [
    true,
    // for ::v-deep, ::v-slotted, ::v-global
    { ignorePseudoElements: ['v-deep', 'v-slotted', '::v-global'] },
  ],
  'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
  'value-keyword-case': [
    'lower',
    {
      ignoreProperties: ['font-family'],
    },
  ],
};

export default rules;
