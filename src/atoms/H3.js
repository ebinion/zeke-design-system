import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'

const H3 = props => <Text {...props} />

H3.propTypes = {
  as: PropTypes.string,
  bold: PropTypes.bool,
  kind: PropTypes.oneOf(['normal', 'heading', 'decorative', 'code']),
  lineHeight: PropTypes.oneOf(['normal', 'tight']),
  size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
}

H3.defaultProps = {
  as: 'h3',
  bold: true,
  lineHeight: 'tight',
  size: 'l',
}

export default H3
