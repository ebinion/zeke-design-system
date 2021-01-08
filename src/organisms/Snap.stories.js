import React from 'react'
import { select } from '@storybook/addon-knobs'

import { Block, Snap, Text } from '..'
import lorem from '../helpers/lorem'

const config = {
  title: 'Organisms/Snap',
  component: Snap,
  parameters: {
    layout: 'fullscreen',
  },
}
export default config

const text = lorem.generateParagraphs(1)

const snapDirectionKnob = () => select('Snap Direction', ['x', 'y'], 'y')
const snapTypeKnob = () =>
  select('Snap Type', ['proximity', 'mandatory'], 'proximity')

export const snap = () => {
  return (
    <Snap direction={snapDirectionKnob()} type={snapTypeKnob()}>
      <Block color="dark" isFullScreen>
        <Text color="knockout">{text}</Text>
      </Block>
      <Block color="dark" isFullScreen>
        <Text color="knockout">{text}</Text>
      </Block>
      <Block color="dark" isFullScreen>
        <Text color="knockout">{text}</Text>
      </Block>
    </Snap>
  )
}
