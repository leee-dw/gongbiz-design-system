import React from 'react'

import Button, { ButtonColors } from './index'

export default {
  title: 'components/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Gongbiz Button Components',
  },
}

export const button = () => {
  return <Button>BUTTON</Button>
}

button.story = {
  name: 'Default',
}

export const Colors = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Button color={ButtonColors.YELLOW}>Button</Button>
      <Button color={ButtonColors.GRAY}>Button</Button>
    </div>
  )
}
