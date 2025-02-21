import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
     tailwindcss(),
  ],
   server: {
   host: true, // Allow external access (needed for ngrok)
    port: 8080, // Make sure ngrok is tunneling this port
    strictPort: true, // Prevent Vite from switching ports
    cors: true,  // Prevent auto-changing ports
    allowedHosts: ['.ngrok-free.app'], // Allow all ngrok subdomains
    // cors: true, // Optional: Allow cross-origin requests
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
