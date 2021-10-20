/** @jsxRuntime classic */
/** @jsx jsx */

import * as React from 'react'
import { jsx, css } from '@emotion/core'

import { radiusStyle } from '../../common/styles/radiusStyle'
import { RadiusProps } from '../../common/types/types'
import { palette } from '../../libs/palette'

export interface IButtonProps extends RadiusProps {
  /** 버튼 안의 내용 */
  children: React.ReactNode
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  /** 버튼의 생김새를 설정합니다. */
  theme?: 'primary' | 'secondary'
  /** 버튼의 크기를 설정합니다. */
  size?: 'small' | 'medium' | 'large'
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean
  /** 버튼의 너비를 임의로 설정합니다. */
  width?: string | number
}

const Button = ({
  children,
  onClick,
  theme = 'primary',
  size = 'medium',
  radiusType = 'default',
  radiusSize = 'sm',
  disabled,
}: IButtonProps) => {
  return (
    <button
      disabled={disabled}
      css={[
        style,
        themes[theme],
        sizes[size],
        radiusStyle[radiusType][radiusSize],
      ]}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

const style = css`
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
  font-weight: 500;
  cursor: pointer;
  border-radius: 0.25rem;
  letter-spacing: 0.5px;

  svg {
    width: 1em;
    margin-right: 1em;
  }

  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
  }
`

const themes = {
  primary: css`
    background-color: ${palette.gray[8]};
    color: white;
    svg {
      fill: white;
    }

    &:hover:enabled {
      background-color: ${palette.gray[7]};
    }
    &:active:enabled {
      background-color: ${palette.gray[9]};
    }
    &:disabled {
      background-color: ${palette.gray[1]};
    }
  `,
  secondary: css`
    background-color: ${palette.gray[2]};
    color: ${palette.gray[7]};
    svg {
      fill: ${palette.gray[7]};
    }
    &:hover:enabled {
      background-color: ${palette.gray[1]};
    }
    &:active:enabled {
      background-color: ${palette.gray[3]};
    }
    &:disabled {
      color: ${palette.gray[1]};
      svg {
        fill: ${palette.gray[1]};
      }
    }
  `,
}

const sizes = {
  small: css`
    height: 1.5rem;
    font-size: 0.5rem;
    padding: 0.5rem 0.75rem;
  `,
  medium: css`
    height: 2rem;
    font-size: 0.875rem;
    padding: 0.75rem 1rem;
  `,
  large: css`
    height: 2.5rem;
    font-size: 1.125rem;
    padding: 1rem 1.25rem;
  `,
}

export default Button
