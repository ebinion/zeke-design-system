import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorTokens, measurementTokens, Text } from '../'

const StyledBadge = styled.span`
  background: ${colorTokens.backgrounds.badge.white};
  border-radius: 100vh;
  display: inline-block;
  padding: 0 ${measurementTokens.componentPadding.s};
`

const Badge = props => {
  return (
    <StyledBadge>
      <Text as="span" bold size={props.size}>
        {props.children}
      </Text>
    </StyledBadge>
  )
}

Badge.propTypes = {
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
}

Badge.defaultProps = {
  size: 's',
}

export default Badge
