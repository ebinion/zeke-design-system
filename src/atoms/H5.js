import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'

const H5 = props => <Text kind={props.kind} {...props} />

H5.propTypes = {
  as: PropTypes.string,
  bold: PropTypes.bool,
  kind: PropTypes.oneOf(['normal', 'heading', 'decorative', 'code']),
  lineHeight: PropTypes.oneOf(['normal', 'tight']),
  size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
}

H5.defaultProps = {
  as: 'h5',
  bold: true,
  lineHeight: 'tight',
  size: 'm',
}

export default H5
