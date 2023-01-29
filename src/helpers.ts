import { isPackageExists, getPackageInfoSync } from 'local-pkg';

export const hasTypescript =
  isPackageExists('typescript') || Boolean(process.env.ENABLE_TYPESCRIPT);

export const hasNuxt = isPackageExists('nuxt') || Boolean(process.env.ENABLE_NUXT);

export const hasVue = isPackageExists('vue') || Boolean(process.env.ENABLE_VUE) || hasNuxt;

export const hasVue3 = hasVue
  ? getPackageInfoSync('vue')?.version?.startsWith('3') || Boolean(process.env.ENABLE_VUE3)
  : false;

export const hasNext = isPackageExists('next') || Boolean(process.env.ENABLE_NEXT);

export const hasReactNative =
  isPackageExists('react-native') ||
  Boolean(process.env.ENABLE_REACT_NATIVE) ||
  isPackageExists('@expo/cli') ||
  Boolean(process.env.ENABLE_EXPO);

export const hasReact =
  isPackageExists('react') || Boolean(process.env.ENABLE_REACT) || hasNext || hasReactNative;

export const hasMiniprogram =
  isPackageExists('@dcloudio/uni-app') ||
  Boolean(process.env.ENABLE_UNI_APP) ||
  isPackageExists('@tarojs/taro') ||
  Boolean(process.env.ENABLE_TARO) ||
  Boolean(process.env.ENABLE_MINIPROGRAM) ||
  Boolean(process.env.ENABLE_MINI_PROGRAM);

export const hasScss = isPackageExists('sass') || Boolean(process.env.ENABLE_SCSS);

export const miniprogramElements = [
  'page',
  'cover-image',
  'cover-view',
  'grid-view',
  'list-view',
  'match-media',
  'movable-area',
  'movable-view',
  'page-container',
  'root-portal',
  'scroll-view',
  'share-element',
  'sticky-header',
  'sticky-section',
  'swiper',
  'swiper-item',
  'view',
  'icon',
  'progress',
  'rich-text',
  'text',
  'button',
  'checkbox',
  'checkbox-group',
  'editor',
  'form',
  'input',
  'keyboard-accessory',
  'label',
  'picker',
  'picker-view',
  'picker-view-column',
  'radio',
  'radio-group',
  'slider',
  'switch',
  'textarea',
  'functional-page-navigator',
  'navigator',
  'audio',
  'camera',
  'channel-live',
  'channel-video',
  'image',
  'live-player',
  'live-pusher',
  'video',
  'voip-room',
  'map',
  'canvas',
  'web-view',
  'ad',
  'ad-rewarded-video',
  'ad-fullscreen-video',
  'ad-interstitial',
  'ad-draw',
  'ad-content-page',
  'ad-interactive',
  'ad-custom',
  'official-account',
  'open-data',
  'native-component',
  'aria-component',
  'navigation-bar',
  'page-meta',
  'unicloud-db',
];
