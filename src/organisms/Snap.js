import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledSnap = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction === 'x' ? 'row' : 'column')};
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: ${props => props.direction} ${props => props.type};
  width: 100%;

  ${props => {
    if (props.direction === 'x') {
      return css`
        overflow-x: auto;
      `
    } else {
      return css`
        height: 100vh;
        overflow-y: auto;
      `
    }
  }};

  ${props =>
    props.direction === 'y' &&
    css`
      > * {
        scroll-snap-align: start;
      }
    `}

  ${props =>
    props.direction === 'x' &&
    css`
      > * {
        flex: 0 0 100%;
        scroll-snap-align: center;
      }
    `}
`
// Note: because this element is scrollable it should also be focusable
// (https://dequeuniversity.com/rules/axe/4.1/scrollable-region-focusable?application=axeAPI)
const Snap = props => {
  return (
    <StyledSnap {...props} tabIndex="0">
      {props.children}
    </StyledSnap>
  )
}

Snap.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  direction: PropTypes.oneOf(['x', 'y']),
  type: PropTypes.oneOf(['proximity', 'mandatory']),
}

Snap.defaultProps = {
  direction: 'y',
  type: 'proximity',
}

export default Snap
