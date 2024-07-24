import multimatch from 'multimatch';
import { GLOB_EXCLUDE } from './constants';

/**
 * Interop default.
 *
 * @param m Imported package
 * @returns Actual package for using
 */
export function interopDefault<T>(
  m: T,
): T extends { default: infer U } ? U : T {
  return (m as any).default || m;
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

export function filterFilenames(filenames: string[], patterns = GLOB_EXCLUDE) {
  const matched = multimatch(filenames, patterns, { matchBase: true });
  return filenames.filter((n) => !matched.includes(n));
}
