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
  const isLink = () =>
    props.href || props.to || props.linkElement ? true : false

  const renderLink = () => {
    return (
      <A as={props.linkElement} href={props.href} kind="incognito">
        {props.children}
      </A>
    )
  }

  const renderText = () => {
    return (
      <StyledText>
        <Text color={props.color} size="xl">
          {isLink() ? renderLink() : props.children}
        </Text>
      </StyledText>
    )
  }

  return (
    <StyledComponent>
      <StyledLogo
        as={isLink() ? props.linkElement || 'a' : false}
        href={isLink() && props.href}
        to={isLink() && props.to}
      >
        <IconLogo
          color={props.color}
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
