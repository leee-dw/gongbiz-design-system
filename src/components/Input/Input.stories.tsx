/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useState, useEffect } from 'react'
import { jsx, css } from '@emotion/core'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

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
  const placeholder = text('placeholder', '고객 검색')
  const [inputValue, setInputValue] = useState('')

  const onChangeInput = e => {
    return setInputValue(e.target.value)
  }

  return (
    <Input
      placeholder={placeholder}
      value={inputValue}
      onChange={onChangeInput}
    />
  )
}

input.story = {
  name: 'Default',
}
