import React from 'react'

import Icon from './Icon'

const IconDribbble = props => {
  return (
    <Icon {...props} viewbox="0 0 32 32">
      <path
        d="M29.438.375l-1.031 1.094-17.438 18.375-7.406-7.406-1.063-1.063-2.125 2.125 1.063 1.063 8.5 8.5 1.094 1.094 1.063-1.125 18.5-19.5 1.031-1.094-2.188-2.063z"
        transform="translate(0 2)"
      />
    </Icon>
  )
}

IconDribbble.propTypes = { ...Icon.propTypes }

IconDribbble.defaultProps = {
  title: 'Checkmark',
}

export default IconDribbble
