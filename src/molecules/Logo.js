import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { IconLogo, Text, measurementTokens } from '../'

const StyledComponent = styled.div`
  display: inline-flex;
  align-items: center;
`

const StyledLogo = styled.div`
  line-height: 0;
`

const StyledText = styled.div`
  margin-left: ${measurementTokens.componentMargin.s};
`

const Logo = props => {
  const renderText = () => (
    <StyledText>
      <Text as="b" size="xl" color={props.color}>
        {props.children}
      </Text>
    </StyledText>
  )

  return (
    <StyledComponent>
      <StyledLogo>
        <IconLogo color={props.color} />
      </StyledLogo>
      {props.children && renderText()}
    </StyledComponent>
  )
}

Logo.propTypes = {
  children: PropTypes.element,
  color: PropTypes.oneOf(['black', 'knockout']),
}

Logo.defaultProps = {
  color: 'black',
}

export default Logo
