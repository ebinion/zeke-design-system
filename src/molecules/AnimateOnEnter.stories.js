import React from 'react'
import { select } from '@storybook/addon-knobs'

import { AnimateOnEnter } from '..'

const story = {
  title: 'Molecules/AnimateOnEnter',
  component: AnimateOnEnter,
}

const animationKnob = () =>
  select(
    'Animation kind',
    [
      'fadeIn',
      'fadeInFromLeft',
      'fadeInFromTop',
      'fadeInFromRight',
      'fadeInFromBottom',
    ],
    'fadeIn'
  )

export const componentPlayground = () => {
  return (
    <AnimateOnEnter kind={animationKnob()}>
      <div>Animation Example</div>
    </AnimateOnEnter>
  )
}

export default story