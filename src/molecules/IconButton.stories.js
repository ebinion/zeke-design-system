import React from 'react'

import lorem from '../helpers/lorem'
import { IconButton, IconX } from '../'

const story = {
  title: 'Molecules/IconButton',
  component: IconButton,
}

export const ComponentPlayground = () => (
  <IconButton
    icon={IconX}
    title={lorem.generateWords(1)}
    clickHandler={() => {
      window.alert('Button clicked')
    }}
  />
)

export default story