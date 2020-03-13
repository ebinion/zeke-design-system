import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colorTokens, measurementTokens, H4 } from '../'

const StyledComponent = styled.div`
  &::after {
    content: '';
    display: block;
    border-bottom: 5px solid
      ${props =>
        props.isKnockedOut
          ? colorTokens.text.knockout
          : colorTokens.text.heading};
    margin-top: 0.5em;
    margin-bottom: 20px;
    ${props => props.align}
    width: 100px;

    @media (min-width: ${measurementTokens.breakpoints.horizontal.s}) {
      ${props => props.alignSmallUp}
    }
    @media (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
      ${props => props.alignMediumUp}
    }
    @media (min-width: ${measurementTokens.breakpoints.horizontal.l}) {
      ${props => props.alignLargeUp}
    }
  }
`

const SectionHeading = ({ as, children, isKnockedOut, ...props }) => {
  const getAlignmentCss = align => {
    switch (align) {
      case 'left':
        return css`
          margin-left: 0;
          margin-right: 0;
        `
      case 'right':
        return css`
          margin-left: auto;
          margin-right: 0;
        `
      default:
        return css`
          margin-left: auto;
          margin-right: auto;
        `
    }
  }

  return (
    <StyledComponent
      align={getAlignmentCss(props.align)}
      alignSmallUp={
        props.alignSmallUp ? getAlignmentCss(props.alignSmallUp) : null
      }
      alignMediumUp={
        props.alignMediumUp ? getAlignmentCss(props.alignMediumUp) : null
      }
      alignLargeUp={
        props.alignLargeUp ? getAlignmentCss(props.alignLargeUp) : null
      }
      isKnockedOut={isKnockedOut}
    >
      <H4
        as={as}
        align={props.align}
        alignSmallUp={props.alignSmallUp}
        alignMediumUp={props.alignMediumUp}
        alignLargeUp={props.alignLargeUp}
        color={isKnockedOut ? 'knockout' : 'normal'}
        constrain={false}
        isUppercased
      >
        {children}
      </H4>
    </StyledComponent>
  )
}

SectionHeading.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  alignSmallUp: PropTypes.oneOf(['left', 'center', 'right']),
  alignMediumUp: PropTypes.oneOf(['left', 'center', 'right']),
  alignLargeUp: PropTypes.oneOf(['left', 'center', 'right']),
  as: PropTypes.string,
  isKnockedOut: PropTypes.bool,
}

SectionHeading.defaultProps = {
  as: 'h2',
  align: 'center',
}

export default SectionHeading
