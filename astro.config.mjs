import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import image from "@astrojs/image";

export default defineConfig({
  output: "static",
  site: "https://test.cliks.com.sa/",
  integrations: [
    react(),
    image({ serviceEntryPoint: '@astrojs/image/sharp' }),
    tailwindcss()
  ],
  build: {
    format: "directory",
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@astrojs/image']
    }
  }
});