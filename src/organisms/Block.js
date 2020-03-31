import React from 'react'
import PropType from 'prop-types'
import styled, { css } from 'styled-components'

import { colorTokens, measurementTokens } from '../'

const StyledComponent = styled.div`
  background: ${props => props.bgColor};
  padding: ${props =>
    props.padding === 'none'
      ? measurementTokens.componentPadding.none
      : `${props.padding} ${measurementTokens.componentPadding.s}`} ${
  measurementTokens.sitePadding.s
};
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

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.s}) {
    padding-top: ${props => props.padding};
    padding-bottom: ${props => props.padding};
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
      props.isInset &&
      css`
        padding-left: 0;
        padding-right: 0;
      `}
  }

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    padding-left: ${measurementTokens.sitePadding.m};
    padding-right: ${measurementTokens.sitePadding.m};

    ${props =>
      props.isInset &&
      css`
        padding-left: 0;
        padding-right: 0;
      `}
  }

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.l}) {
    padding-left: ${measurementTokens.sitePadding.l};
    padding-right: ${measurementTokens.sitePadding.l};

    ${props =>
      props.isInset &&
      css`
        padding-left: 0;
        padding-right: 0;
      `}
  }
`
const StyledContrain = styled.div`
  margin: 0 auto;
  max-width: ${props => props.maxWidth || '100%'};
`

const Block = ({
  as,
  children,
  color,
  constrain,
  isPositioned,
  isInset,
  padding,
  paddingBottom,
  paddingTop,
}) => {
  return (
    <StyledComponent
      as={as}
      padding={measurementTokens.componentPadding[padding]}
      bgColor={colorTokens.backgrounds.block[color]}
      isPositioned={isPositioned}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      isInset={isInset}
    >
      <StyledContrain maxWidth={getMaxWidth(constrain)}>
        {children}
      </StyledContrain>
    </StyledComponent>
  )
}

const getMaxWidth = constrain => {
  switch (constrain) {
    case 'text':
      return measurementTokens.maxTextWidth
    case 'site':
      return measurementTokens.maxSiteWidth
    default:
      return '100%'
  }
}

Block.propTypes = {
  as: PropType.string,
  color: PropType.oneOf(Object.keys(colorTokens.backgrounds.block)),
  constrain: PropType.oneOf(['none', 'text', 'site']),
  padding: PropType.oneOf(Object.keys(measurementTokens.componentPadding)),
  isPositioned: PropType.bool,
  isInset: PropType.bool,
  paddingBottom: PropType.string,
  paddingTop: PropType.string,
}

Block.defaultProps = {
  as: 'div',
  color: 'transparent',
  constrain: 'site',
  padding: 'm',
  isPositioned: false,
  isInset: false,
}

export default Block
