/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import * as React from 'react'
import { palette } from '../../libs/palette'

export enum ButtonColors {
  GRAY = 'gray',
  RED = 'red',
  PINK = 'pink',
  GRAPE = 'grape',
  VIOLET = 'violet',
  INDIGO = 'indigo',
  BLUE = 'blue',
  CYAN = 'cyan',
  TEAL = 'teal',
  GREEN = 'green',
  LIME = 'lime',
  YELLOW = 'yellow',
  ORANGE = 'orange',
}

export interface ButtonProps {
  children: React.ReactNode
  onClick?: React.MouseEventHandler
  color: ButtonColors
}

const Button = ({ children, onClick, color }: ButtonProps) => {
  return (
    <button css={[style, colors[color]]} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

Button.defaultProps = {
  color: 'teal',
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
  padding: 0 1rem;
  margin-right: 24px;
  border: none;
  box-sizing: border-box;
  font-weight: 600;
  display: inline-flex;

  &:focus {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  }
`

const colors = {
  ornage: css`
    background-color: ${palette.orange[4]};
    color: white;
    &:hover {
      background-color: ${palette.orange[2]};
    }
    &:active {
      background-color: ${palette.orange[3]};
    }
  `,

  gray: css`
    background-color: ${palette.gray[4]};
    color: #fff;
    &:hover {
      background-color: ${palette.gray[2]};
    }
    &:active {
      background-color: ${palette.gray[3]};
    }
  `,

  yellow: css`
    background-color: ${palette.yellow[4]};
    color: #fff;
    &:hover {
      background-color: ${palette.yellow[2]};
    }
    &:active {
      background-color: ${palette.yellow[3]};
    }
  `,
}
