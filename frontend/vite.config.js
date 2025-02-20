import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import json from "@rollup/plugin-json"; 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),json()],
  json: {
    stringify: true, // Ensures JSON can be imported as a module
  }
})
