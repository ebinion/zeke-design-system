import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'

const H6 = props => <Text kind={props.kind} {...props} />

H6.propTypes = {
  as: PropTypes.string,
  bold: PropTypes.bool,
  kind: PropTypes.oneOf(['normal', 'heading', 'decorative', 'code']),
  lineHeight: PropTypes.oneOf(['normal', 'tight']),
  size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
}

H6.defaultProps = {
  as: 'h6',
  bold: true,
  lineHeight: 'tight',
  size: 'xs',
}

export default H6
