import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {addLeadingZero} from '../helpers/numbers'

const StyledTime = styled.time`
  font: inherit;
  color: inherit;
`

export default class Time extends React.Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date)
  }

  getUTCFullYear() {
    return this.props.date.getUTCFullYear().toString()
  }

  getFullYear() {
    return this.props.date.getFullYear().toString()
  }

  getUTCMonth() {
    return addLeadingZero(this.props.date.getUTCMonth() + 1)
  }

  getMonth() {
    return addLeadingZero(this.props.date.getMonth() + 1)
  }

  getUTCDate() {
    return addLeadingZero(this.props.date.getUTCDate())
  }

  getDate() {
    return addLeadingZero(this.props.date.getDate())
  }

  getUTCHour() {
    return addLeadingZero(this.props.date.getUTCHours())
  }

  getUTCMinute() {
    return addLeadingZero(this.props.date.getUTCMinutes())
  }

  getUTCSecond() {
    return addLeadingZero(this.props.date.getUTCSeconds())
  }

  render() {
    const dateAttrString = `${this.getUTCFullYear()}-${this.getUTCMonth()}-${this.getUTCDate()}T${this.getUTCHour()}:${this.getUTCMinute()}:${this.getUTCSecond()}.000Z`
    const dateDisplay = this.props.children ? this.props.children : `${this.getMonth()}.${this.getDate()}.${this.getFullYear()}`

    return <StyledTime dateTime={dateAttrString}>{dateDisplay}</StyledTime>
  }
}
