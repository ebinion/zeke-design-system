import React from 'react'
import styled from 'styled-components'

import textTokens from '../tokens/textTokens'
import colorTokens from '../tokens/colorTokens'

const StyledComponent = styled.h3`
  color: ${colorTokens.text.heading};
  font-family: ${textTokens.heading.fontFamily};
  font-size: ${textTokens.sizes.s.size};
  font-weight: ${textTokens.heading.weightBold};
  line-height: ${textTokens.sizes.s.lineHeightTight};
  margin: 0;
  padding: 0;
  text-align: center;
  text-transform: uppercase;
  width: 100%;

  &::after {
    content: '';
    display: block;
    border-bottom: 5px solid currentColor;
    margin: 0.5em auto 20px;
    width: 100px;
  }
`

export default class SectionHeading extends React.Component {
  render() {
    return <StyledComponent>{this.props.children}</StyledComponent>
  }
}
