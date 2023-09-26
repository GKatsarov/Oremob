import { defineConfig } from "vite";
import shopify from "vite-plugin-shopify";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    shopify({
      // Root path to your Shopify theme directory (location of snippets, sections, templates, etc.)
      themeRoot: "./",
      // Front-end source code directory
      sourceCodeDir: "frontend",
      // Front-end entry points directory
      entrypointsDir: "frontend/entrypoints",
      // Additional files to use as entry points (accepts an array of file paths or glob patterns)
      additionalEntrypoints: ["frontend/styles/*.css", "frontend/vue-blog/*.js"],
    }),
  ],
  resolve: {
    alias: {
      "~": resolve("frontend"),
      "@styles": resolve("frontend/styles"),
    },
  },
  build: {
    emptyOutDir: false,
    sourcemap: false,
    reportCompressedSize: true,
    rollupOptions: {
      treeshake: true
    },
  }
});