import React from 'react' // eslint-disable-line no-unused-vars
import { select, boolean } from '@storybook/addon-knobs'

import { Animate } from '..'

const story = {
  title: 'Molecules/Animate',
  component: Animate,
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

const isPlayingKnob = () => boolean('Is playing?', true)

export const animate = () => {
  return (
    <Animate kind={animationKnob()} isPlaying={isPlayingKnob()}>
      <div>Example Animation</div>
    </Animate>
  )
}

export default story
