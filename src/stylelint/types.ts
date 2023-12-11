import type { Config as StylelintConfig } from 'stylelint';

export type Config = StylelintConfig;

export interface Options {
  /**
   * Sort CSS or SCSS declarations.
   *
   * Conflicts with prettier-plugin-css-order.
   *
   * @default true
   */
  order?: boolean;
  /**
   * Support SCSS.
   *
   * Enabled by default if you have SCSS installed.
   */
  scss?: boolean;
  /**
   * CSS and SCSS code style.
   *
   * @default 'recommended'
   */
  style?: 'recommended' | 'standard';
}
