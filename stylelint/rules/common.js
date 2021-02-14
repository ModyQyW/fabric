module.exports = {
  'comment-empty-line-before': [
    'always',
    {
      except: ['first-nested'],
      ignore: ['stylelint-commands'],
      // for uni-app
      ignoreComments: [/^#ifdef/, /^#ifndef/, /^#endif/],
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
  'selector-type-no-unknown': [
    true,
    { ignore: ['custom-elements', 'default-namespace'] },
  ],
  'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
  'value-keyword-case': [
    'lower',
    {
      ignoreKeywords: [
        'Arial',
        'Avenir',
        'Helvetica',
        'BlinkMacSystemFont',
        'Roboto',
      ],
    },
  ],
};
