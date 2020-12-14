import React from 'react'
import { boolean } from '@storybook/addon-knobs'

import { Hidden } from '..'

const story = {
  title: 'Molecules/Hidden',
  component: Hidden,
}

const atBaseKnob = () => boolean('atBase', false)
const atSmallKnob = () => boolean('atSmall', false)
const atMediumKnob = () => boolean('atMedium', false)
const atLargeKnob = () => boolean('atLarge', false)
const andUpKnob = () => boolean('andUp', false)

export const hidden = () => {
  return (
    <Hidden
      atBase={atBaseKnob()}
      atSmall={atSmallKnob()}
      atMedium={atMediumKnob()}
      atLarge={atLargeKnob()}
      andUp={andUpKnob()}
    >
      <div>Content Example</div>
    </Hidden>
  )
}

export default story
