import React from 'react'

import { Img, Gallery, P } from '..'
import lorem from '../helpers/lorem'

const story = {
  title: 'Organisms/Gallery',
  component: Gallery,
}

const items = [
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
    title: lorem.generateWords(8),
  },
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
    title: lorem.generateWords(8),
  },
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
    title: lorem.generateWords(8),
  },
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
    title: lorem.generateWords(8),
  },
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
    title: lorem.generateWords(8),
  },
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
    title: lorem.generateWords(8),
  },
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
    title: lorem.generateWords(8),
  },
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
    title: lorem.generateWords(8),
  },
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
    title: lorem.generateWords(8),
  },
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
    title: lorem.generateWords(8),
  },
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
    title: lorem.generateWords(8),
  },
]

export const gallery = () => {
  return <Gallery items={items} />
}

export default story
