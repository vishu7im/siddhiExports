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
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
