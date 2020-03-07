import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'

const H3 = props => <Text {...props} kind="heading" />

H3.propTypes = {
  bold: PropTypes.bool,
  size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
  as: PropTypes.string,
}

H3.defaultProps = {
  bold: true,
  size: 'l',
  as: 'h3',
}

export default H3
