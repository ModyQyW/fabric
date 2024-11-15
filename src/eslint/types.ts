import type { FlatGitignoreOptions } from "eslint-config-flat-gitignore";
import type { ESLintPluginCommandOptions } from "eslint-plugin-command/types";
import type { ESLint, Linter } from "eslint";
import type { ESLintReactSettings } from "@eslint-react/shared";

export type Config = Linter.Config;

export type Plugin = ESLint.Plugin;

export type Rules = Config["rules"];

// ---- Ignores ----

// gitignore
export type GitignoreOptions = FlatGitignoreOptions;

// ignores
export interface IgnoresOptions {
  ignores?: string[];
}

// ---- Languages ----

// JavaScript
export interface JavaScriptOptions {
  files?: string[];
  rules?: Rules;
  parserOptions?: Linter.ParserOptions;
  languageOptions?: Linter.LanguageOptions;
}

// TypeScript
export interface TypeScriptOptions {
  files?: string[];
  rules?: Rules;
  parserOptions?: Linter.ParserOptions;
  languageOptions?: Linter.LanguageOptions;
  typeCheck?: boolean;
}

// ---- Base ----

// command
export type CommandOptions = ESLintPluginCommandOptions;

// JSDoc
export interface JsdocOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}

// imports
export interface ImportsOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}

// unused imports
export interface UnusedImportsOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}

// Promise
export interface PromiseOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}

// RegExp
export interface RegExpOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}

// Node
export interface NodeOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}

// perfectionist
export interface PerfectionistOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}

// unicorn
export interface UnicornOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}

// ---- Frameworks ----

// React
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

// React Native
export interface ReactNativeOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}

// Next
export interface NextOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}

// Vue
export interface VueOptions {
  files?: string[];
  rules?: Rules;
  typescriptRules?: Rules;
}

// Nuxt
export interface NuxtOptions {
  files?: string[];
  rules?: Rules;
  typescriptRules?: Rules;
}

// TailwindCSS
export interface TailwindCssOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}

// UnoCSS
export interface UnoCssOptions {
  files?: string[];
  rules?: Rules;
  typescriptFiles?: string[];
  typescriptRules?: Rules;
}

// ---- Special File Type ----

// markdown
export interface MarkdownOptions {
  markdownFiles?: string[];
  markdownInnerFiles?: string[];
  rules?: Rules;
}

// JSONC
export interface JsoncOptions {
  files?: string[];
  rules?: Rules;
}

// TOML
export interface TomlOptions {
  files?: string[];
  rules?: Rules;
}

// YML
export interface YmlOptions {
  files?: string[];
  rules?: Rules;
}

export interface Options {
  // ---- Ignores ----

  // gitignore
  /**
   * Based on eslint-config-flat-gitignore. Use gitignore and eslintignore.
   *
   * @default true
   */
  gitignore?: GitignoreOptions | boolean;

  // ignores
  /**
   * Use preset exclude.
   *
   * @default true
   */
  ignores?: IgnoresOptions | boolean;

  // ---- Languages ----

  // JavaScript
  /**
   * Detect JavaScript issues.
   *
   * @default true
   */
  javascript?: JavaScriptOptions | boolean;

  /**
   * Detect TypeScript issues.
   *
   * Enabled by default if you have TypeScript installed.
   */
  typescript?: TypeScriptOptions | boolean;

  // ---- Base ----

  // command
  /**
   * Based on eslint-plugin-command.
   *
   * @default true
   */
  command?: CommandOptions | boolean;

  // JSDoc
  /**
   * Detect JSDoc issues.
   *
   * @default false
   */
  jsdoc?: JsdocOptions | boolean;

  // imports
  /**
   * Detect import issues.
   *
   * @default true
   */
  imports?: ImportsOptions | boolean;

  // unused imports
  /**
   * Detect unused import issues.
   *
   * @default true
   */
  unusedImports?: UnusedImportsOptions | boolean;

  // Promise
  /**
   * Detect promise issues.
   *
   * @default true
   */
  promise?: PromiseOptions | boolean;

  // RegExp
  /**
   * Detect regexp issues.
   *
   * @default true
   */
  regexp?: RegExpOptions | boolean;

  // Node
  /**
   * Detect node issues.
   *
   * @default true
   */
  node?: NodeOptions | boolean;

  // perfectionist
  /**
   * Based on eslint-plugin-perfectionist.
   *
   * @default true
   */
  perfectionist?: PerfectionistOptions | boolean;

  // unicorn
  /**
   * Based on eslint-plugin-unicorn.
   *
   * @default true
   */
  unicorn?: UnicornOptions | boolean;

  // ---- Frameworks ----

  // React
  /**
   * Detect react issues.
   *
   * Enabled by default if you have react installed.
   */
  react?: ReactOptions | boolean;

  // React Native
  /**
   * Detect react-native issues.
   *
   * Enabled by default if you have react-native installed.
   */
  reactNative?: ReactNativeOptions | boolean;

  // Next
  /**
   * Detect next issues.
   *
   * Enabled by default if you have next installed.
   */
  next?: NextOptions | boolean;

  // Vue
  /**
   * Detect vue issues.
   *
   * Enabled by default if you have vue installed.
   */
  vue?: VueOptions | boolean;

  // Nuxt
  /**
   * Detect nuxt issues.
   *
   * Enabled by default if you have nuxt installed.
   */
  nuxt?: NuxtOptions | boolean;

  // TailwindCSS
  /**
   * Detect tailwindcss issues.
   *
   * Enabled by default if you have tailwindcss installed.
   */
  tailwindcss?: TailwindCssOptions | boolean;

  // UnoCSS
  /**
   * Detect unocss issues.
   *
   * Enabled by default if you have unocss installed.
   */
  unocss?: UnoCssOptions | boolean;

  // ---- Special File Type ----

  // Markdown
  /**
   * Detect markdown issues.
   *
   * @default true
   */
  markdown?: MarkdownOptions | boolean;

  // JSONC
  /**
   * Detect jsonc issues.
   *
   * @default true
   */
  jsonc?: JsoncOptions | boolean;

  // TOML
  /**
   * Detect toml issues.
   *
   * @default true
   */
  toml?: TomlOptions | boolean;

  // YML
  /**
   * Detect yml issues.
   *
   * @default true
   */
  yml?: YmlOptions | boolean;
}
