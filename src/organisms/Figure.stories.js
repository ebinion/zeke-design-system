import React from 'react'
import { select } from '@storybook/addon-knobs'

import { Img, Figure, P } from '../'
import lorem from '../helpers/lorem'

export default {
  title: 'Organisms|Figure',
  component: Figure,
}

const positionKnob = () => select('Figure Position', ['left', 'right'], 'left')

export const ComponentPlayground = () => {
  return (
    <Figure
      figurePosition={positionKnob()}
      figure={<Img src="https://via.placeholder.com/1200x700" />}
    >
      <P>{lorem.generateSentences(2)}</P>
    </Figure>
  )
}
