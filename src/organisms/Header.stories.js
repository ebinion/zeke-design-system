import React from 'react' // eslint-disable-line no-unused-vars
import { select, text } from '@storybook/addon-knobs'

import { Header, Text } from '../'

const story = {
  title: 'Organisms/Global/Header',
  component: Header,
}

export default story

const titleKnob = () => text('Site title', 'Studio')
const ctaHiddenBelowKnob = () =>
  select('CTA Hidden Below Breakpoint', ['medium', 'small', false], false)

export const header = () => {
  return (
    <Header
      menuClickHandler={() => window.alert('clicked menu')}
      siteTitle={titleKnob()}
      ctaHiddenBelow={ctaHiddenBelowKnob()}
      logoHref="https://zekebinion.io"
    >
      <Text>Header Content</Text>
    </Header>
  )
}
