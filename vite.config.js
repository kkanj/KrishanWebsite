import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import ssr from 'vite-plugin-ssr/plugin';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    ssr(),
  ],
  base: './',
  
})
