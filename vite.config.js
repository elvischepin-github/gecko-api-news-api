import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_GECKO_API": JSON.stringify(
        env.REACT_APP_GECKO_API
      ),
      "process.env.REACT_APP_NEWS_API": JSON.stringify(env.REACT_APP_NEWS_API),
    },
    plugins: [react()],
    server: {
      host: true, // Listen on all local IPs
      port: 5173, // Default Vite port
      strictPort: true, // If port is taken, exit instead of trying another
      watch: {
        usePolling: true, // Enable for better performance
      },
    },
  };
});
