import React from 'react'
import PropTypes from 'prop-types'

import { Block, SectionHeader } from '../'

const Section = ({ superTitle, title, lead, children, isDark }) => {
  return (
    <Block
      as="section"
      color={isDark ? 'dark' : 'white'}
      padding="none"
      paddingBottom="var(--component-padding-xl)"
    >
      <Block padding="xl" constrain="text" isCentered>
        <SectionHeader
          title={title}
          superTitle={superTitle}
          isKnockedout={isDark}
        >
          {lead}
        </SectionHeader>
      </Block>
      {children}
    </Block>
  )
}

Section.propTypes = {
  superTitle: PropTypes.string,
  title: PropTypes.string,
  lead: PropTypes.node,
  isDark: PropTypes.bool,
}

export default Section
