import React from 'react'
import { select } from '@storybook/addon-knobs'

import { Block, colorTokens, measurementTokens } from '../'

const constrainKnobs = () =>
  select('Constrain', ['none', 'text', 'site'], 'site')
const colorKnobs = () =>
  select('Color', Object.keys(colorTokens.backgrounds.block), 'transparent')
const paddingKnobs = () =>
  select('Padding', Object.keys(measurementTokens.componentPadding), 'm')

export default {
  title: 'Organisms|Layout/Block',
  component: Block,
}

export const componentPlayground = () => {
  return (
    <Block
      constain={constrainKnobs()}
      color={colorKnobs()}
      padding={paddingKnobs()}
    >
      Testing
    </Block>
  )
}
