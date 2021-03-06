import React from 'react'
import PropTypes from 'prop-types'

import { Block, SectionHeader, measurementTokens } from '../'

const Section = ({ superTitle, title, lead, children, isDark }) => {
  return (
    <Block
      as="section"
      color={isDark ? 'dark' : 'white'}
      padding="none"
      paddingBottom={measurementTokens.componentPadding.xl}
    >
      <SectionHeader
        title={title}
        superTitle={superTitle}
        isKnockedout={isDark}
        as="header"
      >
        {lead}
      </SectionHeader>
      {children}
    </Block>
  )
}

Section.propTypes = {
  superTitle: PropTypes.string,
  title: PropTypes.string,
  lead: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
  isDark: PropTypes.bool,
}

export default Section
