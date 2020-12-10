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
  padding: var(--site-padding);
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
  return (
    <StyledComponent role="banner">
      <StyledButton>
        <IconButton
          icon={
            <IconMenu size="m" sizeMediumAndAbove="l" color={props.color} />
          }
          title="Menu"
          clickHandler={props.menuClickHandler}
        />
      </StyledButton>
      <StyledLogo>
        <Logo
          color={props.color}
          href={props.logoHref}
          linkElement={props.logoLinkElement}
          isLink={props.href ? true : false}
        >
          {props.siteTitle}
        </Logo>
      </StyledLogo>
      <StyledCta ctaHiddenBelow={props.ctaHiddenBelow}>
        {props.children}
      </StyledCta>
    </StyledComponent>
  )
}

Header.propTypes = {
  color: PropTypes.oneOf(['black', 'knockout']),
  children: PropTypes.node,
  menuClickHandler: PropTypes.func,
  siteTitle: PropTypes.element,
  ctaHiddenBelow: PropTypes.oneOf(['small', 'medium']),
  logoHref: PropTypes.string,
  logoLinkElement: PropTypes.node,
}

Header.defaultProps = {
  color: 'black',
}

export default Header
