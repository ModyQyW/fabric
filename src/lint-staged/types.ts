export type Commands = string | string[];

export type ConfigFn = (filenames: string[]) => Commands | Promise<Commands>;

export type Config = { [key: string]: Commands | ConfigFn } | ConfigFn;

export interface Options {
  /**
   * Use ESLint.
   *
   * Enabled by default if you have ESLint installed.
   */
  eslint?: boolean;
  /**
   * Lint jsonc files.
   *
   * @deprecated Use lintJsonc instead.
   * @default true
   */
  jsonc?: boolean;
  /**
   * Lint jsonc files.
   *
   * @default true
   */
  lintJsonc?: boolean;
  /**
   * Lint yml files.
   *
   * @default true
   */
  lintYml?: boolean;
  /**
   * Lint yml files.
   *
   * @deprecated Use lintYml instead.
   * @default true
   */
  yml?: boolean;

  /**
   * Use oxlint.
   *
   * Enabled by default if you have oxlint installed.
   */
  oxlint?: boolean;

  /**
   * Use markdownlint.
   *
   * Enabled by default if you have markdownlint-cli2 installed.
   */
  markdownlint?: boolean;

  /**
   * Format changelog files.
   *
   * @default false
   */
  formatChangelog?: boolean;
  /**
   * Use Prettier.
   *
   * Enabled by default if you have Prettier installed.
   */
  prettier?: boolean;

  /**
   * Use Stylelint.
   *
   * Enabled by default if you have Stylelint installed.
   */
  stylelint?: boolean;
}
