import React from 'react'

import lorem from '../helpers/lorem'
import { H1, H2, H3, H4, H5, H6, P, SubHeading, Text } from '../'

const config = {
  title: 'Atoms/Text/Text',
  component: Text,
}
export default config

const Template = args => <Text {...args} />

export const text = Template.bind({})
text.args = {
  children: lorem.generateParagraphs(1),
}

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
