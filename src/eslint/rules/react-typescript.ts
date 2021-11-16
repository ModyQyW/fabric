import type { Linter } from 'eslint';
import react from './react';

const rules: Partial<Record<string, Linter.RuleLevel | Linter.RuleLevelAndOptions>> = {
  ...react,
};

export default rules;
