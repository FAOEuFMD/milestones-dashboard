import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Resolve plotly.js/dist/plotly to the basic version
      'plotly.js/dist/plotly': 'plotly.js-basic-dist',
      'plotly.js': 'plotly.js-basic-dist',
    },
  },
  build: {
    rollupOptions: {
      output: {
        // split chunks based on dependencies
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0]; // chunk by package name
          }
        }
      }
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
