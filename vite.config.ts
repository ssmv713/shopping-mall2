import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRouterPlugin from "vite-plugin-next-react-router";

export default defineConfig({
  plugins: [reactRouterPlugin(), react()],
});

// https://vitejs.dev/config
