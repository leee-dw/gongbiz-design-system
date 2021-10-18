import image from '@rollup/plugin-image'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: './index.ts',
  output: [
    {
      dir: 'build',
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    },
  ],
  preserveModules: true,
  plugins: [
    peerDepsExternal(),
    image(),
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: false,
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
