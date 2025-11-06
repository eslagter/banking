import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";

import postcssGlobalData from "@csstools/postcss-global-data";
import presetEnv from "postcss-preset-env";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
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

  server: { https: true, open: true },
});
