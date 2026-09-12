// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.PUBLIC_SITE_URL || 'https://tu-dominio.com';

// Excluye:
// - /politica-privacidad/**
// /tags es ahora una única página de índice real (ver src/pages/tags/index.astro)
// y sí debe aparecer en el sitemap - no hay rutas /tags/* que excluir.
/**
 * @param {string | URL} page
 */
function shouldIncludePage(page) {
  const { pathname } = new URL(page);
  return !(
    pathname === '/politica-privacidad' ||
    pathname.startsWith('/politica-privacidad/')
  );
}

export default defineConfig({
  site,
  trailingSlash: 'never',
  integrations: [
    vue(),
    sitemap({
      filter: shouldIncludePage,
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
