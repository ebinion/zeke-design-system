import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styled, { createGlobalStyle, css } from 'styled-components'
import PropTypes from 'prop-types'

import {
  A,
  IconButton,
  IconX,
  animationTokens,
  colorTokens,
  measurementTokens,
} from '../'

const StyledClose = styled.div`
  position: sticky;
  text-align: right;
  top: 0;
  padding: ${measurementTokens.navButtonOffsetSmall};

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    padding: ${measurementTokens.navButtonOffset};
  }
`

const StyledComponent = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  transition-property: opacity;
  transition-duration: ${animationTokens.duration.normal};
  transition-timing-function: ${animationTokens.easing};
  z-index: ${measurementTokens.zIndex.nav};

  ${props =>
    props.isOpen &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`

const StyledFooter = styled.div`
  padding: ${measurementTokens.componentMargin.m}
    ${measurementTokens.componentMargin.l};
`

const StyledMain = styled.div`
  flex: 1;
  padding: ${measurementTokens.componentMargin.l};
  padding-top: 0;
`

const StyledMask = styled.div`
  backdrop-filter: blur(${measurementTokens.blur.normal});
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

const StyledMenu = styled.div`
  background: ${colorTokens.backgrounds.flyout};
  width: 100%;
  height: 100vh;
  left: 0;
  overflow-y: auto;
  position: fixed;
  transform: translate(0, ${animationTokens.slideDistance.long});
  transition: transform;
  transition-duration: ${animationTokens.duration.normal};
  transition-timing-function: ${animationTokens.easing};
  top: 0;
  z-index: 2;

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.s}) {
    max-width: ${measurementTokens.maxMenuWidth};
    width: 50vw;
    transform: translate(-${animationTokens.slideDistance.long}, 0);
  }

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    width: 40vw;
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

const StyledNavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${measurementTokens.touchTarget};
`

const StyledNav = styled.nav`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const StyledScrollLock = createGlobalStyle`
body {
  overflow: hidden;
}
`

const FlyoutMenu = ({
  isOpen,
  closeHandler,
  footer,
  portalQuery,
  ...props
}) => {
  const [portalElement, setPortalElement] = useState()
  let [portalRoot, setPortalRoot] = useState()

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

  useEffect(
    () => {
      if (portalQuery) {
        const _portalRoot = document.querySelector(portalQuery)
        const _portalElement = document.createElement('div')
        _portalRoot.appendChild(_portalElement)

        setPortalRoot(_portalRoot)
        setPortalElement(_portalElement)
      }

      return () => {
        if (portalRoot) {
          portalRoot.removeChild(portalElement)
        }
      }
    },
    // eslint-disable-next-line
    []
  )

  const renderItems = () => {
    const LinkElement = props.Link

    return (
      <StyledMain>
        {isOpen && <StyledScrollLock />}
        {props.items &&
          props.items.map((item, i) => (
            <StyledNavItem key={`navItem${i}`}>
              <A
                to={item.to}
                kind="nav"
                key={`navLink${i}`}
                as={LinkElement !== undefined ? LinkElement : 'a'}
              >
                {item.label}
              </A>
            </StyledNavItem>
          ))}
      </StyledMain>
    )
  }

  const renderFlyout = () => (
    <StyledComponent isOpen={isOpen} tabIndex={isOpen ? undefined : '-1'}>
      <StyledMask onClick={closeHandler} />
      <StyledMenu isOpen={isOpen}>
        <StyledNav role="navigation" aria-label="Main">
          <StyledClose>
            <IconButton
              icon={<IconX />}
              title="Close"
              clickHandler={closeHandler}
            />
          </StyledClose>
          {renderItems()}
          {props.children}
          {footer && <StyledFooter>{footer}</StyledFooter>}
        </StyledNav>
      </StyledMenu>
    </StyledComponent>
  )

  if (portalElement) {
    return createPortal(renderFlyout(), portalElement)
  } else {
    return renderFlyout()
  }
}

FlyoutMenu.propTypes = {
  children: PropTypes.node,
  closeHandler: PropTypes.func.isRequired,
  footer: PropTypes.node,
  isOpen: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      linkElement: PropTypes.element,
    })
  ).isRequired,
  portalQuery: PropTypes.string,
}

FlyoutMenu.defaultProps = {
  isOpen: true,
  closeHandler: () => {},
}

export default FlyoutMenu
