import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'

const H1 = props => <Text {...props} kind="heading" />

H1.propTypes = {
  bold: PropTypes.bool,
  size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
  as: PropTypes.string,
}

H1.defaultProps = {
  bold: true,
  size: 'xxl',
  as: 'h1',
}

export default H1
