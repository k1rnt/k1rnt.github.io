import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://k1rnt.me",
  outDir: "docs",
  integrations: [tailwind()],
});
