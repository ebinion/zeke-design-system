import React from 'react'

import { A, IconDribbble } from '../'
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

export const withLink = () => (
  <A href="#" kind="incognito">
    <IconDribbble size="xl" color={colorKnobs()} respondToHover />
  </A>
)
