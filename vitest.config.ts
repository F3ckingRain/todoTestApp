import {defineConfig} from 'vitest/config'
export default defineConfig({
  server: {
    strictPort: true,
    port: 8282,
  },
  test: {
    environment: "jsdom"
  }
})