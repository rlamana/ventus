import { defineConfig } from 'vite'
import { resolve } from 'path'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/ventus.js'),
      name: 'Ventus',
      formats: ['es', 'umd'],
      fileName: (format) => `ventus.${format === 'es' ? 'js' : 'umd.cjs'}`
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
        exports: 'named'
      }
    },
    sourcemap: true,
    minify: 'terser'
  },
  
  resolve: {
    alias: {
      'ventus': resolve(__dirname, 'src/ventus')
    }
  },
  
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    },
    postcss: {
      plugins: [
        autoprefixer
      ]
    }
  },
  
  test: {
    environment: 'jsdom'
  }
})