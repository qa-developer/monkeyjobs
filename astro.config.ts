import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import { EnumChangefreq } from 'sitemap';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';

import { responsiveTablesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  output: 'static',

  integrations: [
    sitemap({
      // Excluir 404 (marcado noindex) del sitemap
      filter: (page) => !page.includes('/404'),
      changefreq: EnumChangefreq.MONTHLY,
      priority: 0.7,
      lastmod: new Date(),
      // Prioridades por importancia de negocio
      serialize(item) {
        const url = item.url.replace(/\/$/, '');
        if (url.endsWith('monkeyjobs.co') || url.endsWith('/')) {
          item.priority = 1.0;
          item.changefreq = EnumChangefreq.WEEKLY;
        } else if (url.endsWith('/services')) {
          item.priority = 0.9;
        } else if (url.endsWith('/about') || url.endsWith('/pricing')) {
          item.priority = 0.8;
        } else if (url.endsWith('/contact')) {
          item.priority = 0.7;
        } else if (url.endsWith('/privacy') || url.endsWith('/terms')) {
          item.priority = 0.3;
          item.changefreq = EnumChangefreq.YEARLY;
        }
        return item;
      },
    }),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
    }),
  ],

  image: {
    // Astro's default Sharp service handles local images.
    //
    // Most remote CDN images (Unsplash, Cloudinary, Imgix…) are routed by
    // src/components/common/Image.astro through `unpic`, which rewrites the
    // URL with CDN-side query parameters and serves it straight from the
    // provider — Astro never downloads it, so they don't need to be listed.
    //
    // `domains` only matters for remote URLs that fall through to Astro's
    // native <Image /> (i.e. providers Unpic can't detect, like Pixabay).
    // Listed entries are authorized to be processed by Sharp.
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    rehypePlugins: [responsiveTablesRehypePlugin],
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
    server: {
      allowedHosts: ['.alexis-madrigal.com', '.trycloudflare.com', '.ngrok-free.app', '.loca.lt'],
    },
  },
});
