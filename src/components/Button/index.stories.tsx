import React from 'react'

import Button, { ButtonTheme, ButtonVariant } from './index'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Gongbiz Button Components',
  },
}

export const variants = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Button>Button</Button>
      <Button variants={ButtonVariant.OUTLINE}>Button</Button>
      <Button variants={ButtonVariant.GHOST}>Button</Button>
      <Button variants={ButtonVariant.LINK}>Button</Button>
    </div>
  )
}
