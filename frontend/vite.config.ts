import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: '/',
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
        secure: false,
        // Keep the /api prefix when proxying so backend controllers mapped under
        // "/api" (e.g. @RequestMapping("/api/users")) receive the correct path.
        // Previously the config stripped "/api" which caused 404s/401s on login.
        rewrite: (path) => path
      }
    },
    hmr: {
      overlay: true
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
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  define: {
    'process.env': {}
  }
});
