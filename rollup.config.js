import image from '@rollup/plugin-image'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'
import external from 'rollup-plugin-peer-deps-external'
import svgr from '@svgr/rollup'
import url from 'rollup-plugin-url'

const extensions = ['.js', '.jsx', '.ts', '.tsx'] // 어떤 확장자를 처리 할 지 정함
process.env.BABEL_ENV = 'production'

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.module, // 번들링한 파일을 저장 할 경로
      format: 'es', // ES Module 형태로 번들링함
    },
  ],

  plugins: [
    peerDepsExternal(),
    image(),
    resolve({ extensions }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({ extensions, include: ['src/**/*'], runtimeHelpers: true }), // Babel을 사용 할 수 있게 해줌
    url(), // 미디어 파일을 dataURI 형태로 불러와서 사용 할 수 있게 해줌.
    svgr(), // SVG를 컴포넌트로 사용 할 수 있게 해줌.
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
