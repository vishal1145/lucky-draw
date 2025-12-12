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
        manualChunks: (id) => {
          // Separate vendor chunks for better caching
          if (id.includes('node_modules')) {
            if (id.includes('vue') || id.includes('vue-router')) {
              return 'vue-vendor';
            }
            if (id.includes('vue-multiselect') || id.includes('vue3-quill') || id.includes('quill')) {
              return 'ui-vendor';
            }
            if (id.includes('axios') || id.includes('libphonenumber-js') || id.includes('mixpanel-browser')) {
              return 'utils-vendor';
            }
            // Split other large node_modules into separate chunks
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        },
        // Optimize chunk file names for better caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[ext]/[name]-[hash][extname]`;
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable source maps only in development
    sourcemap: process.env.NODE_ENV === 'development',
    // Optimize asset handling
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize asset file names
    reportCompressedSize: false, // Disable compressed size reporting for faster builds
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['vue', 'vue-router', 'axios'],
  },
})
