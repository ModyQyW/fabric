const rules: Partial<{ [name: string]: any }> = {
  'at-rule-no-unknown': null,
  'scss/at-rule-no-unknown': [
    true,
    {
      // for @tailwind
      ignoreAtRules: ['tailwind'],
    },
  ],
};

export default rules;
