import type { Config as PrettierConfig } from 'prettier';

export type Config = PrettierConfig & Record<string, any>;

export interface Options {
  /**
   * Format JSDoc and TSDoc comments. Use prettier-plugin-jsdoc.
   *
   * @default true
   */
  jsdoc?: boolean;
}
