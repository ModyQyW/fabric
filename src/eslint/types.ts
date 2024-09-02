import type { FlatGitignoreOptions } from "eslint-config-flat-gitignore";
import type { ESLint, Linter } from "eslint";
import type { ESLintReactSettings } from "@eslint-react/shared";

export type Config = Linter.FlatConfig;

export type Plugin = ESLint.Plugin;

export type Rules = Config["rules"];

export type GitignoreOptions = FlatGitignoreOptions;
export interface IgnoresOptions {
  ignores?: string[];
}
export interface ImportsOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}
export interface JavaScriptOptions {
  files?: string[];
  rules?: Rules;
  parserOptions?: Linter.ParserOptions;
  languageOptions?: Linter.LanguageOptions;
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
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}
export interface NuxtOptions {
  files?: string[];
  rules?: Rules;
  typescriptRules?: Rules;
}
export interface PerfectionistOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}
export interface PromiseOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
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
  parserOptions?: Linter.ParserOptions;
  languageOptions?: Linter.LanguageOptions;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
  typescriptParserOptions?: Linter.ParserOptions;
  typescriptLanguageOptions?: Linter.LanguageOptions;
  typeCheck?: boolean;
  settings?: ESLintReactSettings;
}
export interface RegExpOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}
export interface TailwindCssOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}
export interface TomlOptions {
  files?: string[];
  rules?: Rules;
}
export interface TypeScriptOptions {
  files?: string[];
  rules?: Rules;
  typeCheck?: boolean;
  parserOptions?: Linter.ParserOptions;
}
export interface UnicornOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}
export interface UnoCssOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
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
   * @default true
   */
  perfectionist?: PerfectionistOptions | boolean;
  /**
   * Detect promise issues.
   *
   * @default true
   */
  promise?: PromiseOptions | boolean;
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
   * Detect tailwindcss issues.
   *
   * Enabled by default if you have tailwindcss installed.
   */
  tailwindcss?: TailwindCssOptions | boolean;
  /**
   * Detect toml issues.
   *
   * @default true
   */
  toml?: TomlOptions | boolean;
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
   * Detect unocss issues.
   *
   * Enabled by default if you have unocss installed.
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
