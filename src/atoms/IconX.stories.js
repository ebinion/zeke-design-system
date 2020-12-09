import React from 'react'

import { IconX } from '../'
import { colorKnobs, iconArgTypes, sizeKnobs } from '../helpers/iconHelpers'

const story = {
  title: 'Atoms/Icons/X',
  component: IconX,
  argTypes: iconArgTypes,
}
export default story

export const x = () => <IconX size={sizeKnobs()} color={colorKnobs()} />
