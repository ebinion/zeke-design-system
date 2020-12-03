import React from 'react'

import { BigTeaser, Img } from '..'
import { titleKnob, shortGraphKnob, imageSourceKnob } from '../helpers/knobs'

const story = {
  title: 'Organisms/Big Teaser',
  component: BigTeaser,
}

export const componentPlayground = () => {
  return (
    <BigTeaser
      summary={shortGraphKnob('Summary')}
      title={titleKnob()}
      superTitle="Super Title"
      image={<Img src={imageSourceKnob()} />}
      to="#"
    />
  )
}

export default story