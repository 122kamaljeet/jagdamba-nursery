import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Replace with your real domain once purchased/connected.
export default defineConfig({
  site: "https://jagdambanursery.com",
  devToolbar: {
    enabled: false,
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
