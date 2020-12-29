import React from 'react'

import { IconMenu } from '../'
import { colorKnobs, iconArgTypes, sizeKnobs } from '../helpers/iconHelpers'

const story = {
  title: 'Atoms/Icons/Menu',
  component: IconMenu,
  argTypes: iconArgTypes,
}
export default story

export const menu = () => <IconMenu size={sizeKnobs()} color={colorKnobs()} />
