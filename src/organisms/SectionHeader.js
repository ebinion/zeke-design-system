import React from 'react'
import PropTypes from 'prop-types'

import { Block, Columns, Column, SectionHeading, H2, Text } from '../'

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
        <Text size="l" color={getColor()} noMargin>
          {composedLead}
        </Text>
      )
    } else {
      return composedLead
    }
  }

  return (
    <Block as={as} isInset padding="none">
      {superTitle && <SectionHeading>{superTitle}</SectionHeading>}
      <Columns base={10}>
        <Column start={1} span={4}>
          {title && (
            <H2 as="h3" color={getColor()} noMargin>
              {title}
            </H2>
          )}
        </Column>
        <Column start={5} span={6}>
          {composedLead && renderLead()}
        </Column>
      </Columns>
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
  as: 'header',
}

export default SectionHeader
