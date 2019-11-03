import React from 'react'
import { select, boolean } from '@storybook/addon-knobs'

import Heading from './Heading'

const hLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

const alignKnob = () => select('Align', ['left', 'center', 'right'], 'left')
const boldKnob = () => boolean('Bold', true)
const colorKnob = () => select('Color', ['dark', 'light', 'knockout'], 'dark')
const elementKnob = () => select('Element', hLevels, 'h1')
const sizeKnob = () => select('Size', [...hLevels, false], false)

export default {
  title: 'Components|Atoms/Heading',
  component: Heading,
  parameters: {
    componentSubtitle: 'This is a highly configurable base for all heading components.'
  }
}

export const component = () => (
  <Heading
    element={elementKnob()}
    size={sizeKnob()}
    align={alignKnob()}
    color={colorKnob()}
    bold={boldKnob()}>
    This is the default heading component
  </Heading>
)

export const asH1Element = () => <Heading element="h1">This is an h1</Heading>
export const asH2Element = () => <Heading element="h2">This is an h2</Heading>
export const asH3Element = () => <Heading element="h3">This is an h3</Heading>
export const asH4Element = () => <Heading element="h4">This is an h4</Heading>
export const asH5Element = () => <Heading element="h5">This is an h5</Heading>
export const asH6Element = () => <Heading element="h5">This is an h6</Heading>

export const asLightColor = () => <Heading color="light">This is a light colored heading</Heading>
export const asKnockoutColor = () => (
  <Heading color="knockout">This is a knocked out color heading</Heading>
)
