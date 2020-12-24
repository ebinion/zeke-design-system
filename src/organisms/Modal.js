import React from 'react' // eslint-disable-line no-unused-vars
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import styled, { css, createGlobalStyle } from 'styled-components'

import {
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
  pointer-events: none;
  transition-duration: ${animationTokens.duration.normal};
  transition-property: opacity;
  transition-timing-function: ${animationTokens.easing};
  z-index: ${measurementTokens.zIndex.modal};

  ${props =>
    props.size === 'window' &&
    css`
      background: ${colorTokens.backgrounds.overlay};
    `}

  ${props =>
    props.isOpen &&
    css`
      pointer-events: auto;
      opacity: 1;
    `};
`

const StyledModal = styled.div`
  background: ${colorTokens.backgrounds.light};
  height: 100%;
  overflow: scroll;
  transition-duration: ${animationTokens.duration.normal};
  transition-property: opacity, transform;
  transition-timing-function: ${animationTokens.easing};
  -webkit-overflow-scrolling: touch;

  ${props =>
    props.size === 'full' &&
    !props.isOpen &&
    css`
      transform: translateY(${animationTokens.slideDistance.long});
    `}

  ${props =>
    props.size === 'full' &&
    props.isOpen &&
    css`
      transform: 0;
    `}

  ${props =>
    props.size === 'window' &&
    css`
      height: auto;
      min-height: 25vh;
      max-height: 80vh;
      max-width: ${measurementTokens.maxTextWidth};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 0%);
      width: 66vw;
    `}

  ${props =>
    props.size === 'window' &&
    props.isOpen &&
    css`
      transform: translate(-50%, -50%);
    `}
`

const StyledModalClose = styled.div`
  text-align: right;
  padding: var(--component-padding);

  ${props =>
    props.size === 'full' &&
    css`
      padding-left: var(--site-padding);
      padding-right: var(--site-padding);
      padding-top: var(--site-padding);
    `}
`

const BodyStyle = createGlobalStyle`
  html,
  body {
    ${props =>
      props.scrollIsLocked &&
      css`
        overflow: hidden;
      `}
  }
`

export default class Modal extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    handleClose: PropTypes.func,
    portalQuery: PropTypes.string,
    size: PropTypes.oneOf(['window', 'full']),
  }

  static defaultProps = {
    isOpen: false,
    handleClose: () => {},
    size: 'full',
  }

  constructor(props) {
    super(props)

    this.renderModal = this.renderModal.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)

    this.portalRoot = null
    this.portalElement = null
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress)

    if (this.props.portalQuery) {
      this.portalRoot = document.querySelector(this.props.portalQuery)
      this.portalElement = document.createElement('div')
      this.portalRoot.appendChild(this.portalElement)
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress)

    if (this.portalRoot !== null) {
      this.portalRoot.removeChild(this.portalElement)
    }
  }

  handleKeyPress = event => {
    if (event.keyCode === 27 && this.props.isOpen) {
      this.props.handleClose()
    }
  }

  renderModal() {
    return (
      <StyledWrapper isOpen={this.props.isOpen} size={this.props.size}>
        <BodyStyle scrollIsLocked={this.props.isOpen} />
        <StyledModal isOpen={this.props.isOpen} size={this.props.size}>
          <StyledModalClose size={this.props.size}>
            <IconButton
              title="close"
              icon={<IconX />}
              type="button"
              clickHandler={this.props.handleClose}
            />
          </StyledModalClose>
          <div>{this.props.children}</div>
        </StyledModal>
      </StyledWrapper>
    )
  }

  render() {
    if (this.portalElement) {
      return createPortal(this.renderModal(), this.portalElement)
    } else {
      return this.renderModal()
    }
  }
}
