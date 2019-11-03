import React from 'react'

import lorem from '../helpers/lorem'
import P from './P'

export default {
  title: 'Components|Atoms/P',
  component: P,
  parameters: {
    componentSubtitle:
      'This component is a shortcut for <Text>. Please see it for additional usage information.',
  },
}

export const component = () => <P>{lorem.generateParagraphs(1)}</P>