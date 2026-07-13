import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.corrupciondb.cl",
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: { "@": "/src" },
    },
  },
});
