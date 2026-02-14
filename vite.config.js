import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/reclaim-seekpass-zkp/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
