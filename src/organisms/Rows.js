import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;

  ${props => {
    switch (props.spacing) {
      case 'xl':
        return css`
          gap: var(--component-padding-xl);
        `
      case 'l':
        return css`
          gap: var(--component-padding-l);
        `
      default:
        return css`
          gap: var(--component-padding);
        `
    }
  }}

  ${props => {
    switch (props.align) {
      case 'center':
        return css`
          align-items: center;
        `
      case 'leading':
        return css`
          align-items: start;
        `
      case 'trailing':
        return css`
          align-items: end;
        `
      default:
        break
    }
  }}
`

const Rows = props => (
  <StyledRow
    align={props.align}
    forceDisplay={props.forceDisplay}
    spacing={props.spacing}
  >
    {props.children}
  </StyledRow>
)

Rows.propTypes = {
  align: PropTypes.oneOf(['leading', 'center', 'trailing']),
  children: PropTypes.node,
  spacing: PropTypes.oneOf(['m', 'l', 'xl']),
}

Rows.defaultProps = {
  spacing: 'l',
}

export default Rows
