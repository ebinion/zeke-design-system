import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { measurementTokens } from '..'

const StyledColumns = styled.div`
  display: grid;
  grid-gap: var(--component-margin);

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    grid-template-columns: repeat(${props => props.columnCount}, 1fr);
  }
`

const Columns = props => {
  return (
    <StyledColumns columnCount={props.base}>{props.children}</StyledColumns>
  )
}

Columns.propTypes = {
  /**
   * Sets the number of columns the grid system is based on
   */
  base: PropTypes.number.isRequired,
}

Columns.defaultProps = {}

export default Columns
