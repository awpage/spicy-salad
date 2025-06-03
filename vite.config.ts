import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'


export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html",
        academy: "academy.html",
        services: "services.html",
      },
    },
  },
});