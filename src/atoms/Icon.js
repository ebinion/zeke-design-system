import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { measurementTokens } from '../'

const StyledIcon = styled.svg`
  color: inherit;
  fill: currentColor;
  height: auto;
  width: ${props => measurementTokens.icons[props.size]};
`

export default class Icon extends React.Component {
  static propTypes = {
    viewbox: PropTypes.string,
    title: PropTypes.string,
    size: PropTypes.oneOf(['s', 'm']),
  }

  static defaultProps = {
    size: 'm',
  }

  render() {
    const { viewbox, title, size } = this.props

    return (
      <StyledIcon size={size} viewBox={viewbox} aria-label={title}>
        <title>{this.props.title}</title>
        {this.props.children}
      </StyledIcon>
    )
  }
}
