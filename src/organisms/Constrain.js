import React from 'react'
import PropType from 'prop-types'
import styled, { css } from 'styled-components'

import { measurementTokens } from '../'

const StyledContrain = styled.div`
  ${props =>
    props.maxWidth &&
    css`
      width: 100%;
      max-width: ${props.maxWidth};
    `};
  ${props =>
    props.isCentered &&
    css`
      margin: 0 auto;
    `}
`

const getMaxWidth = constrain => {
  switch (constrain) {
    case 'text':
      return measurementTokens.maxTextWidth
    case 'site':
      return measurementTokens.maxSiteWidth
    default:
      return false
  }
}

const Constrain = props => (
  <StyledContrain
    maxWidth={getMaxWidth(props.limit)}
    isCentered={props.isCentered}
  >
    {props.children}
  </StyledContrain>
)

Constrain.propTypes = {
  isCentered: PropType.bool,
  limit: PropType.oneOf(['none', 'text', 'site']),
}

Constrain.defaultProps = {
  limit: 'site',
}

export default Constrain
