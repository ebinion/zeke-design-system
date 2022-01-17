import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { A, IconLogo, Text } from '../'

const StyledComponent = styled.div`
  display: inline-flex;
  align-items: center;
`

const StyledLogo = styled.div`
  line-height: 0;
`

const StyledText = styled.div`
  margin-left: var(--component-padding);
`

const Logo = props => {
  const { children, color, linkElement, href, to } = props

  const isLink = () => (href || to || linkElement ? true : false)

  const renderLink = () => {
    return (
      <A as={linkElement} href={href} kind="incognito">
        {children}
      </A>
    )
  }

  const renderText = () => {
    return (
      <StyledText>
        <Text color={color} size="xl">
          {isLink() ? renderLink() : children}
        </Text>
      </StyledText>
    )
  }

  return (
    <StyledComponent>
      <StyledLogo
        as={isLink() ? linkElement || 'a' : false}
        href={isLink() && href}
        to={isLink() && to}
      >
        <IconLogo
          color={color === 'normal' ? 'black' : color}
          size="xl"
          sizeMediumAndAbove="xl"
          respondToHover={isLink()}
        />
      </StyledLogo>
      {props.children && renderText()}
    </StyledComponent>
  )
}

Logo.propTypes = {
  children: PropTypes.string,
  color: PropTypes.oneOf(['normal', 'knockout']),
  linkElement: PropTypes.elementType,
  href: PropTypes.string,
  to: PropTypes.string,
}

Logo.defaultProps = {
  color: 'normal',
}

export default Logo
