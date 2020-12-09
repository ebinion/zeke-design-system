import React from 'react'

import { IconDribbble } from '../'
import { colorKnobs, iconArgTypes, sizeKnobs } from '../helpers/iconHelpers'

const story = {
  title: 'Atoms/Icons/Dribbble',
  component: IconDribbble,
  argTypes: iconArgTypes,
}
export default story

export const dribbble = () => (
  <IconDribbble size={sizeKnobs()} color={colorKnobs()} />
)
