export type Commands = string | string[];

export type ConfigFn = (filenames: string[]) => Commands | Promise<Commands>;

export type Config = ConfigFn | Record<string, Commands | ConfigFn>;

export interface Options {
  /**
   * Use Biome.
   *
   * Enabled by default if you have Biome installed.
   */
  biome?: boolean;

  /**
   * Use ESLint without Biome.
   *
   * Enabled by default if you have ESLint installed and biome disabled.
   */
  eslint?: boolean;
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
   * Lint toml files.
   *
   * @default true
   */
  lintToml?: boolean;

  /**
   * Use oxlint without Biome.
   *
   * Enabled by default if you have oxlint installed and biome disabled.
   */
  oxlint?: boolean;

  /**
   * Use markdownlint without Biome.
   *
   * Enabled by default if you have markdownlint-cli installed and biome
   * disabled.
   */
  markdownlint?: boolean;

  /**
   * Format changelog files.
   *
   * @default false
   */
  formatChangelog?: boolean;
  /**
   * Use Prettier without Biome.
   *
   * Enabled by default if you have Prettier installed and biome disabled.
   */
  prettier?: boolean;

  /**
   * Use Stylelint without Biome.
   *
   * Enabled by default if you have Stylelint installed and biome disabled.
   */
  stylelint?: boolean;
}
