import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/celebrate-customer-loyalty/',
  // lucky-draw/
  plugins: [
    vue(),
    // Only include dev tools in development
    ...(process.env.NODE_ENV === 'development' ? [vueDevTools()] : []),
    tailwindcss(),
  ],
  server: {
    host: true, // Allow external access (needed for ngrok)
    port: 8080, // Make sure ngrok is tunneling this port
    strictPort: true, // Prevent Vite from switching ports
    cors: true,  // Prevent auto-changing ports
    allowedHosts: ['.ngrok-free.app'], // Allow all ngrok subdomains
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    // Enable minification (esbuild is faster than terser)
    minify: 'esbuild',
    // Note: esbuild doesn't support drop_console, but it's faster
    // For production, you can use a plugin if console removal is critical
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'vue-vendor': ['vue', 'vue-router'],
          'ui-vendor': ['vue-multiselect', 'vue3-quill', 'quill'],
          'utils-vendor': ['axios', 'moment', 'libphonenumber-js', 'mixpanel-browser'],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable source maps only in development
    sourcemap: process.env.NODE_ENV === 'development',
    // Optimize asset handling
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['vue', 'vue-router', 'axios'],
  },
})
