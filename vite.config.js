import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~slick-carousel": path.resolve(path.dirname(new URL(import.meta.url).pathname), "node_modules/slick-carousel"),
    },
  },
})
