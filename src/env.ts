import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import process from 'node:process';
import { getPackageInfoSync, isPackageExists } from 'local-pkg';

export const hasTypeScript = isPackageExists('typescript');

export const hasNuxt = isPackageExists('nuxt');
export const getNuxtVersion = () => {
  const pkg = getPackageInfoSync('nuxt', { paths: [process.cwd()] });
  if (
    pkg &&
    typeof pkg.version === 'string' &&
    !Number.isNaN(+pkg.version[0])
  ) {
    return +pkg.version[0];
  }
  return 3;
};
export const hasNuxt3 = getNuxtVersion() === 3;
export const hasVuePress = isPackageExists('vuepress');
export const hasVitePress = isPackageExists('vitepress');
export const hasSlidev = isPackageExists('@slidev/cli');
export const hasUniApp =
  isPackageExists('@dcloudio/vite-plugin-uni') ||
  isPackageExists('@dcloudio/vue-cli-plugin-uni');
export const hasTaroVue = [
  '@tarojs/taro',
  '@tarojs/plugin-framework-vue',
].every((p) => isPackageExists(p));
export const hasIonicVue = isPackageExists('@ionic/vue');
export const hasVue =
  isPackageExists('vue') ||
  hasNuxt ||
  hasVuePress ||
  hasVitePress ||
  hasSlidev ||
  hasUniApp ||
  hasTaroVue ||
  hasIonicVue;
export const getVueVersion = () => {
  const pkg = getPackageInfoSync('vue', { paths: [process.cwd()] });
  if (
    pkg &&
    typeof pkg.version === 'string' &&
    !Number.isNaN(+pkg.version[0])
  ) {
    return +pkg.version[0];
  }
  return 3;
};
export const hasVue3 = getVueVersion() === 3;

export const hasNext = ['next'].some((p) => isPackageExists(p));
export const hasRemix = [
  '@remix-run/node',
  '@remix-run/react',
  '@remix-run/serve',
  '@remix-run/dev',
  'remix',
].some((p) => isPackageExists(p));
export const hasReactNative = ['react-native', '@expo/cli'].some((p) =>
  isPackageExists(p),
);
export const hasIonicReact = isPackageExists('@ionic/react');
export const hasDocusaurus = isPackageExists('docusaurus');
export const hasTaroReact = [
  '@tarojs/taro',
  '@tarojs/plugin-framework-react',
].every((p) => isPackageExists(p));
export const hasReact =
  isPackageExists('react') ||
  hasNext ||
  hasRemix ||
  hasReactNative ||
  hasIonicReact ||
  hasDocusaurus ||
  hasTaroReact;

export const hasSvelteKit = isPackageExists('@sveltejs/kit');
export const hasTaroSvelte = [
  '@tarojs/taro',
  '@tarojs/plugin-framework-svelte',
].every((p) => isPackageExists(p));
export const hasSvelte =
  hasSvelteKit || hasTaroSvelte || isPackageExists('svelte');

export const hasSolidStart = isPackageExists('solid-start');
export const hasTaroSolid = [
  '@tarojs/taro',
  '@tarojs/plugin-framework-solid',
].every((p) => isPackageExists(p));
export const hasSolid =
  hasSolidStart || hasTaroSolid || isPackageExists('solid-js');

export const hasAstro = isPackageExists('astro');

export const hasTaro = isPackageExists('@tarojs/taro');
export const hasMiniProgram = hasUniApp || hasTaro;

export const hasScss = isPackageExists('sass');
export const hasLess = isPackageExists('less');

export const hasUnoCss = isPackageExists('unocss');
export const hasWindiCss = isPackageExists('windicss');
export const hasTailwindCss = isPackageExists('tailwindcss');

export const hasVite = isPackageExists('vite');

export const hasLerna = isPackageExists('lerna');
export const hasNx = isPackageExists('nx');
export const hasRush = isPackageExists('rush');
export const hasPnpmWorkspace = existsSync(
  resolve(process.cwd(), 'pnpm-workspace.yaml'),
);
export const hasMonoRepo = hasLerna || hasNx || hasRush || hasPnpmWorkspace;

export const hasVitest = isPackageExists('vitest');

export const hasTsconfigVitestJson = existsSync(
  resolve(process.cwd(), 'tsconfig.vitest.json'),
);
export const hasTsconfigTestJson = existsSync(
  resolve(process.cwd(), 'tsconfig.test.json'),
);
export const hasTsconfigAppJson = existsSync(
  resolve(process.cwd(), 'tsconfig.app.json'),
);

export const hasBiome = isPackageExists('biome');
export const hasESLint = isPackageExists('eslint');
export const hasOxlint = isPackageExists('oxlint');
export const hasStylelint = isPackageExists('stylelint');
export const hasPrettier = isPackageExists('prettier');
export const hasTsc = isPackageExists('typescript');
export const hasVueTsc = isPackageExists('vue-tsc');
export const hasMarkdownlintCli = isPackageExists('markdownlint-cli');

export const hasLintStaged = isPackageExists('lint-staged');
export const hasCommitlint =
  isPackageExists('@commitlint/cli') || isPackageExists('commitlint-cli');
