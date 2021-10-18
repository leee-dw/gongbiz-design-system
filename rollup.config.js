import image from '@rollup/plugin-image'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'

import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

import svgr from '@svgr/rollup'
import url from 'rollup-plugin-url'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const extensions = ['.js', '.jsx', '.ts', '.tsx']
process.env.BABEL_ENV = 'production'

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'es',
    },
  ],

  plugins: [
    peerDepsExternal(),
    image(),
    resolve({ extensions }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({ extensions, include: ['src/**/*'], runtimeHelpers: true }),
    url(),
    svgr(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: true,
      modules: true,
      use: ['sass'],
    }),

    {
      name: 'Custom Rollup Plugin`',

      generateBundle: (options, bundle) => {
        Object.entries(bundle).forEach(entry => {
          if (!entry[0].match(/.*(.scss.js)$/)) {
            return
          }

          bundle[entry[0]].code = entry[1].code.replace(
            '../../node_modules/style-inject/dist/style-inject.es.js',
            'style-inject',
          )
        })
      },
    },
  ],
}
