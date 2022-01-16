import React from 'react'

import lorem from '../helpers/lorem'
import { A } from '../'

const story = {
  title: 'Atoms/Links & Buttons/A',
  component: A,
  parameters: {
    componentSubtitle:
      'Anchor element that can be used with link helpers from frameworks or stand alone.',
  },
}

const words = lorem.generateWords(2)

const Template = args => <A {...args} />

export const a = Template.bind({})
a.args = {
  children: words,
  href: '#',
  onClick: event => event.preventDefault(),
}

export const kindNav = Template.bind({})
kindNav.args = {
  children: words,
  href: '#',
  kind: 'nav',
  onClick: event => event.preventDefault(),
}

export const kindIncognito = Template.bind({})
kindIncognito.args = {
  children: words,
  href: '#',
  kind: 'incognito',
  onClick: event => event.preventDefault(),
}

export const keyboardOnly = Template.bind({})
keyboardOnly.args = {
  children: words,
  href: '#',
  keyboardOnly: true,
  onClick: event => event.preventDefault(),
}

export default story
