import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import anime from 'animejs/lib/anime.es.js'

import {
  animationTokens,
  colorTokens,
  measurementTokens,
  IconButton,
  IconX,
  A,
} from '../'

const StyledComponent = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${measurementTokens.zIndex.nav};

  ${props =>
    props.initialState &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
  ${props =>
    !props.isOpen &&
    css`
      pointer-events: none;
    `}
`

const StyledMenu = styled.div`
  background: ${colorTokens.backgrounds.flyout};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.s}) {
    max-width: ${measurementTokens.menuWidth};
  }
`

const StyledMask = styled.div`
  background: ${colorTokens.backgrounds.flyout};
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.s}) {
    background: ${colorTokens.backgrounds.overlay};
  }
`

const StyledClose = styled.div`
  position: absolute;
  text-align: center;
  top: ${measurementTokens.navButtonOffsetSmall};
  right: ${measurementTokens.navButtonOffsetSmall};

  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    top: ${measurementTokens.navButtonOffset};
    right: ${measurementTokens.navButtonOffset};
  }
`

const StyledNav = styled.nav`
  padding: ${measurementTokens.componentMargin.l};
  padding-top: calc(
    ${measurementTokens.componentMargin.xl} +
      ${measurementTokens.navButtonOffset}
  );
`

const StyleNavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${measurementTokens.touchTarget};
`

class FlyoutMenu extends React.Component {
  constructor(props) {
    super(props)

    // State
    this.state = {
      initialState: true,
    }

    // Refs
    this.closeRef = React.createRef()
    this.menuRef = React.createRef()
    this.navRef = React.createRef()
    this.wrapperRef = React.createRef()

    this.createAnimation = this.createAnimation.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  createAnimation() {
    this.timeline = anime
      .timeline({
        autoplay: false,
        easing: 'easeInOutCubic',
        duration: animationTokens.duration,
      })
      .add({
        targets: this.wrapperRef.current,
        opacity: [0, 1],
      })
      .add(
        {
          targets: this.menuRef.current,
          translateX: [-150, 0],
        },
        `-=${animationTokens.duration}`
      )
      .add(
        {
          targets: this.navRef.current.querySelectorAll('[data-nav-item]'),
          translateX: [-150, 0],
          delay: anime.stagger(30),
        },
        `-=${animationTokens.duration}`
      )
      .add(
        {
          targets: this.closeRef.current,
          opacity: [0, 1],
          duration: animationTokens.durationShort,
          translateY: [-10, 0],
        },
        `-=${animationTokens.duration / 2}`
      )
  }

  animate() {
    if (this.props.isOpen) {
      if (this.timeline.direction !== 'normal') {
        this.timeline.reverse()
      }
    } else {
      if (this.timeline.direction !== 'reverse') {
        this.timeline.reverse()
        this.timeline.completed = false
      }
    }

    this.timeline.play()
  }

  handleKeyPress(event) {
    if (event.keyCode === 27 && this.props.isOpen) {
      this.props.closeHandler()
    }
  }

  componentDidMount() {
    this.createAnimation()
    this.animate()
    document.addEventListener('keyup', this.handleKeyPress)
    this.setState({
      initialState: false,
    })
  }

  componentDidUpdate() {
    this.animate()
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress)
  }

  renderItems() {
    const LinkElement = this.props.Link
    return (
      <StyledNav ref={this.navRef} role="navigation" aria-label="Main">
        {this.props.items &&
          this.props.items.map((item, i) => (
            <StyleNavItem key={`navItem${i}`} data-nav-item>
              <A
                to={item.to}
                kind="nav"
                key={`navLink${i}`}
                as={LinkElement !== undefined ? LinkElement : 'a'}
              >
                {item.label}
              </A>
            </StyleNavItem>
          ))}
      </StyledNav>
    )
  }

  render() {
    return (
      <StyledComponent
        ref={this.wrapperRef}
        isOpen={this.props.isOpen}
        initialState={this.state.initialState}
      >
        <StyledMask onClick={this.props.closeHandler} />
        <StyledMenu ref={this.menuRef}>
          <StyledClose>
            <IconButton
              icon={IconX}
              title="Close"
              clickHandler={this.props.closeHandler}
            />
          </StyledClose>
          {this.renderItems()}
        </StyledMenu>
      </StyledComponent>
    )
  }
}

FlyoutMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  Link: PropTypes.element,
  isOpen: PropTypes.bool,
  closeHandler: PropTypes.func.isRequired,
}

FlyoutMenu.defaultProps = {
  isOpen: true,
  closeHandler: () => {},
}

export default FlyoutMenu
