import React from 'react' // eslint-disable-line no-unused-vars
import { createGlobalStyle } from 'styled-components'

import { colorTokens, measurementTokens, textTokens } from '..'

const GlobalWrapper = createGlobalStyle`
  :root {
    --component-margin: ${measurementTokens.componentMargin.s};
    --component-padding: ${measurementTokens.componentPadding.s};
    --component-padding-l: ${measurementTokens.componentPaddingL.s};
    --component-padding-xl: ${measurementTokens.componentPaddingXl.s};
    --site-padding: ${measurementTokens.sitePadding.s};
  }

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    :root {
      --component-margin: ${measurementTokens.componentMargin.m};
      --component-padding: ${measurementTokens.componentPadding.m};
      --component-padding-l: ${measurementTokens.componentPaddingL.m};
      --component-padding-xl: ${measurementTokens.componentPaddingXl.m};
      --site-padding: ${measurementTokens.sitePadding.m};
    }
  }

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.l}) {
    :root {
      --component-margin: ${measurementTokens.componentMargin.l};
      --component-padding: ${measurementTokens.componentPadding.l};
      --component-padding-l: ${measurementTokens.componentPaddingL.l};
      --component-padding-xl: ${measurementTokens.componentPaddingXl.l};
      --site-padding: ${measurementTokens.sitePadding.l};
    }
  }

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.xl}) {
    :root {
      --component-margin: ${measurementTokens.componentMargin.xl};
      --component-padding: ${measurementTokens.componentPadding.xl};
      --component-padding-l: ${measurementTokens.componentPaddingL.xl};
      --component-padding-xl: ${measurementTokens.componentPaddingXl.xl};
      --site-padding: ${measurementTokens.sitePadding.xl};
    }
  }

  body {
    background-color: ${colorTokens.backgrounds.site};
    color: ${colorTokens.text.normal};
    font-family: ${textTokens.normal.fontFamily};
    font-size: ${textTokens.sizes.m.size};
    font-weight: ${textTokens.normal.weightNormal};
    line-height: ${textTokens.sizes.m.lineHeightTight};
    margin: 0;
    padding: 0;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :focus {
    outline: 4px solid ${colorTokens.borders.link};
  }
`

export default GlobalWrapper
