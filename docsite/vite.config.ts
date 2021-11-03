import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript2 from "rollup-plugin-typescript2"
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

//const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    typescript2({
      check: false,
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      clean: true
    }),
    vue(),
    Components({
      resolvers: IconsResolver(),
    }),
    Icons({
      scale: 1.2,
      defaultClass: 'inline-block align-middle',
      compiler: 'vue3',
    }),
  ],
  resolve: {
    alias: [
      { find: '@/', replacement: '/src/' }
    ]
  },
  base: process.env.NODE_ENV === 'production' ? '/snowind/' : './',
  build: {
    outDir: '../docs'
  }
})