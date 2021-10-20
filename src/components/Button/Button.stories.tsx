/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { ComponentStory } from '@storybook/react'
import Button from './Button'
import ButtonGroup from '../ButtonGroup/ButtonGroup'
import Icon from '../Icons/Icon'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Gongbiz Button Components',
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
}

const Template: ComponentStory<typeof Button> = args => <Button {...args} />
const defaultArgs: {} = {
  theme: 'primary',
  disabled: false,
  size: 'medium',
  radiusType: 'default',
  radiusSize: 'sm',
  children: 'Default Button',
}

export const Default = Template.bind({})

Default.args = {
  ...defaultArgs,
}

export const PrimaryButton = () => <Button>BUTTON</Button>

export const SecondaryButton = () => <Button theme="secondary">BUTTON</Button>

export const DisabledButton = () => {
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
