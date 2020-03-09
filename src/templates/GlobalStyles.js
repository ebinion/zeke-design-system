import React from 'react' // eslint-disable-line no-unused-vars
import { createGlobalStyle } from 'styled-components'

import { colorTokens, textTokens } from '..'

const GlobalWrapper = createGlobalStyle`
  @import url('${textTokens.fontImportUrl}');

  body {
    background-color: ${colorTokens.backgrounds.site};
    font-family: ${textTokens.normal.fontFamily};
    font-size: ${textTokens.sizes.m.size};
    font-weight: ${textTokens.normal.weightNormal};
    line-height: ${textTokens.sizes.m.lineHeightTight};
    margin: 0;
    padding: 0;
  }
`

export default GlobalWrapper
