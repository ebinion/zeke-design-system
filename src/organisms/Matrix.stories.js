import React from 'react'

import ExampleBlock from '../helpers/ExampleBlock'
import { Matrix } from '../'

const story = {
  title: 'Organisms/Layout/Matrix',
  component: Matrix,
}

export const matrix = () => {
  return (
    <Matrix>
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
