import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledClipped = styled.div`
  ${props =>
    props.svgId &&
    css`
      clip-path: url('#${props.svgId}');
    `}

  ${props =>
    props.blockHeight &&
    css`
      height: ${props.blockHeight};
    `}

  ${props =>
    props.blockWidth &&
    css`
      width: ${props.blockWidth};
    `}
`

const StyledSvg = styled.svg`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

const ClippedImage = ({ height, path, width, viewBox, ...props }) => {
  const viewBoxArray = viewBox.split(' ')
  const svgHeight = viewBoxArray[3]
  const svgWidth = viewBoxArray[2]

  const getId = () => `clipped-image${svgWidth}${svgHeight}`

  return (
    <>
      <StyledSvg viewBox={viewBox} aria-hidden>
        <defs>
          <clipPath
            id={getId()}
            clipPathUnits="objectBoundingBox"
            transform={`scale(${1 / svgWidth} ${1 / svgHeight})`}
          >
            {path}
          </clipPath>
        </defs>
      </StyledSvg>
      <StyledClipped blockHeight={height} blockWidth={width} svgId={getId()}>
        {props.children}
      </StyledClipped>
    </>
  )
}

ClippedImage.propTypes = {
  /**
   * Image to be clipped, set width and height of the image 100% to work with
   */
  children: PropTypes.node,
  /**
   * Height of the composed component
   */
  height: PropTypes.string,
  /**
   * SVG path or group with paths
   */
  path: PropTypes.node.isRequired,
  /**
   * Viewbox of the SVG
   */
  viewBox: PropTypes.number.isRequired,
  /**
   * Width of the composed component
   */
  width: PropTypes.string,
}

ClippedImage.defaultProps = {}

export default ClippedImage
