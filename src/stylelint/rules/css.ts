const rules: Partial<Record<string, any>> = {
  'at-rule-no-unknown': [
    true,
    {
      ignoreAtRules: ['tailwind', 'value', 'layer'],
    },
  ],
  'function-no-unknown': null,
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
  'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
};

export default rules;
