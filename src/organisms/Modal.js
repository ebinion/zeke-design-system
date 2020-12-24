import React from 'react' // eslint-disable-line no-unused-vars
import { createPortal } from 'react-dom'
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
  background: ${colorTokens.backgrounds.overlay};
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  transform: translateY(200px);
  pointer-events: none;
  transition-duration: ${animationTokens.duration.normal};
  transition-property: opacity, transform;
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

  ${props =>
    props.size === 'window' &&
    css`
      margin: 10vh auto;
      max-width: ${measurementTokens.maxTextWidth};
      width: 66vw;
      max-height: 80vh;
    `}
`

const StyledModalClose = styled.div`
  text-align: right;
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
      <StyledWrapper isOpen={this.props.isOpen}>
        <BodyStyle scrollIsLocked={this.props.isOpen} />
        <StyledModal size={this.props.size}>
          <Block>
            <StyledModalClose>
              <IconButton
                title="close"
                icon={<IconX />}
                type="button"
                clickHandler={this.props.handleClose}
              />
            </StyledModalClose>
          </Block>
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
