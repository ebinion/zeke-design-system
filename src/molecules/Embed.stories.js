import React from 'react'

import { Embed } from '../'

const story = {
  title: 'Molecules/Embed',
  component: Embed,
}

export const embed = () => {
  return (
    <Embed>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/iCvmsMzlF7o"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="Example video"
      ></iframe>
    </Embed>
  )
}

export default story
