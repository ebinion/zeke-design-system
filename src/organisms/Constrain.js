import React from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'

import { measurementTokens } from '../'

const StyledContrain = styled.div`
  max-width: ${props => props.maxWidth || '100%'};
`

const getMaxWidth = constrain => {
  switch (constrain) {
    case 'text':
      return measurementTokens.maxTextWidth
    case 'site':
      return measurementTokens.maxSiteWidth
    default:
      return '100%'
  }
}

const Constrain = props => (
  <StyledContrain maxWidth={getMaxWidth(props.limit)}>
    {props.children}
  </StyledContrain>
)

Constrain.propTypes = {
  limit: PropType.oneOf(['none', 'text', 'site']),
}

Constrain.defaultProps = {
  limit: 'site',
}

export default Constrain
