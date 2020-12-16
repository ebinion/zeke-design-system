import React from 'react'
import { select } from '@storybook/addon-knobs'

import ExampleBlock from '../helpers/ExampleBlock'
import { Matrix } from '../'

const story = {
  title: 'Organisms/Layout/Matrix',
  component: Matrix,
}

const gutterKnob = () => select('Gutter', ['m', 'l', 'xl'], 'm')

export const matrix = () => {
  return (
    <Matrix gutter={gutterKnob()}>
      <ExampleBlock />
      <ExampleBlock />
      <ExampleBlock />
      <ExampleBlock />
      <ExampleBlock />
      <ExampleBlock />
      <ExampleBlock />
      <ExampleBlock />
      <ExampleBlock />
      <ExampleBlock />
    </Matrix>
  )
}

export default story
