import React from 'react'

import lorem from '../helpers/lorem'
import { Img, Note } from '../'

export default {
  title: 'Organisms|Note',
  component: Note,
}

export const ComponentPlayground = () => (
  <Note
    date={new Date()}
    title={lorem.generateWords(10)}
    summary={lorem.generateWords(90)}
  />
)

export const withImage = () => (
  <Note
    date={new Date()}
    title={lorem.generateWords(10)}
    summary={lorem.generateWords(90)}
    image={<Img src="https://via.placeholder.com/1200x700" />}
  />
)