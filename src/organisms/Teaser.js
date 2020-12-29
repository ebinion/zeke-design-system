import React from 'react'
import PropTypes from 'prop-types'

import { A, H3, Text, P } from '..'

const Note = ({
  color,
  headingLevel,
  image,
  linkElement,
  superTitle,
  summary,
  title,
  to,
}) => {
  const getSuperTitleColor = () => {
    switch (color) {
      case 'black':
        return 'light'
      case 'knockout':
        return 'xLight'
      default:
        return color
    }
  }

  return (
    <A as={linkElement} to={to} kind="incognito">
      <article>
        {image}
        <Text
          noMargin
          color={getSuperTitleColor()}
          size="s"
          respondToLinkHover
          lineHeight="tight"
          isUppercased
        >
          {superTitle}
        </Text>
        <H3
          color={color}
          kind="normal"
          margin="tight"
          as={headingLevel}
          respondToLinkHover
        >
          {title}
        </H3>
        <P color={color} size={image ? 'm' : 'l'} noMargin lineHeight="tight">
          {summary}
        </P>
      </article>
    </A>
  )
}

Note.propTypes = {
  color: PropTypes.oneOf(['black', 'knockout']),
  image: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  headingLevel: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  linkElement: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  superTitle: PropTypes.node,
  summary: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string.isRequired,
}

Note.defaultProps = {
  color: 'black',
  headingLevel: 'h2',
  linkElement: 'a',
}

export default Note
