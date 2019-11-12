import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import Teaser from './Teaser'

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

describe('<Teaser />', () => {
  it('renders without crashing', () => {
    expect(render(<Teaser />, container))
  })
})
