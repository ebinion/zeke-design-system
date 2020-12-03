import React from 'react'
import { boolean } from '@storybook/addon-knobs'

import { FlyoutMenu } from '../'

const story = {
  title: 'Organisms/Global/Flyout Menu',
  component: FlyoutMenu,
}

const isOpenKnob = () => boolean('Menu is open', true)

export const componentPlayground = () => {
  const items = [
    {
      label: 'Home',
      to: 'http://example.com',
    },
    {
      label: 'Ideas',
      to: 'http://example.com',
    },
    {
      label: 'Talks',
      to: 'http://example.com',
    },
    {
      label: 'About',
      to: 'http://example.com',
    },
  ]

  return (
    <FlyoutMenu
      items={items}
      isOpen={isOpenKnob()}
      closeHandler={() => {
        window.alert('Close clicked')
      }}
    />
  )
}

export default story