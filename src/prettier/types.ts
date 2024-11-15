import type { Config as PrettierConfig } from "prettier";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Config = PrettierConfig & Record<string, any>;

export interface Options {
  /**
   * Format curly braces.
   *
   * @default true
   */
  curly?: boolean;

  /**
   * Format JSDoc and TSDoc comments. Use prettier-plugin-jsdoc.
   *
   * @default true
   */
  jsdoc?: boolean;
}
