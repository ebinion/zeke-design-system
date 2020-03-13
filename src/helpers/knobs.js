import { text } from '@storybook/addon-knobs'

import lorem from './lorem'

export const titleKnob = (title = 'Title') =>
  text(title, lorem.generateWords(10))

export const shortGraphKnob = (title = 'Summary') =>
  text(title, lorem.generateSentences(2))

export const LongGraphKnob = (title = 'Content') =>
  text(title, lorem.generateSentences(5))

export const imageSourceKnob = (title = 'Image source') =>
  text(title, 'https://via.placeholder.com/1200x700')
