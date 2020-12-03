import React from 'react'
import { boolean } from '@storybook/addon-knobs'

import { SectionHeader } from '../'
import lorem from '../helpers/lorem'

export default {
  title: 'Organisms/Section Header',
  component: SectionHeader,
}

const knockedOutKnob = () => boolean('Is Knocked Out?', false)

export const ComponentPlayground = () => {
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
