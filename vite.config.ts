import { defineConfig } from 'vite';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';


export default defineConfig({
  plugins: [
    tsconfigPaths(),
    dts({ include: ['src'] })
  ],
  build: {
    minify: "terser",
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      fileName: () => `cba.js`,
      formats: ['es'],
    }
  }
})