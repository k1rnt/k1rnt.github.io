import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from "astro-icon";

export default defineConfig({
  site: "https://k1rnt.me",
  outDir: "dist",
  integrations: [tailwind(), astroIcon()],
});
