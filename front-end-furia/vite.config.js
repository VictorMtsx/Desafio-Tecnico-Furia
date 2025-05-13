import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: true,
    open: true,
    host: '127.0.0.1',
    port: 5173,
    proxy: {
      '/login': {
        target: 'https://1a9c-177-23-37-119.ngrok-free.app',
        changeOrigin: true,
      },
      '/test': {
        target: 'https://1a9c-177-23-37-119.ngrok-free.app',
        changeOrigin: true,
      },
    },
  },
})
