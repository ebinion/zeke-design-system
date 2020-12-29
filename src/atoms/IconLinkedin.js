import React from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'
import { colorTokens, measurementTokens } from '../'

const IconLinkedin = props => {
  return (
    <Icon {...props} title="LinkedIn" viewbox="0 0 32 32">
      <path d="M29.63 0H2.362C1.058 0 0 1.034 0 2.306v27.385C0 30.965 1.058 32 2.362 32H29.63c1.305 0 2.37-1.035 2.37-2.309V2.306C32 1.034 30.935 0 29.63 0zM9.491 27.268H4.743V11.997h4.748v15.271zM7.117 9.909a2.751 2.751 0 1 1 0-5.502 2.751 2.751 0 0 1 0 5.502zm20.15 17.359h-4.741v-7.426c0-1.772-.035-4.05-2.467-4.05-2.47 0-2.847 1.929-2.847 3.921v7.554h-4.745V11.996h4.553v2.086h.065c.634-1.2 2.182-2.466 4.491-2.466 4.803 0 5.69 3.162 5.69 7.276v8.376h.001z"></path>
    </Icon>
  )
}

IconLinkedin.propTypes = {
  color: PropTypes.oneOf(Object.keys(colorTokens.icons)),
  respondToHover: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
  sizeSmallAndAbove: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
  sizeMediumAndAbove: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
  sizeLargeAndAbove: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
}

export default IconLinkedin
