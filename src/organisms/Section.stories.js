import React from 'react'

import { Section } from '../'
import lorem from '../helpers/lorem'

const story = {
  title: 'Organisms/Section',
  component: Section,
}

const sentences = lorem.generateSentences(2)

const Template = args => <Section {...args} />

export const section = Template.bind({})
section.args = {
  superTitle: 'Super Title',
  title: 'Title',
  lead: sentences,
  children: 'Body of section appears here',
}

export default story
