import type { Linter } from 'eslint';
import vue2TypescriptRules from './vue2-typescript';

const rules: Partial<Record<string, Linter.RuleLevel | Linter.RuleLevelAndOptions>> = {
  ...vue2TypescriptRules,
};

export default rules;
