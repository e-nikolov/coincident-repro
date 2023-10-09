import { defineConfig } from 'vite'
import topLevelAwait from "vite-plugin-top-level-await";
import { resolve } from 'path';

console.log(__dirname)
// https://vitejs.dev/config/
export default defineConfig({
  base: "/coincident-repro/",
  root: "./coincident-repro/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'coincident-repro/index.html'),
        demo: resolve(__dirname, 'coincident-repro/demo.html'),
        debug: resolve(__dirname, 'coincident-repro/debug.html'),
        passive: resolve(__dirname, 'coincident-repro/passive.html'),
      }
    },
    target: 'esnext',
  },
  cacheDir: "../.vite",
  plugins: [
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    })
  ],
  // appType: "mpa",
  server: {
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
      "Accept-Ranges": "bytes"
    },
  }
})
