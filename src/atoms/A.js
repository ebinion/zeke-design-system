import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorTokens, textTokens } from '../'

const StyledA = styled.a`
  font-family: ${textTokens.normal.fontFamily};
  font-weight: ${textTokens.normal.weightNormal};
  color: ${props => props.static.color};
  cursor: pointer;
  text-decoration: ${props => props.static.textDecoration};

  &:hover {
    color: ${props => props.hover.color};
    text-decoration: ${props => props.hover.textDecoration};
  }
`

export default class A extends React.PureComponent {
  static propTypes = {
    kind: PropTypes.oneOf(['normal', 'incognito']),
  }

  static defaultProps = {
    kind: 'normal',
  }

  getStyles() {
    const styles = {
      static: {
        color: colorTokens.text.link,
        textDecoration: 'none',
      },
      hover: {
        color: colorTokens.text['link-highlight'],
        textDecoration: 'underline',
      },
    }

    const stylesIncognito = {
      static: {
        color: 'inherit',
        textDecoration: 'underline',
      },
      hover: {
        color: 'inherit',
        textDecoration: 'none',
      },
    }

    switch (this.props.kind) {
      case 'incognito':
        return stylesIncognito
      default:
        return styles
    }
  }

  render() {
    return (
      <StyledA {...this.props} {...this.getStyles()}>
        {this.props.children}
      </StyledA>
    )
  }
}
