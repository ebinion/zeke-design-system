import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import textTokens from '../design-system-tokens/text'
import colorTokens from '../design-system-tokens/colors'


const StyledComponent = styled.strong`
  color: ${props => props.color};
  font-family: ${textTokens.normal.fontFamily};
  font-size: inherit;
  font-weight: ${textTokens.normal.weightBold};
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};

  h1 &, .h1 &, 
  h2 &, .h2 &, 
  h3 &, .h3 &, 
  h4 &, .h4 &, 
  h5 &, .h5 &, 
  h6 &, .h6 & {
    font-family: ${textTokens.heading.fontFamily};
    font-weight: ${textTokens.heading.weightBold};
  }
`

export default class Strong extends React.PureComponent {
  static propTypes = {
    uppercase: PropTypes.bool,
    color: PropTypes.oneOf(['knockout', 'bold'])
  }

  getColor() {
    switch (this.props.color) {
      case 'knockout':
        return colorTokens.text.knockout
      default:
        return colorTokens.text.bold
    }
  }

  render() {
    return <StyledComponent {...this.props} color={this.getColor()} />
  }
}
