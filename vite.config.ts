import { defineConfig } from 'vite';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';


export default defineConfig(({ command, mode }) => {
  const enableWatch = process.argv.includes('--watch')
  return {
    server: {
      cors: true
    },
    publicDir: 'dist',
    plugins: [
      tsconfigPaths(),
      dts({ include: ['src'] })
    ],
    build: {
      emptyOutDir: false,
      minify: "terser",
      sourcemap: true,
      lib: {
        entry: resolve(__dirname, 'src/main.ts'),
        name: "fastcode",
        fileName: () => `build.js`,
        formats: ['iife'],
      },
      ...(enableWatch ? {
        watch: {
          include: [
            'src/**'
          ],
        }
      } : {})
    }
  }
})