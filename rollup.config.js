import resolve from '@rollup/plugin-node-resolve'
import image from '@rollup/plugin-image'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'

export default {
  input: './index.ts',
  output: [
    {
      dir: 'build',
      format: 'es',
      sourcemap: true,
      exports: 'auto',
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
          // early return if the file we're currently looking at doesn't need to be acted upon by this plugin
          if (!entry[0].match(/.*(.scss.js)$/)) {
            return
          }

          // this line only runs for .scss.js files, which were generated by the postcss plugin.
          // depending on the use-case, the relative path to style-inject might need to change
          bundle[entry[0]].code = entry[1].code.replace(
            '../../node_modules/style-inject/dist/style-inject.es.js',
            'style-inject',
          )
        })
      },
    },
  ],
}
