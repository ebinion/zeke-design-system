import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'

const H2 = props => <Text kind={props.kind} {...props} />

H2.propTypes = {
  as: PropTypes.string,
  bold: PropTypes.bool,
  kind: PropTypes.oneOf(['normal', 'heading', 'decorative', 'code']),
  lineHeight: PropTypes.oneOf(['normal', 'tight']),
  margin: PropTypes.oneOf(['normal', 'tight', 'none']),
  size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
}

H2.defaultProps = {
  as: 'h2',
  kind: 'normal',
  lineHeight: 'tight',
  margin: 'tight',
  size: 'xl',
}

export default H2
