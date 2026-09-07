import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    // Serve index.html for all routes in dev
    historyApiFallback: true,
  },
  preview: {
    port: 4173,
    // Serve index.html for all routes in preview
    historyApiFallback: true,
  },
})
