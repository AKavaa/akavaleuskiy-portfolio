import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Set base URL based on environment
  // For production builds, use relative paths (./) for better compatibility
  // with both GitHub Pages and custom domains
  const isProduction = mode === 'production';
  const base = isProduction ? './' : '/';

  return {
    base: base,
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
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            // Keep the original path for files in build directory
            if (assetInfo.name === 'profile-aleksander.jpg') {
              return 'profile-aleksander.jpg';
            }
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (['png', 'jpg', 'jpeg', 'gif', 'svg'].includes(ext)) {
              return 'assets/images/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          }
        }
      }
    },
    server: {
      port: 5173,
      open: true,
      historyApiFallback: true
    },
    preview: {
      port: 5173,
      open: true
    }
  }
})