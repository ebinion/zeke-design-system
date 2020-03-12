import React from 'react'
import PropTypes from 'prop-types'

import { A, H3, Text, Time, P } from '..'

const Note = ({
  date,
  linkElement,
  to,
  title,
  summary,
  image,
  headingLevel,
}) => {
  return (
    <A as={linkElement} to={to} kind="incognito">
      <article>
        {image}
        <Text noMargin color="light" size="s" align="center" respondToLinkHover>
          {date && <Time date={date} />}
        </Text>
        <H3
          lineHeight="tight"
          noMargin
          as={headingLevel}
          align="center"
          respondToLinkHover
        >
          {title}
        </H3>
        <P
          align="center"
          kind={image ? 'normal' : 'decorative'}
          size={image ? 'm' : 'l'}
          noMargin
          lineHeight={image ? 'tight' : 'normal'}
        >
          {summary}
        </P>
      </article>
    </A>
  )
}

Note.propTypes = {
  date: PropTypes.instanceOf(Date),
  to: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  linkElement: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
  ]),
  headingLevel: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
}

Note.defaultProps = {
  linkElement: 'a',
  headingLevel: 'h2',
}

export default Note
