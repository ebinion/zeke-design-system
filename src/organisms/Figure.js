import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { measurementTokens } from '../'

const StyledComponent = styled.figure`
  display: grid;
  grid-gap: ${measurementTokens.componentMargin.m};
  grid-template-areas:
    'figure'
    'caption';
  padding: 0;
  margin: 0;
  width: 100%;

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    grid-gap: ${measurementTokens.componentMargin.l};
    grid-template-columns: ${props => props.gridColumns};
    grid-template-areas: ${props => props.gridAreas};
  }

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.l}) {
    grid-gap: ${measurementTokens.componentMargin.xl};
  }
`

const StyledCaption = styled.figcaption`
  grid-area: caption;
  margin: 0;
  padding: 0;
`

const StyledFigure = styled.div`
  grid-area: figure;
`

const Figure = ({ figure, figurePosition, children }) => {
  const getGridAreas = () => {
    const figureName = 'figure'
    const captionName = 'caption'

    switch (figurePosition) {
      case 'right':
        return `"${captionName} ${figureName}"`
      default:
        return `"${figureName} ${captionName}"`
    }
  }

  const getGridColumns = () => {
    const figureSize = '55fr'
    const captionSize = '45fr'

    switch (figurePosition) {
      case 'right':
        return `${captionSize} ${figureSize}`
      default:
        return `${figureSize} ${captionSize}`
    }
  }

  return (
    <StyledComponent
      figurePosition={figurePosition}
      gridAreas={getGridAreas()}
      gridColumns={getGridColumns()}
    >
      <StyledFigure>{figure}</StyledFigure>
      <StyledCaption>{children}</StyledCaption>
    </StyledComponent>
  )
}

Figure.propTypes = {
  figurePosition: PropTypes.oneOf(['left', 'right']),
  figure: PropTypes.node,
}

Figure.defaultProps = {
  figurePosition: 'left',
}

export default Figure
