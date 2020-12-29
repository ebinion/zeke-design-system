import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledRow = styled.div`
  > * {
    ${props => {
      switch (props.spacing) {
        case 'xl':
          return css`
            margin: var(--component-padding-xl) 0;
          `
        case 'l':
          return css`
            margin: var(--component-padding-l) 0;
          `
        default:
          return css`
            margin: var(--component-padding) 0;
          `
      }
    }}

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
  <StyledRow forceDisplay={props.forceDisplay} spacing={props.spacing}>
    {props.children}
  </StyledRow>
)

Rows.propTypes = {
  children: PropTypes.node,
  /**
   * Set to `true` to force `display: block` on children
   */
  forceDisplay: PropTypes.bool,
  spacing: PropTypes.oneOf(['m', 'l', 'xl']),
}

Rows.defaultProps = {
  spacing: 'l',
}

export default Rows
