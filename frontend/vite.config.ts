import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Resolve plotly.js/dist/plotly to the basic version
      'plotly.js/dist/plotly': 'plotly.js-basic-dist',
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
          // Specific chunking rule for Plotly to ensure it's in its own chunk
          if (id.includes('plotly.js-basic-dist')) {
            return 'plotly'; // Force Plotly into a separate chunk
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
