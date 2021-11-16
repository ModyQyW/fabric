import type { Linter } from 'eslint';
import vue2Rules from './vue2';

const rules: Partial<Record<string, Linter.RuleLevel | Linter.RuleLevelAndOptions>> = {
  ...vue2Rules,
  '@typescript-eslint/explicit-function-return-type': 'off',
};

export default rules;
