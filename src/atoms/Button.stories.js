import React from 'react'
import { select, boolean } from '@storybook/addon-knobs'

import Button from './Button'

const story = {
  title: 'Atoms/Links & Buttons/Button',
  component: Button,
}

const fullWidthKnob = () => boolean('Full Width', false)
const kindKnob = () => select('Kind', ['primary', 'secondary'], 'primary')

export const componentPlayground = () => (
  <Button fullWidth={fullWidthKnob()} kind={kindKnob()}>
    Button example
  </Button>
)

export const primaryButton = () => (
  <Button kind="primary">Primary button example</Button>
)
export const secondaryButton = () => (
  <Button kind="secondary">Secondary button example</Button>
)

export const fullWidth = () => <Button fullWidth>Full width button</Button>

export default story