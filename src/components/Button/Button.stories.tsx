/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react'
import { jsx, css } from '@emotion/core'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Button from './Button'
import ButtonGroup from '../ButtonGroup/ButtonGroup'
import Icon from '../../Icons/Icon'

export default {
  title: 'Design System/components/Button',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Gongbiz Button Components',
  },
}

export const button = () => {
  const label = text('children', 'BUTTON')
  const size = select('size', ['small', 'medium', 'large'], 'medium')
  const theme = select('theme', ['primary', 'secondary'], 'primary')
  const disabled = boolean('disabled', false)

  return (
    <Button size={size} theme={theme} disabled={disabled} onClick={action('onClick')}>
      {label}
    </Button>
  )
}

button.story = {
  name: 'Default',
}

export const PrimaryButton = () => <Button>BUTTON</Button>
export const SecondaryButton = () => <Button theme="secondary">BUTTON</Button>

export const Disabled = () => {
  return <Button disabled>DISABLED</Button>
}

export const ButtonSizes = () => {
  return (
    <div css={buttonWrapper}>
      <ButtonGroup>
        <Button size="small">BUTTON</Button>
        <Button size="medium">BUTTON</Button>
        <Button size="large">BUTTON</Button>
      </ButtonGroup>
    </div>
  )
}

export const IconButtons = () => {
  return (
    <div css={buttonWrapper}>
      <ButtonGroup>
        <Button size="small">
          <Icon icon="HomeIcon" />
          HOME
        </Button>
        <Button>
          <Icon icon="ProductIcon" />
          PRODUCT
        </Button>
        <Button size="large">
          <Icon icon="ShopIcon" />
          SHOP
        </Button>
      </ButtonGroup>
    </div>
  )
}

const buttonWrapper = css`
  display: flex;
  align-items: center;
`
