// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig(({ command, ssrBuild }) => ({
  plugins: [react(), svgr()],
  optimizeDeps: {
    include: ['swiper'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    ssr: ssrBuild ? true : false,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
  },
  ssr: {
    noExternal: ['swiper', 'gsap'], // if needed for SSR-safe builds
  },
}));
