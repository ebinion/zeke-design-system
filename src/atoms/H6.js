import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'

const H6 = props => <Text {...props} kind="heading" />

H6.propTypes = {
  bold: PropTypes.bool,
  size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
  as: PropTypes.string,
}

H6.defaultProps = {
  bold: true,
  size: 'xs',
  as: 'h6',
}

export default H6
