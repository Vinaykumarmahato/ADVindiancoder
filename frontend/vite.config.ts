import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/',
    server: {
      port: 5173,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      Sitemap({
        hostname: 'https://www.advindiancoder.com',
        lastmod: '2026-08-02',
        changefreq: 'monthly',
        priority: 0.7,
        dynamicRoutes: [
          '/',
          '/courses',
          '/jobs',
          '/masterclass',
          '/adv-lab',
          '/practice',
          '/exam-hub',
          '/online-java-compiler',
          '/online-python-compiler',
          '/online-c-compiler',
          '/online-cpp-compiler',
          '/online-javascript-compiler',
          '/resources',
          '/community',
          '/career',
          '/about',
          '/contact',
          '/faq',
          '/success-stories',
          '/upsc-syllabus',
          '/verify',
          '/course/html',
          '/course/css',
          '/course/javascript',
          '/course/adv-css',
          '/course/bootstrap',
          '/course/react',
          '/course/jquery',
          '/course/angular',
          '/course/angularjs',
          '/course/vue',
          '/course/sass',
          '/course/nodejs',
          '/course/php',
          '/course/java',
          '/course/python',
          '/course/django',
          '/course/asp',
          '/course/go',
          '/course/kotlin',
          '/course/swift',
          '/course/typescript',
          '/course/csharp',
          '/course/c',
          '/course/cpp',
          '/course/rust',
          '/course/bash',
          '/course/r',
          '/course/sql',
          '/course/numpy',
          '/course/pandas',
          '/course/scipy',
          '/course/data-science',
          '/course/ai',
          '/course/gen-ai',
          '/course/mysql',
          '/course/postgresql',
          '/course/mongodb',
          '/course/excel',
          '/course/xml',
          '/course/cybersecurity',
          '/course/dsa',
          '/course/git',
        ],
        routesConfig: {
          '/': { changefreq: 'daily', priority: 1.0, lastmod: '2026-08-02' },
          '/courses': { changefreq: 'weekly', priority: 0.9, lastmod: '2026-08-02' },
          '/jobs': { changefreq: 'daily', priority: 0.9, lastmod: '2026-08-02' },
          '/masterclass': { changefreq: 'weekly', priority: 0.9, lastmod: '2026-08-02' },
          '/adv-lab': { changefreq: 'weekly', priority: 0.9, lastmod: '2026-08-02' },
          '/practice': { changefreq: 'weekly', priority: 0.8, lastmod: '2026-08-02' },
          '/exam-hub': { changefreq: 'weekly', priority: 0.8, lastmod: '2026-08-02' },
          '/online-java-compiler': { changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-02' },
          '/online-python-compiler': { changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-02' },
          '/online-c-compiler': { changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-02' },
          '/online-cpp-compiler': { changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-02' },
          '/online-javascript-compiler': { changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-02' },
          '/course/html': { changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-02' },
          '/course/css': { changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-02' },
          '/course/javascript': { changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-02' },
          '/course/java': { changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-02' },
          '/course/python': { changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-02' },
          '/course/react': { changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-02' },
          '/course/cpp': { changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-02' },
          '/course/c': { changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-02' },
          '/course/dsa': { changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-02' },
          '/course/sql': { changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-02' },
          '/course/nodejs': { changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-02' },
          '/course/typescript': { changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-02' },
          '/course/data-science': { changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-02' },
          '/course/ai': { changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-02' },
          '/course/gen-ai': { changefreq: 'monthly', priority: 0.8, lastmod: '2026-08-02' },
          '/resources': { changefreq: 'monthly', priority: 0.7, lastmod: '2026-08-02' },
          '/community': { changefreq: 'monthly', priority: 0.7, lastmod: '2026-08-02' },
          '/career': { changefreq: 'monthly', priority: 0.7, lastmod: '2026-08-02' },
          '/about': { changefreq: 'monthly', priority: 0.6, lastmod: '2026-08-02' },
          '/contact': { changefreq: 'monthly', priority: 0.6, lastmod: '2026-08-02' },
          '/faq': { changefreq: 'monthly', priority: 0.6, lastmod: '2026-08-02' },
          '/success-stories': { changefreq: 'monthly', priority: 0.6, lastmod: '2026-08-02' },
          '/upsc-syllabus': { changefreq: 'monthly', priority: 0.6, lastmod: '2026-08-02' },
          '/verify': { changefreq: 'yearly', priority: 0.5, lastmod: '2026-08-02' },
        }
      })
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('@monaco-editor') || id.includes('monaco-editor')) {
                return 'vendor-monaco';
              }
              if (id.includes('framer-motion')) {
                return 'vendor-motion';
              }
              return 'vendor';
            }
          }
        }
      }
    }
  };
});
