import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colorTokens, measurementTokens, Text } from '../'

const StyledComponent = styled.button`
  appearance: none;
  background: none;
  border: 0;
  box-shadow: 0;
  color: ${measurementTokens.nav};
  cursor: pointer;
  padding: 0;
  text-align: center;
  min-height: ${measurementTokens.touchTarget};
  min-width: ${measurementTokens.touchTarget};

  &:hover,
  &:focus {
    color: ${colorTokens.text.navHighlight};
    outline: 0;
  }
`

const IconButton = props => {
  const Icon = props.icon
  const buttonRef = React.createRef()

  const clickHandler = event => {
    buttonRef.current.blur()
    props.clickHandler(event)
  }

  return (
    <StyledComponent onClick={clickHandler} type={props.type} ref={buttonRef}>
      <Text element="span" visuallyHidden>
        {props.title}
      </Text>
      <Icon size={props.size} />
    </StyledComponent>
  )
}

IconButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  size: PropTypes.oneOf(['s', 'm']),
  clickHandler: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

IconButton.defaultProps = {
  clickHandler: () => {},
  type: 'button',
  size: 'm',
}

export default IconButton