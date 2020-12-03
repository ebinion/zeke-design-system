import React from 'react'
import { boolean } from '@storybook/addon-knobs'

import { Modal } from '..'

const story = {
  title: 'Organisms/Modal',
  component: Modal,
}

const isOpenKnob = () => boolean('Is open?', false)

export const componentPlayground = () => {
  return <Modal isOpen={isOpenKnob()}>Modal Content</Modal>
}

export default story