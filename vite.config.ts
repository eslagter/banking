import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssGlobalData from "@csstools/postcss-global-data";
import presetEnv from "postcss-preset-env";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssGlobalData({
          files: ["./src/postcss/custom-media.css"],
        }),

        presetEnv(),
      ],
    },
  },
});
