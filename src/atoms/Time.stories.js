import React from 'react'
import { Time } from '../'

const story = {
  title: 'Atoms/Text/Time',
  Component: Time,
}

export const component = () => <Time date={new Date()} />

export default story