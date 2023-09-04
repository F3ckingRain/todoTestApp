import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    strictPort: true,
    port: 8080,
    open: true,
  },

  css: {
    modules: {
      generateScopedName: '[folder]_[local]_[hash:base64:5]',
    },
  },
})
