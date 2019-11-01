import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colorTokens from '../design-system-tokens/colors'
import textTokens from '../design-system-tokens/text'

const StyledP = styled.p`
  color: ${props => props.color};
  font-weight: ${textTokens.normal.fontWeightNormal};
  font-family: ${textTokens.normal.fontFamily};
  font-size: ${props => props.size};
  line-height: ${props => props.lineHeight};
  text-align: ${props => props.align};
  margin: ${props => props.spacing} 0;

  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    margin-top: 0;
  }
`

export class Text extends React.PureComponent {
  static propTypes = {
    element: PropTypes.oneOf(['p', 'div']),
    align: PropTypes.oneOf(['left', 'center', 'right']),
    lineHeight: PropTypes.oneOf(['normal', 'tight']),
    size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
    color: PropTypes.oneOf(['bold', 'normal', 'light', 'knockout', 'success', 'warning', 'error'])
  }

  static defaultProps = {
    element: 'p',
    lineHeight: 'normal',
    size: 'm',
    align: 'left',
    color: 'normal'
  }

  render() {
    const { color, element, children, lineHeight, size } = this.props

    const Component = StyledP
    const lineHeightSize =
      lineHeight === 'normal'
        ? textTokens.sizes[size].lineHeightNormal
        : textTokens.sizes[size].lineHeightTight

    return (
      <Component
        {...this.props}
        as={element}
        color={colorTokens.text[color]}
        lineHeight={lineHeightSize}
        size={textTokens.sizes[size].size}
        spacing={textTokens.sizes[size].spacing}>
        {children}
      </Component>
    )
  }
}

export const P = props => <Text {...props} element="p" />
