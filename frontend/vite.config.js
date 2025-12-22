import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    port: 3000,
    strictPort: true,
    open: true,
    cors: true,
    fs: {
      strict: false,
      allow: ['..']
    },
    proxy: {
      '/api': {
        target: process.env.VITE_API_TARGET || 'http://localhost:9194',
        changeOrigin: true,
        secure: false
      }
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  optimizeDeps: {
    include: [
      '@vaadin/router',
      'lit',
      '@vaadin/button',
      '@vaadin/text-field',
      '@vaadin/email-field',
      '@vaadin/dialog',
      '@vaadin/select',
      '@vaadin/list-box',
      '@vaadin/item',
      '@vaadin/grid',
      '@vaadin/icon',
      '@vaadin/icons'
    ]
  }
});
