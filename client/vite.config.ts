import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';
import PluginCritical from 'rollup-plugin-critical';

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    react(),
    visualizer({ open: true, gzipSize: true, brotliSize: true }),
    PluginCritical({
        criticalUrl: 'http://localhost:5173', // Adjust this to your local dev URL
        criticalBase: 'dist',
        criticalPages: [
          { uri: '', template: 'index' },
          { uri: '/resume', template: 'resume' },
        ],
        criticalConfig: {
          // Configuration options for the critical generator
        },
    }),
    ],
})
