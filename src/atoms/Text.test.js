import React from 'react'
import renderer from 'react-test-renderer'

import { Text } from './Text'

describe('<Text />', () => {
  it('renders without crashing', () => {
    expect(renderer.create(<Text>Example</Text>))
  })
})
