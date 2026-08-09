// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://akagenorobin.github.io',
  // About をトップに統合したので、旧 URL は転送する
  redirects: {
    '/about': '/',
    '/en/about': '/en/',
  },
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
    routing: {
      // ja はプレフィックスなし（/）、en は /en/ 配下
      prefixDefaultLocale: false,
    },
  },
});
