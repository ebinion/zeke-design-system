import React from 'react'
import { select, boolean } from '@storybook/addon-knobs'

import Button from './Button'

export default {
  title: 'Components|Atoms/Button',
  component: Button,
}

const fullWidthKnob = () => boolean('Full Width', false)
const kindKnob = () => select('Kind', ['primary', 'secondary'], 'primary')

export const componentPlayground = () => (
  <Button fullWidth={fullWidthKnob()} kind={kindKnob()}>
    Button example
  </Button>
)
