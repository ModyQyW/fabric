const rules: Partial<{ [name: string]: any }> = {
  'at-rule-no-unknown': null,
  'scss/at-rule-no-unknown': [
    true,
    {
      ignoreAtRules: ['tailwind', 'value'],
    },
  ],
};

export default rules;
