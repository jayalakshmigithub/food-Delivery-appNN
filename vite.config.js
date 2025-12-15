// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path'; // <--- Import the path module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add the resolve block to configure the alias
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
});