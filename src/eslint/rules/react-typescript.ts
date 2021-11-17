import type { Linter } from 'eslint';
import react from './react';

const rules: Partial<Record<string, Linter.RuleLevel | Linter.RuleLevelAndOptions>> = {
  ...react,
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      varsIgnorePattern: 'React',
      args: 'after-used',
      ignoreRestSiblings: true,
    },
  ],
  'no-unused-vars': 'off',
};

export default rules;
