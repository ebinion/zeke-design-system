import React from 'react' // eslint-disable-line no-unused-vars
import styled, { css } from 'styled-components'

export default styled.div`
  background: #ddd;
  min-height: 25vh;
  padding: 10px;

  ${props =>
    props.maxWidth &&
    css`
      box-sizing: border-box;
      max-width: ${props.maxWidth};
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    `}
`
