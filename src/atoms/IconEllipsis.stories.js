import React from 'react'

import { IconEllipsis } from '../'
import { colorKnobs, iconArgTypes, sizeKnobs } from '../helpers/iconHelpers'

const config = {
  title: 'Atoms/Icons/Ellipsis',
  component: IconEllipsis,
  argTypes: iconArgTypes,
}
export default config

export const ellipsis = () => {
  return <IconEllipsis size={sizeKnobs()} color={colorKnobs()} />
}
