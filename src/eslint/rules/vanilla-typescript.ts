import type { Linter } from 'eslint';
import vanilla from './vanilla';

const rules: Partial<{
  [name: string]: Linter.RuleLevel | Linter.RuleLevelAndOptions;
}> = {
  ...vanilla,
  '@typescript-eslint/no-unused-vars': 'warn',
  'no-unused-vars': 'off',
};

export default rules;
