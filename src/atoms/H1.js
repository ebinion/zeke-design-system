import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'

const H1 = props => <Text kind={props.kind} {...props} />

H1.propTypes = {
  as: PropTypes.string,
  bold: PropTypes.bool,
  kind: PropTypes.oneOf(['normal', 'heading', 'decorative', 'code']),
  lineHeight: PropTypes.oneOf(['normal', 'tight']),
  size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
}

H1.defaultProps = {
  as: 'h1',
  bold: true,
  kind: 'heading',
  lineHeight: 'tight',
  size: 'xxl',
}

export default H1
