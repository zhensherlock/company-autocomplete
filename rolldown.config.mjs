import { createRequire } from 'node:module'
import { defineConfig } from 'rolldown'
import strip from '@rollup/plugin-strip'
import filesize from 'rollup-plugin-filesize'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

const require = createRequire(import.meta.url)
const { banner } = require('./tools/banner.js')

const name = 'CompanyAutocomplete'

const output = [
  {
    name,
    format: 'esm',
    file: 'dist/index.esm.js',
    sourcemap: true,
    banner,
  },
  {
    name,
    format: 'umd',
    file: 'dist/index.umd.js',
    sourcemap: true,
    banner,
  },
  {
    name,
    format: 'iife',
    file: 'dist/index.iife.js',
    sourcemap: true,
    banner,
  },
  {
    name,
    format: 'cjs',
    file: 'dist/index.cjs.js',
    sourcemap: true,
    banner,
  },
  {
    name,
    format: 'esm',
    file: 'dist/index.esm.min.js',
    minify: true,
  },
  {
    name,
    format: 'umd',
    file: 'dist/index.umd.min.js',
    minify: true,
  },
  {
    name,
    format: 'iife',
    file: 'dist/index.iife.min.js',
    minify: true,
  },
  {
    name,
    format: 'cjs',
    file: 'dist/index.cjs.min.js',
    minify: true,
  },
]

export default defineConfig({
  input: 'src/main.ts',
  transform: {
    target: 'es2015',
  },
  output,
  plugins: [
    strip(),
    postcss({
      plugins: [autoprefixer(), cssnano()],
    }),
    filesize(),
  ],
})
