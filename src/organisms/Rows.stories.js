import React from 'react' // eslint-disable-line no-unused-vars

import ExampleBlock from '../helpers/ExampleBlock'
import { Rows } from '../'

const story = {
  title: 'Organisms/Layout/Rows',
  component: Rows,
}
export default story

const Template = args => <Rows {...args} />

export const rows = Template.bind({})
rows.args = {
  children: (
    <>
      <ExampleBlock maxWidth="300px" />
      <ExampleBlock />
      <ExampleBlock />
      <ExampleBlock />
      <ExampleBlock />
    </>
  ),
}
