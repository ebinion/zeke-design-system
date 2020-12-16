import React from 'react' // eslint-disable-line no-unused-vars

import ExampleBlock from '../helpers/ExampleBlock'
import { Rows } from '../'

const story = {
  title: 'Organisms/Layout/Rows',
  component: Rows,
}

export const rows = () => {
  return (
    <Rows>
      <ExampleBlock />
      <ExampleBlock />
      <ExampleBlock />
      <ExampleBlock />
      <ExampleBlock />
    </Rows>
  )
}

export default story
