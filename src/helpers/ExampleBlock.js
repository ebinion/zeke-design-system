import React from 'react' // eslint-disable-line no-unused-vars
import styled, { css } from 'styled-components'

export default styled.div`
  background: #ddd;
  min-height: 25vh;
  padding: 10px;

  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth};
      margin-left: auto;
      margin-right: auto;
    `}
`
