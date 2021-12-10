import React from 'react' // eslint-disable-line no-unused-vars

import { Animate } from '..'

const story = {
  title: 'Molecules/Animate',
  component: Animate,
}
export default story

const Template = args => (
  <Animate {...args}>
    <div>Example Animation</div>
  </Animate>
)

export const animate = Template.bind({})
animate.args = {
  kind: 'fadeIn',
  isPlaying: false,
}
