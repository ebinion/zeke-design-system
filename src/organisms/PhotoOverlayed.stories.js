import React from 'react'

import { PhotoOverlayed, Img, Text } from '..'
import lorem from '../helpers/lorem'

export default {
  title: 'Organisms|PhotoOverlayed',
  component: PhotoOverlayed,
}

export const componentPlayground = () => {
  return (
    <PhotoOverlayed image={<Img src="https://via.placeholder.com/1200x700" />}>
      <Text>{lorem.generateSentences(5)}</Text>
    </PhotoOverlayed>
  )
}
