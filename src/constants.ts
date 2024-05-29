export const GLOB_SCRIPT_EXT = '?([cm])[jt]s?(x)';
export const GLOB_SCRIPT = '**/*.?([cm])[jt]s?(x)';
export const GLOB_JS = '**/*.?([cm])js';
export const GLOB_JSX = '**/*.?([cm])jsx';
export const GLOB_DTS = '**/*.d.?([cm])ts';
export const GLOB_TS = '**/*.?([cm])ts';
export const GLOB_TSX = '**/*.?([cm])tsx';

export const GLOB_STYLE = '**/*.{c,le,sc,sa}ss';
export const GLOB_CSS = '**/*.css';
export const GLOB_LESS = '**/*.less';
export const GLOB_SCSS = '**/*.scss';
export const GLOB_SASS = '**/*.sass';

export const GLOB_JSON = '**/*.json';
export const GLOB_JSON5 = '**/*.json5';
export const GLOB_JSONC = '**/*.jsonc';

export const GLOB_YAML = '**/*.y?(a)ml';

export const GLOB_MARKDOWN = '**/*.md';
export const GLOB_VUE = '**/*.vue';
export const GLOB_SVELTE = '**/*.svelte';
export const GLOB_ASTRO = '**/*.astro';
export const GLOB_HTML = '**/*.htm?(l)';

export const GLOB_MARKDOWN_SCRIPT = `${GLOB_MARKDOWN}/${GLOB_SCRIPT}`;
export const GLOB_MARKDOWN_VUE = `${GLOB_MARKDOWN}/${GLOB_VUE}`;
export const GLOB_MARKDOWN_SVELTE = `${GLOB_MARKDOWN}/${GLOB_SVELTE}`;
export const GLOB_MARKDOWN_ASTRO = `${GLOB_MARKDOWN}/${GLOB_ASTRO}`;
export const GLOB_MARKDOWN_HTML = `${GLOB_MARKDOWN}/${GLOB_HTML}`;

export const GLOB_TESTS = [
  `**/__tests__/**/*.${GLOB_SCRIPT_EXT}`,
  `**/*.spec.${GLOB_SCRIPT_EXT}`,
  `**/*.test.${GLOB_SCRIPT_EXT}`,
  `**/*.bench.${GLOB_SCRIPT_EXT}`,
  `**/*.benchmark.${GLOB_SCRIPT_EXT}`,
];

export const GLOB_ALL_SRC = [
  GLOB_SCRIPT,
  GLOB_STYLE,
  GLOB_JSON,
  GLOB_JSON5,
  GLOB_JSONC,
  GLOB_YAML,
  GLOB_MARKDOWN,
  GLOB_VUE,
  GLOB_SVELTE,
  GLOB_ASTRO,
  GLOB_HTML,
];

export const GLOB_EXCLUDE = [
  '**/node_modules',
  '**/dist*',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',
  '!.github',
  '!.vitepress',
  '!.vuepress',
  '!.vscode',
  '**/public',
  '**/out',
  '**/output',
  '**/generated',
  '**/coverage',
  '**/temp',
  '**/.temp',
  '**/tmp',
  '**/.tmp',
  '**/.history',
  '**/unpackage',
  '**/fixtures',
  '**/.nuxt',
  '**/.next',
  '**/.vercel',
  '**/.netlify',
  '**/.cache',
  '**/.changeset',
  '**/.git',
  '**/.hbuilder',
  '**/.hbuilderx',
  '**/.idea',
  '**/.nitro',
  '**/.npm',
  '**/.out',
  '**/.output',
  '**/.rax',
  '**/.umi',
  '**/.vite-inspect',
  '**/.vitepress/cache',
  '**/.vuepress/cache',
  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
  '**/auto-import?(s).d.ts',
  '**/components.d.ts',
  '**/typed-router.d.ts',
  '**/uni-pages.d.ts',
  '**/androidPrivacy.json',
  '**/pages.json',
  '**/manifest.json',
  '**/*timestamp*',
];

export const MINI_PROGRAM_ELEMENTS = [
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
  'snapshot',
  'span',
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
