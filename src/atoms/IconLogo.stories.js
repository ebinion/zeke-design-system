import React from 'react'

import { IconLogo } from '../'
import { colorKnobs, iconArgTypes, sizeKnobs } from '../helpers/iconHelpers'

const config = {
  title: 'Atoms/Icons/Logo',
  component: IconLogo,
  argTypes: iconArgTypes,
}
export default config

export const logo = () => {
  return <IconLogo size={sizeKnobs('xl')} color={colorKnobs()} />
}
