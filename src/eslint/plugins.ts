import { fixupPluginRules } from "@eslint/compat";
import * as _configGitignore from "eslint-config-flat-gitignore";
import * as _pluginImportX from "eslint-plugin-import-x";
import * as _pluginJsdoc from "eslint-plugin-jsdoc";
import * as _pluginJsonc from "eslint-plugin-jsonc";
/* @ts-expect-error missing types */
import * as _pluginMarkdown from "eslint-plugin-markdown";
import * as _pluginN from "eslint-plugin-n";
import * as _pluginPackageJson from "eslint-plugin-package-json";
import * as _pluginPerfectionist from "eslint-plugin-perfectionist";
import * as _pluginRegexp from "eslint-plugin-regexp";
import * as _pluginTypeScript from "@typescript-eslint/eslint-plugin";
import * as _pluginUnicorn from "eslint-plugin-unicorn";
import * as _pluginUnocss from "@unocss/eslint-plugin";
/* @ts-expect-error missing types */
import * as _pluginVue from "eslint-plugin-vue";
/* @ts-expect-error missing types */
import * as _pluginVueScopedCss from "eslint-plugin-vue-scoped-css";
/* @ts-expect-error missing types */
import * as _pluginNuxt2 from "eslint-plugin-nuxt";
import * as _pluginNuxt3 from "@nuxt/eslint-plugin";
/* @ts-expect-error missing types */
import * as _pluginPromise from "eslint-plugin-promise";
/* @ts-expect-error missing types */
import * as _pluginReact from "eslint-plugin-react";
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

export const configGitignore = interopDefault(_configGitignore);
export const pluginImportX = interopDefault(_pluginImportX);
export const pluginJsdoc = interopDefault(_pluginJsdoc);
export const pluginJsonc = interopDefault(_pluginJsonc);
export const pluginMarkdown = interopDefault(_pluginMarkdown);
export const pluginN = interopDefault(_pluginN);
export const pluginPackageJson = interopDefault(_pluginPackageJson);
export const pluginPerfectionist = interopDefault(_pluginPerfectionist);
export const pluginRegexp = interopDefault(_pluginRegexp);
export const pluginTypeScript = interopDefault(_pluginTypeScript);
export const pluginUnicorn = interopDefault(_pluginUnicorn);
export const pluginUnocss = interopDefault(_pluginUnocss);
export const pluginVue = interopDefault(_pluginVue);
export const pluginVueScopedCss = interopDefault(_pluginVueScopedCss);
export const pluginNuxt2 = interopDefault(_pluginNuxt2);
export const pluginNuxt3 = interopDefault(_pluginNuxt3);
export const pluginPromise = interopDefault(_pluginPromise);
export const pluginReact = interopDefault(_pluginReact);
export const pluginReactHooks = fixupPluginRules(
  interopDefault(_pluginReactHooks),
);
export const pluginReactPerf = fixupPluginRules(
  interopDefault(_pluginReactPerf),
);
export const pluginReactRefresh = interopDefault(_pluginReactRefresh);
// https://github.com/Intellicode/eslint-plugin-react-native/issues/333
export const pluginReactNative = fixupPluginRules(
  interopDefault(_pluginReactNative),
);
export const pluginNext = interopDefault(_pluginNext);
export const pluginTailwindcss = interopDefault(_pluginTailwindcss);
export const pluginToml = interopDefault(_pluginToml);
export const pluginYml = interopDefault(_pluginYml);
export const parserBabel = interopDefault(_parserBabel);
export const parserJsonc = interopDefault(_parserJsonc);
export const parserToml = interopDefault(_parserToml);
export const parserTypeScript = interopDefault(_parserTypeScript);
export const parserVue = interopDefault(_parserVue);
export const parserYml = interopDefault(_parserYml);
