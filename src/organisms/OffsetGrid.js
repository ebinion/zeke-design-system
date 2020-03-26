import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { measurementTokens } from '..'

const OffsetGrid = styled.div`
  display: grid;
  grid-gap: ${measurementTokens.componentMargin.xl};

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.s}) {
    --offset: 200px;
    grid-template-columns: 1fr 1fr;
    padding-bottom: var(--offset);

    > *:nth-child(2n) {
      transform: translateY(var(--offset));
    }
  }

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    grid-gap: 120px;
  }
`

export default OffsetGrid
