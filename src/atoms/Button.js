import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  animationTokens,
  colorTokens,
  textTokens,
  measurementTokens,
} from '../'

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
  transition: all ${animationTokens.duration.short} ${animationTokens.easing};
  transition-property: background-color, box-shadow, color;
  width: ${props => props.width};

  &:hover {
    background-color: ${props => props.hover.backgroundColor};
    border-color: ${props => props.hover.borderColor};
    color: ${props => props.hover.color};
  }
`

const primaryStyles = {
  backgroundColor: colorTokens.backgrounds['button-primary'],
  borderSize: measurementTokens['button-border'],
  borderColor: colorTokens.borders['button-primary'],
  color: colorTokens.text['button-primary'],
  fontSize: textTokens.sizes.m.size,
  height: measurementTokens['touchTarget'],
  paddingTop: measurementTokens['button-padding-top'],
  paddingRight: measurementTokens['button-padding-right'],
  paddingBottom: measurementTokens['button-padding-bottom'],
  paddingLeft: measurementTokens['button-padding-left'],
  hover: {
    color: colorTokens.text['button-primary-highlight'],
    backgroundColor: colorTokens.backgrounds['button-primary-highlight'],
    borderColor: colorTokens.borders['button-primary-highlight'],
  },
}

const secondaryStyles = {
  color: colorTokens.text['button-secondary'],
  backgroundColor: colorTokens.backgrounds['button-secondary'],
  borderColor: colorTokens.borders['button-secondary'],
  hover: {
    color: colorTokens.text['button-secondary-highlight'],
    backgroundColor: colorTokens.backgrounds['button-secondary-highlight'],
    borderColor: colorTokens.borders['button-secondary-highlight'],
  },
}

const tertiaryStyles = {
  backgroundColor: colorTokens.backgrounds['button-tertiary'],
  borderColor: colorTokens.backgrounds['button-tertiary'],
  color: colorTokens.text['button-tertiary'],
  hover: {
    backgroundColor: colorTokens.backgrounds['button-tertiary-highlight'],
    borderColor: colorTokens.backgrounds['button-tertiary-highlight'],
    color: colorTokens.text['button-tertiary-highlight'],
  },
}

const getStyles = kind => {
  switch (kind) {
    case 'secondary':
      return Object.assign({}, primaryStyles, secondaryStyles)
    case 'tertiary':
      return Object.assign({}, primaryStyles, tertiaryStyles)
    default:
      return primaryStyles
  }
}

const Button = props => {
  return (
    <StyledButton
      {...props}
      width={props.fullWidth ? '100%' : 'auto'}
      {...getStyles(props.kind)}
    >
      {props.children}
    </StyledButton>
  )
}

Button.propTypes = {
  kind: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  fullWidth: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

Button.defaultProps = {
  kind: 'primary',
  fullWidth: false,
  type: 'button',
}

export default Button
