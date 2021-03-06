import React from 'react'

import lorem from '../helpers/lorem'
import { Img, Note, Time } from '../'

const story = {
  title: 'Organisms/Note',
  component: Note,
}

export const note = () => (
  <Note
    superTitle={<Time date={new Date()} />}
    title={lorem.generateWords(10)}
    summary={lorem.generateWords(90)}
    to="#"
  />
)

export const withImage = () => (
  <Note
    superTitle={<Time date={new Date()} />}
    title={lorem.generateWords(10)}
    summary={lorem.generateWords(90)}
    image={<Img src="https://via.placeholder.com/1200x700" />}
    to="#"
  />
)

export default story
