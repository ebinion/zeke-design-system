import React from 'react'
import PropTypes from 'prop-types'

import Text from './Text'

const H1 = props => (
  <Text {...props} element="p">
    {props.children}
  </Text>
)

H1.propTypes = {
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
}

export default H1
