import React, { useState } from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { A } from '../'
import GlobalStyles from './GlobalStyles'

const StyledComponent = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`

const StyledHeader = styled.div`
  grid-area: header;
`

const StyledMain = styled.main`
  grid-area: main;
`

const StyledFooter = styled.footer`
  grid-area: footer;
`

const SiteLayout = props => {
  return (
    <>
      <GlobalStyles />
      <StyledComponent>
        <A keyboardOnly href="#main">
          Skip to main content
        </A>
        <StyledHeader>{props.headerChildren}</StyledHeader>
        <StyledMain id="main" role="main">
          {props.mainChildren || props.children}
        </StyledMain>
        <StyledFooter role="contentinfo">{props.footerChildren}</StyledFooter>
      </StyledComponent>
    </>
  )
}

SiteLayout.propTypes = {
  headerChildren: PropTypes.node,
  mainChildren: PropTypes.node,
  footerChildren: PropTypes.node,
}

export default SiteLayout
