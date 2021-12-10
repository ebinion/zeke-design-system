import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import { animationTokens } from '..'

const animationNames = {
  FADE_IN: 'fadeIn',
  FADE_IN_FROM_LEFT: 'fadeInFromLeft',
  FADE_IN_FROM_TOP: 'fadeInFromTop',
  FADE_IN_FROM_RIGHT: 'fadeInFromRight',
  FADE_IN_FROM_BOTTOM: 'fadeInFromBottom',
}

const animationKeyframes = {
  fadeIn: keyframes`
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  `,
  fadeInFromLeft: keyframes`
    from {
      opacity: 0;
      transform: translateX(-${animationTokens.slideDistance.normal})
    }

    to {
      opacity: 1;
      transform: translateX(0)
    }
  `,
  fadeInFromRight: keyframes`
    from {
      opacity: 0;
      transform: translateX(${animationTokens.slideDistance.normal})
    }

    to {
      opacity: 1;
      transform: translateX(0)
    }
  `,
  fadeInFromTop: keyframes`
    from {
      opacity: 0;
      transform: translateY(-${animationTokens.slideDistance.normal})
    }

    to {
      opacity: 1;
      transform: translateY(0)
    }
  `,
  fadeInFromBottom: keyframes`
    from {
      opacity: 0;
      transform: translateY(${animationTokens.slideDistance.normal})
    }

    to {
      opacity: 1;
      transform: translateY(0)
    }
  `,
}

const StyledAnimate = styled.div`
  animation-name: ${props => animationKeyframes[props.kind]};
  animation-delay: ${props => props.delay};
  animation-direction: ${props => props.direction};
  animation-duration: ${props => props.duration};
  animation-fill-mode: both;
  animation-play-state: ${props => (props.isPlaying ? 'running' : 'paused')};
  animation-timing-function: ${props => props.easing};
`

const Animate = props => <StyledAnimate {...props} />

Animate.propTypes = {
  as: PropTypes.node,
  children: PropTypes.node,
  kind: PropTypes.oneOf(Object.values(animationNames)),
  isPlaying: PropTypes.bool,
  direction: PropTypes.oneOf([
    'normal',
    'reverse',
    'alternate',
    'alternate-reverse',
  ]),
  duration: PropTypes.string,
  easing: PropTypes.string,
}

Animate.defaultProps = {
  easing: animationTokens.easing,
  delay: 0,
  duration: animationTokens.duration.normal,
  direction: 'normal',
  isPlaying: false,
}

export default Animate
