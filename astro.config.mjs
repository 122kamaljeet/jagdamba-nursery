import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { siteConfig } from "./src/environments/env";

// Replace with your real domain once purchased/connected.
export default defineConfig({
  site: siteConfig.siteUrl,
  base: siteConfig.base,
  devToolbar: {
    enabled: false,
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
