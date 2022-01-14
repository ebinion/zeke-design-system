import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import {
  animationTokens,
  colorTokens,
  measurementTokens,
  textTokens,
} from '../'

const StyledA = styled.a`
  font: inherit;
  line-height: inherit;

  ${props =>
    props.kind !== 'incognito' &&
    css`
      background: ${colorTokens.backgrounds.link};
      color: ${colorTokens.text.link};
      cursor: pointer;
      font-weight: ${textTokens.normal.weightBold};
      text-decoration: none;
      border-bottom: ${measurementTokens.linkBorder} solid
        ${colorTokens.borders.link};
      transition-property: border, background;
      transition-duration: ${animationTokens.duration.normal};
      transition-timing-function: ${animationTokens.easing};

      &:active,
      &:hover {
        color: ${colorTokens.text.linkHighlight};
        background: ${colorTokens.backgrounds.linkHighlight};
        border-color: ${colorTokens.borders.linkHighlight};
        outline: 0;
      }
    `}

  ${props =>
    props.kind === 'nav' &&
    css`
      border: 0;
      transition-property: color;
      transition-duration: ${animationTokens.duration.normal};
      transition-timing-function: ${animationTokens.easing};

      &:active,
      &:hover {
        color: ${colorTokens.text.navHighlight};
        background: none;
        outline: 0;
      }
    `}

  ${props =>
    props.kind === 'incognito' &&
    css`
      color: inherit;
      text-decoration: none;
    `}

  ${props =>
    props.keyboardOnly &&
    css`
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      top: 10px;
      transform: translateX(-50%);
      left: 50%;
      width: 1px;

      &:focus {
        clip: auto;
        height: auto;
        margin: auto;
        max-width: 600px;
        overflow: visible;
        width: auto;
      }
    `}
`

const A = ({ onClick, ...props }) => {
  const elementRef = useRef(null)

  const handleClick = event => {
    elementRef.current.blur()
    onClick(event)
  }

  return (
    <StyledA
      {...props}
      href={props.to ? props.to : props.href}
      onClick={handleClick}
      ref={elementRef}
    >
      {props.children}
    </StyledA>
  )
}

A.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  href: PropTypes.string,
  keyboardOnly: PropTypes.bool,
  kind: PropTypes.oneOf(['normal', 'incognito', 'nav']),
  onClick: PropTypes.func,
  to: PropTypes.string,
  useInheritedFont: PropTypes.bool,
}

A.defaultProps = {
  kind: 'normal',
  onClick: () => {},
}

export default A
