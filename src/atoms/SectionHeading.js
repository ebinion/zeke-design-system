import React from 'react'
import PropTypes from 'prop-types'

import { Text } from '../'

const SectionHeading = ({ as, children, isKnockedOut, ...props }) => {
  return (
    <Text
      as={as}
      align={props.align}
      alignSmallUp={props.alignSmallUp}
      alignMediumUp={props.alignMediumUp}
      alignLargeUp={props.alignLargeUp}
      bold
      color={isKnockedOut ? 'knockout' : 'gold'}
      constrain={false}
      margin="none"
    >
      {children}
    </Text>
  )
}

SectionHeading.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  alignSmallUp: PropTypes.oneOf(['left', 'center', 'right']),
  alignMediumUp: PropTypes.oneOf(['left', 'center', 'right']),
  alignLargeUp: PropTypes.oneOf(['left', 'center', 'right']),
  as: PropTypes.string,
  isKnockedOut: PropTypes.bool,
}

SectionHeading.defaultProps = {
  as: 'h2',
}

export default SectionHeading
