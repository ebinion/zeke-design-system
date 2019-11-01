import React from 'react'
import { select } from '@storybook/addon-knobs'

import { Text } from './Text'

const alignKnobs = () => select('Align', ['left', 'center', 'right'])
const colorKnobs = () =>
  select('Color', ['bold', 'normal', 'light', 'knockout', 'success', 'warning', 'error'])
const elementKnobs = () => select('Element', ['p', 'div'])
const sizeKnobs = () => select('Size', ['xxl', 'xl', 'l', 'm', 's', 'xs'])
const lineHeightKnobs = () => select('Line Height', ['normal', 'tight'])

export default {
  title: 'Components|Atoms/Text',
  component: Text
}

export const text = () => (
  <Text
    align={alignKnobs()}
    color={colorKnobs()}
    element={elementKnobs()}
    lineHeight={lineHeightKnobs()}
    size={sizeKnobs()}>
    Fugiat do magna non exercitation in veniam do et tempor in excepteur. Adipisicing fugiat esse
    fugiat consequat ipsum incididunt esse id adipisicing nostrud mollit ad laborum irure. Veniam ea
    amet adipisicing deserunt duis mollit.
  </Text>
)

export const p = () => (
  <Text align={alignKnobs()} color={colorKnobs()} lineHeight={lineHeightKnobs()} size={sizeKnobs()}>
    Fugiat do magna non exercitation in veniam do et tempor in excepteur. Adipisicing fugiat esse
    fugiat consequat ipsum incididunt esse id adipisicing nostrud mollit ad laborum irure. Veniam ea
    amet adipisicing deserunt duis mollit.
  </Text>
)
