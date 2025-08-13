import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isUserSite = /\.github\.io$/i.test(repo)

export default defineConfig({
  plugins: [react()],
  base: isUserSite ? '/' : `/${repo}/`,
})
