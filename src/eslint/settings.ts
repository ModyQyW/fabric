import { enableVueI18n, enableVue3, enableTypeScript } from '../helpers';

export const javascriptSettings = {
  'import/core-modules': ['electron'],
  'import/extensions': ['.js', '.mjs', '.jsx'],
  'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  'import/ignore': ['node_modules', '\\.(scss|css|svg|json)$'],
  'import/resolver': {
    node: { extensions: ['.js', '.mjs', '.jsx', '.json'] },
  },
};

export const typescriptSettings = {
  ...javascriptSettings,
  'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.mts', '.tsx', '.d.ts'],
  'import/parsers': {
    '@typescript-eslint/parser': ['.ts', '.mts', '.tsx', '.d.ts'],
  },
  'import/resolver': {
    node: {
      extensions: ['.js', '.mjs', '.jsx', '.ts', '.mts', '.tsx', '.d.ts', '.json'],
    },
    typescript: {
      extensions: ['.js', '.mjs', '.jsx', '.ts', '.mts', '.tsx', '.d.ts', '.json'],
    },
  },
};

const vueSpecificSettings = enableVueI18n
  ? {
      'vue-i18n': {
        localeDir: 'src/locales/**/*.{json,jsonc,json5,yaml,yml}',
        messageSyntaxVersion: enableVue3 ? '^9.0.0' : '^8.0.0',
      },
    }
  : {};
export const vueSettings = enableTypeScript
  ? {
      ...typescriptSettings,
      ...vueSpecificSettings,
    }
  : {
      ...javascriptSettings,
      ...vueSpecificSettings,
    };

export const svelteSettings = enableTypeScript
  ? {
      ...typescriptSettings,
    }
  : {
      ...javascriptSettings,
    };
