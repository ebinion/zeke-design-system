import React from 'react' // eslint-disable-line no-unused-vars

import { Header } from '../'

export default {
  title: 'Organisms|Global/Header',
  component: Header,
}

export const componentPlayground = () => {
  return (
    <Header menuClickHandler={() => window.alert('clicked menu')}>
      String
    </Header>
  )
}
