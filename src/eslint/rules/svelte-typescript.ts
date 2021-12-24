import type { Linter } from 'eslint';
import svelteRules from './svelte';

const rules: Partial<Record<string, Linter.RuleLevel | Linter.RuleLevelAndOptions>> = {
  ...svelteRules,
};

export default rules;
