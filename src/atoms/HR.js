import React from 'react' // eslint-disable-line no-unused-vars
import styled from 'styled-components'

import { IconEllipsis } from '../'

const StyledHr = styled.i`
  display: block;
  margin: var(--component-padding-l) 0;
`

const HR = () => {
  return (
    <StyledHr aria-hidden>
      <IconEllipsis size="xl" />
    </StyledHr>
  )
}

export default HR
