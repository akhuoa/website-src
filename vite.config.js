import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import UnoCSS from 'unocss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NEW_DESIGN_DEPLOY === 'true'
    ? '/website-src/'
    : '/',
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor chunk for Vue core libraries
          if (id.includes('node_modules/vue') || id.includes('node_modules/@vue')) {
            return 'vue-vendor'
          }

          // Only create docs chunk if it's actually imported
          if (id.includes('node_modules/vue3-doxygen-xml')) {
            return 'docs'
          }

          // UnoCSS in its own chunk
          if (id.includes('node_modules/@unocss') || id.includes('node_modules/unocss')) {
            return 'unocss-vendor'
          }
        }
      }
    }
  }
})
