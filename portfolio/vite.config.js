import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  // If your repo is e.g. "portfolio-website"
  base: `/${process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'portfolio-website'}/`,
})
