import React, { createRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledEmbed = styled.div`
  height: 0;
  position: relative;
  ${props => css`
    padding-top: ${props.paddingTop};
  `}

  object,
  iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`

const Embed = ({ children, ...props }) => {
  const wrapperRef = createRef()
  const [paddingTop, setPaddingTop] = useState('56.25%')
  const [isRatioSet, setIsRatioSet] = useState(false)

  useEffect(() => {
    if (!isRatioSet) {
      const objectEle =
        wrapperRef.current.querySelector('object') ||
        wrapperRef.current.querySelector('iframe')

      if (objectEle) {
        setPaddingTop(`${(objectEle.height / objectEle.width) * 100}%`)
      }

      setIsRatioSet(true)
    }
  }, [children, isRatioSet, wrapperRef])

  if (typeof children != 'string') {
    return (
      <StyledEmbed paddingTop={paddingTop} ref={wrapperRef}>
        {children}
      </StyledEmbed>
    )
  } else {
    return (
      <StyledEmbed
        paddingTop={paddingTop}
        ref={wrapperRef}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    )
  }
}

StyledEmbed.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]),
}

export default Embed
