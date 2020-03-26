import React from 'react'
import { boolean } from '@storybook/addon-knobs'

import { Decorated, Text } from '..'
import lorem from '../helpers/lorem'

export default {
  title: 'Molecules|Decorated',
  component: Decorated,
}

const isOnRightKnob = () => boolean('Is on right?', false)

export const componentPlayground = () => {
  return (
    <Decorated isOnRight={isOnRightKnob()}>
      <Text>{lorem.generateSentences(5)}</Text>
    </Decorated>
  )
}
