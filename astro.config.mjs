import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Replace with your real domain once purchased/connected.
export default defineConfig({
  site: " https://122kamaljeet.github.io/jagdamba-nursery/",
  base: "/jagdamba-nursery",
  devToolbar: {
    enabled: false,
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
