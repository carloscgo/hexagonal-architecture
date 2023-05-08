import { PluginOption, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

interface ConfigExport {
  plugins: PluginOption[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  define: { [key: string]: any },
  test?: {
    globals: true,
    environment: string,
    setupFiles: string[],
    testMatch: string[],
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    VITE_APP_TITLE: `"${process.env.VITE_APP_TITLE}"`,
    VITE_API_SERVER: `"${process.env.VITE_API_SERVER}"`,
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./tests/setup.ts', './setupTest.ts'],
    testMatch: ['./tests/**/*.test.tsx'],
  },
} as ConfigExport)
