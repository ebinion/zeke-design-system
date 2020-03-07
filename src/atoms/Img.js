import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledImg = styled.img`
  max-width: 100%;
`

const Img = ({ alt, src }) => {
  return <StyledImg src={src} alt={alt} />
}

Img.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
}

Img.defaultProps = {
  alt: '',
}

export default Img
