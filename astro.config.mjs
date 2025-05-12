import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

export default defineConfig({
  output: "static",
  site: "https://test.cliks.com.sa/",

  vite: {
      plugins: [tailwindcss()],
  },

  build: {
      format: "directory", 
  },

  integrations: [react()],
});