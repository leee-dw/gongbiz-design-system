import resolve from '@rollup/plugin-node-resolve'
import image from '@rollup/plugin-image'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

const inputSrc = [
  ['./index.ts', 'es'],
  ['./index.ts', 'cjs'],
]

export default inputSrc.map(([input, format]) => {
  return {
    input,
    output: [
      {
        dir: 'build',
        format,
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
        plugins: [],
      }),
      terser(),
    ],
  }
})
