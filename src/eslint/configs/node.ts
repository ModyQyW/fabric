import { GLOB_SCRIPT, GLOB_VUE } from '../../constants';
import { pluginN } from '../plugins';
import type { Config, NodeOptions } from '../types';

export function node(options: NodeOptions = {}): Config[] {
  const { files = [GLOB_SCRIPT, GLOB_VUE], rules = {} } = options;
  return [
    {
      files,
      plugins: {
        n: pluginN,
      },
      rules: {
        // https://github.com/eslint-community/eslint-plugin-n/blob/v17.9.0/lib/configs/_commons.js
        'n/no-deprecated-api': 'error',
        // https://github.com/eslint-community/eslint-plugin-n/blob/v17.9.0/lib/configs/_commons.js
        'n/no-exports-assign': 'error',
        // https://github.com/eslint-community/eslint-plugin-n/blob/v17.9.0/lib/configs/_commons.js
        'n/no-extraneous-import': 'error',
        // https://github.com/eslint-community/eslint-plugin-n/blob/v17.9.0/lib/configs/_commons.js
        'n/no-extraneous-require': 'error',
        // https://github.com/eslint-community/eslint-plugin-n/blob/v17.9.0/lib/configs/_commons.js
        // handle by eslint-plugin-import-x
        // 'n/no-missing-import': 'off',
        // https://github.com/eslint-community/eslint-plugin-n/blob/v17.9.0/lib/configs/_commons.js
        // handle by eslint-plugin-import-x
        // 'n/no-missing-require': 'off',
        // https://github.com/eslint-community/eslint-plugin-n/blob/v17.9.0/lib/configs/_commons.js
        'n/no-process-exit': 'error',
        // https://github.com/eslint-community/eslint-plugin-n/blob/v17.9.0/lib/configs/_commons.js
        'n/no-unpublished-bin': 'error',
        // https://github.com/eslint-community/eslint-plugin-n/blob/v17.9.0/lib/configs/_commons.js
        'n/no-unpublished-import': 'error',
        // https://github.com/eslint-community/eslint-plugin-n/blob/v17.9.0/lib/configs/_commons.js
        'n/no-unpublished-require': 'error',
        // https://github.com/eslint-community/eslint-plugin-n/blob/v17.9.0/lib/configs/_commons.js
        // 'n/no-unsupported-features/es-builtins': 'off',
        // https://github.com/eslint-community/eslint-plugin-n/blob/v17.9.0/lib/configs/_commons.js
        // 'n/no-unsupported-features/es-syntax': 'off',
        // https://github.com/eslint-community/eslint-plugin-n/blob/v17.9.0/lib/configs/_commons.js
        // 'n/no-unsupported-features/node-builtins': 'off',
        // https://github.com/eslint-community/eslint-plugin-n/blob/v17.9.0/lib/configs/_commons.js
        'n/process-exit-as-throw': 'error',
        // https://github.com/eslint-community/eslint-plugin-n/blob/v17.9.0/lib/configs/_commons.js
        // allow source code to use hashbang for building
        // 'n/hashbang': 'off',
        ...rules,
      },
    },
  ];
}
