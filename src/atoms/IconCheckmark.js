import React from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'

const IconCheckmark = props => {
  return (
    <Icon {...props} viewbox="0 0 32 32">
      <path
        d="M29.438.375l-1.031 1.094-17.438 18.375-7.406-7.406-1.063-1.063-2.125 2.125 1.063 1.063 8.5 8.5 1.094 1.094 1.063-1.125 18.5-19.5 1.031-1.094-2.188-2.063z"
        transform="translate(0 2)"
      />
    </Icon>
  )
}

/** Sizes are referenced from `measurementTokens.icons` */
const sizes = ['s', 'm', 'l', 'xl']

/** Colors are referenced from `colorTokens.icons` */
const colors = [
  'black',
  'blackHighlight',
  'gold',
  'goldHighlight',
  'inherit',
  'knockout',
]

IconCheckmark.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(colors).isRequired,
  respondToHover: PropTypes.bool,
  size: PropTypes.oneOf(sizes).isRequired,
  sizeSmallAndAbove: PropTypes.oneOf(sizes),
  sizeMediumAndAbove: PropTypes.oneOf(sizes),
  sizeLargeAndAbove: PropTypes.oneOf(sizes),
  title: PropTypes.string,
}

IconCheckmark.defaultProps = {
  title: 'Checkmark',
}

export default IconCheckmark
