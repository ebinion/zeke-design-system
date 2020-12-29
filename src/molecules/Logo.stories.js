import React from 'react'
import { select } from '@storybook/addon-knobs'

import { Logo } from '../'

const config = {
  title: 'Molecules/Logo',
  component: Logo,
}
export default config

const colorKnobs = () => select('Color', ['black', 'knockout'], 'black')

export const logo = () => {
  return <Logo color={colorKnobs()}>Studio</Logo>
}
