import React from 'react'

import { IconGroup, IconDribbble } from '..'

const config = {
  title: 'Molecules/Icon Group',
  component: IconGroup,
}
export default config

export const iconGroup = () => {
  return (
    <IconGroup>
      <IconDribbble />
      <IconDribbble />
      <IconDribbble />
    </IconGroup>
  )
}
