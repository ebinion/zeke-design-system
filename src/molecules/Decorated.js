import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { measurementTokens } from '..'

const StyledWrapper = styled.div`
  position: relative;
`

const StyledContent = styled.div`
  position: relative;
  z-index: 1;
`

const StyledDecoration = styled.div`
  display: block;
  background: #ecfcff;
  width: 75%;
  height: 50%;
  max-height: 66vh;
  position: absolute;
  top: ${props => props.top};
  ${props =>
    props.isOnRight &&
    css`
      right: 0;
    `}
  z-index: 0;

  @media (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    width: 66%;
  }
`

const Decorated = ({ children, isOnRight, top }) => (
  <StyledWrapper>
    <StyledContent>{children}</StyledContent>
    <StyledDecoration top={top} isOnRight={isOnRight} />
  </StyledWrapper>
)

Decorated.propTypes = {
  top: PropTypes.string,
  isOnRight: PropTypes.bool,
}

Decorated.defaultProps = {
  top: '10%',
}

export default Decorated
