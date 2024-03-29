import React from 'react'

import ExampleBlock from '../helpers/ExampleBlock'
import { Columns, Column } from '..'

const config = {
  title: 'Organisms/Layout/Columns',
  description: 'Checking to see if this works',
  component: Columns,
  subcomponents: { Column },
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
export default config

export const columns = () => {
  return (
    <Columns base="6">
      <Column start="3" span="4">
        <ExampleBlock>1</ExampleBlock>
      </Column>
      <Column start="1" span="2">
        <ExampleBlock>2</ExampleBlock>
      </Column>
    </Columns>
  )
}
