const rules: Partial<Record<string, any>> = {
  'at-rule-no-unknown': null,
  'scss/at-rule-no-unknown': [
    true,
    {
      ignoreAtRules: ['tailwind', 'value', 'layer'],
    },
  ],
};

export default rules;
