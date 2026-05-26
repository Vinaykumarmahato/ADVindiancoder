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
        dynamicRoutes: [
          '/',
          '/courses',
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
          '/masterclass',
          '/resources',
          '/about',
          '/community',
          '/career',
          '/jobs',
          '/contact',
          '/success-stories',
          '/faq',
          '/upsc-syllabus',
          '/adv-lab',
          '/online-java-compiler',
          '/online-python-compiler',
          '/online-c-compiler',
          '/online-cpp-compiler',
          '/online-javascript-compiler',
          '/verify'
        ]
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
    }
  };
});
