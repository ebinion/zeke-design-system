import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'

import { Section } from '../'
import lorem from '../helpers/lorem'

export default {
  title: 'Organisms|Section',
  component: Section,
}

const superTitleKnob = () => text('Super Title', lorem.generateWords(3))
const titleKnob = () => text('Title', lorem.generateWords(10))
const leadKnob = () => text('Lead', lorem.generateSentences(2))
const isDarkKnob = () => boolean('Is dark?', false)

export const ComponentPlayground = () => {
  return (
    <Section
      superTitle={superTitleKnob()}
      title={titleKnob()}
      lead={leadKnob()}
      isDark={isDarkKnob()}
    >
      Section Content
    </Section>
  )
}
