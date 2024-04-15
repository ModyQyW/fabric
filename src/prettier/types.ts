import type { Config as PrettierConfig } from 'prettier';

export type Config = PrettierConfig & Record<string, any>;

export interface Options {
  /**
   * Sort CSS or SCSS declarations. Use prettier-plugin-css-order.
   *
   * Conflicts with stylelint-config-recess-order.
   *
   * @default false
   */
  cssOrder?: boolean;
  /**
   * Sort import declarations. Use @ianvs/prettier-plugin-sort-imports.
   *
   * Conflicts with trivago/prettier-plugin-sort-imports,
   * prettier-plugin-organize-imports and eslint-plugin-perfectionist.
   *
   * @default false
   */
  ianvsSortImports?: boolean;
  /**
   * Format JSDoc and TSDoc comments. Use prettier-plugin-jsdoc.
   *
   * @default true
   */
  jsdoc?: boolean;
  /**
   * Organize HTML / Vue attributes. Use prettier-plugin-organize-attributes.
   *
   * Conflicts with eslint-plugin-perfectionist and eslint-plugin-vue.
   *
   * @default false
   */
  organizeAttributes?: boolean;
  /**
   * Sort import declarations. Use prettier-plugin-organize-imports.
   *
   * Conflicts with ianvs/prettier-plugin-sort-imports,
   * trivago/prettier-plugin-sort-imports, and eslint-plugin-perfectionist.
   *
   * @default false
   */
  organizeImports?: boolean;
  /**
   * Sort package.json. Use prettier-plugin-packagejson.
   *
   * @default true
   */
  packageJson?: boolean;
  /**
   * Sort HTML / Vue class attribute. Use prettier-plugin-tailwindcss.
   *
   * Conflicts with eslint-plugin-unocss.
   *
   * Enabled by default if you have TailwindCSS installed.
   */
  tailwindcss?: boolean;
  /**
   * Sort import declarations. Use @trivago/prettier-plugin-sort-imports.
   *
   * Conflicts with ianvs/prettier-plugin-sort-imports,
   * prettier-plugin-organize-imports and eslint-plugin-perfectionist.
   *
   * @default false
   */
  trivagoSortImports?: boolean;
}
