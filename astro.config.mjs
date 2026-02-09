// @ts-check
import { defineConfig } from 'astro/config';


export default defineConfig({
  output: 'static',  // build estático
  build: {
    outDir: 'dist',  // carpeta de salida
  }
});
