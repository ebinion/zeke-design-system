import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { times } from 'underscore'

import { measurementTokens } from '../'

const repeatString = (count, text = '1fr') => {
  let newtextArray = []

  times(count, () => {
    newtextArray.push(text)
  })

  return newtextArray.join(' ')
}

const StyledComponent = styled.div`
  display: grid;
  list-style: none;
  grid-gap: ${measurementTokens.componentMargin.xl};
  margin: 0;
  padding: 0;

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.s}) {
    ${props =>
      props.maxColumns >= 2 &&
      css`
        grid-gap: ${measurementTokens.componentMargin.l};
        grid-template-columns: ${repeatString(2)};
      `}
  }

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    ${props =>
      props.maxColumns >= 3 &&
      css`
        grid-template-columns: ${repeatString(3)};
      `}
  }

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.l}) {
    grid-gap: ${measurementTokens.componentMargin.xl};
    ${props =>
      props.maxColumns >= 4 &&
      css`
        grid-template-columns: ${repeatString(props.maxColumns)};
      `}
  }
`

const Matrix = props => {
  return (
    <StyledComponent maxColumns={props.maxColumns} as={props.as}>
      {props.children}
    </StyledComponent>
  )
}

Matrix.propTypes = {
  maxColumns: PropTypes.number.isRequired,
  as: PropTypes.string,
}

Matrix.defaultProps = {
  maxColumns: 4,
  as: 'div',
}

export default Matrix
