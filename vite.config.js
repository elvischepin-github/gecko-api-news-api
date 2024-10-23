import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_GECKO_API': JSON.stringify(env.REACT_APP_GECKO_API),
      'process.env.REACT_APP_NEWS_API': JSON.stringify(env.REACT_APP_NEWS_API)
    },
    plugins: [react()],
  }
})