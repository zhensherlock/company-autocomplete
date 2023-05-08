import filesize from 'rollup-plugin-filesize'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import eslint from '@rollup/plugin-eslint'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import strip from '@rollup/plugin-strip'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

const output = [
  {
    name: 'CompanyAutocomplete',
    format: 'esm',
    file: 'dist/index.esm.js',
    sourcemap: true
  },
  {
    name: 'CompanyAutocomplete',
    format: 'umd',
    file: 'dist/index.umd.js',
    sourcemap: true
  },
  {
    name: 'CompanyAutocomplete',
    format: 'iife',
    file: 'dist/index.iife.js',
    sourcemap: true
  },
  {
    name: 'CompanyAutocomplete',
    format: 'cjs',
    file: 'dist/index.cjs.js',
    sourcemap: true
  },
  // min
  {
    name: 'CompanyAutocomplete',
    format: 'esm',
    file: 'dist/index.esm.min.js',
    plugins: [terser()]
  },
  {
    name: 'CompanyAutocomplete',
    format: 'umd',
    file: 'dist/index.umd.min.js',
    plugins: [terser()]
  },
  {
    name: 'CompanyAutocomplete',
    format: 'iife',
    file: 'dist/index.iife.min.js',
    plugins: [terser()]
  },
  {
    name: 'CompanyAutocomplete',
    format: 'cjs',
    file: 'dist/index.cjs.min.js',
    plugins: [terser()]
  }
]

export default [
  {
    input: 'src/main.ts',
    output,
    plugins: [
      eslint({
        throwOnError: true,
        throwOnWarning: true,
        include: ['src/**'],
        exclude: ['node_modules/**', 'src/style/**']
      }),
      resolve(),
      strip(),
      typescript(),
      postcss({
        plugins: [
          autoprefixer(),
          cssnano()
        ]
      }),
      babel({ babelHelpers: 'runtime', exclude: ['node_modules/**'] }),
      filesize()
    ]
  }
]
