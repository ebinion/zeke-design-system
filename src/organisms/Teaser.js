import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import {
  colorTokens,
  measurementTokens,
  animationTokens,
  H3,
  P,
  Text,
  Time,
} from '../'

const StyledContainer = styled.a`
  background-color: ${colorTokens.backgrounds.teaser};
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
  transition: box-shadow ${animationTokens.duration}ms ${animationTokens.easing};

  &:active,
  &:hover {
    box-shadow: 0 2px 12px 0 ${colorTokens.shadows.light},
      0 0 0 3px ${colorTokens.backgrounds['teaser-highlight']};
  }
`

const StyledArticle = styled.article`
  border-radius: 8px;
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
          ${colorTokens.backgrounds.teaser},
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
  padding: ${measurementTokens.componentPadding.m};
  padding-bottom: 0;
`

const StyledContent = styled.div`
  padding: ${measurementTokens.componentPadding.m};
  padding-top: ${measurementTokens.componentPadding.s};

  ${props =>
    props.noPad &&
    css`
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 0;
    `}
`

const Summary = props => {
  if (props.text && !props.image) {
    return (
      <StyledContent>
        <P noMargin>{props.text}</P>
      </StyledContent>
    )
  } else if (props.image) {
    return <StyledContent noPad>{props.image}</StyledContent>
  } else {
    return <div></div>
  }
}

const Teaser = props => {
  return (
    <StyledContainer
      as={props.linkElement}
      href={props.href || props.to}
      to={props.to || props.href}
    >
      <StyledArticle showFade={!props.image}>
        <StyledHeader>
          <Text noMargin color="light" size="s">
            <Time date={props.date} />
          </Text>
          <H3
            color="knockout"
            lineHeight="tight"
            noMargin
            as={props.headingLevel}
          >
            {props.title}
          </H3>
        </StyledHeader>
        <Summary text={props.summary} image={props.image} />
      </StyledArticle>
    </StyledContainer>
  )
}

Teaser.propTypes = {
  date: PropTypes.instanceOf(Date),
  to: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  image: PropTypes.oneOf([PropTypes.node, PropTypes.element]),
  linkElement: PropTypes.oneOf([PropTypes.element, PropTypes.string])
    .isRequired,
  headingLevel: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
    .isRequired,
}

Teaser.defaultProps = {
  linkElement: 'a',
  headingLevel: 'h2',
}

export default Teaser
