import React from 'react'
import { select, boolean } from '@storybook/addon-knobs'

import lorem from '../helpers/lorem'
import { H1, H2, H3, H4, H5, H6, P, SubHeading, Text } from '../'

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

const config = {
  title: 'Atoms/Text/Text',
  component: Text,
}
export default config

export const text = () => (
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

export const kitchenSink = () => (
  <>
    <H1 margin="tight">{lorem.generateSentences(1)}</H1>
    <SubHeading>{lorem.generateSentences(1)}</SubHeading>
    <P>{lorem.generateParagraphs(1)}</P>
    <P>{lorem.generateParagraphs(1)}</P>
    <H2>{lorem.generateSentences(1)}</H2>
    <P>{lorem.generateParagraphs(1)}</P>
    <H3>{lorem.generateSentences(1)}</H3>
    <P>{lorem.generateParagraphs(1)}</P>
    <H4>{lorem.generateSentences(1)}</H4>
    <P>{lorem.generateParagraphs(1)}</P>
    <H5>{lorem.generateSentences(1)}</H5>
    <P>{lorem.generateParagraphs(1)}</P>
    <H6>{lorem.generateSentences(1)}</H6>
    <P>{lorem.generateParagraphs(1)}</P>
  </>
)
