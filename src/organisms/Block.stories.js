import React from 'react'

import { Block, Text } from '../'

const story = {
  title: 'Organisms/Layout/Block',
  component: Block,
  parameters: {
    layout: 'fullscreen',
  },
}
export default story

const Template = args => <Block {...args} />

export const block = Template.bind({})
block.args = {
  children: (
    <>
      <Text>Testing</Text>
      <Text color="knockout">Testing</Text>
    </>
  ),
}
