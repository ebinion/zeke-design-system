import React from 'react'
import { text } from '@storybook/addon-knobs'

import { Teaser, Img } from '../'
import lorem from '../helpers/lorem'

export default {
  title: 'Organisms|Teaser',
  component: Teaser,
}

const titleKnob = () => text('Title', lorem.generateWords(10))
const summaryKnob = () => text('Summary', lorem.generateSentences(2))

export const componentPlayground = () => {
  return (
    <Teaser
      summary={summaryKnob()}
      title={titleKnob()}
      date={new Date()}
      image={<Img src="https://via.placeholder.com/1200x700" />}
    />
  )
}

export const withoutImage = () => {
  return (
    <Teaser
      summary={summaryKnob()}
      title={titleKnob()}
      date={new Date()}
      to="#"
    />
  )
}
