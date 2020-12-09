import React from 'react'

import { IconTwitter } from '../'
import { colorKnobs, iconArgTypes, sizeKnobs } from '../helpers/iconHelpers'

const story = {
  title: 'Atoms/Icons/Twitter',
  component: IconTwitter,
  argTypes: iconArgTypes,
}
export default story

export const twitter = () => (
  <IconTwitter size={sizeKnobs()} color={colorKnobs()} />
)
