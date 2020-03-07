import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import Note from './Note'

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

describe('<Note />', () => {
  it('renders without crashing', () => {
    expect(render(<Note />, container))
  })
})
