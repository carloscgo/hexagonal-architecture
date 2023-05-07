import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    VITE_APP_TITLE: `"${process.env.VITE_APP_TITLE}"`,
    VITE_API_SERVER: `"${process.env.VITE_API_SERVER}"`,
  },
})
