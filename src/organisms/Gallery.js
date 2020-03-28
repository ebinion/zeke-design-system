import React, { useState } from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Block, Modal, animationTokens, measurementTokens } from '..'

const Thumbnail = styled.button`
  appearance: none;
  box-shadow: none;
  border: 0;
  display: block;
  line-height: 0;
  position: relative;
  height: 0;
  margin: 0;
  padding: 100% 0 0;
  transition: transform ${animationTokens.duration}ms ${animationTokens.easing};
  width: 100%;

  &:active,
  &:hover {
    transform: scale(1.05);
  }
`

const ThumbnailInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
`

const GalleryItem = styled.li`
  flex: 1 0 50%;

  @media (min-width: ${measurementTokens.breakpoints.horizontal.s}) {
    flex-basis: 33.333333%;
  }

  @media (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    flex-basis: 25%;
    flex-grow: 0;
  }
`

const Figure = styled.figure`
  display: grid;
  grid-gap: ${measurementTokens.componentMargin.m};
  padding: 0;
  margin: 0;

  @media (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    grid-gap: ${measurementTokens.componentMargin.xl};
    grid-template-columns: 66fr 34fr;
  }

  @media (min-width: ${measurementTokens.breakpoints.horizontal.l}) {
    grid-template-columns: 1fr 320px;
  }
`
const FigureContent = styled.figcaption``
const FigureImage = styled.div``

const ModalComponent = ({ item, isOpen, handleClose }) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <Block>
        <Figure>
          <FigureImage>{item.image}</FigureImage>
          <FigureContent>{item.description}</FigureContent>
        </Figure>
      </Block>
    </Modal>
  )
}

const PreviewComponent = ({ items, handleMenuOpen }) => {
  const handlePreviewClick = (event, item, index) => {
    event.target.blur()
    handleMenuOpen(index)
  }

  const renderPreviewItems = () =>
    items.map((item, index) => (
      <GalleryItem key={`preview-items${index}`}>
        <Thumbnail>
          <ThumbnailInner
            onClick={event => handlePreviewClick(event, item, index)}
          >
            {item.image}
          </ThumbnailInner>
        </Thumbnail>
      </GalleryItem>
    ))

  return <Gallery>{renderPreviewItems()}</Gallery>
}

const GalleryComponent = ({ items }) => {
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
      />
    </>
  )
}

GalleryComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.node.isRequired,
      description: PropTypes.node,
    })
  ),
}

GalleryComponent.defaultProps = {}

export default GalleryComponent
