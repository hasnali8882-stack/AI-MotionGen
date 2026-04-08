import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@react-three/postprocessing'],
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          'three-core': ['three'],
          'r3f': ['@react-three/fiber', '@react-three/drei'],
          'postprocessing': ['@react-three/postprocessing', 'postprocessing'],
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
})
