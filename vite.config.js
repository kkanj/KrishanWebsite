import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import { fileURLToPath, URL } from 'node:url'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
  ],
  base: './',
  resolve: {
    alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
        '.js',
        '.json',
        '.jsx',
        '.mjs',
        '.ts',
        '.tsx',
        '.vue',
    ],
},
})
