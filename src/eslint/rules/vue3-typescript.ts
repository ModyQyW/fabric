import vue2TypescriptRules from './vue2-typescript';
import type { Linter } from 'eslint';

const rules: Partial<Record<string, Linter.RuleLevel | Linter.RuleLevelAndOptions>> = {
  ...vue2TypescriptRules,
};

export default rules;
