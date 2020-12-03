import React from 'react' // eslint-disable-line no-unused-vars
import { text } from '@storybook/addon-knobs'

import { Notebook } from '../'
import lorem from '../helpers/lorem'

export default {
  title: 'Organisms/Notebook',
  component: Notebook,
}

const titleKnob = () => text('Title', lorem.generateWords(10))

export const ComponentPlayground = () => (
  <Notebook count={99} title={titleKnob()} to="#"></Notebook>
)
