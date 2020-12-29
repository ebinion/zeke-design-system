import React from 'react'
import { select } from '@storybook/addon-knobs'

import { Constrain, Text } from '..'
import lorem from '../helpers/lorem'

const config = {
  title: 'Organisms/Layout/Constrain',
  component: Constrain,
}
export default config

const limitKnob = () => select('Limit', ['none', 'site', 'text'], 'site')

export const constrain = () => {
  return (
    <Constrain limit={limitKnob()}>
      <Text>{lorem.generateParagraphs(1)}</Text>
    </Constrain>
  )
}
