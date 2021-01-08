import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { GlobalStyles, Snap } from '..'

const StyledHeader = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
`

const StyledWrapper = styled(Snap)`
  position: relative;
`

const SnapLayout = props => {
  return (
    <>
      <GlobalStyles />
      <StyledWrapper>
        <StyledHeader>{props.headerChildren}</StyledHeader>
        {props.children}
        <footer role="contentinfo">{props.footerChildren}</footer>
      </StyledWrapper>
    </>
  )
}

SnapLayout.propTypes = {
  headerChildren: PropTypes.node,
  children: PropTypes.node,
  footerChildren: PropTypes.node,
}

SnapLayout.defaultProps = {}

export default SnapLayout
