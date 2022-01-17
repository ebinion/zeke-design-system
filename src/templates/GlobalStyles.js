import React from 'react' // eslint-disable-line no-unused-vars
import { createGlobalStyle } from 'styled-components'

import { colorTokens, measurementTokens, textTokens } from '..'

const GlobalWrapper = createGlobalStyle`
  :root {
    --component-margin: ${measurementTokens.componentMargin.s};
    --component-margin-l: ${measurementTokens.componentMarginL.s};
    --component-margin-xl: ${measurementTokens.componentMarginXL.s};
    --component-padding: ${measurementTokens.componentPadding.s};
    --component-padding-l: ${measurementTokens.componentPaddingL.s};
    --component-padding-xl: ${measurementTokens.componentPaddingXl.s};
    --site-padding: ${measurementTokens.sitePadding.s};

    --c-black-light: ${colorTokens.named.blackLight};
    --c-black-x-light: ${colorTokens.named.blackXLight};
    --c-black-xx-light: ${colorTokens.named.blackXxLight};
    --c-black: ${colorTokens.named.black};
    --c-black-transparent: ${colorTokens.named.blackTransparent};
    --c-black-transparent-dark: ${colorTokens.named.blackTransparentDark};
    --c-gold-dark: ${colorTokens.named.goldDark};
    --c-gold-invisible: ${colorTokens.named.goldInvisible};
    --c-gold-light: ${colorTokens.named.goldLight};
    --c-gold: ${colorTokens.named.gold};
    --c-gray-light: ${colorTokens.named.grayLight};
    --c-gray-x-light: ${colorTokens.named.grayXLight};
    --c-gray-xx-light: ${colorTokens.named.grayXxLight};
    --c-gold-transparent: ${colorTokens.named.goldTransparent};
    --c-gray: ${colorTokens.named.gray};
    --c-green: ${colorTokens.named.green};
    --c-pink: ${colorTokens.named.pink};
    --c-red: ${colorTokens.named.red};
    --c-white-dark: ${colorTokens.named.whiteDark};
    --c-white-x-dark: ${colorTokens.named.whiteXDark};
    --c-white: ${colorTokens.named.white};
    --c-yellow: ${colorTokens.named.yellow};
  }

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    :root {
      --component-margin: ${measurementTokens.componentMargin.m};
      --component-margin-l: ${measurementTokens.componentMarginL.m};
      --component-margin-xl: ${measurementTokens.componentMarginXL.m};
      --component-padding: ${measurementTokens.componentPadding.m};
      --component-padding-l: ${measurementTokens.componentPaddingL.m};
      --component-padding-xl: ${measurementTokens.componentPaddingXl.m};
      --site-padding: ${measurementTokens.sitePadding.m};
    }
  }

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.l}) {
    :root {
      --component-margin: ${measurementTokens.componentMargin.l};
      --component-margin-l: ${measurementTokens.componentMarginL.l};
      --component-margin-xl: ${measurementTokens.componentMarginXL.l};
      --component-padding: ${measurementTokens.componentPadding.l};
      --component-padding-l: ${measurementTokens.componentPaddingL.l};
      --component-padding-xl: ${measurementTokens.componentPaddingXl.l};
      --site-padding: ${measurementTokens.sitePadding.l};
    }
  }

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.xl}) {
    :root {
      --component-margin: ${measurementTokens.componentMargin.xl};
      --component-margin-l: ${measurementTokens.componentMarginL.xl};
      --component-margin-xl: ${measurementTokens.componentMarginXL.xl};
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

  :focus-visible {
    outline: 4px dotted ${colorTokens.borders.link};
    outline-offset: 8px;
  }
`

export default GlobalWrapper
