import React from 'react'

import Button, { ButtonType } from './index'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Gongbiz Button Components',
  },
}

export const defaultButton = () => {
  return <Button>Default 버튼</Button>
}

export const primaryButton = () => {
  return <Button theme={ButtonType.PRIMARY}>PRIMARY 버튼</Button>
}
export const secondaryButton = () => {
  return <Button theme={ButtonType.SECONDARY}>SECONDARY 버튼</Button>
}
