import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { IconMenu, IconButton, Logo, measurementTokens } from '../'

const StyledComponent = styled.header`
  align-items: center;
  box-sizing: border-box;
  display: grid;
  grid-gap: var(--component-padding);
  grid-template-columns: auto auto 1fr auto;
  grid-template-areas: 'button logo . cta';
  padding: var(--component-padding-l) var(--site-padding);

  ${props =>
    props.isFloated &&
    css`
      position: absolute;
      width: 100%;
      z-index: ${measurementTokens.zIndex.header};
    `}
`

const StyledButton = styled.div`
  grid-area: button;
`

const StyledLogo = styled.div`
  grid-area: logo;
`

const StyledCta = styled.div`
  grid-area: cta;

  ${props =>
    props.ctaHiddenBelow === 'small' &&
    css`
      display: none;
      @media screen and (min-width: ${measurementTokens.breakpoints.horizontal
          .s}) {
        display: block;
      }
    `}

  ${props =>
    props.ctaHiddenBelow === 'medium' &&
    css`
      display: none;
      @media screen and (min-width: ${measurementTokens.breakpoints.horizontal
          .m}) {
        display: block;
      }
    `}
`

const Header = props => {
  const {
    children,
    color,
    ctaHiddenBelow,
    isFloated,
    href,
    logoHref,
    logoLinkElement,
    logoTo,
    menuClickHandler,
    siteTitle,
  } = props

  return (
    <StyledComponent role="banner" isFloated={isFloated}>
      <StyledButton>
        <IconButton
          icon={<IconMenu size="l" color={color} />}
          title="Menu"
          clickHandler={menuClickHandler}
        />
      </StyledButton>
      <StyledLogo>
        <Logo
          color={color}
          href={logoHref}
          isLink={href ? true : false}
          linkElement={logoLinkElement}
          to={logoTo}
        >
          {siteTitle}
        </Logo>
      </StyledLogo>
      {children && (
        <StyledCta ctaHiddenBelow={ctaHiddenBelow}>{children}</StyledCta>
      )}
    </StyledComponent>
  )
}

Header.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(['normal', 'knockout']),
  ctaHiddenBelow: PropTypes.oneOf(['small', 'medium']),
  isFloated: PropTypes.bool,
  logoHref: PropTypes.string,
  logoTo: PropTypes.string,
  logoLinkElement: PropTypes.elementType,
  menuClickHandler: PropTypes.func,
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  children: null,
  color: 'normal',
  ctaHiddenBelow: null,
  isFloated: false,
  logoHref: null,
  logoTo: null,
  logoLinkElement: null,
  menuClickHandler: null,
  siteTitle: null,
}

export default Header
