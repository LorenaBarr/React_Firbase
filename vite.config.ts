import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import tailwindcss from 'tailwindcss/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
