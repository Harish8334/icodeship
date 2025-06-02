import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  optimizeDeps: {
    include: ['swiper']
  },
  // Your custom config (if scrollTrigger is a plugin option or custom, keep it here)
  scrollTrigger: {
    scroller: '[data-scroll-container]'
  },
  build: {
    chunkSizeWarningLimit: 2000, // increase warning limit to 2MB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // bundle all dependencies separately
          }
        }
      }
    }
  }
});
