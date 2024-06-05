export interface Options {
  /**
   * Use commitlint.
   *
   * Enabled by default if you have commitlint installed.
   */
  commitlint?: boolean;

  /**
   * Use lint-staged.
   *
   * Enabled by default if you have lint-staged installed.
   */
  lintStaged?: boolean;
}
