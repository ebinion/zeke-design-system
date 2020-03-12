import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import {
  animationTokens,
  colorTokens,
  textTokens,
  measurementTokens,
} from '../'

const StyledP = styled.p`
  max-width: ${measurementTokens.maxTextWidth};
  transition: color ${animationTokens.duration}ms ${animationTokens.easing};

  ${props => css`
    color: ${props.textColor};
    font-weight: ${props.weight};
    font-family: ${props.fontList};
    font-size: ${props.size};
    line-height: ${props.lineHeight};
    text-align: ${props.align};
    margin: ${props.marginSpacing};
    text-transform: ${props.isUppercased ? 'uppercase' : 'none'};
  `}

  ${props =>
    props.truncate &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      text-overflow: fade;
      white-space: nowrap;
    `}

  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    margin-top: 0;
  }

  ${props =>
    props.visuallyHidden &&
    `
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
  `}

  ${props =>
    props.respondToLinkHover &&
    css`
      a:active &,
      a:hover & {
        color: ${colorTokens.text.linkHighlight};
      }
    `}
`

const Text = ({
  bold,
  color,
  children,
  kind,
  lineHeight,
  noMargin,
  size,
  ...props
}) => {
  const getColor = () => {
    if (kind === 'heading' && color === 'light') {
      return colorTokens.text.headingLight
    } else if (kind === 'heading' && color === 'normal') {
      return colorTokens.text.heading
    } else if (bold && kind === 'normal' && color === 'normal') {
      return colorTokens.text.bold
    } else if (kind === 'decorative' && color === 'normal') {
      return colorTokens.text.bold
    } else {
      return colorTokens.text[color]
    }
  }

  const getLineHeight = () => {
    return lineHeight === 'normal'
      ? textTokens.sizes[size].lineHeightNormal
      : textTokens.sizes[size].lineHeightTight
  }

  const getSize = () => {
    return textTokens.sizes[size].size
  }

  const getSpacing = () => {
    return noMargin
      ? '0 auto'
      : `${textTokens.sizes[size].spacing} auto ${textTokens.sizes.m.spacing} auto`
  }

  const getWeight = () => {
    switch (textTokens[kind]) {
      case 'decorative':
        return textTokens.decorative.weightNormal
      case 'heading':
        return textTokens.heading.weightBold
      default:
        return bold
          ? textTokens.normal.weightBold
          : textTokens.normal.weightNormal
    }
  }

  const getFontFamily = () => {
    return textTokens[kind].fontFamily
  }

  return (
    <StyledP
      {...props}
      textColor={getColor()}
      fontList={getFontFamily()}
      lineHeight={getLineHeight()}
      size={getSize()}
      marginSpacing={getSpacing()}
      weight={getWeight()}
    >
      {children}
    </StyledP>
  )
}

Text.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  bold: PropTypes.bool,
  color: PropTypes.oneOf([
    'normal',
    'light',
    'knockout',
    'success',
    'error',
    'warning',
  ]),
  isUppercased: PropTypes.bool,
  kind: PropTypes.oneOf(['normal', 'heading', 'decorative']),
  lineHeight: PropTypes.oneOf(['normal', 'tight']),
  noMargin: PropTypes.bool,
  respondToLinkHover: PropTypes.bool,
  size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
  truncate: PropTypes.bool,
  visuallyHidden: PropTypes.bool,
}

Text.defaultProps = {
  as: 'p',
  align: 'left',
  bold: false,
  color: 'normal',
  kind: 'normal',
  lineHeight: 'normal',
  respondToLinkHover: false,
  size: 'm',
}

export default Text
