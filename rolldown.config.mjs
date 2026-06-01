import { defineConfig } from 'rolldown'
import strip from '@rollup/plugin-strip'
import filesize from 'rollup-plugin-filesize'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import { banner } from './tools/banner.mjs'

const name = 'CompanyAutocomplete'

const commonOutputOptions = {
  name,
}

const sourceMapOutputOptions = {
  sourcemap: true,
  sourcemapExcludeSources: true,
  banner,
}

const npmOutput = [
  {
    ...commonOutputOptions,
    ...sourceMapOutputOptions,
    format: 'esm',
    file: 'dist/index.esm.js',
  },
  {
    ...commonOutputOptions,
    ...sourceMapOutputOptions,
    format: 'cjs',
    file: 'dist/index.cjs.js',
  },
  {
    ...commonOutputOptions,
    format: 'esm',
    file: 'dist/index.esm.min.js',
    minify: true,
  },
  {
    ...commonOutputOptions,
    format: 'cjs',
    file: 'dist/index.cjs.min.js',
    minify: true,
  },
]

const browserOutput = [
  {
    ...commonOutputOptions,
    ...sourceMapOutputOptions,
    format: 'umd',
    file: 'dist/index.umd.js',
  },
  {
    ...commonOutputOptions,
    ...sourceMapOutputOptions,
    format: 'iife',
    file: 'dist/index.iife.js',
  },
  {
    ...commonOutputOptions,
    format: 'umd',
    file: 'dist/index.umd.min.js',
    minify: true,
  },
  {
    ...commonOutputOptions,
    format: 'iife',
    file: 'dist/index.iife.min.js',
    minify: true,
  },
]

const createPlugins = () => [
  strip(),
  postcss({
    plugins: [autoprefixer(), cssnano()],
  }),
  filesize(),
]

const baseConfig = {
  input: 'src/main.ts',
  transform: {
    target: 'es2015',
  },
}

export default defineConfig([
  {
    ...baseConfig,
    external: ['@floating-ui/dom'],
    output: npmOutput,
    plugins: createPlugins(),
  },
  {
    ...baseConfig,
    output: browserOutput,
    plugins: createPlugins(),
  },
])
