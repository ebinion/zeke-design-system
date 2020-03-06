import React from 'react' // eslint-disable-line no-unused-vars
import { text, select } from '@storybook/addon-knobs'

import { Badge } from '../'

const textKnob = () => text('Text', '99')
const sizeKnob = () => select('Size', ['xs', 's', 'm', 'l', 'xl'], 's')

export default {
  title: 'Molecules|Badge',
  component: Badge,
}

export const ComponentPlayground = () => (
  <Badge size={sizeKnob()}>{textKnob()}</Badge>
)
