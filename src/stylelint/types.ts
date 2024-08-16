import type { Config as StylelintConfig } from "stylelint";

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
   * Prevent the use of low performance animation and transition properties.
   *
   * @default true
   */
  highPerformanceAnimation?: boolean;

  /**
   * Enforce defensive CSS best practices.
   *
   * @default true
   */
  defensiveCss?: boolean;

  /**
   * Enforce the use of logical CSS properties, values and units.
   *
   * @default false
   */
  logicalCss?: boolean;

  /**
   * Support SCSS.
   *
   * Enabled by default if you have sass installed.
   */
  scss?: boolean;
}
