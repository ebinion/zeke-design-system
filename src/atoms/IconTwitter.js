import React from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'
import { colorTokens, measurementTokens } from '../'

const IconTwitter = props => {
  return (
    <Icon {...props} title="Twitter" viewbox="0 0 32 26">
      <path d="M10.064 26A18.587 18.587 0 0 1 0 23.051c.514.061 1.036.092 1.566.092 3.076 0 5.907-1.049 8.153-2.81a6.573 6.573 0 0 1-6.133-4.558 6.578 6.578 0 0 0 2.965-.112 6.568 6.568 0 0 1-5.266-6.436l.001-.083a6.536 6.536 0 0 0 2.974.821 6.56 6.56 0 0 1-2.921-5.463c0-1.203.324-2.33.889-3.3A18.642 18.642 0 0 0 15.76 8.06 6.565 6.565 0 0 1 22.155 0c1.888 0 3.595.797 4.792 2.073A13.142 13.142 0 0 0 31.116.48a6.578 6.578 0 0 1-2.887 3.631A13.116 13.116 0 0 0 32 3.077a13.347 13.347 0 0 1-3.276 3.398c.013.281.019.565.019.849 0 8.674-6.603 18.675-18.679 18.675"></path>
    </Icon>
  )
}

IconTwitter.propTypes = {
  color: PropTypes.oneOf(Object.keys(colorTokens.icons)),
  respondToHover: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
  sizeSmallAndAbove: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
  sizeMediumAndAbove: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
  sizeLargeAndAbove: PropTypes.oneOf(Object.keys(measurementTokens.icons)),
}

export default IconTwitter
