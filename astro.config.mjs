import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import astroIcon from "astro-icon";

export default defineConfig({
  site: "https://k1rnt.me",
  outDir: "dist",
  integrations: [astroIcon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
