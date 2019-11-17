import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { animationTokens, colorTokens, textTokens, sizeTokens } from '../'

const StyledButton = styled.button`
  appearance: none;
  background-color: ${props => props.backgroundColor};
  border: ${props => props.borderSize} solid ${props => props.borderColor};
  box-sizing: border-box;
  color: ${props => props.color};
  cursor: pointer;
  display: inline-block;
  font-size: ${props => props.fontSize};
  min-height: ${props => props.height};
  padding: ${props =>
    `${props.paddingTop} ${props.paddingRight} ${props.paddingBottom} ${props.paddingLeft}`};
  transition-property: background-color, box-shadow, color;
  transition-duration: ${props => props.transitionDuration};
  transition-timing-function: ${props => props.easing};
  width: ${props => props.width};

  &:hover {
    background-color: ${props => props.hover.backgroundColor};
    border-color: ${props => props.hover.borderColor};
    color: ${props => props.hover.color};
  }
`

export default class Button extends React.Component {
  static propTypes = {
    kind: PropTypes.oneOf(['primary', 'secondary']),
    fullWidth: PropTypes.bool,
  }

  static defaultProps = {
    kind: 'primary',
    fullWidth: false,
  }

  getStyles() {
    const primaryStyles = {
      backgroundColor: colorTokens.backgrounds['button-primary'],
      borderSize: sizeTokens['button-border'],
      borderColor: colorTokens.borders['button-primary'],
      transitionDuration: animationTokens['transition-duration'],
      easing: animationTokens['transition-easing'],
      color: colorTokens.text['button-primary'],
      fontSize: textTokens.sizes.m.size,
      height: sizeTokens['touch-target'],
      paddingTop: sizeTokens['button-padding-top'],
      paddingRight: sizeTokens['button-padding-right'],
      paddingBottom: sizeTokens['button-padding-bottom'],
      paddingLeft: sizeTokens['button-padding-left'],
      hover: {
        color: colorTokens.text['button-primary-highlight'],
        backgroundColor: colorTokens.backgrounds['button-primary-highlight'],
        borderColor: colorTokens.borders['button-primary-highlight'],
      },
    }

    switch (this.props.kind) {
      case 'secondary':
        return Object.assign(primaryStyles, {
          color: colorTokens.text['button-secondary'],
          backgroundColor: colorTokens.backgrounds['button-secondary'],
          borderColor: colorTokens.borders['button-secondary'],
          hover: {
            color: colorTokens.text['button-secondary-highlight'],
            backgroundColor: colorTokens.backgrounds['button-secondary-highlight'],
            borderColor: colorTokens.borders['button-secondary-highlight'],
          },
        })
      default:
        return primaryStyles
    }
  }

  render() {
    return (
      <StyledButton
        {...this.props}
        width={this.props.fullWidth ? '100%' : 'auto'}
        {...this.getStyles()}
      >
        {this.props.children}
      </StyledButton>
    )
  }
}
