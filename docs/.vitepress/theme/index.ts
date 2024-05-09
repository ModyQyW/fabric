import { type EnhanceAppContext, useData, useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import imageViewer from 'vitepress-plugin-image-viewer';

import 'uno.css';
import 'viewerjs/dist/viewer.min.css';

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);
  },
  setup() {
    const { frontmatter } = useData();
    const route = useRoute();

    giscusTalk(
      {
        category: 'General',
        categoryId: 'MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyODUxMTMw',
        emitMetadata: '1',
        inputPosition: 'top',
        lang: 'en',
        loading: 'lazy',
        mapping: 'pathname',
        reactionsEnabled: '1',
        repo: 'ModyQyW/fabric',
        repoId: 'MDEwOlJlcG9zaXRvcnkzMTEzNzM4NDU=',
        strict: '1',
        theme: 'preferred_color_scheme',
      },
      {
        // @ts-expect-error wrong type
        frontmatter,
        route,
      },
    );

    imageViewer(route);
  },
};
