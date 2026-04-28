import { defineConfig } from 'vite'
import { resolve } from 'path'
import autoprefixer from 'autoprefixer'

const sharedConfig = {
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
}

export default defineConfig(({ mode }) => {
  if (mode === 'demo') {
    return {
      ...sharedConfig,
      build: {
        outDir: 'dist-demo'
      }
    }
  }

  return {
    ...sharedConfig,
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
    }
  }
})
