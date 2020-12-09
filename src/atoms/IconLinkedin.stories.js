import React from 'react'

import { IconLinkedin } from '../'
import { colorKnobs, iconArgTypes, sizeKnobs } from '../helpers/iconHelpers'

const story = {
  title: 'Atoms/Icons/Linkedin',
  component: IconLinkedin,
  argTypes: iconArgTypes,
}
export default story

export const linkedin = () => (
  <IconLinkedin size={sizeKnobs()} color={colorKnobs()} />
)
