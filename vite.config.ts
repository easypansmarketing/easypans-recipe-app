import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path" // Make sure path is imported

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // --- ADD THIS BASE OPTION ---
  // Replace 'easypans-recipe-app' with your actual GitHub repository name
  base: '/easypans-recipe-app/',
  // --- END ---
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})