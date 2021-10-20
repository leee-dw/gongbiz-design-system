import React from 'react'
import ButtonGroup from './ButtonGroup'
import Button from '../Button/Button'
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Components/Button Group',
  component: ButtonGroup,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Gongbiz Button Group Components',
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
}

export const buttonGroup = () => {
  const direction = radios('direction', { Row: 'row', Column: 'column' }, 'row')
  const rightAlign = boolean('rightAlign', false)
  const gap = text('gap', '0.5rem')

  return (
    <ButtonGroup direction={direction} rightAlign={rightAlign} gap={gap}>
      <Button theme="secondary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  )
}

buttonGroup.story = {
  name: 'Default',
}

export const rightAlign = () => {
  return (
    <ButtonGroup rightAlign>
      <Button theme="secondary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  )
}

export const column = () => {
  return (
    <ButtonGroup direction="column">
      <Button>CLICK 1</Button>
      <Button>CLICK 2</Button>
    </ButtonGroup>
  )
}

export const customGap = () => {
  return (
    <ButtonGroup gap="1rem">
      <Button theme="secondary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  )
}

export const customGapColumn = () => {
  return (
    <ButtonGroup direction="column" gap="3rem">
      <Button>CLICK 1</Button>
      <Button>CLICK 2</Button>
    </ButtonGroup>
  )
}
