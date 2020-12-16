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
  margin: 0;
  padding: 0;
  ${props =>
    props.gutter === 'm' &&
    css`
      grid-gap: var(--component-padding);
    `}
  ${props =>
    props.gutter === 'l' &&
    css`
      grid-gap: var(--component-padding-l);
    `}
  ${props =>
    props.gutter === 'xl' &&
    css`
      grid-gap: var(--component-padding-xl);
    `}

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.s}) {
    ${props =>
      props.maxColumns >= 2 &&
      css`
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
  return <StyledComponent {...props}>{props.children}</StyledComponent>
}

Matrix.propTypes = {
  as: PropTypes.string,
  gutter: PropTypes.oneOf(['m', 'l', 'xl']),
  maxColumns: PropTypes.number,
}

Matrix.defaultProps = {
  as: 'div',
  gutter: 'm',
  maxColumns: 4,
}

export default Matrix
