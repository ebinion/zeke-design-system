import React from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'
import { colorTokens, measurementTokens } from '../'

const IconGithub = props => {
  return (
    <Icon {...props} title="Github" viewbox="0 0 32 32">
      <path d="M15.999 1C7.164 1 0 8.163 0 17.001c0 7.068 4.584 13.065 10.943 15.181.8.147 1.092-.347 1.092-.771 0-.38-.014-1.386-.022-2.721-4.451.967-5.39-2.145-5.39-2.145-.728-1.848-1.776-2.34-1.776-2.34-1.453-.993.11-.973.11-.973 1.606.113 2.451 1.649 2.451 1.649 1.427 2.445 3.745 1.739 4.656 1.329.145-1.034.559-1.739 1.016-2.139-3.553-.404-7.288-1.776-7.288-7.908 0-1.747.623-3.175 1.647-4.293-.164-.405-.713-2.032.157-4.234 0 0 1.343-.43 4.4 1.64a15.355 15.355 0 0 1 4.006-.539c1.359.006 2.728.184 4.006.539 3.055-2.07 4.396-1.64 4.396-1.64.873 2.203.324 3.83.159 4.234 1.025 1.119 1.645 2.547 1.645 4.293 0 6.147-3.741 7.499-7.305 7.895.575.494 1.086 1.47 1.086 2.963 0 2.139-.02 3.865-.02 4.389 0 .428.288.926 1.1.769 6.352-2.12 10.933-8.113 10.933-15.18 0-8.838-7.164-16.001-16.001-16.001L15.999 1z"></path>
    </Icon>
  )
}

IconGithub.propTypes = {
  color: PropTypes.oneOf(Object.keys(colorTokens.icons)),
  respondToHover: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
  sizeSmallAndAbove: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
  sizeMediumAndAbove: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
  sizeLargeAndAbove: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
}

export default IconGithub
