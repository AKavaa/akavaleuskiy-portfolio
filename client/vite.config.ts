import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  // Using root path for both production and development
  const base = '/'

  // This will be available in your app via import.meta.env.BASE_URL
  process.env.BASE_URL = base

  return {
    base,
    define: {
      'import.meta.env.BASE_URL': JSON.stringify(base)
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'wouter']
          },
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]'
        }
      },
    },
    server: {
      historyApiFallback: true,
      port: 5173,
      open: true
    },
    preview: {
      port: 5173,
      open: true
    }
  }
})