import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves the site from /<repo-name>/
  base: command === 'build' ? '/Portifolio/' : '/',
  plugins: [react()],
  // Do NOT ignore public/projects in server.watch — Vite tracks public assets in
  // `publicFiles` via the watcher; ignoring that tree makes new media return the
  // SPA index.html (text/html) instead of the real file.
}))
