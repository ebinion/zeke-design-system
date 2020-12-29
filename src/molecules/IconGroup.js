import React from 'react' // eslint-disable-line no-unused-vars
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledIconGroup = styled.div`
  align-items: baseline;
  display: flex;

  > * {
    margin-right: var(--component-padding);
  }

  > *:last-child {
    margin-right: 0;
  }
`

const IconGroup = props => {
  return <StyledIconGroup>{props.children}</StyledIconGroup>
}

IconGroup.propTypes = {
  children: PropTypes.node,
}

IconGroup.defaultProps = {}

export default IconGroup
