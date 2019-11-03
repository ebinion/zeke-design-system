import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import Heading from './Heading'

let container = null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('<Heading />', () => {
  it('renders without crashing', () => {
    expect(render(<Heading />, container))
  })
})
