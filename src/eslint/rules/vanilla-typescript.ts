import vanilla from './vanilla';
import type { Linter } from 'eslint';

const rules: Partial<Record<string, Linter.RuleLevel | Linter.RuleLevelAndOptions>> = {
  ...vanilla,
  'import/extensions': [
    'error',
    'always',
    {
      js: 'never',
      cjs: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      cts: 'never',
      mts: 'never',
      tsx: 'never',
    },
  ],
  'no-undef': 'off', // unplugin-auto-import
};

export default rules;
