import vanilla from './vanilla';
import type { Linter } from 'eslint';

const rules: Partial<Record<string, Linter.RuleLevel | Linter.RuleLevelAndOptions>> = {
  ...vanilla,
};

export default rules;
