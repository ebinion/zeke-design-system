import React from 'react'

import lorem from '../helpers/lorem'
import { IconButton, IconX } from '../'

const story = {
  title: 'Molecules/Icon Button',
  component: IconButton,
}
export default story

export const iconButton = () => (
  <IconButton
    icon={<IconX />}
    title={lorem.generateWords(1)}
    clickHandler={() => {
      window.alert('Button clicked')
    }}
  />
)
