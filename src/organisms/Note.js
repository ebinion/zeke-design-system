import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colorTokens, measurementTokens, animationTokens, H3, Text } from '..'

const StyledContainer = styled.a`
  background-color: ${colorTokens.backgrounds.light};
  border-radius: 8px;
  box-shadow: 0 2px 8px ${colorTokens.shadows.light};
  box-sizing: border-box;
  display: block;
  cursor: pointer;
  height: 0;
  padding-bottom: 75%;
  position: relative;
  outline: 4px solid transparent;
  text-decoration: none;
  transition: box-shadow ${animationTokens.duration.normal}
    ${animationTokens.easing};

  &:active,
  &:hover {
    box-shadow: 0 2px 12px 0 ${colorTokens.shadows.light},
      0 0 0 3px ${colorTokens.borders.linkHighlight};
  }
`

const StyledArticle = styled.article`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
  left: 0;

  &::after {
    ${props =>
      props.showFade &&
      css`
        background: linear-gradient(
          0deg,
          ${colorTokens.backgrounds.Note},
          rgba(255, 255, 255, 0)
        );
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 30%;
        width: 100%;
        pointer-events: none;
      `}
  }
`

const StyledHeader = styled.div`
  flex: 0 0 auto;
  padding: ${measurementTokens.componentPadding.m};
  padding-bottom: 0;
`

const StyledContent = styled.div`
  flex: 0 0 auto;
  padding: ${measurementTokens.componentPadding.m};
  padding-top: 0;
  margin-top: ${measurementTokens.componentPadding.s};
`

const StyledImageWrapper = styled.div`
  flex: 1 1 auto;
  margin-top: ${measurementTokens.componentPadding.s};
  padding: 0;
  overflow: hidden;

  > * {
    height: 100%;
    width: 100%;
  }

  img {
    object-fit: cover;
  }
`

const Summary = props => {
  if (props.text && !props.image) {
    return (
      <StyledContent>
        <Text noMargin>{props.text}</Text>
      </StyledContent>
    )
  } else if (props.image) {
    return <StyledImageWrapper>{props.image}</StyledImageWrapper>
  } else {
    return null
  }
}

const Note = props => {
  return (
    <StyledContainer
      as={props.linkElement}
      href={props.href || props.to}
      to={props.to || props.href}
    >
      <StyledArticle showFade={!props.image}>
        <StyledHeader>
          <Text noMargin color="light" size="s">
            {props.superTitle}
          </Text>
          <H3 lineHeight="tight" noMargin as={props.headingLevel}>
            {props.title}
          </H3>
        </StyledHeader>
        <Summary text={props.summary} image={props.image} />
      </StyledArticle>
    </StyledContainer>
  )
}

Note.propTypes = {
  superTitle: PropTypes.node,
  to: PropTypes.string.isRequired,
  href: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  image: PropTypes.node,
  linkElement: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
    .isRequired,
  headingLevel: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
    .isRequired,
}

Note.defaultProps = {
  linkElement: 'a',
  headingLevel: 'h2',
  date: new Date(),
}

export default Note
