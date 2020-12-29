import React from 'react' // eslint-disable-line no-unused-vars
import styled from 'styled-components'

import { measurementTokens } from '..'

const StyledOffsetGrid = styled.div`
  display: grid;
  grid-gap: var(--component-padding-xl);

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.s}) {
    --offset: 200px;
    grid-template-columns: 1fr 1fr;
    padding-bottom: var(--offset);

    > *:nth-child(2n) {
      transform: translateY(var(--offset));
    }
  }
`

const OffsetGrid = props => {
  return <StyledOffsetGrid>{props.children}</StyledOffsetGrid>
}

export default OffsetGrid
