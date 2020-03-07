import React from 'react'
import PropTypes from 'prop-types'

import { Block, SectionHeading, H2, P } from '../'

const SectionHeader = ({
  as,
  children,
  isKnockedout,
  lead,
  title,
  superTitle,
}) => {
  const composedLead = lead || children

  const getColor = () => {
    return isKnockedout ? 'knockout' : 'normal'
  }

  const renderLead = () => {
    if (typeof composedLead === 'string') {
      return (
        <P align="center" size="l" color={getColor()}>
          {composedLead}
        </P>
      )
    } else {
      return composedLead
    }
  }

  return (
    <Block as={as} constrain="text" padding="xl">
      {superTitle && (
        <SectionHeading isKnockedOut={isKnockedout}>
          {superTitle}
        </SectionHeading>
      )}
      {title && (
        <H2 as="h3" align="center" color={getColor()}>
          {title}
        </H2>
      )}
      {composedLead && renderLead()}
    </Block>
  )
}

SectionHeader.propTypes = {
  superTitle: PropTypes.string,
  title: PropTypes.string,
  lead: PropTypes.string,
  isKnockedout: PropTypes.bool,
  as: PropTypes.string,
}

SectionHeader.defaultProps = {
  as: 'div',
}

export default SectionHeader
