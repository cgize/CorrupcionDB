import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://corrupciondb.org",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: { "@": "/src" },
    },
  },
});
