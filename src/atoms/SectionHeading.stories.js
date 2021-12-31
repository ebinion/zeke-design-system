import React from 'react'

import { SectionHeading } from '../'

const story = {
  title: 'Atoms/Text/Section Heading',
  component: SectionHeading,
}
export default story

const Template = args => <SectionHeading {...args} />

export const sectionHeading = Template.bind({})
sectionHeading.args = {
  children: 'Example Content',
}
