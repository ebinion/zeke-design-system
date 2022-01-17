import React, { useState } from 'react' // eslint-disable-line no-unused-vars
import { Waypoint } from 'react-waypoint'

import { Animate } from '../'

const AnimateOnEnter = props => {
  const { children, ...animateProps } = props
  const [isPlaying, setIsPlaying] = useState(false)

  const handleEnter = () => setIsPlaying(true)

  return (
    <Animate {...animateProps} isPlaying={isPlaying}>
      <Waypoint onEnter={handleEnter} topOffset="20%" bottomOffset="20%" />
      {children}
    </Animate>
  )
}

AnimateOnEnter.propTypes = Animate.propTypes

AnimateOnEnter.defaultProps = {
  delay: '0',
}

export default AnimateOnEnter
