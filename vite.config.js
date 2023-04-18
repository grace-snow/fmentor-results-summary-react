import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      google: {
        families: [
          {
            name: "Hanken Grotesk",
            styles: "wght@500;700;800",
            defer: true,
          },
        ],
      },
    }),
  ],
  assetsInclude: ["**/*.ttf"],
});
