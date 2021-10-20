/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react'
import { jsx, css } from '@emotion/core'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Input from './Input'

export default {
  title: 'Components/Input',
  component: Input,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Gongbiz Input Components',
  },
}

export const input = () => {
  return <Input />
}
