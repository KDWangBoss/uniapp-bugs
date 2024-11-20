// 此文件更改后不会自动生效，需重新运行npm run unocss
import { defineConfig, presetUno, toEscapedSelector } from 'unocss'

export default defineConfig({
  cli: {
    mode: 'vue-scoped',
    entry: {
      patterns: './src/**/*.{vue,nvue}',
      outFile: './src/static/uno.css'
    },
  },
  presets: [
    presetUno({
      preflight: true
    }),
  ],
  rules: [],
})