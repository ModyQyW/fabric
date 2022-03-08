import vue2Rules from './vue2';
import type { Linter } from 'eslint';

const rules: Partial<Record<string, Linter.RuleLevel | Linter.RuleLevelAndOptions>> = {
  ...vue2Rules,
  '@typescript-eslint/explicit-function-return-type': 'off',
};

export default rules;
