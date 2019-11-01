import React from 'react'
import { select } from '@storybook/addon-knobs'

import { Heading, H1, H2, H3, H4, H5, H6 } from "."

const hLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
const elementKnob = () => select("Element", hLevels, "h1")
const appearanceKnob = () => select("Appearance", [...hLevels, false], false)
const alignKnob = () => select("Align", ["left", "center", "right", false], false)


export default {
  title: 'Components|Atoms/Headings',
  component: Heading
}

export const base = () => (
  <Heading element={elementKnob()} appearance={appearanceKnob()} align={alignKnob()}>This is the default heading component</Heading>
)

export const h1 = () => (
  <H1 appearance={appearanceKnob()} align={alignKnob()}>This is an h1</H1>
)

export const h2 = () => (
  <H2 appearance={appearanceKnob()} align={alignKnob()}>This is an h2</H2>
)

export const h3 = () => (
  <H3 appearance={appearanceKnob()} align={alignKnob()}>This is an h3</H3>
)

export const h4 = () => (
  <H4 appearance={appearanceKnob()} align={alignKnob()}>This is a h4</H4>
)

export const h5 = () => (
  <H5 appearance={appearanceKnob()} align={alignKnob()}>This is a h5</H5>
)

export const h6 = () => (
  <H6 appearance={appearanceKnob()} align={alignKnob()}>This is a h6</H6>
)
