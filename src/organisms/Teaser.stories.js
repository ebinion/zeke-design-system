import React from 'react'
import { select, text } from '@storybook/addon-knobs'

import { Teaser, Img } from '../'
import lorem from '../helpers/lorem'

const story = {
  title: 'Organisms/Teaser',
  component: Teaser,
}

const colorKnob = () => select('Color', ['black', 'knockout'], 'black')
const titleKnob = () => text('Title', lorem.generateWords(10))
const summaryKnob = () => text('Summary', lorem.generateSentences(2))

export const teaser = () => {
  return (
    <Teaser
      color={colorKnob()}
      image={<Img src="https://via.placeholder.com/1200x700" />}
      summary={summaryKnob()}
      superTitle={lorem.generateWords(2)}
      title={titleKnob()}
    />
  )
}

export const withoutImage = () => {
  return (
    <Teaser
      color={colorKnob()}
      summary={summaryKnob()}
      superTitle={lorem.generateWords(2)}
      title={titleKnob()}
      to="#"
    />
  )
}

export default story
