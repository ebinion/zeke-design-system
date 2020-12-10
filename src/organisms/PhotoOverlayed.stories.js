import React from 'react'

import { PhotoOverlayed, Img, Text } from '..'
import lorem from '../helpers/lorem'

const story = {
  title: 'Organisms/Photo Overlayed',
  component: PhotoOverlayed,
}
export default story

export const photoOverlayed = () => {
  return (
    <PhotoOverlayed image={<Img src="https://via.placeholder.com/1200x700" />}>
      <Text>{lorem.generateSentences(5)}</Text>
    </PhotoOverlayed>
  )
}
