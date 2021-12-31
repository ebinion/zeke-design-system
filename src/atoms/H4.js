import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'

const H4 = props => <Text {...props} />

H4.propTypes = {
  as: PropTypes.string,
  bold: PropTypes.bool,
  kind: PropTypes.oneOf(['normal', 'heading', 'decorative', 'code']),
  lineHeight: PropTypes.oneOf(['normal', 'tight']),
  size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
}

H4.defaultProps = {
  as: 'h4',
  bold: true,
  lineHeight: 'tight',
  size: 'l',
}

export default H4
