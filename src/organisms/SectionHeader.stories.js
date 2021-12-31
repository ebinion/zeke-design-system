import React from 'react'
import { boolean } from '@storybook/addon-knobs'

import { SectionHeader } from '../'
import lorem from '../helpers/lorem'

const story = {
  title: 'Organisms/Section Header',
  component: SectionHeader,
}
export default story

const Template = args => <SectionHeader {...args} />

export const sectionHeader = Template.bind({})
sectionHeader.args = {
  children: lorem.generateSentences(2),
  superTitle: lorem.generateWords(3),
  title: lorem.generateWords(10),
}
