import React from 'react'

import ExampleBlock from '../helpers/ExampleBlock'
import { Matrix } from '../'

export default {
  title: 'Organisms/Layout/Matrix',
  component: Matrix,
}

export const componentPlayground = () => {
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
