import React from 'react' // eslint-disable-line no-unused-vars

import { Header, Text } from '../'

const story = {
  title: 'Organisms/Global/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
}

export default story

const Template = args => (
  <Header {...args}>
    <Text>Header Content</Text>
  </Header>
)

export const header = Template.bind({})
header.args = {
  menuClickHandler: () => window.alert('clicked menu'),
  siteTitle: 'Site title',
  logoHref: 'https://example.com',
}
