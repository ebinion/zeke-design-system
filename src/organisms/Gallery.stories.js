import React from 'react'

import { Img, Gallery, P } from '..'
import lorem from '../helpers/lorem'

export default {
  title: 'Organisms|Gallery',
  component: Gallery,
}

const items = [
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
  },
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
  },
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
  },
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
  },
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
  },
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
  },
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
  },
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
  },
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
  },
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
  },
  {
    image: <Img src="https://via.placeholder.com/1200x700" />,
    description: <P>{lorem.generateParagraphs(1)}</P>,
  },
]

export const componentPlayground = () => {
  return <Gallery items={items} />
}
