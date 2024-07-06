import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // https://vitepress.dev/reference/site-config#description
  description:
    'Opinionated shareable specifications for git-based JavaScript/TypeScript projects',
  // https://vitepress.dev/reference/site-config#lastupdated
  lastUpdated: true,
  // https://vitepress.dev/guide/i18n
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config#darkmodeswitchlabel
        darkModeSwitchLabel: 'Appearance',
        // https://vitepress.dev/reference/default-theme-config#docfooter
        docFooter: {
          next: 'Next page',
          prev: 'Previous page',
        },
        // https://vitepress.dev/reference/default-theme-config#editlink
        editLink: {
          pattern: 'https://github.com/ModyQyW/fabric/edit/main/docs/:path',
          text: 'Edit this page',
        },
        // https://vitepress.dev/reference/default-theme-config#langmenulabel
        langMenuLabel: 'Change language',
        // https://vitepress.dev/reference/default-theme-config#lastupdated
        lastUpdated: {
          formatOptions: {
            dateStyle: 'short',
            hourCycle: 'h24',
            timeStyle: 'short',
          },
          text: 'Last updated',
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { link: '/guide/introduction/getting-started', text: 'Guide' },
          { link: 'https://github.com/ModyQyW/sponsors', text: 'sponsors' },
        ],
        // https://vitepress.dev/reference/default-theme-config#returntotoplabel
        returnToTopLabel: 'Return to top',
        // https://vitepress.dev/reference/default-theme-config#sidebar
        sidebar: {
          '/guide/': {
            base: '/guide/',
            items: [
              {
                base: '/guide/introduction/',
                collapsed: false,
                items: [
                  {
                    link: 'what-is-modyqyw-fabric',
                    text: 'What is @modyqyw/fabric?',
                  },
                  { link: 'getting-started', text: 'Getting Started' },
                ],
                text: 'Introduction',
              },
              {
                base: '/guide/formatter/',
                collapsed: false,
                items: [
                  { link: 'overview', text: 'Overview' },
                  { link: 'prettier', text: 'Prettier' },
                  { link: 'biome', text: 'Biome' },
                ],
                text: 'Formatter',
              },
              {
                base: '/guide/linter/',
                collapsed: false,
                items: [
                  { link: 'overview', text: 'Overview' },
                  { link: 'eslint', text: 'ESLint' },
                  { link: 'oxlint', text: 'oxlint' },
                  { link: 'stylelint', text: 'Stylelint' },
                  { link: 'markdownlint', text: 'markdownlint' },
                  { link: 'biome', text: 'Biome' },
                ],
                text: 'Linter',
              },
              {
                base: '/guide/typescript-checker/',
                collapsed: false,
                items: [
                  { link: 'overview', text: 'Overview' },
                  { link: 'tsc', text: 'tsc' },
                ],
                text: 'TypeScript Checker',
              },
              {
                base: '/guide/git/',
                collapsed: false,
                items: [
                  { link: 'overview', text: 'Overview' },
                  { link: 'commitlint', text: 'commitlint' },
                  { link: 'lint-staged', text: 'lint-staged' },
                  { link: 'simple-git-hooks', text: 'simple-git-hooks' },
                ],
                text: 'Git',
              },
              {
                base: '/guide/best-practices/',
                collapsed: false,
                items: [
                  { link: 'overview', text: 'Overview' },
                  { link: 'naming', text: 'Naming' },
                  { link: 'editor-config', text: 'EditorConfig' },
                  { link: 'deployment', text: 'Deployment' },
                ],
                text: 'Best Practices',
              },
              {
                link: '/acknowledge/',
                text: 'Acknowledge',
              },
            ],
          },
        },
        // https://vitepress.dev/reference/default-theme-config#sidebarmenulabel
        sidebarMenuLabel: 'Menu',
      },
    },
    'zh-Hans': {
      label: '简体中文',
      lang: 'zh-Hans',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config#darkmodeswitchlabel
        darkModeSwitchLabel: '外观',
        // https://vitepress.dev/reference/default-theme-config#docfooter
        docFooter: {
          next: '下一页',
          prev: '上一页',
        },
        // https://vitepress.dev/reference/default-theme-config#editlink
        editLink: {
          pattern: 'https://github.com/ModyQyW/fabric/edit/main/docs/:path',
          text: '编辑此页',
        },
        // https://vitepress.dev/reference/default-theme-config#langmenulabel
        langMenuLabel: '改变语言',
        // https://vitepress.dev/reference/default-theme-config#lastupdated
        lastUpdated: {
          formatOptions: {
            dateStyle: 'short',
            hourCycle: 'h24',
            timeStyle: 'short',
          },
          text: '上次更新于',
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { link: '/zh-Hans/guide/introduction/getting-started', text: '指南' },
          { link: 'https://github.com/ModyQyW/sponsors', text: '赞助' },
        ],
        // https://vitepress.dev/reference/default-theme-config#returntotoplabel
        returnToTopLabel: '回到顶部',
        // https://vitepress.dev/reference/default-theme-config#sidebar
        sidebar: {
          '/zh-Hans/guide/': {
            base: '/zh-Hans/guide/',
            items: [
              {
                base: '/zh-Hans/guide/introduction/',
                collapsed: false,
                items: [
                  {
                    link: 'what-is-modyqyw-fabric',
                    text: '什么是 @modyqyw/fabric?',
                  },
                  { link: 'getting-started', text: '起步' },
                ],
                text: '介绍',
              },
              {
                base: '/zh-Hans/guide/formatter/',
                collapsed: false,
                items: [
                  { link: 'overview', text: '概述' },
                  { link: 'prettier', text: 'Prettier' },
                  { link: 'biome', text: 'Biome' },
                ],
                text: '代码格式化器',
              },
              {
                base: '/zh-Hans/guide/linter/',
                collapsed: false,
                items: [
                  { link: 'overview', text: '概述' },
                  { link: 'eslint', text: 'ESLint' },
                  { link: 'oxlint', text: 'oxlint' },
                  { link: 'stylelint', text: 'Stylelint' },
                  { link: 'markdownlint', text: 'markdownlint' },
                  { link: 'biome', text: 'Biome' },
                ],
                text: '代码检查工具',
              },
              {
                base: '/zh-Hans/guide/typescript-checker/',
                collapsed: false,
                items: [
                  { link: 'overview', text: '概述' },
                  { link: 'tsc', text: 'tsc' },
                ],
                text: 'TypeScript 检查工具',
              },
              {
                base: '/zh-Hans/guide/git/',
                collapsed: false,
                items: [
                  { link: 'overview', text: '概述' },
                  { link: 'commitlint', text: 'commitlint' },
                  { link: 'lint-staged', text: 'lint-staged' },
                  { link: 'simple-git-hooks', text: 'simple-git-hooks' },
                ],
                text: 'Git',
              },
              {
                base: '/zh-Hans/guide/best-practices/',
                collapsed: false,
                items: [
                  { link: 'overview', text: '概述' },
                  { link: 'naming', text: '命名' },
                  { link: 'editor-config', text: 'EditorConfig' },
                  { link: 'deployment', text: '部署' },
                ],
                text: '最佳实践',
              },
              {
                link: '/acknowledge/',
                text: '致谢',
              },
            ],
          },
        },
        // https://vitepress.dev/reference/default-theme-config#sidebarmenulabel
        sidebarMenuLabel: '菜单',
      },
    },
  },
  // https://vitepress.dev/reference/site-config#markdown
  markdown: {
    lineNumbers: true,
    toc: {
      level: [1, 2, 3, 4, 5, 6],
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config#footer
    footer: {
      copyright: 'Copyright © 2020-present ModyQyW',
      message: 'Released under the MIT License.',
    },
    // https://vitepress.dev/reference/default-theme-config#logo
    logo: '/images/w.svg',
    // https://vitepress.dev/reference/default-theme-config#outline
    outline: 'deep',
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config#sociallinks
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ModyQyW/fabric' },
    ],
  },
  // https://vitepress.dev/reference/site-config#title
  title: '@modyqyw/fabric',
});
