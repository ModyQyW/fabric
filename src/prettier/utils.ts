import { hasTailwindCss } from '../env';
import type { Options } from './types';

export function parseOptions(options: Options = {}): Required<Options> {
  return {
    cssOrder: options.cssOrder ?? false,
    ianvsSortImports: options.ianvsSortImports ?? false,
    jsdoc: options.jsdoc ?? true,
    organizeAttributes: options.organizeAttributes ?? false,
    organizeImports: options.organizeImports ?? false,
    packageJson: options.packageJson ?? true,
    tailwindcss: options.tailwindcss ?? hasTailwindCss,
    trivagoSortImports: options.trivagoSortImports ?? false,
  };
}
