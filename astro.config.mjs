import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    sitemap({
      customPages: [
        "https://www.beanlea.com/about",
        "https://www.beanlea.com/contact",
        "https://www.beanlea.com/showcase",
        "https://www.beanlea.com/",
      ],
    }),
  ],
  site: "https://www.beanlea.com",
  output: "server",
  adapter: vercel(), // vite: {
  //   ssr: {
  //     external: ["svgo"],
  //   },
  // },
});
