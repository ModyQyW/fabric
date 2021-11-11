import type { Linter } from 'eslint';
import react from './react';

const rules: Partial<{
  [name: string]: Linter.RuleLevel | Linter.RuleLevelAndOptions;
}> = {
  ...react,
};

export default rules;
