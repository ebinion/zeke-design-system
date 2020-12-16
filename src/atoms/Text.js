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
    props.constrain &&
    css`
      max-width: ${measurementTokens.maxTextWidth};
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
    css`
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
      transition: color ${animationTokens.duration} ${animationTokens.easing};

      a:active &,
      a:hover & {
        color: ${colorTokens.text.respondToLink};
      }
    `}

  
  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.s}) {
    ${props =>
      props.alignSmallUp &&
      css`
        text-align: ${props.alignSmallUp};
      `}
    ${props =>
      props.sizeSmallUp &&
      css`
        font-size: ${props.sizeSmallUp};
      `}
    ${props =>
      props.lineHeightSmallUp &&
      css`
        line-height: ${props.lineHeightSmallUp};
      `}
  }

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    ${props =>
      props.alignMediumUp &&
      css`
        text-align: ${props.alignMediumUp};
      `}
    ${props =>
      props.sizeMediumUp &&
      css`
        font-size: ${props.sizeMediumUp};
      `}
    ${props =>
      props.lineHeightMediumUp &&
      css`
        line-height: ${props.lineHeightMediumUp};
      `}
  }

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.l}) {
    ${props =>
      props.alignLargeUp &&
      css`
        text-align: ${props.alignLargeUp};
      `}
    ${props =>
      props.sizeLargeUp &&
      css`
        font-size: ${props.sizeLargeUp};
      `}
    ${props =>
      props.lineHeightLargeUp &&
      css`
        line-height: ${props.lineHeightLargeUp};
      `}
  }
`

const Text = ({
  as,
  bold,
  color,
  children,
  kind,
  lineHeight,
  lineHeightSmallUp,
  lineHeightMediumUp,
  lineHeightLargeUp,
  noMargin,
  size,
  sizeSmallUp,
  sizeMediumUp,
  sizeLargeUp,
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

  const getLineHeight = (sizeKey, lineHeight) => {
    const lineHeightPx =
      lineHeight === 'normal'
        ? textTokens.sizes[sizeKey].lineHeightNormal
        : textTokens.sizes[sizeKey].lineHeightTight

    return pxToMultiLineHeight(getSize(sizeKey), lineHeightPx)
  }

  const pxToMultiLineHeight = (textSize, lineHeight) => {
    const context = stripPx(textSize)
    const target = stripPx(lineHeight)

    return target / context
  }

  const stripPx = pxString => {
    if (typeof pxString === 'string') {
      return parseInt(pxString.trim().split('px')[0], 10)
    } else {
      return pxString
    }
  }

  const getSize = sizeKey => {
    return textTokens.sizes[sizeKey].size
  }

  const getSpacing = () => {
    if (noMargin || props.margin === 'none') {
      return '0'
    } else if (props.margin === 'tight') {
      return `${textTokens.sizes[size].spacingTight} 0`
    } else {
      return `${textTokens.sizes[size].spacing} 0 ${textTokens.sizes[size].spacingTight} 0`
    }
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

  const getSizes = () => {
    return {
      size: getSize(size),
      sizeSmallUp: sizeSmallUp ? getSize(sizeSmallUp) : false,
      sizeMediumUp: sizeMediumUp ? getSize(sizeMediumUp) : false,
      sizeLargeUp: sizeLargeUp ? getSize(sizeLargeUp) : false,
    }
  }

  const getLineHeights = () => {
    const lineHeights = {
      lineHeight: getLineHeight(size, lineHeight),
      lineHeightSmallUp: false,
      lineHeightMediumUp: false,
      lineHeightLargeUp: false,
    }

    // Small
    if (lineHeightSmallUp && sizeSmallUp) {
      lineHeights.lineHeightSmallUp = getLineHeight(
        sizeSmallUp,
        lineHeightSmallUp
      )
    } else if (lineHeightSmallUp) {
      lineHeights.lineHeightSmallUp = getLineHeight(size, lineHeightSmallUp)
    }

    // Medium
    if (lineHeightMediumUp && sizeMediumUp) {
      lineHeights.lineHeightMediumUp = getLineHeight(
        sizeMediumUp,
        lineHeightMediumUp
      )
    } else if (lineHeightMediumUp && sizeSmallUp) {
      lineHeights.lineHeightMediumUp = getLineHeight(
        sizeSmallUp,
        lineHeightMediumUp
      )
    } else if (lineHeightMediumUp) {
      lineHeights.lineHeightMediumUp = getLineHeight(size, lineHeightMediumUp)
    } else if (lineHeightSmallUp && sizeMediumUp) {
      lineHeights.lineHeightMediumUp = getLineHeight(
        sizeMediumUp,
        lineHeightSmallUp
      )
    } else if (sizeMediumUp) {
      lineHeights.lineHeightMediumUp = getLineHeight(sizeMediumUp, lineHeight)
    }

    // Large
    if (lineHeightLargeUp && sizeLargeUp) {
      lineHeights.lineHeightLargeUp = getLineHeight(
        sizeLargeUp,
        lineHeightLargeUp
      )
    } else if (lineHeightLargeUp && sizeMediumUp) {
      lineHeights.lineHeightLargeUp = getLineHeight(
        sizeMediumUp,
        lineHeightLargeUp
      )
    } else if (lineHeightLargeUp && sizeSmallUp) {
      lineHeights.lineHeightLargeUp = getLineHeight(
        sizeSmallUp,
        lineHeightLargeUp
      )
    } else if (lineHeightLargeUp) {
      lineHeights.lineHeightLargeUp = getLineHeight(size, lineHeightLargeUp)
    } else if (sizeLargeUp && lineHeightMediumUp) {
      lineHeights.lineHeightLargeUp = getLineHeight(
        sizeLargeUp,
        lineHeightMediumUp
      )
    } else if (sizeLargeUp && lineHeightSmallUp) {
      lineHeights.lineHeightLargeUp = getLineHeight(
        sizeLargeUp,
        lineHeightSmallUp
      )
    } else if (sizeLargeUp) {
      lineHeights.lineHeightLargeUp = getLineHeight(sizeLargeUp, lineHeight)
    }

    return lineHeights
  }

  return (
    <StyledP
      as={props.visuallyHidden ? 'i' : as}
      fontList={getFontFamily()}
      {...getSizes()}
      {...getLineHeights()}
      marginSpacing={getSpacing()}
      {...props}
      textColor={getColor()}
      weight={getWeight()}
    >
      {children}
    </StyledP>
  )
}

Text.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  alignSmallUp: PropTypes.oneOf(['left', 'center', 'right']),
  alignMediumUp: PropTypes.oneOf(['left', 'center', 'right']),
  alignLargeUp: PropTypes.oneOf(['left', 'center', 'right']),
  bold: PropTypes.bool,
  color: PropTypes.oneOf([
    'normal',
    'light',
    'xLight',
    'knockout',
    'success',
    'error',
    'warning',
  ]),
  constrain: PropTypes.bool,
  isUppercased: PropTypes.bool,
  kind: PropTypes.oneOf(['normal', 'heading', 'decorative', 'code']),
  lineHeight: PropTypes.oneOf(['normal', 'tight']),
  lineHeightSmallUp: PropTypes.oneOf(['normal', 'tight']),
  lineHeightMediumUp: PropTypes.oneOf(['normal', 'tight']),
  lineHeightLargeUp: PropTypes.oneOf(['normal', 'tight']),
  margin: PropTypes.oneOf(['normal', 'tight', 'none']),
  noMargin: PropTypes.bool,
  respondToLinkHover: PropTypes.bool,
  size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
  sizeSmallUp: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
  sizeMediumUp: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
  sizeLargeUp: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
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
  margin: 'normal',
  respondToLinkHover: false,
  size: 'm',
}

export default Text
