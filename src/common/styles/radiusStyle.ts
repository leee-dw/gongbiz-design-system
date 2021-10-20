import { css } from '@emotion/core'

export const radiusStyle = {
  default: {
    sm: css`
      border-radius: 0.25rem;
    `,
    md: css`
      border-radius: 0.5rem;
    `,
    lg: css`
      border-radius: 1rem;
    `,
    circle: css`
      border-radius: 50%;
    `,
  },

  sharp: {
    sm: css`
      border-radius: 2px;
    `,
    md: css`
      border-radius: 2px;
    `,
    lg: css`
      border-radius: 2px;
    `,
    circle: css`
      border-radius: 50%;
    `,
  },
}
