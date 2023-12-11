import type { FlatGitignoreOptions } from 'eslint-config-flat-gitignore';
import type { FlatESLintConfig } from 'eslint-define-config';

export type Config = FlatESLintConfig;

export type Rules = Config['rules'];

export type GitignoreOptions = FlatGitignoreOptions;
export interface IgnoresOptions {
  ignores?: string[];
}
export interface ImportsOptions {
  files?: string[];
  plugin?: 'i' | 'import';
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}
export interface JavaScriptOptions {
  files?: string[];
  rules?: Rules;
}
export interface JsdocOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}
export interface JsoncOptions {
  files?: string[];
  rules?: Rules;
}
export interface MarkdownOptions {
  markdownFiles?: string[];
  markdownInnerFiles?: string[];
  rules?: Rules;
}
export interface NextOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}
export interface NodeOptions {
  files?: string[];
  rules?: Rules;
}
export interface NuxtOptions {
  files?: string[];
  rules?: Rules;
}
export interface PerfectionistOptions {
  files?: string[];
  rules?: Rules;
}
export interface PrettierOptions {
  rules?: Rules;
}
export interface ReactNativeOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}
export interface ReactOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}
export interface RegExpOptions {
  files?: string[];
  rules?: Rules;
}
export interface SolidOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}
export interface TypeScriptOptions {
  files?: string[];
  rules?: Rules;
}
export interface UnicornOptions {
  files?: string[];
  rules?: Rules;
}
export interface UnoCssOptions {
  files?: string[];
  rules?: Rules;
}
export interface VueOptions {
  files?: string[];
  rules?: Rules;
  typescriptRules?: Rules;
}
export interface YmlOptions {
  files?: string[];
  rules?: Rules;
}

export interface Options {
  /**
   * Based on eslint-config-flat-gitignore. Use gitignore and eslintignore.
   *
   * @default true
   */
  gitignore?: GitignoreOptions | boolean;
  /**
   * Use preset exclude.
   *
   * @default true
   */
  ignores?: IgnoresOptions | boolean;
  /**
   * Detect import issues.
   *
   * @default true
   */
  imports?: ImportsOptions | boolean;
  /**
   * Detect JavaScript issues.
   *
   * @default true
   */
  javascript?: JavaScriptOptions | boolean;
  /**
   * Detect JSDoc issues.
   *
   * @default false
   */
  jsdoc?: JsdocOptions | boolean;
  /**
   * Detect jsonc issues.
   *
   * @default true
   */
  jsonc?: JsoncOptions | boolean;
  /**
   * Detect markdown issues.
   *
   * @default true
   */
  markdown?: MarkdownOptions | boolean;
  /**
   * Detect next issues.
   *
   * Enabled by default if you have next installed.
   */
  next?: NextOptions | boolean;
  /**
   * Detect node issues.
   *
   * @default true
   */
  node?: NodeOptions | boolean;
  /**
   * Detect nuxt issues.
   *
   * Enabled by default if you have nuxt installed.
   */
  nuxt?: NuxtOptions | boolean;
  /**
   * Based on eslint-plugin-perfectionist.
   *
   * Conflicts with ianvs/prettier-plugin-sort-imports,
   * trivago/prettier-plugin-sort-imports and prettier-organize-imports.
   *
   * @default true
   */
  perfectionist?: PerfectionistOptions | boolean;
  /**
   * Disable Prettier related rules. But not use Prettier in ESLint.
   *
   * @default true
   */
  prettier?: PrettierOptions | boolean;
  /**
   * Detect react issues.
   *
   * Enabled by default if you have react installed.
   */
  react?: ReactOptions | boolean;
  /**
   * Detect react-native issues.
   *
   * Enabled by default if you have react-native installed.
   */
  reactNative?: ReactNativeOptions | boolean;
  /**
   * Detect regexp issues.
   *
   * @default true
   */
  regexp?: RegExpOptions | boolean;
  /**
   * Detect solid issues.
   *
   * Enabled by default if you have solid installed.
   */
  solid?: SolidOptions | boolean;
  /**
   * Detect TypeScript issues.
   *
   * Enabled by default if you have TypeScript installed.
   */
  typescript?: TypeScriptOptions | boolean;
  /**
   * Based on eslint-plugin-unicorn.
   *
   * @default true
   */
  unicorn?: UnicornOptions | boolean;
  /**
   * Based on eslint-plugin-unocss.
   *
   * Enabled by default if you have UnoCSS installed.
   */
  unocss?: UnoCssOptions | boolean;
  /**
   * Detect vue issues.
   *
   * Enabled by default if you have vue installed.
   */
  vue?: VueOptions | boolean;
  /**
   * Detect yml issues.
   *
   * @default true
   */
  yml?: YmlOptions | boolean;
}
