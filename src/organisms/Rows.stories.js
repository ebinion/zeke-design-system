import React from 'react' // eslint-disable-line no-unused-vars
import { select } from '@storybook/addon-knobs'

import ExampleBlock from '../helpers/ExampleBlock'
import { Rows } from '../'

export default {
  title: 'Organisms/Layout/Rows',
  component: Rows,
}

const sizeKnob = () => select('Size', ['s', 'm', 'l', 'xl'], 'm')

export const componentPlayground = () => {
  return (
    <Rows size={sizeKnob()}>
      <ExampleBlock />
      <ExampleBlock />
      <ExampleBlock />
      <ExampleBlock />
      <ExampleBlock />
    </Rows>
  )
}
