import React, { useState, useEffect } from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import styled, { css, createGlobalStyle } from 'styled-components'

import {
  Block,
  IconButton,
  IconX,
  animationTokens,
  colorTokens,
  measurementTokens,
} from '..'

const StyledWrapper = styled.div`
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  transform: translateY(200px);
  pointer-events: none;
  transition-duration: ${animationTokens.duration}ms;
  transition-property: opacity transform;
  transition-timing-function: ${animationTokens.easing};
  z-index: ${measurementTokens.zIndex.modal};

  ${props =>
    props.isOpen &&
    css`
      pointer-events: auto;
      opacity: 1;
      transform: translateY(0);
    `};
`

const StyledModal = styled.div`
  background: ${colorTokens.backgrounds.light};
  height: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`

const StyledModalContent = styled.div``

const StyledModalClose = styled.div`
  text-align: right;
`

const BodyStyle = createGlobalStyle`
  body {
    ${props =>
      props.scrollIsLocked &&
      css`
        overflow: hidden;
      `}
  }
`

const Modal = ({ handleClose, isOpen, ...props }) => {
  const [hasPlayed, setHasPlayed] = useState(false)

  const getModelIsOpen = () => {
    if (isOpen && !hasPlayed) {
      setHasPlayed(true)
      return true
    } else if (isOpen) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.keyCode === 27 && isOpen) {
        handleClose()
      }
    }

    document.addEventListener('keyup', handleKeyPress)

    return () => document.removeEventListener('keyup', handleKeyPress)
  }, [handleClose, isOpen])

  return (
    <StyledWrapper isOpen={getModelIsOpen()}>
      <BodyStyle scrollIsLocked={getModelIsOpen()} />
      <StyledModal>
        <Block>
          <StyledModalClose>
            <IconButton
              title="close"
              icon={<IconX />}
              type="button"
              clickHandler={handleClose}
            />
          </StyledModalClose>
        </Block>
        <StyledModalContent>{props.children}</StyledModalContent>
      </StyledModal>
    </StyledWrapper>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
}

Modal.defaultProps = {
  isOpen: false,
}

export default Modal