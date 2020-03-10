import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorTokens, H4 } from '../'

const StyledComponent = styled.div`
  &::after {
    content: '';
    display: block;
    border-bottom: 5px solid
      ${props =>
        props.isKnockedOut
          ? colorTokens.text.knockout
          : colorTokens.text.heading};
    margin: 0.5em auto 20px;
    width: 100px;
  }
`

const SectionHeading = ({ as, children, isKnockedOut }) => {
  return (
    <StyledComponent isKnockedOut={isKnockedOut}>
      <H4
        as={as}
        align="center"
        color={isKnockedOut ? 'knockout' : 'normal'}
        isUppercased
      >
        {children}
      </H4>
    </StyledComponent>
  )
}

SectionHeading.defaultProps = {
  as: 'h2',
}

SectionHeading.propTypes = {
  isKnockedOut: PropTypes.bool,
  as: PropTypes.string,
}

export default SectionHeading
