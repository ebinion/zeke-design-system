import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { measurementTokens } from '..'

const StyledColumn = styled.div`
  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    grid-row-start: 1;
    ${props =>
      props.alignSelf &&
      css`
        align-self: ${props.alignSelf};
      `}
    ${props => css`
      grid-column-end: span ${props.span};
      grid-column-start: ${props.start};
    `}
  }
`

const Column = props => {
  return (
    <StyledColumn
      start={props.start}
      span={props.span}
      alignSelf={props.alignSelf}
    >
      {props.children}
    </StyledColumn>
  )
}

Column.propTypes = {
  alignSelf: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
  /**
   * Sets how many columns in the grid system this component occupies
   */
  span: PropTypes.number.isRequired,
  /**
   * Sets the column in the grid system this component starts on
   */
  start: PropTypes.number.isRequired,
}

Column.defaultProps = {}

export default Column
