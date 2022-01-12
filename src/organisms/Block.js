import React from 'react'
import PropType from 'prop-types'
import styled, { css } from 'styled-components'

import { colorTokens, measurementTokens } from '../'

const StyledComponent = styled.div`
  background: ${props => props.bgColor};

  ${props => {
    if (props.constrain === 'text') {
      return css`
        max-width: ${measurementTokens.maxTextWidth};
      `
    } else if (props.constrain === 'site') {
      return css`
        max-width: ${measurementTokens.maxSiteWidth};
      `
    }
  }}

  ${props =>
    props.padding === 'none' &&
    css`
      padding: '0';
    `}
  ${props =>
    props.padding === 'm' &&
    css`
      padding: var(--component-padding) var(--site-padding);
    `}
  ${props =>
    props.padding === 'l' &&
    css`
      padding: var(--component-padding-l) var(--site-padding);
    `}
  ${props =>
    props.padding === 'xl' &&
    css`
      padding: var(--component-padding-xl) var(--site-padding);
    `}

  ${props =>
    props.paddingBottom &&
    css`
      padding-bottom: ${props.paddingBottom};
    `}
  ${props =>
    props.paddingTop &&
    css`
      padding-top: ${props.paddingTop};
    `}
  ${props =>
    props.isPositioned &&
    css`
      position: relative;
    `}
  ${props =>
    props.isInset &&
    css`
      padding-left: 0;
      padding-right: 0;
    `}

  ${props =>
    props.isFullScreen &&
    css`
      box-sizing: border-box;
      min-height: 100vh;
      width: 100vw;
    `}

  ${props =>
    props.hasChildrenCenterY &&
    css`
      justify-content: center;
      display: flex;
      flex-direction: column;
    `}

  ${props =>
    props.isCentered &&
    css`
      margin-left: auto;
      margin-right: auto;
    `}

`

const Block = ({ children, color, ...props }) => {
  return (
    <StyledComponent bgColor={colorTokens.backgrounds.block[color]} {...props}>
      {children}
    </StyledComponent>
  )
}

Block.propTypes = {
  as: PropType.string,
  color: PropType.oneOf(Object.keys(colorTokens.backgrounds.block)),
  constrain: PropType.oneOf(['text', 'site', 'none']),
  isCentered: PropType.bool,
  isFullScreen: PropType.bool,
  isInset: PropType.bool,
  isPositioned: PropType.bool,
  padding: PropType.oneOf(['none', 'm', 'l', 'xl']),
  paddingBottom: PropType.string,
  paddingTop: PropType.string,
  hasChildrenCenterY: PropType.bool,
}

Block.defaultProps = {
  as: 'div',
  color: 'transparent',
  constrain: 'none',
  isInset: false,
  isPositioned: false,
  padding: 'm',
}

export default Block
