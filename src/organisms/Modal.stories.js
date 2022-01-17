import React, { useState } from 'react'
import { select } from '@storybook/addon-knobs'

import { Button, Modal } from '..'

const story = {
  title: 'Organisms/Modal',
  component: Modal,
}

const sizeKnob = () => select('Size', ['full', 'window'], 'full')

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        size={sizeKnob()}
        handleClose={handleClose}
        portalQuery="#portal"
      >
        Modal content goes here
      </Modal>
    </div>
  )
}

export const modal = () => <ModalComponent />

export default story
