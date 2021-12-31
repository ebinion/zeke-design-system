import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'

const H2 = props => <Text {...props} />

H2.propTypes = {
  as: PropTypes.string,
  bold: PropTypes.bool,
  kind: PropTypes.oneOf(['normal', 'heading', 'decorative', 'code']),
  lineHeight: PropTypes.oneOf(['normal', 'tight']),
  size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
}

H2.defaultProps = {
  as: 'h2',
  bold: true,
  kind: 'heading',
  lineHeight: 'tight',
  size: 'xl',
}

export default H2
