import javascript from './javascript';

const settings: Record<string, any> = {
  ...javascript,
  'import/extensions': ['.js', '.cjs', 'mjs', '.jsx', '.ts', '.cts', '.mts', '.tsx', '.d.ts'],
  'import/resolver': {
    ...javascript['import/resolver'],
    node: {
      extensions: ['.js', '.cjs', '.mjs', '.jsx', '.json', '.ts', '.cts', '.mts', '.tsx', '.d.ts'],
    },
  },
};

export default settings;
