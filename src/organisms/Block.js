import React from 'react'
import PropType from 'prop-types'
import styled, { css } from 'styled-components'

import { colorTokens, measurementTokens } from '../'

const StyledComponent = styled.div`
  background: ${props => props.bgColor};
  padding: ${props =>
    props.padding === 'none'
      ? measurementTokens.componentPadding.none
      : `${props.padding} ${measurementTokens.componentPadding.s}`};
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

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.s}) {
    padding: ${props => props.padding};
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
  }
`
const StyledContrain = styled.div`
  margin: 0 auto;
  max-width: ${props => props.maxWidth || '100%'};
`

const Block = ({
  children,
  color,
  constrain,
  isPositioned,
  padding,
  paddingBottom,
  paddingTop,
}) => {
  return (
    <StyledComponent
      padding={measurementTokens.componentPadding[padding]}
      bgColor={colorTokens.backgrounds.block[color]}
      isPositioned={isPositioned}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
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
  color: PropType.oneOf(Object.keys(colorTokens.backgrounds.block)),
  constrain: PropType.oneOf(['none', 'text', 'site']),
  padding: PropType.oneOf(Object.keys(measurementTokens.componentPadding)),
  isPositioned: PropType.bool,
  paddingBottom: PropType.string,
  paddingTop: PropType.string,
}

Block.defaultProps = {
  color: 'transparent',
  constrain: 'site',
  padding: 'm',
  isPositioned: false,
}

export default Block
