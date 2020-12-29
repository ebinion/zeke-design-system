import React from 'react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { GlobalStyles, measurementTokens } from '../src'

// Global decorator to apply the styles to all stories
export const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]

const bpHeight = '600px'

const viewportMap = {
  appMinimum: {
    name: 'App Minimum',
    styles: {
      width: measurementTokens.appMinimumWidth,
      height: bpHeight,
    },
  },
  appSmall: {
    name: 'App Small',
    styles: {
      width: measurementTokens.breakpoints.horizontal.s,
      height: bpHeight,
    },
  },
  appMedium: {
    name: 'App Medium',
    styles: {
      width: measurementTokens.breakpoints.horizontal.m,
      height: bpHeight,
    },
  },
  appLarge: {
    name: 'App Large',
    styles: {
      width: measurementTokens.breakpoints.horizontal.l,
      height: bpHeight,
    },
  },
  appXLarge: {
    name: 'App xLarge',
    styles: {
      width: measurementTokens.breakpoints.horizontal.xl,
      height: bpHeight,
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: { ...viewportMap, ...INITIAL_VIEWPORTS },
  },
}
