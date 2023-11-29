import type { FlatESLintConfig } from 'eslint-define-config';

export type Config = FlatESLintConfig;

export type Rules = Config['rules'];

export interface Options {
  /**
   * Based on eslint-config-flat-gitignore. Use gitignore and eslintignore.
   *
   * @default true
   */
  gitignore?: boolean;
  /**
   * Use preset exclude.
   *
   * @default true
   */
  ignores?: boolean;
  /**
   * Detect import issues.
   *
   * @default true
   */
  imports?: boolean;
  /**
   * Detect JavaScript issues.
   *
   * @default true
   */
  javascript?: boolean;
  /**
   * Detect JSDoc issues.
   *
   * @default false
   */
  jsdoc?: boolean;
  /**
   * Detect jsonc issues.
   *
   * @default true
   */
  jsonc?: boolean;
  /**
   * Detect markdown issues.
   *
   * @default true
   */
  markdown?: boolean;
  /**
   * Detect next issues.
   *
   * Enabled by default if you have next installed.
   */
  next?: boolean;
  /**
   * Detect node issues.
   *
   * @default true
   */
  node?: boolean;
  /**
   * Detect nuxt issues.
   *
   * Enabled by default if you have nuxt installed.
   */
  nuxt?: boolean;
  /**
   * Based on eslint-plugin-perfectionist.
   *
   * Conflicts with ianvs/prettier-plugin-sort-imports,
   * trivago/prettier-plugin-sort-imports and prettier-organize-imports.
   *
   * @default true
   */
  perfectionist?: boolean;
  /**
   * Disable Prettier related rules. But not use Prettier in ESLint.
   *
   * @default true
   */
  prettier?: boolean;
  /**
   * Detect react issues.
   *
   * Enabled by default if you have react installed.
   */
  react?: boolean;
  /**
   * Detect react-native issues.
   *
   * Enabled by default if you have react-native installed.
   */
  reactNative?: boolean;
  /**
   * Detect regexp issues.
   *
   * @default true
   */
  regexp?: boolean;
  /**
   * Detect solid issues.
   *
   * Enabled by default if you have solid installed.
   */
  solid?: boolean;
  /**
   * Detect TypeScript issues.
   *
   * Enabled by default if you have TypeScript installed.
   */
  typescript?: boolean;
  /**
   * Based on eslint-plugin-unicorn.
   *
   * @default true
   */
  unicorn?: boolean;
  /**
   * Based on eslint-plugin-unocss.
   *
   * Enabled by default if you have UnoCSS installed.
   */
  unocss?: boolean;
  /**
   * Detect vue issues.
   *
   * Enabled by default if you have vue installed.
   */
  vue?: boolean;
  /**
   * Detect yml issues.
   *
   * @default true
   */
  yml?: boolean;
}
