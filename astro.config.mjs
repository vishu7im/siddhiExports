import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// =============================================================================
// SITE URL
// -----------------------------------------------------------------------------
// Using a custom domain (recommended): keep `site` as your real domain and
// leave `base` unset. The public/CNAME file points GitHub Pages at it.
//
// NO custom domain yet? Deploying to https://<user>.github.io/<repo>/ instead:
//   1. set  site: 'https://<user>.github.io'
//   2. add  base: '/<repo>'
//   3. delete public/CNAME
// =============================================================================
export default defineConfig({
  site: 'https://siddhiexports.in',
  // base: '/siddhiExports', // <-- uncomment ONLY if NOT using a custom domain
  integrations: [
    sitemap({
      // lastmod = build date; changefreq/priority are hints for crawlers.
      serialize(item) {
        const isHome = item.url === 'https://siddhiexports.in/';
        return {
          ...item,
          lastmod: new Date().toISOString(),
          changefreq: isHome ? 'weekly' : 'monthly',
          priority: isHome ? 1.0 : 0.7,
        };
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
