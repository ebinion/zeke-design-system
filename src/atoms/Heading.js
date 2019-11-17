import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorTokens, textTokens } from '../'

const StyledHeading = styled.h1`
  color: ${props => props.color};
  font-weight: ${props => props.weight};
  font-family: ${textTokens.heading.fontFamily};
  font-size: ${props => props.size};
  line-height: ${props => props.lineHeight};
  margin-bottom: ${props => props.spacing};
  margin-top: ${props => props.spacing};
  text-align: ${props => props.align};

  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    margin-top: 0;
  }
`

export default class Heading extends React.PureComponent {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right']),
    bold: PropTypes.bool,
    color: PropTypes.oneOf(['dark', 'light', 'knockout']),
    element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    noMargin: PropTypes.bool,
    size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', false]),
  }

  static defaultProps = {
    align: 'left',
    bold: true,
    color: 'dark',
    element: 'h1',
  }

  getColor() {
    const colorMap = {
      dark: colorTokens.text.heading,
      light: colorTokens.text['heading-light'],
      knockout: colorTokens.text.knockout,
    }
    return colorMap[this.props.color]
  }

  getFontSizing() {
    const elementSizeMap = {
      h1: 'xxl',
      h2: 'xl',
      h3: 'l',
      h4: 'm',
      h5: 's',
      h6: 'xs',
    }

    const dimensions =
      textTokens.sizes[elementSizeMap[this.props.size ? this.props.size : this.props.element]]

    return Object.assign(dimensions, {
      spacing: this.props.noMargin ? 0 : dimensions.spacing,
    })
  }

  render() {
    const { align, bold, children, element } = this.props

    const fontWeight = bold ? textTokens.heading.weightBold : textTokens.heading.weightNormal

    return (
      <StyledHeading
        align={align}
        as={element}
        weight={fontWeight}
        color={this.getColor()}
        {...this.getFontSizing()}
      >
        {children}
      </StyledHeading>
    )
  }
}
