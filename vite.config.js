import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const isProduction = mode === "production";

  return {
    define: {
      "process.env": {
        NODE_ENV: JSON.stringify(isProduction ? "production" : "development"),
        REACT_APP_GECKO_API: JSON.stringify(env.REACT_APP_GECKO_API),
        REACT_APP_NEWS_API: JSON.stringify(env.REACT_APP_NEWS_API),
      },
    },
    plugins: [
      react({
        jsxRuntime: "automatic",
        babel: {
          babelrc: false,
          configFile: false,
        },
      }),
    ],
    build: {
      minify: "terser",
      sourcemap: false,
      assetsDir: "assets",
      terserOptions: {
        compress: {
          drop_console: isProduction,
          drop_debugger: isProduction,
          pure_funcs: ["console.log"],
        },
      },
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
    server: {
      host: true,
      port: process.env.PORT || 10000,
      strictPort: true,
      allowedHosts: ["coingecko-and-news.onrender.com"],
    },
    preview: {
      port: process.env.PORT || 10000,
      host: true,
      allowedHosts: ["coingecko-and-news.onrender.com"],
    },
  };
});
