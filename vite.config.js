import { defineConfig } from 'vite';

export default defineConfig({
  base: "/my-practices-tailwindcss-2024-08/",
  build: {
    rollupOptions: {
      input: {
        main: './main.js',
        index: './index.html',
      },
    },
  },
});