import React from 'react'
import { select } from '@storybook/addon-knobs'
import styled from 'styled-components'

import { AnimateOnEnter } from '..'
import ExampleBlock from '../helpers/ExampleBlock'

const TallBox = styled.div`
  height: 120vh;
`

const story = {
  title: 'Molecules/Animate On Enter',
  component: AnimateOnEnter,
}

const animationKnob = () =>
  select(
    'Animation kind',
    [
      'fadeIn',
      'fadeInFromLeft',
      'fadeInFromTop',
      'fadeInFromRight',
      'fadeInFromBottom',
    ],
    'fadeIn'
  )

export const animateOnEnter = () => {
  return (
    <>
      <TallBox>Scroll to see animation below</TallBox>
      <AnimateOnEnter kind={animationKnob()}>
        <ExampleBlock>Animation Example</ExampleBlock>
      </AnimateOnEnter>
      <TallBox />
    </>
  )
}

export default story
