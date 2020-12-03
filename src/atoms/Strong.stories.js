import React from 'react'
import { boolean } from '@storybook/addon-knobs'

import lorem from '../helpers/lorem'
import { Strong } from '../'

const story = {
  title: 'Atoms/Text/Strong',
  component: Strong,
}

const uppercaseKnob = () => boolean('Uppercase', false)

export const component = () => <Strong uppercase={uppercaseKnob()}>{lorem.generateWords(3)}</Strong>

export default story