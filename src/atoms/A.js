import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colorTokens, textTokens } from '../'

const StyledA = styled.a`
  color: ${props => props.static.color};
  cursor: pointer;
  font-family: ${textTokens.normal.fontFamily};
  font-weight: ${textTokens.normal.weightNormal};
  text-decoration: ${props => props.static.textDecoration};
  ${props =>
    (props.inheritFont || props.useInheritedFont) &&
    css`
      font: inherit;
    `}

  &:active,
  &:hover {
    color: ${props => props.hover.color};
    text-decoration: ${props => props.hover.textDecoration};
    outline: 0;
  }

  ${props =>
    props.keyboardOnly &&
    `
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;

      &:focus {
        clip: inherit;
        height: auto;
        margin: auto;
        position: static;
        width: auto;
      }
    `}
`

const A = props => {
  const getStyles = () => {
    const styles = {
      static: {
        color: 'inherit',
        textDecoration: 'underline',
      },
      hover: {
        color: colorTokens.text['linkHighlight'],
        textDecoration: 'none',
      },
    }

    const stylesIncognito = {
      static: {
        color: 'inherit',
        textDecoration: 'none',
      },
      hover: {
        color: 'inherit',
        textDecoration: 'none',
      },
    }

    const stylesNav = {
      static: {
        color: colorTokens.text.nav,
        textDecoration: 'none',
      },
      hover: {
        color: colorTokens.text.navHighlight,
        textDecoration: 'none',
      },
    }

    switch (props.kind) {
      case 'incognito':
        return stylesIncognito
      case 'nav':
        return stylesNav
      default:
        return styles
    }
  }

  return (
    <StyledA
      {...props}
      {...getStyles()}
      href={props.to ? props.to : props.href}
    >
      {props.children}
    </StyledA>
  )
}

A.propTypes = {
  kind: PropTypes.oneOf(['normal', 'incognito', 'nav']),
  keyboardOnly: PropTypes.bool,
  href: PropTypes.string,
  inheritFont: PropTypes.bool, // will depreacate because of React warnings in 1.0
  useInheritedFont: PropTypes.bool,
  to: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

A.defaultProps = {
  kind: 'normal',
}

export default A
