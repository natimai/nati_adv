 
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // ensures PostCSS still works
  },
  build: {
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['react-slick', 'swiper', 'aos'],
          'vendor-helmet': ['react-helmet-async'],
        },
      },
    },
  },
  server: {
    open: true,
    port: 3000,
  },
});
