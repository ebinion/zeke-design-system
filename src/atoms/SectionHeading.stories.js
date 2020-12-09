import React from 'react'
import { boolean, select } from '@storybook/addon-knobs'

import { SectionHeading } from '../'

const story = {
  title: 'Atoms/Text/Section Heading',
  component: SectionHeading,
}
export default story

const isKnockedoutKnob = () => boolean('Is knocked out?', false)
const alignKnob = () =>
  select('Align heading', ['left', 'center', 'right'], 'center')

export const sectionHeading = () => (
  <SectionHeading isKnockedOut={isKnockedoutKnob()} align={alignKnob()}>
    Example Content
  </SectionHeading>
)
