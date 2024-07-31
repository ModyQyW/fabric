import { GLOB_JSX, GLOB_TSX } from '../../constants';
import { pluginSolid } from '../plugins';
import type { Config, SolidOptions } from '../types';

export function solid(options: SolidOptions = {}): Config[] {
  const {
    files = [GLOB_JSX, GLOB_TSX],
    rules = {},
    typescriptFiles = [GLOB_TSX],
    typescriptRules = {},
  } = options;
  return [
    {
      files,
      plugins: {
        // @ts-expect-error not matched
        solid: pluginSolid,
      },
      rules: {
        // https://github.com/solidjs-community/eslint-plugin-solid/blob/v0.14.1/src/configs/recommended.ts
        'solid/jsx-no-duplicate-props': 'error',
        'solid/jsx-no-undef': 'error',
        'solid/jsx-uses-vars': 'error',
        'solid/no-unknown-namespaces': 'error',
        'solid/no-innerhtml': 'error',
        'solid/jsx-no-script-url': 'error',
        'solid/components-return-once': 'warn',
        'solid/no-destructure': 'error',
        'solid/prefer-for': 'error',
        'solid/reactivity': 'warn',
        'solid/event-handlers': 'warn',
        'solid/imports': 'warn',
        'solid/style-prop': 'warn',
        'solid/no-react-deps': 'warn',
        'solid/no-react-specific-props': 'warn',
        'solid/self-closing-comp': 'warn',
        'solid/no-array-handlers': 'off',
        'solid/prefer-show': 'off',
        'solid/no-proxy-apis': 'off',
        'solid/prefer-classlist': 'off',

        ...rules,
      },
    },
    {
      files: typescriptFiles,
      plugins: {
        // @ts-expect-error not matched
        solid: pluginSolid,
      },
      rules: {
        // https://github.com/solidjs-community/eslint-plugin-solid/blob/v0.14.1/src/configs/typescript.ts
        'solid/jsx-no-undef': ['error', { typescriptEnabled: true }],
        'solid/no-unknown-namespaces': 'off',

        ...typescriptRules,
      },
    },
  ];
}
