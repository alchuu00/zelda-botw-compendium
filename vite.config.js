import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssUrl from "postcss-url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsInclude: ["**/*.jpg", "**/*.png", "**/*.svg"],
  },
  css: {
    postcss: {
      plugins: [
        postcssUrl({
          url: (asset) => {
            if (asset.url.startsWith("/")) {
              return `/${asset.relativePath}`;
            } else {
              return asset.url;
            }
          },
        }),
      ],
    },
  },
});
