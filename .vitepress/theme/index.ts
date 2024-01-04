// https://vitepress.dev/guide/custom-theme
import { h, nextTick, watch } from 'vue';
import { inBrowser, useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';
import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
  setup() {
    const route = useRoute();
    watch(
      () => route.path,
      () =>
        nextTick(() => {
          if (inBrowser)
            document.querySelectorAll('.vp-doc img').forEach((item) => {
              item.setAttribute('data-zoomable', '');
              item.setAttribute('class', 'medium-zoom-image');
            });

          mediumZoom('[data-zoomable]', {
            margin: 32,
            background: 'var(--vp-c-bg)',
          });
        }),
      { immediate: true }
    );
  },
} satisfies Theme;
