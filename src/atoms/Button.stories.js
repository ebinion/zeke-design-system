import React from 'react'

import Button from './Button'

const story = {
  title: 'Atoms/Links & Buttons/Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const button = Template.bind({})
button.args = {
  children: 'Default button',
}

export const primaryButton = Template.bind({})
primaryButton.args = {
  children: 'Primary button',
  kind: 'primary',
}

export const secondaryButton = Template.bind({})
secondaryButton.args = {
  children: 'Secondary button',
  kind: 'secondary',
}

export const tertiaryButton = Template.bind({})
tertiaryButton.args = {
  children: 'Tertiary button',
  kind: 'tertiary',
}

export const fullWidth = Template.bind({})
fullWidth.args = {
  children: 'Full width button',
  fullWidth: true,
}

export default story
