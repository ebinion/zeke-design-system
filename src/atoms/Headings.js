import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colorTokens from '../design-system-tokens/colors'
import textTokens from '../design-system-tokens/text'

const StyledHeading = styled.h1`
  color: ${colorTokens.text.heading};
  font-weight: ${textTokens.heading.fontWeightBold};
  font-family: ${textTokens.heading.fontFamily};
  text-align: ${props => (props.align ? props.align : 'left')};
  margin: 0;

  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    margin-top: 0;
  }
`

const StyledComponents = {
  h1: styled(StyledHeading)`
    font-size: ${textTokens.sizes.xxl.size};
    line-height: ${textTokens.sizes.xxl.lineHeight};
    margin-bottom: ${textTokens.sizes.xxl.spacing};
    margin-top: ${textTokens.sizes.xxl.spacing};
  `,
  h2: styled(StyledHeading)`
    font-size: ${textTokens.sizes.xl.size};
    line-height: ${textTokens.sizes.xl.lineHeight};
    margin-bottom: ${textTokens.sizes.xl.spacing};
    margin-top: ${textTokens.sizes.xl.spacing};
  `,
  h3: styled(StyledHeading)`
    font-size: ${textTokens.sizes.l.size};
    line-height: ${textTokens.sizes.l.lineHeight};
    margin-bottom: ${textTokens.sizes.l.spacing};
    margin-top: ${textTokens.sizes.l.spacing};
  `,
  h4: styled(StyledHeading)`
    font-size: ${textTokens.sizes.m.size};
    line-height: ${textTokens.sizes.m.lineHeight};
    margin-bottom: ${textTokens.sizes.m.spacing};
    margin-top: ${textTokens.sizes.m.spacing};
  `,
  h5: styled(StyledHeading)`
    font-size: ${textTokens.sizes.s.size};
    line-height: ${textTokens.sizes.s.lineHeight};
    margin-bottom: ${textTokens.sizes.s.spacing};
    margin-top: ${textTokens.sizes.s.spacing};
  `,
  h6: styled(StyledHeading)`
    font-size: ${textTokens.sizes.xs.size};
    line-height: ${textTokens.sizes.xs.lineHeight};
    margin-bottom: ${textTokens.sizes.xs.spacing};
    margin-top: ${textTokens.sizes.xs.spacing};
  `
}

export class Heading extends React.PureComponent {
  static propTypes = {
    element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    appearance: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    align: PropTypes.oneOf(['left', 'center', 'right'])
  }

  static defaultProps = {
    element: 'h1'
  }

  render() {
    const { appearance, element, children } = this.props

    const Component = StyledComponents[`${appearance ? appearance : element}`]
    return (
      <Component as={element} {...this.props}>
        {children}
      </Component>
    )
  }
}

export const H1 = props => {
  const { element, children } = props

  return (
    <Heading element="h1" {...props}>
      {children}
    </Heading>
  )
}

export const H2 = props => {
  const { element, children } = props

  return (
    <Heading element="h2" {...props}>
      {children}
    </Heading>
  )
}

export const H3 = props => {
  const { element, children } = props

  return (
    <Heading element="h3" {...props}>
      {children}
    </Heading>
  )
}

export const H4 = props => {
  const { element, children } = props

  return (
    <Heading element="h4" {...props}>
      {children}
    </Heading>
  )
}

export const H5 = props => {
  const { element, children } = props

  return (
    <Heading element="h5" {...props}>
      {children}
    </Heading>
  )
}

export const H6 = props => {
  const { element, children } = props

  return (
    <Heading element="h6" {...props}>
      {children}
    </Heading>
  )
}
