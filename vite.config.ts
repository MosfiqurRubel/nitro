import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "src"),
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
  },  
  server: {
    port: 5173, // Default Vite port
    open: true, // Auto open browser on dev
  },
});
