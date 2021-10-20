import React, { useState, useEffect } from 'react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

import Navbar from './Navbar'

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Gongbiz Navbar Components',
  },
}

export const navbar = () => {
  return <Navbar />
}

navbar.story = {
  name: 'Default',
}
