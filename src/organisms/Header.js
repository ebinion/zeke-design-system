import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import respondToWidth from '../helpers/respondToWidth'
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
  const [textAlign, setTextAlign] = useState(null)
  const [respondToSmall, setRespondToSmall] = useState(false)

  const getTextAlignment = event => {
    if (event.matches) {
      return 'center'
    } else {
      return 'left'
    }
  }

  const handleLayoutChange = event => {
    if (respondToSmall !== event.matches) {
      setRespondToSmall(event.matches)
      setTextAlign(getTextAlignment(event))
    }
  }

  useEffect(() => {
    const mediaListenerForS = respondToWidth('s')
    if (textAlign === null) handleLayoutChange(mediaListenerForS)

    mediaListenerForS.addListener(handleLayoutChange)

    // Tear down
    return () => {
      mediaListenerForS.removeListener(handleLayoutChange)
    }
  })

  return (
    <StyledComponent role="banner">
      <StyledButton>
        <IconButton
          icon={IconMenu}
          title="Menu"
          clickHandler={props.menuClickHandler}
        />
      </StyledButton>
      <StyledTitle>
        <H4 truncate align={textAlign}>
          {props.title || props.children}
        </H4>
      </StyledTitle>
    </StyledComponent>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  menuClickHandler: PropTypes.func,
}

export default Header
