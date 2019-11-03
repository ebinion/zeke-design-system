import React from 'react'
import { select } from '@storybook/addon-knobs'

import lorem from '../helpers/lorem'
import A from './A'

export default {
  title: 'Atoms|Links & Buttons/A',
  component: A,
  parameters: {
    componentSubtitle:
      'Anchor element to be used in conjuction with link wrappers. Try not to "href" directly from this component.',
  },
}

const kindKnob = () => select('Kind', ['normal', 'incognito'], 'normal')

export const componentPlayground = () => (
  <A kind={kindKnob()}>{lorem.generateWords(2)}</A>
)

export const asNormal = () => <A kind="normal">{lorem.generateWords(2)}</A>
export const asIncognito = () => (
  <A kind="incognito">{lorem.generateWords(2)}</A>
)
