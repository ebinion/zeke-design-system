import React from 'react'
import { boolean, select } from '@storybook/addon-knobs'

import ExampleBlock from '../helpers/ExampleBlock'
import { Matrix } from '../'

const story = {
  title: 'Organisms/Layout/Matrix',
  component: Matrix,
}

const gutterKnob = () => select('Gutter', ['m', 'l', 'xl'], 'm')
const columnKnob = () => boolean('Use "componentMargin"?', false)

export const matrix = () => {
  return (
    <Matrix gutter={gutterKnob()} useComponentMargin={columnKnob()}>
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
