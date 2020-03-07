import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import measurementTokens from '../tokens/measurementTokens'

const StyledRow = styled.div`
  margin-bottom: ${props => props.spacing};
  margin-top: ${props => props.spacing};

  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    margin-top: 0;
  }
`

export default class Rows extends React.Component {
  static propTypes = {
    size: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
  }

  static defaultProps = {
    size: 'm',
  }

  renderChildren() {
    if (this.props.children && this.props.children.length > 0) {
      return this.props.children.map((child, iteration) => (
        <StyledRow
          spacing={measurementTokens.componentMargin[this.props.size]}
          key={`row-${iteration}`}
        >
          {child}
        </StyledRow>
      ))
    }
  }

  render() {
    return <div>{this.renderChildren()}</div>
  }
}
