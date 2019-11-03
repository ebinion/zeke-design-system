import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import A from './A'

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

describe('<A />', () => {
  it('renders without crashing', () => {
    expect(render(<A />, container))
  })
})
