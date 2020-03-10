import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { addLeadingZero } from '../helpers/numbers'

const StyledTime = styled.time`
  font: inherit;
  color: inherit;
`

const Time = props => {
  const getUTCFullYear = () => {
    return props.date.getUTCFullYear().toString()
  }

  const getFullYear = () => {
    return props.date.getFullYear().toString()
  }

  const getUTCMonth = () => {
    return addLeadingZero(props.date.getUTCMonth() + 1)
  }

  const getMonth = () => {
    return addLeadingZero(props.date.getMonth() + 1)
  }

  const getUTCDate = () => {
    return addLeadingZero(props.date.getUTCDate())
  }

  const getDate = () => {
    return addLeadingZero(props.date.getDate())
  }

  const getUTCHour = () => {
    return addLeadingZero(props.date.getUTCHours())
  }

  const getUTCMinute = () => {
    return addLeadingZero(props.date.getUTCMinutes())
  }

  const getUTCSecond = () => {
    return addLeadingZero(props.date.getUTCSeconds())
  }

  const dateAttrString = `${getUTCFullYear()}-${getUTCMonth()}-${getUTCDate()}T${getUTCHour()}:${getUTCMinute()}:${getUTCSecond()}.000Z`
  const dateDisplay = props.children
    ? props.children
    : `${getMonth()}.${getDate()}.${getFullYear()}`

  return <StyledTime dateTime={dateAttrString}>{dateDisplay}</StyledTime>
}

Time.propTypes = {
  date: PropTypes.instanceOf(Date),
}

export default Time
