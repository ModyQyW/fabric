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
   * @default true
   */
  jsonc?: boolean;
  /**
   * Lint yml files.
   *
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
