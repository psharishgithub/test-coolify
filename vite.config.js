import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    // Ensures proper asset handling
    assetsDir: 'assets',
    // Enable if you want source maps in production
    sourcemap: false,
  },
  server: {
    // This helps with Docker deployments
    host: '0.0.0.0',
    port: 3000
  }
})