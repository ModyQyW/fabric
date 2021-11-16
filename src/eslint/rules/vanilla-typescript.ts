import type { Linter } from 'eslint';
import vanilla from './vanilla';

const rules: Partial<Record<string, Linter.RuleLevel | Linter.RuleLevelAndOptions>> = {
  ...vanilla,
  'no-undef': 'off', // unplugin-auto-import
};

export default rules;
