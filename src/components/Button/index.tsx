/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import * as React from 'react'
import { palette } from '../../libs/palette'

export interface IButtonProps {
  children: React.ReactNode
  onClick?: React.MouseEventHandler
  size?: 'small' | 'medium' | 'large'
  color?: 'gray' | 'red' | 'pink'
  disabled?: boolean
}

const Button = ({ children, onClick, color = 'gray', size = 'medium', disabled }: IButtonProps) => {
  return (
    <button disabled={disabled} css={[style, colors[color], sizes[size]]} onClick={onClick}>
      {children}
    </button>
  )
}

const style = css`
  border-radius: 0.25rem;
  display: inline-flex;
  appearance: none;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 100ms ease 0s;
  user-select: none;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  line-height: 1;
  outline: none;
  height: 2rem;
  min-width: 2.5rem;
  font-size: 0.875rem;
  padding: 0.75rem 1.5rem;
  border: none;
  box-sizing: border-box;
  display: inline-flex;

  &:focus {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
  }
`

const colors = {
  gray: css`
    background-color: ${palette.gray[8]};
    color: white;
    &:hover {
      background-color: ${palette.gray[7]};
    }
    &:active {
      background-color: ${palette.gray[9]};
    }
    &:disabled {
      background-color: ${palette.gray[3]};
    }
  `,
  red: css`
    background-color: ${palette.red[8]};
    color: #fff;
    &:hover {
      background-color: ${palette.red[7]};
    }
    &:active {
      background-color: ${palette.red[9]};
    }
    &:disabled {
      background-color: ${palette.red[3]};
    }
  `,
  pink: css`
    background-color: ${palette.pink[8]};
    color: white;
    &:hover {
      background-color: ${palette.pink[7]};
    }
    &:active {
      background-color: ${palette.pink[9]};
    }
    &:disabled {
      background-color: ${palette.pink[3]};
    }
  `,
  grape: css`
    background-color: ${palette.grape[8]};
    color: white;
    &:hover {
      background-color: ${palette.grape[7]};
    }
    &:active {
      background-color: ${palette.grape[9]};
    }
    &:disabled {
      background-color: ${palette.grape[3]};
    }
  `,
  violet: css`
    background-color: ${palette.violet[8]};
    color: white;
    &:hover {
      background-color: ${palette.violet[7]};
    }
    &:active {
      background-color: ${palette.violet[9]};
    }
    &:disabled {
      background-color: ${palette.violet[3]};
    }
  `,
  indigo: css`
    background-color: ${palette.indigo[8]};
    color: white;
    &:hover {
      background-color: ${palette.indigo[7]};
    }
    &:active {
      background-color: ${palette.indigo[9]};
    }
    &:disabled {
      background-color: ${palette.indigo[3]};
    }
  `,
  blue: css`
    background-color: ${palette.blue[8]};
    color: white;
    &:hover {
      background-color: ${palette.blue[7]};
    }
    &:active {
      background-color: ${palette.blue[9]};
    }
    &:disabled {
      background-color: ${palette.blue[3]};
    }
  `,
  cyan: css`
    background-color: ${palette.cyan[8]};
    color: white;
    &:hover {
      background-color: ${palette.cyan[7]};
    }
    &:active {
      background-color: ${palette.cyan[9]};
    }
    &:disabled {
      background-color: ${palette.cyan[3]};
    }
  `,
  teal: css`
    background-color: ${palette.teal[8]};
    color: white;
    &:hover {
      background-color: ${palette.teal[7]};
    }
    &:active {
      background-color: ${palette.teal[9]};
    }
    &:disabled {
      background-color: ${palette.teal[3]};
    }
  `,
  green: css`
    background-color: ${palette.green[8]};
    color: white;
    &:hover {
      background-color: ${palette.green[7]};
    }
    &:active {
      background-color: ${palette.green[9]};
    }
    &:disabled {
      background-color: ${palette.green[3]};
    }
  `,
  lime: css`
    background-color: ${palette.lime[8]};
    color: white;
    &:hover {
      background-color: ${palette.lime[7]};
    }
    &:active {
      background-color: ${palette.lime[9]};
    }
    &:disabled {
      background-color: ${palette.lime[3]};
    }
  `,
  yellow: css`
    background-color: ${palette.yellow[8]};
    color: #fff;
    &:hover {
      background-color: ${palette.yellow[7]};
    }
    &:active {
      background-color: ${palette.yellow[9]};
    }
    &:disabled {
      background-color: ${palette.yellow[3]};
    }
  `,
  orange: css`
    background-color: ${palette.orange[8]};
    color: #fff;
    &:hover {
      background-color: ${palette.orange[7]};
    }
    &:active {
      background-color: ${palette.orange[9]};
    }
    &:disabled {
      background-color: ${palette.orange[3]};
    }
  `,
}

const sizes = {
  small: css`
    height: 1.5rem;
    font-size: 0.5rem;
    padding: 0.5625rem 1.125rem;
  `,
  medium: css`
    height: 2rem;
    font-size: 0.875rem;
    padding: 0.75rem 1.5rem;
  `,
  large: css`
    height: 2.5rem;
    font-size: 1.125rem;
    padding: 0.9375rem 1.875rem;
  `,
}

export default Button
