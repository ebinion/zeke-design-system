import React from 'react'
import { boolean } from '@storybook/addon-knobs'

import Button from './Button'

export default {
  title: 'Components|Atoms/Button',
  component: Button,
}

const fullWidthKnob = () => boolean('Full Width', false)

export const componentPlayground = () => (
  <Button fullWidth={fullWidthKnob()}>Button example</Button>
)
