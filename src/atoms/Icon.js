import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { animationTokens, colorTokens, measurementTokens } from '../'

const StyledIcon = styled.svg`
  color: ${props => colorTokens.icons[props.color]};
  fill: currentColor;
  height: auto;
  transition-property: color, fill;
  transition-duration: ${animationTokens.duration.normal};
  transition-timing-function: ${animationTokens.easing};
  width: ${props => measurementTokens.icons[props.size]};

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

  .duotone { 
    fill: currentColor;
  }

  ${props => {
    switch (props.color) {
      case 'knockout':
        return css`
            .duotone {
              color: ${colorTokens.icons.black};
            }
          }
        `
      default:
        return css`
          .duotone {
            color: ${colorTokens.icons.knockout};
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

/** Sizes are referenced from `measurementTokens.icons` */
export const sizes = ['s', 'm', 'l', 'xl']

/** Colors are referenced from `colorTokens.icons` */
export const colors = [
  'black',
  'blackHighlight',
  'gold',
  'goldHighlight',
  'inherit',
  'knockout',
]

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(colors).isRequired,
  respondToHover: PropTypes.bool,
  size: PropTypes.oneOf(sizes).isRequired,
  sizeSmallAndAbove: PropTypes.oneOf(sizes),
  sizeMediumAndAbove: PropTypes.oneOf(sizes),
  sizeLargeAndAbove: PropTypes.oneOf(sizes),
  title: PropTypes.string.isRequired,
  viewbox: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  color: 'inherit',
  size: 'm',
}

export default Icon
