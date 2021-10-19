/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/core'

export type IButtonGroupProps = {
  direction?: 'row' | 'column'
  rightAlign?: boolean
  gap?: number | string
  children: React.ReactNode
  className?: string
}

const ButtonGroup = ({
  direction = 'row',
  gap = '0.5rem',
  rightAlign,
  children,
  className,
}: IButtonGroupProps) => {
  return (
    <div
      css={[
        {
          display: 'flex',
          flexDirection: direction,
        },
        gapStyle(direction, gap),
        rightAlign && rightAlignStyle,
      ]}
      className={className}
    >
      {children}
    </div>
  )
}

const gapStyle = (direction: 'row' | 'column', gap: number | string) => {
  const marginType = direction === 'row' ? 'marginLeft' : 'marginTop'
  return css({
    'button + button': {
      [marginType]: gap,
    },
  })
}

const rightAlignStyle = css`
  justify-content: flex-end;
`

export default ButtonGroup
