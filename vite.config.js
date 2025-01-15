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
    plugins: [
      react({
        babel: {
          plugins: [
            [
              "babel-plugin-transform-remove-console",
              { exclude: ["error", "warn"] },
            ],
          ],
        },
      }),
    ],
    build: {
      minify: "esbuild",
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
      treeshake: true,
    },
    esbuild: {
      drop: mode === "production" ? ["console", "debugger"] : [],
    },
  };
});
