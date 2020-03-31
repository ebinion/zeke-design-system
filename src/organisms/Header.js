import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorTokens, H4, IconMenu, IconButton, measurementTokens } from '../'

const StyledComponent = styled.header`
  align-items: center;
  background: ${colorTokens.backgrounds.light};
  box-sizing: border-box;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: ${measurementTokens.touchTarget} 1fr;
  grid-template-areas: 'button | title';
  padding: ${measurementTokens.navButtonOffsetSmall};

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.s}) {
    grid-template-columns: ${measurementTokens.touchTarget} 1fr ${measurementTokens.touchTarget};
    grid-template-areas: 'button | title | .';
    padding: ${measurementTokens.navButtonOffset};
  }
`

const StyledButton = styled.div`
  grid-area: 'button';
`

const StyledTitle = styled.div`
  grid-area: 'title';
  overflow: hidden;
`

const Header = props => {
  return (
    <StyledComponent role="banner">
      <StyledButton>
        <IconButton
          icon={<IconMenu />}
          title="Menu"
          clickHandler={props.menuClickHandler}
        />
      </StyledButton>
      <StyledTitle>
        <H4 truncate align="left" alignSmallUp="center">
          {props.title || props.children}
        </H4>
      </StyledTitle>
    </StyledComponent>
  )
}

Header.propTypes = {
  children: PropTypes.node,
  menuClickHandler: PropTypes.func,
  title: PropTypes.node,
}

export default Header
