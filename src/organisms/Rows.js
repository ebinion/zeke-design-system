import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledRow = styled.div`
  > * {
    margin: var(--component-margin) 0;

    ${props =>
      props.forceDisplay &&
      css`
        display: block;
      `}
  }

  > *:last-child {
    margin-bottom: 0;
  }

  > *:first-child {
    margin-top: 0;
  }
`

const Rows = props => (
  <StyledRow forceDisplay={props.forceDisplay}>{props.children}</StyledRow>
)

Rows.propTypes = {
  children: PropTypes.node,
  /**
   * Set to `true` to force `display: block` on children
   */
  forceDisplay: PropTypes.bool,
}

export default Rows
