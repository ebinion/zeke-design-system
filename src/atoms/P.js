import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'

const P = props => <Text {...props}>{props.children}</Text>

P.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  bold: PropTypes.bool,
  color: PropTypes.oneOf([
    'normal',
    'light',
    'bold',
    'knockout',
    'success',
    'error',
    'warning',
  ]),
  lineHeight: PropTypes.oneOf(['normal', 'tight']),
  size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
  as: PropTypes.string,
}

P.defaultProps = {
  as: 'p',
}

export default P
