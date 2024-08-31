import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { hash } from "./src/utils/functions.js";
export default defineConfig({
    plugins: [svgr(), react()],
    base: "/",
    build: {
        rollupOptions: {
            output: {
                entryFileNames: `[name]` + hash + `.js`,
                chunkFileNames: `[name]` + hash + `.js`,
                assetFileNames: `[name]` + hash + `.[ext]`,
            },
        },
    },
});
