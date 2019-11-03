import React from 'react'
import PropTypes from 'prop-types'

import Heading from './Heading'

const H6 = props => (
  <Heading {...props} element="h6">
    {props.children}
  </Heading>
)

H6.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  bold: PropTypes.bool,
  color: PropTypes.oneOf(['dark', 'light', 'knockout']),
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}

export default H6
