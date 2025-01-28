import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// "https:vite.dev/config/"

export default defineConfig({

  build: {
    outDir: 'build', // make sure this is set to 'build'
  },
  plugins: [react()],
  base:"/usermanagement/"
})
