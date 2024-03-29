/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts', 'vitest-localstorage-mock'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/public/styles/_constants.scss";`,
      },
    },
  },
});
