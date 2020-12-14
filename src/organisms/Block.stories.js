import React from 'react'
import { select, boolean } from '@storybook/addon-knobs'

import { Block, colorTokens, measurementTokens } from '../'

const constrainKnobs = () =>
  select('Constrain', ['none', 'text', 'site'], 'site')
const colorKnobs = () =>
  select('Color', Object.keys(colorTokens.backgrounds.block), 'transparent')
const paddingKnobs = () =>
  select('Padding', Object.keys(measurementTokens.componentPadding), 'm')
const isInsetKnob = () => boolean('Is inset?', false)
const isPositioned = () => boolean('Is positioned?', false)

const story = {
  title: 'Organisms/Layout/Block',
  component: Block,
}

export const block = () => {
  return (
    <Block
      constain={constrainKnobs()}
      color={colorKnobs()}
      padding={paddingKnobs()}
      isInset={isInsetKnob()}
      isPositioned={isPositioned()}
    >
      Testing
    </Block>
  )
}

export default story
