/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react'
import { jsx, css } from '@emotion/core'

import Button from './index'

export default {
  title: 'Design System/components/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Gongbiz Button Components',
  },
}

export const Default = () => <Button>BUTTON</Button>

const buttonWrapper = css`
  display: flex;
  align-items: center;
  padding: 2rem;
  & > div + div {
    margin-left: 2rem;
  }
`

export const Sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button size="small">BUTTON</Button>
      </div>
      <div>
        <Button size="medium">BUTTON</Button>
      </div>
      <div>
        <Button size="large">BUTTON</Button>
      </div>
    </div>
  )
}

export const disabled = () => {
  return <Button disabled>DISABLED</Button>
}
