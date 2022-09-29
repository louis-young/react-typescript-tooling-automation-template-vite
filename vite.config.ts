import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    open: true,
    port: 3000,
  },
});
