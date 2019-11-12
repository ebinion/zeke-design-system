import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colorTokens from '../design-system-tokens/colors'
import textTokens from '../design-system-tokens/text'

const StyledP = styled.p`
  color: ${props => props.color};
  font-weight: ${props => props.weight};
  font-family: ${textTokens.normal.fontFamily};
  font-size: ${props => props.size};
  line-height: ${props => props.lineHeight};
  text-align: ${props => props.align};
  margin: ${props => props.spacing} 0;

  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    margin-top: 0;
  }
`

export default class Text extends React.PureComponent {
  static propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right']),
    bold: PropTypes.bool,
    color: PropTypes.oneOf([
      'normal',
      'light',
      'bold',
      'knockout',
      'success',
      'error',
      'warning',
    ]),
    element: PropTypes.oneOf(['p', 'div']),
    lineHeight: PropTypes.oneOf(['normal', 'tight']),
    noMargin: PropTypes.bool,
    size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
  }

  static defaultProps = {
    align: 'left',
    bold: false,
    color: 'normal',
    element: 'p',
    lineHeight: 'normal',
    size: 'm',
  }

  getColor() {
    return this.props.bold && this.props.color === 'normal'
      ? colorTokens.text.bold
      : colorTokens.text[this.props.color]
  }

  getLineHeight() {
    return this.props.lineHeight === 'normal'
      ? textTokens.sizes[this.props.size].lineHeightNormal
      : textTokens.sizes[this.props.size].lineHeightTight
  }

  render() {
    const { bold, element, children, noMargin, size } = this.props

    return (
      <StyledP
        {...this.props}
        as={element}
        color={this.getColor()}
        lineHeight={this.getLineHeight()}
        size={textTokens.sizes[size].size}
        spacing={noMargin ? 0 : textTokens.sizes[size].spacing}
        weight={
          bold ? textTokens.normal.weightBold : textTokens.normal.weightNormal
        }
      >
        {children}
      </StyledP>
    )
  }
}
