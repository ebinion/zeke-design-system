import React from 'react'

import { ClippedImage, Img } from '..'

const config = {
  title: 'Molecules/Clipped Image',
  component: ClippedImage,
}
export default config

export const clippedImage = () => {
  return (
    <ClippedImage
      path={
        <polygon points="195.10348 9.95901593 205 142.486898 205 250.716143 181.329219 300 90.6941641 286.03489 25.6123568 290.207618 -3.69482223e-13 245.098269 18.4186565 162.651028 -3.69482223e-13 87.869648 18.4186565 36.9080088 46.9644222 -2.84217094e-14 124 19.6581972" />
      }
      viewBox="0 0 205 300"
      width="300px"
      height="300px"
    >
      <Img
        src="/example-img.jpg"
        objectFit="cover"
        width="100%"
        height="100%"
      />
    </ClippedImage>
  )
}
