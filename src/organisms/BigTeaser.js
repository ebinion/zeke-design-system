import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { A, H3, P, SectionHeading, measurementTokens, colorTokens } from '..'

const ArticleComponent = styled.article`
  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    position: relative;
    overflow: hidden;
    width: 100%;
  }
`

const ArticleInnerContainer = styled.div`
  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    width: 120%;
  }
`

const ImageContainer = styled.div`
  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    float: left;
    width: 50%;
  }
`
const ContentContainer = styled.div`
  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    background-color: ${props => props.bgColor};
    background-color: #fffd;
    box-sizing: border-box;
    position: relative;
    float: left;
    left: -10.66666667%; /* approximation of removing extra 20% that was added */
    margin-top: 100px;
    padding: ${measurementTokens.componentPadding.l};

    width: 44%;
    z-index: 2;
  }

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.l}) {
    padding: ${measurementTokens.componentPadding.xl};
    left: -6.66666667%; /* approximation of removing extra 20% that was added */
    width: 40%;
  }
`

const BigTeaser = ({
  bgColor,
  linkElement,
  to,
  title,
  summary,
  superTitle,
  image,
  headingLevel,
}) => {
  const hexTransparencyValue = 'd'

  const getTransparentBgColor = () => {
    const trimmedColor = bgColor.replace(' ', '')

    if (trimmedColor.length === 4) {
      return trimmedColor + hexTransparencyValue
    } else if (trimmedColor.length === 7) {
      return trimmedColor + hexTransparencyValue + hexTransparencyValue
    } else {
      return trimmedColor
    }
  }

  return (
    <A as={linkElement} to={to} kind="incognito">
      <ArticleComponent>
        <ArticleInnerContainer>
          <ImageContainer>{image}</ImageContainer>
          <ContentContainer bgColor={getTransparentBgColor()}>
            {superTitle && (
              <SectionHeading alignMediumUp="left">{superTitle}</SectionHeading>
            )}
            <H3
              as={headingLevel}
              align="center"
              alignMediumUp="left"
              lineHeight="tight"
              lineHeightMediumUp="normal"
              noMargin
              respondToLinkHover
              sizeMediumUp="xl"
            >
              {title}
            </H3>
            <P
              align="center"
              alignMediumUp="left"
              kind="decorative"
              sizeMediumUp="l"
              lineHeight="tight"
              lineHeightMediumUp="normal"
              noMargin
            >
              {summary}
            </P>
          </ContentContainer>
        </ArticleInnerContainer>
      </ArticleComponent>
    </A>
  )
}

BigTeaser.propTypes = {
  bgColor: PropTypes.string,
  superTitle: PropTypes.string,
  to: PropTypes.string.isRequired,
  title: PropTypes.string,
  summary: PropTypes.string,
  image: PropTypes.node.isRequired,
  linkElement: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  headingLevel: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
}

BigTeaser.defaultProps = {
  bgColor: colorTokens.backgrounds.light,
  linkElement: 'a',
  headingLevel: 'h2',
}

export default BigTeaser
