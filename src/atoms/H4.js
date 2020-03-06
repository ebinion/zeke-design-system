import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'

const H4 = props => <Text {...props} kind="heading" />

H4.propTypes = {
  bold: PropTypes.bool,
  size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
  as: PropTypes.string,
}

H4.defaultProps = {
  bold: true,
  size: 'm',
  as: 'h4',
}

export default H4
