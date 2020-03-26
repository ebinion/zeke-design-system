import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { measurementTokens } from '..'

const Hidden = styled.div`
  ${props =>
    props.atBase &&
    !props.andUp &&
    css`
      @media (max-width: ${measurementTokens.breakpoints.horizontal.s}) {
        display: none;
      }
    `}

  ${props =>
    props.atBase &&
    props.andUp &&
    css`
      display: none;
    `}

  ${props =>
    props.atSmall &&
    !props.andUp &&
    css`
      @media (min-width: ${measurementTokens.breakpoints.horizontal
          .s}) and (max-width: ${measurementTokens.breakpoints.horizontal.m}) {
        display: none;
      }
    `}
  
  ${props =>
    props.atSmall &&
    props.andUp &&
    css`
      @media (min-width: ${measurementTokens.breakpoints.horizontal.s}) {
        display: none;
      }
    `}

  ${props =>
    props.atMedium &&
    !props.andUp &&
    css`
      @media (min-width: ${measurementTokens.breakpoints.horizontal
          .m}) and (max-width: ${measurementTokens.breakpoints.horizontal.l}) {
        display: none;
      }
    `}
  
  ${props =>
    props.atMedium &&
    props.andUp &&
    css`
      @media (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
        display: none;
      }
    `}
      
  ${props =>
    props.atLarge &&
    css`
      @media (min-width: ${measurementTokens.breakpoints.horizontal.l}) {
        display: none;
      }
    `}
`

Hidden.propTypes = {
  atBase: PropTypes.bool,
  atSmall: PropTypes.bool,
  atMedium: PropTypes.bool,
  atLarge: PropTypes.bool,
  andUp: PropTypes.bool,
}

export default Hidden
