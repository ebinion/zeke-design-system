import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import Text from './Text'

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

describe('<Text />', () => {
  it('renders without crashing', () => {
    expect(render(<Text />, container))
  })
})
