import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'

const H5 = props => <Text {...props} kind="heading" />

H5.propTypes = {
  bold: PropTypes.bool,
  size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
  as: PropTypes.string,
}

H5.defaultProps = {
  bold: true,
  size: 's',
  as: 'h5',
}

export default H5
