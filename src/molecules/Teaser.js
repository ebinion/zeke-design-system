import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colorTokens from '../design-system-tokens/colors'
import sizeTokens from '../design-system-tokens/sizes'
import animationTokens from '../design-system-tokens/animation'
import H2 from '../atoms/H2'
import Strong from '../atoms/Strong'
import Text from '../atoms/Text'
import Time from '../atoms/Time'

const StyledContainer = styled.a`
  display: block;
  background-color: ${colorTokens.backgrounds.teaser};
  cursor: pointer;
  text-decoration: none;
  padding: ${sizeTokens['component-padding']};
  transition: ${animationTokens['transition-duration']} all ${animationTokens['transition-easing']};

  &:hover {
    background-color: ${colorTokens.backgrounds['teaser-highlight']};
  }
`

export default class Teaser extends React.Component {
  static propTypes = {
    category: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    title: PropTypes.string,
  }

  renderCategory() {
    if(this.props.category) {
      return (
        <>
          <Strong uppercase color="knockout">{this.props.category}</Strong>
          {' '}/{' '}
        </>
      )
    }
  }

  renderDate() {
    if(this.props.date) {
      return <Time date={this.props.date} />
    }
  }

  render() {
    return (
      <StyledContainer>
        <Text noMargin size="s" color="knockout">
          {this.renderCategory()}
          {this.renderDate()}
        </Text>
        <H2 color="knockout" noMargin>
          {this.props.title}
        </H2>
      </StyledContainer>
    )
  }
}
