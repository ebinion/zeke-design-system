import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import Icon from './Icon'

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

describe('<Icon />', () => {
  it('renders without crashing', () => {
    expect(render(<Icon />, container))
  })
})
