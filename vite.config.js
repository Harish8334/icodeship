import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],build: {
    chunkSizeWarningLimit: 1000, // Set limit in KB (e.g., 1000KB)
  }, optimizeDeps: {
    include: ["swiper"],plugins: [svgr()],
  },scrollTrigger: {
  scroller: "[data-scroll-container]", 
}
})
