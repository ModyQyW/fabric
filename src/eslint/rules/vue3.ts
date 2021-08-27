import type { Linter } from 'eslint';
import vue2Rules from './vue2';

const rules: Partial<{
  [name: string]: Linter.RuleLevel | Linter.RuleLevelAndOptions;
}> = {
  ...vue2Rules,
};

export default rules;
