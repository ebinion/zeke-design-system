import React from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'
import { colorTokens, measurementTokens } from '../'

const IconMenu = props => {
  return (
    <Icon {...props} title="Menu" viewbox="0 0 32 32">
      <path
        d="M0,7 L0,9.34782609 L25.6,9.34782609 L25.6,7 L0,7 Z M6.4,14.826087 L6.4,17.173913 L32,17.173913 L32,14.826087 L6.4,14.826087 Z M0,22.6521739 L0,25 L25.6,25 L25.6,22.6521739 L0,22.6521739 Z"
        fillRule="nonzero"
      />
    </Icon>
  )
}

IconMenu.propTypes = {
  color: PropTypes.oneOf(Object.keys(colorTokens.icons)),
  size: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
}

export default IconMenu
