import React from 'react'
import { select } from '@storybook/addon-knobs'

import { Img, Figure, P } from '../'
import lorem from '../helpers/lorem'

const story = {
  title: 'Organisms/Figure',
  component: Figure,
}
export default story

const Template = args => <Figure {...args} />

export const figure = Template.bind({})
figure.args = {
  children: <P>{lorem.generateSentences(2)}</P>,
  figure: <Img src="https://via.placeholder.com/1200x700" />,
}
