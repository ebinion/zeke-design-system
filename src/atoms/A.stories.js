import React from 'react'
import { select, boolean } from '@storybook/addon-knobs'

import lorem from '../helpers/lorem'
import { A } from '../'

export default {
  title: 'Atoms|Links & Buttons/A',
  component: A,
  parameters: {
    componentSubtitle:
      'Anchor element to be used in conjuction with link wrappers. Try not to "href" directly from this component.',
  },
}

const kindKnob = () => select('Kind', ['normal', 'incognito', 'nav'], 'normal')
const keyboardOnlyKnob = () => boolean('Visible to keyboards only', false)

export const componentPlayground = () => (
  <A kind={kindKnob()} keyboardOnly={keyboardOnlyKnob()}>
    {lorem.generateWords(2)}
  </A>
)

export const asNormal = () => <A>{lorem.generateWords(2)}</A>
export const asNav = () => <A kind="nav">{lorem.generateWords(2)}</A>
export const asIncognito = () => (
  <A kind="incognito">{lorem.generateWords(2)}</A>
)
export const asKeyboardOnly = () => <A keyboardOnly>{lorem.generateWords(2)}</A>
