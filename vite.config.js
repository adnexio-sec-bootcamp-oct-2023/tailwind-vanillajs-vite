import { defineConfig } from "vite";
import { resolve } from "path";

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
    root,
    server: {
        open: 'pages/index.html'
    },
    plugins: [],
    build: {
        outDir,
        emptyOutDir: true, // Clear the dist directory on each build
        rollupOptions: {
            input: {
                main: resolve(root, 'pages', 'index.html'), // Path to the entry point
                //single: resolve(root, 'page', 'single-recipe.html')
            },
        },
    },
});