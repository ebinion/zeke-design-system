import React from 'react'

import { IconGithub } from '../'
import { colorKnobs, iconArgTypes, sizeKnobs } from '../helpers/iconHelpers'

const story = {
  title: 'Atoms/Icons/Github',
  component: IconGithub,
  argTypes: iconArgTypes,
}
export default story

export const github = () => (
  <IconGithub size={sizeKnobs()} color={colorKnobs()} />
)
