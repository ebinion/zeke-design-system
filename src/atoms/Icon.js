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
    props.respondToHover &&
    css`
      transition-property: color, fill;
      transition-duration: ${animationTokens.duration};
      transition-timing-function: ${animationTokens.easing};
    `}

  ${props => {
    if (props.respondToHover) {
      switch (props.color) {
        case 'gold':
          return css`
            button:active &,
            button:hover &,
            a:active &,
            a:hover & {
              color: ${colorTokens.icons.goldHighlight};
            }
          `
        default:
          return css`
            button:active &,
            button:hover &,
            a:active &,
            a:hover & {
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
              color: ${colorTokens.icons.black};
              fill: currentColor;
            }
          }
        `
      default:
        return css`
          & .duotone {
            color: ${colorTokens.icons.knockout};
            fill: currentColor;
          }
        `
    }
  }}

  ${props =>
    props.sizeSmallAndAbove &&
    css`
      @media screen and (min-width: ${measurementTokens.breakpoints.horizontal
          .s}) {
        width: ${props => measurementTokens.icons[props.sizeSmallAndAbove]};
      }
    `}

  ${props =>
    props.sizeMediumAndAbove &&
    css`
      @media screen and (min-width: ${measurementTokens.breakpoints.horizontal
          .m}) {
        width: ${props => measurementTokens.icons[props.sizeMediumAndAbove]};
      }
    `}

  ${props =>
    props.sizeLargeAndAbove &&
    css`
      @media screen and (min-width: ${measurementTokens.breakpoints.horizontal
          .l}) {
        width: ${props => measurementTokens.icons[props.sizeLargeAndAbove]};
      }
    `}
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
  respondToHover: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(measurementTokens.icons)).isRequired,
  sizeSmallAndAbove: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
  sizeMediumAndAbove: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
  sizeLargeAndAbove: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
  title: PropTypes.string.isRequired,
  viewbox: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  color: 'inherit',
  size: 'm',
}

export default Icon
