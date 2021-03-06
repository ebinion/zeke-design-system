import React from 'react'
import { select, boolean } from '@storybook/addon-knobs'

import lorem from '../helpers/lorem'
import { A } from '../'

const story = {
  title: 'Atoms/Links & Buttons/A',
  component: A,
  parameters: {
    componentSubtitle:
      'Anchor element that can be used with link helpers from frameworks or stand alone.',
  },
}

const kindKnob = () => select('Kind', ['normal', 'incognito', 'nav'], 'normal')
const keyboardOnlyKnob = () => boolean('Visible to keyboards only', false)
const inheritedFontKnob = () => boolean('Use inherited font?', false)

export const a = () => (
  <A
    kind={kindKnob()}
    keyboardOnly={keyboardOnlyKnob()}
    useInheritedFont={inheritedFontKnob()}
    href="http://example.com"
  >
    {lorem.generateWords(2)}
  </A>
)

export const asNormal = () => <A>{lorem.generateWords(2)}</A>
export const asNav = () => <A kind="nav">{lorem.generateWords(2)}</A>
export const asIncognito = () => (
  <A kind="incognito" href="#">
    {lorem.generateWords(2)}
  </A>
)
export const asKeyboardOnly = () => (
  <A href="#" keyboardOnly>
    {lorem.generateWords(2)}
  </A>
)

export default story
