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
      "process.env.NODE_ENV": JSON.stringify(mode),
    },
    plugins: [react()],
    build: {
      minify: "esbuild",
      sourcemap: false,
      assetsDir: "assets",
    },
    server: {
      host: true,
      port: process.env.PORT || 10000, // Use Render's PORT or fallback to 10000
      strictPort: true,
    },
    preview: {
      port: process.env.PORT || 10000,
      host: true,
    },
  };
});
