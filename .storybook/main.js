const path = require('path')
const resolvePath = _path => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-knobs'],

  webpackFinal: async config => {
    const emotionReactEleven = path.dirname(require.resolve('@emotion/react/package.json'))
    const emotionStyledEleven = path.dirname(require.resolve('@emotion/styled/package.json'))

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': emotionReactEleven,
          '@emotion/styled': emotionStyledEleven,
          'emotion-theming': emotionReactEleven,
        },
      },
    }
  },
}
