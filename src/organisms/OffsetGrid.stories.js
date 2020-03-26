import React from 'react'

import { OffsetGrid, Text } from '..'
import lorem from '../helpers/lorem'

export default {
  title: 'Organisms|Layout/OffsetGrid',
  component: OffsetGrid,
}

export const componentPlayground = () => {
  return (
    <OffsetGrid>
      <Text>{lorem.generateSentences(6)}</Text>
      <Text>{lorem.generateSentences(6)}</Text>
      <Text>{lorem.generateSentences(6)}</Text>
      <Text>{lorem.generateSentences(6)}</Text>
    </OffsetGrid>
  )
}
