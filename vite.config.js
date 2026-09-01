import { resolve } from "node:path";
import { defineConfig } from "vite";
import { sites } from "@openai/sites-vite-plugin";

export default defineConfig({
  plugins: [sites()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, "index.html"),
        about: resolve(import.meta.dirname, "about.html")
      }
    }
  }
});
