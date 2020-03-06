import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'

const H2 = props => <Text {...props} kind="heading" />

H2.propTypes = {
  bold: PropTypes.bool,
  size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
  as: PropTypes.string,
}

H2.defaultProps = {
  bold: true,
  size: 'xl',
  as: 'h2',
}

export default H2
