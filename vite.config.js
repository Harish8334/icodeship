// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig(({ command, ssrBuild }) => ({
  base: '/',
  plugins: [
    react({
      include: "**/*.{jsx,js}",  // Enable JSX in .js files
    }), 
    svgr()
  ],
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
    noExternal: ['swiper', 'gsap', 'react-router-dom', '@remix-run/router'],
    target: 'node',
    format: 'esm'
  },
}));
