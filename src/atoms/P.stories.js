import React from 'react'

import lorem from '../helpers/lorem'
import { P } from '../'

const story = {
  title: 'Atoms/Text/P',
  component: P,
  parameters: {
    componentSubtitle:
      'This component is a shortcut for <Text>. Please see it for additional usage information.',
  },
}

export const p = () => <P>{lorem.generateParagraphs(1)}</P>

export default story
