import react from './react';
import type { Linter } from 'eslint';

const rules: Partial<Record<string, Linter.RuleLevel | Linter.RuleLevelAndOptions>> = {
  ...react,
  'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
};

export default rules;
