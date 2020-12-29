import React from 'react'
import { boolean, select } from '@storybook/addon-knobs'

import { Modal } from '..'

const story = {
  title: 'Organisms/Modal',
  component: Modal,
}

const isOpenKnob = () => boolean('Is open?', false)
const sizeKnob = () => select('Size', ['full', 'window'], 'full')

const handleClose = () => {
  window.alert(
    'Close triggered, you’ll want to do something better with this. \n(hint: change the isOpen prop to close it).'
  )
}

export const modal = () => {
  return (
    <Modal isOpen={isOpenKnob()} size={sizeKnob()} handleClose={handleClose}>
      Modal Content
    </Modal>
  )
}

export default story
