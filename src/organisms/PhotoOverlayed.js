import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { measurementTokens, colorTokens } from '..'

const StyledWrapper = styled.div`
  @media (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    padding-top: 0.1px;
    position: relative;
    width: 100%;
  }
`

const ImageContainer = styled.div`
  @media (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    position: absolute;
    top: 0;
    left: 0;
    width: 33%;
  }

  @media (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    width: 40%;
  }
`
const ContentContainer = styled.div`
  padding: var(--component-padding-l);

  @media (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    background-color: ${props => props.bgColor};
    box-sizing: border-box;
    position: relative;
    margin-top: 100px;
    left: 25%;
    width: 75%;
    z-index: 2;
  }

  @media (min-width: ${measurementTokens.breakpoints.horizontal.l}) {
    width: 67%;
    left: 33%;
    margin-top: 150px;
  }
`

const PhotoOverlayed = ({ bgColor, children, image }) => {
  return (
    <StyledWrapper>
      <ImageContainer>{image}</ImageContainer>
      <ContentContainer bgColor={bgColor}>{children}</ContentContainer>
    </StyledWrapper>
  )
}

PhotoOverlayed.propTypes = {
  bgColor: PropTypes.string,
  image: PropTypes.node.isRequired,
}

PhotoOverlayed.defaultProps = {
  bgColor: colorTokens.backgrounds.site,
}

export default PhotoOverlayed
