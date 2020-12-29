import React from 'react' // eslint-disable-line no-unused-vars
import { select } from '@storybook/addon-knobs'

import ExampleBlock from '../helpers/ExampleBlock'
import { Rows } from '../'

const story = {
  title: 'Organisms/Layout/Rows',
  component: Rows,
}

const spacingKnob = () => select('Spacing', ['m', 'l', 'xl'], 'l')

export const rows = () => {
  return (
    <Rows spacing={spacingKnob()}>
      <ExampleBlock />
      <ExampleBlock />
      <ExampleBlock />
      <ExampleBlock />
      <ExampleBlock />
    </Rows>
  )
}

export default story
