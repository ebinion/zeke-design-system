import React from 'react'
import { select } from '@storybook/addon-knobs'

import Heading from "./Heading"

const hLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

export default {
  component: Heading,
  title: 'Heading',
}

export const Component = () => (
  <Heading element={select("Element", hLevels, "h1")} appearance={select("Appearance", [...hLevels, false], false)}>Some text</Heading>
)
