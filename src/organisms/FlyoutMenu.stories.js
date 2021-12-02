import React, { useState } from 'react'

import { Button, FlyoutMenu, Text } from '../'
import lorem from '../helpers/lorem'

const story = {
  title: 'Organisms/Global/Flyout Menu',
  component: FlyoutMenu,
}

const graph = lorem.generateParagraphs(1)

const FlyoutMenuExample = () => {
  const [isOpen, setIsOpen] = useState(false)

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

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open Menu</Button>
      <Text>{graph}</Text>
      <FlyoutMenu items={items} isOpen={isOpen} closeHandler={handleClose} />
    </div>
  )
}
export const flyoutMenu = () => <FlyoutMenuExample />

export default story
