import React from 'react'

import lorem from '../helpers/lorem'
import { Teaser } from '../'

export default {
  title: 'Molecules|Teaser',
  component: Teaser,
}

export const ComponentPlayground = () => (
  <Teaser
    category={lorem.generateWords(1)}
    date={new Date()}
    title={lorem.generateWords(10)}
  ></Teaser>
)
