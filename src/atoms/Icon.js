import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { animationTokens, colorTokens, measurementTokens } from '../'

const StyledIcon = styled.svg`
  color: ${props => colorTokens.icons[props.color]};
  fill: currentColor;
  height: auto;
  width: ${props => measurementTokens.icons[props.size]};
  ${props =>
    props.isLink &&
    css`
      transition-property: fill;
      transition-duration: ${animationTokens.duration}ms;
      transition-timing-function: ${animationTokens.easing};
    `}

  ${props => {
    if (props.isLink) {
      switch (props.color) {
        case 'gold':
          return css`
            :active &,
            :hover & {
              color: ${colorTokens.icons.goldHighlight};
            }
          `
        default:
          return css`
            :active &,
            :hover & {
              color: ${colorTokens.icons.blackHighlight};
            }
          `
      }
    }
  }}

  ${props => {
    switch (props.color) {
      case 'knockout':
        return css`
            & .duotone {
              fill: ${colorTokens.icons.black};
            }
          }
        `
      default:
        return css`
          & .duotone {
            fill: ${colorTokens.icons.knockout};
          }
        `
    }
  }}
`

const Icon = ({ children, title, viewbox, ...props }) => {
  return (
    <StyledIcon viewBox={viewbox} {...props} role="img" aria-label={title}>
      <title>{title}</title>
      {children}
    </StyledIcon>
  )
}

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(Object.keys(colorTokens.icons)).isRequired,
  isLink: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(measurementTokens.icons)).isRequired,
  title: PropTypes.string.isRequired,
  viewbox: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  color: 'inherit',
  size: 'm',
}

export default Icon
