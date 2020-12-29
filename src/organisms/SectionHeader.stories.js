import React from 'react'
import { boolean } from '@storybook/addon-knobs'

import { SectionHeader } from '../'
import lorem from '../helpers/lorem'

const story = {
  title: 'Organisms/Section Header',
  component: SectionHeader,
}

const knockedOutKnob = () => boolean('Is Knocked Out?', false)

export const sectionHeader = () => {
  return (
    <SectionHeader
      title={lorem.generateWords(10)}
      superTitle={lorem.generateWords(3)}
      isKnockedout={knockedOutKnob()}
    >
      {lorem.generateSentences(2)}
    </SectionHeader>
  )
}

export default story
