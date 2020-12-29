import React from 'react'
import PropType from 'prop-types'
import styled, { css } from 'styled-components'

import { colorTokens } from '../'

const StyledComponent = styled.div`
  background: ${props => props.bgColor};

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
`

const Block = ({
  as,
  children,
  color,
  isPositioned,
  isInset,
  padding,
  paddingBottom,
  paddingTop,
}) => {
  return (
    <StyledComponent
      as={as}
      padding={padding}
      bgColor={colorTokens.backgrounds.block[color]}
      isPositioned={isPositioned}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      isInset={isInset}
    >
      {children}
    </StyledComponent>
  )
}

Block.propTypes = {
  as: PropType.string,
  color: PropType.oneOf(Object.keys(colorTokens.backgrounds.block)),
  padding: PropType.oneOf(['none', 'm', 'l', 'xl']),
  isPositioned: PropType.bool,
  isInset: PropType.bool,
  paddingBottom: PropType.string,
  paddingTop: PropType.string,
}

Block.defaultProps = {
  as: 'div',
  color: 'transparent',
  padding: 'm',
  isPositioned: false,
  isInset: false,
}

export default Block
