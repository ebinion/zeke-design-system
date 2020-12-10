import React from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'
import { colorTokens, measurementTokens } from '../'

const IconEllipsis = props => {
  return (
    <Icon {...props} title="Ellipsis" viewbox="0 0 47 10">
      <g fillRule="evenodd">
        <rect
          transform="translate(5.000000, 5.000000) rotate(45.000000) translate(-5.000000, -5.000000) "
          x="2"
          y="2"
          width="6"
          height="6"
        ></rect>
        <rect
          transform="translate(23.485281, 5.000000) rotate(45.000000) translate(-23.485281, -5.000000) "
          x="20.4852814"
          y="2"
          width="6"
          height="6"
        ></rect>
        <rect
          transform="translate(41.970563, 5.000000) rotate(45.000000) translate(-41.970563, -5.000000) "
          x="38.9705627"
          y="2"
          width="6"
          height="6"
        ></rect>
      </g>
    </Icon>
  )
}

IconEllipsis.propTypes = {
  color: PropTypes.oneOf(Object.keys(colorTokens.icons)),
  isLink: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
  sizeSmallAndAbove: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
  sizeMediumAndAbove: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
  sizeLargeAndAbove: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
}

export default IconEllipsis
