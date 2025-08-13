import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // In dev (`vite`), use root `/`. In builds, read BASE_PATH (set by CI) or default to `/`.
  base: command === 'serve' ? '/' : (process.env.BASE_PATH || '/'),
}))
