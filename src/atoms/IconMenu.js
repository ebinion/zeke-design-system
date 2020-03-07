import React from 'react'

import Icon from './Icon'

const IconMenu = props => {
  return (
    <Icon {...props} title="Menu" viewbox="0 0 32 32">
      <path
        d="M0 0v3h32v-3h-32zm0 10v3h32v-3h-32zm0 10v3h32v-3h-32z"
        transform="translate(0 4)"
      />
    </Icon>
  )
}

export default IconMenu
