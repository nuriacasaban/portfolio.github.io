// @ts-check
import { defineConfig } from 'astro/config';


export default defineConfig({
  output: 'static',  // muy importante: build estático
  base: '/nuriacasaban.github.io/', // si tu repo es de usuario o proyecto
  build: {
    outDir: 'dist', // carpeta final de salida
  },
});
