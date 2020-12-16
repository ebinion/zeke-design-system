import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledRow = styled.div`
  margin: var(--component-margin) 0;

  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    margin-top: 0;
  }
`

const Rows = props => {
  const renderChildren = () => {
    if (props.children && props.children.length > 0) {
      return props.children.map((child, iteration) => (
        <StyledRow key={`row-${iteration}`}>{child}</StyledRow>
      ))
    }
  }

  return <div>{renderChildren()}</div>
}

export default Rows
