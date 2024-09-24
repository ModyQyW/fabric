import { fixupPluginRules } from "@eslint/compat";
import * as _configGitignore from "eslint-config-flat-gitignore";
import * as _pluginImportX from "eslint-plugin-import-x";
import * as _pluginJsdoc from "eslint-plugin-jsdoc";
import * as _pluginJsonc from "eslint-plugin-jsonc";
/* @ts-expect-error missing types */
import * as _pluginMarkdown from "eslint-plugin-markdown";
import * as _pluginN from "eslint-plugin-n";
import * as _pluginPackageJson from "eslint-plugin-package-json";
import _pluginPerfectionist from "eslint-plugin-perfectionist";
import * as _pluginRegexp from "eslint-plugin-regexp";
import * as _pluginTypeScript from "@typescript-eslint/eslint-plugin";
import * as _pluginUnicorn from "eslint-plugin-unicorn";
import _pluginUnocss from "@unocss/eslint-plugin";
/* @ts-expect-error missing types */
import * as _pluginVue from "eslint-plugin-vue";
/* @ts-expect-error missing types */
import * as _pluginVueScopedCss from "eslint-plugin-vue-scoped-css";
/* @ts-expect-error missing types */
import * as _pluginNuxt2 from "eslint-plugin-nuxt";
import * as _pluginNuxt3 from "@nuxt/eslint-plugin";
/* @ts-expect-error missing types */
import * as _pluginPromise from "eslint-plugin-promise";
import * as _pluginReactX from "eslint-plugin-react-x";
import * as _pluginReactDom from "eslint-plugin-react-dom";
import * as _pluginReactWebApi from "eslint-plugin-react-web-api";
import * as _pluginReactHooksExtra from "eslint-plugin-react-hooks-extra";
import * as _pluginReactNamingConvention from "eslint-plugin-react-naming-convention";
/* @ts-expect-error missing types */
import * as _pluginReactHooks from "eslint-plugin-react-hooks";
/* @ts-expect-error missing types */
import * as _pluginReactPerf from "eslint-plugin-react-perf";
/* @ts-expect-error missing types */
import * as _pluginReactRefresh from "eslint-plugin-react-refresh";
/* @ts-expect-error missing types */
import * as _pluginReactNative from "eslint-plugin-react-native";
/* @ts-expect-error missing types */
import * as _pluginNext from "@next/eslint-plugin-next";
/* @ts-expect-error missing types */
import * as _pluginTailwindcss from "eslint-plugin-tailwindcss";
import * as _pluginToml from "eslint-plugin-toml";
import * as _pluginYml from "eslint-plugin-yml";
/* @ts-expect-error missing types */
import * as _parserBabel from "@babel/eslint-parser";
import * as _parserJsonc from "jsonc-eslint-parser";
import * as _parserToml from "toml-eslint-parser";
import * as _parserTypeScript from "@typescript-eslint/parser";
import * as _parserVue from "vue-eslint-parser";
import * as _parserYml from "yaml-eslint-parser";
import { interopDefault } from "../utils";
import type { ESLint } from "eslint";

export const configGitignore = interopDefault(_configGitignore);
export const pluginImportX = interopDefault(
  _pluginImportX,
) as unknown as ESLint.Plugin;
export const pluginJsdoc = interopDefault(
  _pluginJsdoc,
) as unknown as ESLint.Plugin;
export const pluginJsonc = interopDefault(
  _pluginJsonc,
) as unknown as ESLint.Plugin;
export const pluginMarkdown = interopDefault(
  _pluginMarkdown,
) as unknown as ESLint.Plugin;
export const pluginN = interopDefault(_pluginN) as unknown as ESLint.Plugin;
export const pluginPackageJson = interopDefault(
  _pluginPackageJson,
) as unknown as ESLint.Plugin;
export const pluginPerfectionist = interopDefault(
  _pluginPerfectionist,
) as unknown as ESLint.Plugin;
export const pluginRegexp = interopDefault(
  _pluginRegexp,
) as unknown as ESLint.Plugin;
export const pluginTypeScript = interopDefault(
  _pluginTypeScript,
) as unknown as ESLint.Plugin;
export const pluginUnicorn = interopDefault(
  _pluginUnicorn,
) as unknown as ESLint.Plugin;
export const pluginUnocss = interopDefault(
  _pluginUnocss,
) as unknown as ESLint.Plugin;
export const pluginVue = interopDefault(_pluginVue) as unknown as ESLint.Plugin;
export const pluginVueScopedCss = interopDefault(
  _pluginVueScopedCss,
) as unknown as ESLint.Plugin;
export const pluginNuxt2 = interopDefault(
  _pluginNuxt2,
) as unknown as ESLint.Plugin;
export const pluginNuxt3 = interopDefault(
  _pluginNuxt3,
) as unknown as ESLint.Plugin;
export const pluginPromise = interopDefault(
  _pluginPromise,
) as unknown as ESLint.Plugin;
export const pluginReactX = interopDefault(
  _pluginReactX,
) as unknown as ESLint.Plugin;
export const pluginReactDom = interopDefault(
  _pluginReactDom,
) as unknown as ESLint.Plugin;
export const pluginReactWebApi = interopDefault(
  _pluginReactWebApi,
) as unknown as ESLint.Plugin;
export const pluginReactHooksExtra = interopDefault(
  _pluginReactHooksExtra,
) as unknown as ESLint.Plugin;
export const pluginReactNamingConvention = interopDefault(
  _pluginReactNamingConvention,
) as unknown as ESLint.Plugin;
export const pluginReactHooks = fixupPluginRules(
  interopDefault(_pluginReactHooks),
) as unknown as ESLint.Plugin;
export const pluginReactPerf = fixupPluginRules(
  interopDefault(_pluginReactPerf),
) as unknown as ESLint.Plugin;
export const pluginReactRefresh = interopDefault(
  _pluginReactRefresh,
) as unknown as ESLint.Plugin;
// https://github.com/Intellicode/eslint-plugin-react-native/issues/333
export const pluginReactNative = fixupPluginRules(
  interopDefault(_pluginReactNative),
) as unknown as ESLint.Plugin;
export const pluginNext = interopDefault(
  _pluginNext,
) as unknown as ESLint.Plugin;
export const pluginTailwindcss = interopDefault(
  _pluginTailwindcss,
) as unknown as ESLint.Plugin;
export const pluginToml = interopDefault(
  _pluginToml,
) as unknown as ESLint.Plugin;
export const pluginYml = interopDefault(_pluginYml) as unknown as ESLint.Plugin;
export const parserBabel = interopDefault(_parserBabel);
export const parserJsonc = interopDefault(_parserJsonc);
export const parserToml = interopDefault(_parserToml);
export const parserTypeScript = interopDefault(_parserTypeScript);
export const parserVue = interopDefault(_parserVue);
export const parserYml = interopDefault(_parserYml);
