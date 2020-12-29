import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledImg = styled.img`
  max-width: 100%;
  ${props =>
    props.objectFit &&
    css`
      object-fit: ${props.objectFit};
    `}

  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}

  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
`

const Img = props => {
  return <StyledImg {...props} />
}

Img.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  objectFit: PropTypes.oneOf(['contain', 'cover', 'fill', 'scale-down']),
  height: PropTypes.string,
  width: PropTypes.string,
}

Img.defaultProps = {
  alt: '',
}

export default Img
