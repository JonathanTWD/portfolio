import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig, type Plugin } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname} from "path"
import { fileURLToPath } from 'url'

/**
 * Absolute site URL for social previews and structured data: SITE_URL when
 * set, otherwise the production URL Vercel exposes at build time. Locally it
 * is empty, so the URLs in index.html stay relative.
 */
const siteUrl = (
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : '')
).replace(/\/$/, '')

/** Fills %SITE_URL% in index.html and writes robots.txt and sitemap.xml. */
const siteUrlPlugin = (): Plugin => ({
  name: 'site-url',
  transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', siteUrl),
  generateBundle() {
    const robots = ['User-agent: *', 'Allow: /']
    if (siteUrl) robots.push('', `Sitemap: ${siteUrl}/sitemap.xml`)
    this.emitFile({
      type: 'asset',
      fileName: 'robots.txt',
      source: `${robots.join('\n')}\n`,
    })

    if (!siteUrl) return
    const today = new Date().toISOString().slice(0, 10)
    this.emitFile({
      type: 'asset',
      fileName: 'sitemap.xml',
      source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
  </url>
</urlset>
`,
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    siteUrlPlugin()
  ],
  resolve: {
    alias: {
      '#components': resolve(dirname(fileURLToPath(import.meta.url)), 'src/components'),
      '#constants': resolve(dirname(fileURLToPath(import.meta.url)), 'src/constants'),
      '#store': resolve(dirname(fileURLToPath(import.meta.url)), 'src/store'),
      '#hoc': resolve(dirname(fileURLToPath(import.meta.url)), 'src/hoc'),
      '#windows': resolve(dirname(fileURLToPath(import.meta.url)), 'src/windows'),
    }
  }
})
