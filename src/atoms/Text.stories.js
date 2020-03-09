import React from 'react'
import { select, boolean } from '@storybook/addon-knobs'

import lorem from '../helpers/lorem'
import { Text } from '../'

const alignKnobs = () => select('Align', ['left', 'center', 'right'])
const boldKnobs = () => boolean('Bold', false)
const colorKnobs = () =>
  select(
    'Color',
    ['normal', 'light', 'knockout', 'success', 'warning', 'error'],
    'normal'
  )
const asKnobs = () =>
  select('As', ['p', 'div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
const kindKnobs = () =>
  select('Kind', ['normal', 'heading', 'decorative'], 'normal')
const isUppercasedKnob = () => boolean('Is uppercased?', false)
const sizeKnobs = () => select('Size', ['xxl', 'xl', 'l', 'm', 's', 'xs'], 'm')
const lineHeightKnobs = () => select('Line Height', ['normal', 'tight'])

export default {
  title: 'Atoms|Text/Text',
  component: Text,
}

export const componentPlayground = () => (
  <Text
    align={alignKnobs()}
    as={asKnobs()}
    bold={boldKnobs()}
    color={colorKnobs()}
    isUppercased={isUppercasedKnob()}
    kind={kindKnobs()}
    lineHeight={lineHeightKnobs()}
    size={sizeKnobs()}
  >
    {lorem.generateParagraphs(1)}
  </Text>
)

export const alignedLeft = () => (
  <Text align="left">{lorem.generateParagraphs(1)}</Text>
)
export const alignedCenter = () => (
  <Text align="center">{lorem.generateParagraphs(1)}</Text>
)
export const alignedRight = () => (
  <Text align="right">{lorem.generateParagraphs(1)}</Text>
)

export const sizedXXL = () => (
  <Text size="xxl">{lorem.generateParagraphs(1)}</Text>
)
export const sizedXL = () => (
  <Text size="xl">{lorem.generateParagraphs(1)}</Text>
)
export const sizedL = () => <Text size="l">{lorem.generateParagraphs(1)}</Text>
export const sizedM = () => <Text size="m">{lorem.generateParagraphs(1)}</Text>
export const sizedS = () => <Text size="s">{lorem.generateParagraphs(1)}</Text>
export const sizedXS = () => (
  <Text size="xs">{lorem.generateParagraphs(1)}</Text>
)

export const bolded = () => <Text bold>{lorem.generateParagraphs(1)}</Text>

export const coloredNormal = () => (
  <Text color="normal">{lorem.generateParagraphs(1)}</Text>
)
export const coloredLight = () => (
  <Text color="light">{lorem.generateParagraphs(1)}</Text>
)
export const coloredKnockout = () => (
  <Text color="knockout">{lorem.generateParagraphs(1)}</Text>
)
export const coloredSuccess = () => (
  <Text color="success">{lorem.generateParagraphs(1)}</Text>
)
export const coloredError = () => (
  <Text color="error">{lorem.generateParagraphs(1)}</Text>
)
export const coloredWarning = () => (
  <Text color="warning">{lorem.generateParagraphs(1)}</Text>
)

export const kindDecorative = () => (
  <Text kind="decorative">{lorem.generateParagraphs(1)}</Text>
)
export const kindHeading = () => (
  <Text kind="heading">{lorem.generateParagraphs(1)}</Text>
)
export const kindNormal = () => (
  <Text kind="normal">{lorem.generateParagraphs(1)}</Text>
)
