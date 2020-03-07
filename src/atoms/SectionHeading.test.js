import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import SectionHeading from './SectionHeading'

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

describe('<SectionHeading />', () => {
  it('renders without crashing', () => {
    expect(render(<SectionHeading />, container))
  })
})
