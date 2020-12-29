import React from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'
import { colorTokens, measurementTokens } from '../'

const IconX = props => {
  return (
    <Icon {...props} title="X" viewbox="0 0 32 32">
      <path d="M2.5.375l-2.125 2.125 1.063 1.063 12.438 12.438-12.438 12.438-1.063 1.063 2.125 2.125 1.063-1.063 12.438-12.438 12.438 12.438 1.063 1.063 2.125-2.125-1.063-1.063-12.438-12.438 12.438-12.438 1.063-1.063-2.125-2.125-1.063 1.063-12.438 12.438-12.438-12.438-1.063-1.063z" />
    </Icon>
  )
}

IconX.propTypes = {
  color: PropTypes.oneOf(Object.keys(colorTokens.icons)),
  respondToHover: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
  sizeSmallAndAbove: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
  sizeMediumAndAbove: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
  sizeLargeAndAbove: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
}

export default IconX
