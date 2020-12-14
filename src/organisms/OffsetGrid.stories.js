import React from 'react'

import { OffsetGrid, Text } from '..'
import lorem from '../helpers/lorem'

const story = {
  title: 'Organisms/Layout/OffsetGrid',
  component: OffsetGrid,
}

export const offsetGrid = () => {
  return (
    <OffsetGrid>
      <Text>{lorem.generateSentences(6)}</Text>
      <Text>{lorem.generateSentences(6)}</Text>
      <Text>{lorem.generateSentences(6)}</Text>
      <Text>{lorem.generateSentences(6)}</Text>
    </OffsetGrid>
  )
}

export default story
