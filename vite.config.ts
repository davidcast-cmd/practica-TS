import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/bored': {
        target: 'https://bored-api.appbrewery.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bored/, ''),
      },
    },
  },
});