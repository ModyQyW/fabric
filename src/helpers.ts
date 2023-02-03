import { isPackageExists, getPackageInfoSync } from 'local-pkg';

export const enableDebug = Boolean(process.env.ENABLE_DEBUG);

export const enableTypescript =
  isPackageExists('typescript') || Boolean(process.env.ENABLE_TYPESCRIPT);

export const enableNuxt = isPackageExists('nuxt') || Boolean(process.env.ENABLE_NUXT);

export const enableVue = isPackageExists('vue') || Boolean(process.env.ENABLE_VUE) || enableNuxt;

export const enableVue3 = enableVue
  ? getPackageInfoSync('vue')?.version?.startsWith('3') || Boolean(process.env.ENABLE_VUE3)
  : false;

export const enableVueI18n = isPackageExists('vue-i18n') || Boolean(process.env.ENABLE_VUE_I18N);

export const enableNext = isPackageExists('next') || Boolean(process.env.ENABLE_NEXT);

export const enableReactNative =
  isPackageExists('react-native') ||
  Boolean(process.env.ENABLE_REACT_NATIVE) ||
  isPackageExists('@expo/cli') ||
  Boolean(process.env.ENABLE_EXPO);

export const enableReact =
  isPackageExists('react') || Boolean(process.env.ENABLE_REACT) || enableNext || enableReactNative;

export const enableMiniprogram =
  isPackageExists('@dcloudio/vite-plugin-uni') ||
  isPackageExists('@dcloudio/vue-cli-plugin-uni') ||
  isPackageExists('@dcloudio/types') ||
  Boolean(process.env.ENABLE_UNI_APP) ||
  isPackageExists('@tarojs/taro') ||
  Boolean(process.env.ENABLE_TARO) ||
  Boolean(process.env.ENABLE_MINIPROGRAM) ||
  Boolean(process.env.ENABLE_MINI_PROGRAM);

export const enableScss = isPackageExists('sass') || Boolean(process.env.ENABLE_SCSS);
