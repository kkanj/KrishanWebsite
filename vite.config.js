import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import copy from "vite-plugin-copy";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svgr(),
        react(),
        copy({
            targets: [
                { src: ".htaccess", dest: "dist" }, // Copies .htaccess to the dist folder
            ],
            hook: "writeBundle", 
        }),
    ],
    base: "/",
});
