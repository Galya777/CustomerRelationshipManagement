import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import typescript from '@rollup/plugin-typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  logLevel: 'warn',
  root: '.',
  publicDir: 'public',
  server: {
    port: 3000,
    strictPort: true,
    open: true,
    fs: {
      // Allow serving files from one level up from the package root
      allow: ['..'],
    },
    proxy: {
      // API proxy
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false
      }
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        manualChunks: {
          vendor: ['@vaadin/router', 'lit']
        }
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
      '@vaadin/icon',
      '@vaadin/icons'
    ],
    esbuildOptions: {
      target: 'es2020',
      supported: {
        'top-level-await': true
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
    extensions: ['.ts', '.js', '.json', '.mjs']
  },
  define: {
    'process.env': {}
  },
  esbuild: {
    jsxInject: `import { html, css, LitElement } from 'lit';`
  },
  plugins: [
    typescript({
      include: ['**/*.ts', '**/*.d.ts'],
      tsconfig: './tsconfig.json'
    })
  ]
});
