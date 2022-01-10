import React, { useState } from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import {
  Block,
  Modal,
  animationTokens,
  colorTokens,
  measurementTokens,
} from '..'

const StyledThumbnail = styled.button`
  appearance: none;
  outline: 3px solid rgba(255, 255, 255, 0);
  box-shadow: none;
  border: 0;
  cursor: pointer;
  display: block;
  line-height: 0;
  overflow: hidden;
  position: relative;
  height: 0;
  margin: 0;
  padding: 100% 0 0;
  transition-property: outline;
  transition-duration: ${animationTokens.duration.normal};
  transition-timing-function: ${animationTokens.easing};
  width: 100%;

  &:active,
  &:hover {
    outline: 3px solid ${colorTokens.text.linkHighlight};
    transition-duration: 0;
    z-index: 2;
  }
`

const StyledThumbnailInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition-property: transform;
  transition-duration: ${animationTokens.duration.normal};
  transition-timing-function: ${animationTokens.easing};

  button:active &,
  button:hover & {
    transform: scale(1.1);
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

const StyledGallery = styled.ul`
  display: grid;
  gap: var(--component-padding-l);
  justify-content: center;
  list-style: none;
  padding: 0;

  ${props => {
    if (props.itemsCount >= 2) {
      return css`
        grid-template-columns: repeat(2, 1fr);
      `
    } else {
      return css`
        grid-template-columns: repeat(1, 1fr);
      `
    }
  }}
  

  @media (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    ${props => {
      if (props.itemsCount >= 3) {
        return css`
          grid-template-columns: repeat(3, 1fr);
        `
      } else {
        return css`
          grid-template-columns: repeat(${props.itemCount}, 1fr);
        `
      }
    }}
  }

  @media (min-width: ${measurementTokens.breakpoints.horizontal.xl}) {
    ${props => {
      if (props.itemsCount >= 4) {
        return css`
          grid-template-columns: repeat(4, 1fr);
        `
      } else {
        return css`
          grid-template-columns: repeat(${props.itemCount}, 1fr);
        `
      }
    }}
  }
`

const Figure = styled.figure`
  display: grid;
  grid-gap: ${measurementTokens.componentMargin.m};
  padding: 0 var(--site-padding) var(--component-padding);
  margin: 0;

  @media (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    box-sizing: border-box;
    grid-gap: ${measurementTokens.componentMargin.xl};
    grid-template-columns: 66fr 34fr;
    min-height: 100vh;
  }

  @media (min-width: ${measurementTokens.breakpoints.horizontal.l}) {
    grid-template-columns: 1fr 320px;
  }
`

const FigureContent = styled.figcaption`
  padding: var(--site-padding) 0;
`

const FigureImage = styled.div`
  overflow: hidden;
  padding: var(--site-padding) 0;
`

const ModalComponent = ({ item, isOpen, handleClose, portalTarget }) => {
  return (
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
      portalTarget={portalTarget}
    >
      <Figure>
        <FigureImage>{item.image}</FigureImage>
        <FigureContent>{item.description}</FigureContent>
      </Figure>
    </Modal>
  )
}

const PreviewComponent = ({ items, handleMenuOpen }) => {
  const handlePreviewClick = (event, index) => {
    event.target.blur()
    handleMenuOpen(index)
  }

  const renderPreviewItems = () =>
    items.map((item, index) => (
      <li key={`preview-items${index}`}>
        <StyledThumbnail type="button" aria-label={item.title || ''}>
          <StyledThumbnailInner
            onClick={event => handlePreviewClick(event, index)}
          >
            {item.image}
          </StyledThumbnailInner>
        </StyledThumbnail>
      </li>
    ))

  return (
    <StyledGallery itemsCount={items.length}>
      {renderPreviewItems()}
    </StyledGallery>
  )
}

const Gallery = ({ items, portalTarget }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState(false)

  const handleMenuOpen = itemIndex => {
    setModalIsOpen(true)
    setCurrentItem(items[itemIndex])
  }

  const handleMenuClose = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <PreviewComponent items={items} handleMenuOpen={handleMenuOpen} />
      <ModalComponent
        items={items}
        isOpen={modalIsOpen}
        handleClose={handleMenuClose}
        item={currentItem}
        portalTarget={portalTarget}
      />
    </>
  )
}

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.node.isRequired,
      description: PropTypes.node,
      title: PropTypes.string,
    })
  ),
  portalTarget: PropTypes.element,
}

export default Gallery
