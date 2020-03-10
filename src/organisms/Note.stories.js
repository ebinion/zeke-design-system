import React from 'react'

import lorem from '../helpers/lorem'
import { Img, Note, Time } from '../'

export default {
  title: 'Organisms|Note',
  component: Note,
}

export const ComponentPlayground = () => (
  <Note
    superTitle={<Time date={new Date()} />}
    title={lorem.generateWords(10)}
    summary={lorem.generateWords(90)}
  />
)

export const withImage = () => (
  <Note
    superTitle={<Time date={new Date()} />}
    title={lorem.generateWords(10)}
    summary={lorem.generateWords(90)}
    image={<Img src="https://via.placeholder.com/1200x700" />}
  />
)
