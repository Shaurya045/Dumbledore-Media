import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: [
    "**/*.JPG",
    "**/*.JPEG",
    "**/*.png",
    "**/*.PNG",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.svg",
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
