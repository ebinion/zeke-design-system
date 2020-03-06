import React from 'react'

import lorem from '../helpers/lorem'
import { Teaser } from '..'

export default {
  title: 'Organisms|Teaser',
  component: Teaser,
}

export const ComponentPlayground = () => (
  <Teaser
    date={new Date()}
    title={lorem.generateWords(10)}
    summary={lorem.generateWords(90)}
  />
)
