import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
import createImportPlugin from 'vite-plugin-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    createImportPlugin([
      {
        libraryName: '@icon-park/react',
        libraryDirectory: 'es/icons',
        camel2DashComponentName: false,
      },
    ]),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3003

  }
})


