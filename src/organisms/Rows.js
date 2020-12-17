import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledRow = styled.div`
  > * {
    margin: var(--component-margin) 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  > *:first-child {
    margin-top: 0;
  }
`

const Rows = props => <StyledRow>{props.children}</StyledRow>

Rows.propTypes = {
  children: PropTypes.node,
}

export default Rows
