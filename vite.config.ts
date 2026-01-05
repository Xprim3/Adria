import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Base path for GitHub Pages (uncomment if deploying to a subdirectory)
  // base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
  server: {
    host: true, // Allow access from network
    port: 5173, // Default Vite port
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Don't include server files in build
    emptyOutDir: true
  }
})

