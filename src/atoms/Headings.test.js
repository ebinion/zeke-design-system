import React from 'react'
import renderer from 'react-test-renderer'

import { Heading, H1, H2, H3, H4, H5, H6 } from './'

describe('<Heading />', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<Heading>Example</Heading>)

    expect(component)
  })
})

it('<H1 /> renders without crashing', () => {
  const component = renderer.create(<H1>Example</H1>)

  expect(component)
})

it('<H2 /> renders without crashing', () => {
  const component = renderer.create(<H2>Example</H2>)

  expect(component)
})

test('<H3 /> renders without crashing', () => {
  const component = renderer.create(<H3>Example</H3>)

  expect(component)
})

test('<H4 /> renders without crashing', () => {
  const component = renderer.create(<H4>Example</H4>)

  expect(component)
})

test('<H5 /> renders without crashing', () => {
  const component = renderer.create(<H5>Example</H5>)

  expect(component)
})

test('<H6 /> renders without crashing', () => {
  const component = renderer.create(<H6>Example</H6>)

  expect(component)
})
