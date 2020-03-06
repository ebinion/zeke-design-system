import React from 'react'
import { boolean } from '@storybook/addon-knobs'

import { SectionHeading } from '../'

export default {
  title: 'Atoms|Text/Section Heading',
  component: SectionHeading,
}

const isKnockedoutKnob = () => boolean('Is knocked out?', false)

export const component = () => (
  <SectionHeading isKnockedOut={isKnockedoutKnob()}>
    Example Content
  </SectionHeading>
)
