import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import {
  A,
  IconButton,
  IconX,
  animationTokens,
  colorTokens,
  measurementTokens,
} from '../'

const StyledComponent = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  transition: opacity ${animationTokens.duration.normal}
    ${animationTokens.easing};
  z-index: ${measurementTokens.zIndex.nav};

  ${props =>
    props.isOpen &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`

const StyledMenu = styled.div`
  background: ${colorTokens.backgrounds.flyout};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(0, ${animationTokens.slideDistance});
  transition: transform ${animationTokens.duration.normal}
    ${animationTokens.easing};
  z-index: 2;

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.s}) {
    max-width: ${measurementTokens.menuWidth};
    transform: translate(-${animationTokens.slideDistance}, 0);
  }

  ${props =>
    props.isOpen &&
    css`
      transform: translate(0, 0);

      @media screen and (min-width: ${measurementTokens.breakpoints.horizontal
          .s}) {
        transform: translate(0, 0);
      }
    `}
`

const StyledMask = styled.div`
  background: ${colorTokens.backgrounds.flyout};
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.s}) {
    background: ${colorTokens.backgrounds.overlay};
  }
`

const StyledClose = styled.div`
  position: absolute;
  text-align: center;
  top: ${measurementTokens.navButtonOffsetSmall};
  right: ${measurementTokens.navButtonOffsetSmall};

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    top: ${measurementTokens.navButtonOffset};
    right: ${measurementTokens.navButtonOffset};
  }
`

const StyledNav = styled.nav`
  padding: ${measurementTokens.componentMargin.l};
  padding-top: calc(
    ${measurementTokens.componentMargin.xl} +
      ${measurementTokens.navButtonOffset}
  );
`

const StyleNavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${measurementTokens.touchTarget};
`

const FlyoutMenu = ({ isOpen, closeHandler, ...props }) => {
  useEffect(() => {
    const handleKeyPress = event => {
      if (event.keyCode === 27 && isOpen) {
        closeHandler()
      }
    }

    document.addEventListener('keyup', handleKeyPress)

    return () => {
      document.removeEventListener('keyup', handleKeyPress)
    }
  }, [closeHandler, isOpen])

  const renderItems = () => {
    const LinkElement = props.Link

    return (
      <StyledNav
        role="navigation"
        aria-label="Main"
        tabIndex={isOpen ? '0' : '-1'}
      >
        {props.items &&
          props.items.map((item, i) => (
            <StyleNavItem key={`navItem${i}`}>
              <A
                to={item.to}
                kind="nav"
                key={`navLink${i}`}
                as={LinkElement !== undefined ? LinkElement : 'a'}
              >
                {item.label}
              </A>
            </StyleNavItem>
          ))}
      </StyledNav>
    )
  }

  return (
    <StyledComponent isOpen={isOpen}>
      <StyledMask onClick={closeHandler} />
      <StyledMenu isOpen={isOpen}>
        <StyledClose>
          <IconButton
            icon={<IconX />}
            title="Close"
            clickHandler={closeHandler}
          />
        </StyledClose>
        {renderItems()}
        {props.children}
      </StyledMenu>
    </StyledComponent>
  )
}

FlyoutMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      linkElement: PropTypes.element,
    })
  ).isRequired,
  isOpen: PropTypes.bool,
  closeHandler: PropTypes.func.isRequired,
  children: PropTypes.node,
}

FlyoutMenu.defaultProps = {
  isOpen: true,
  closeHandler: () => {},
}

export default FlyoutMenu
