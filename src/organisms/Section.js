import React from 'react'
import PropTypes from 'prop-types'

import { Block, SectionHeader } from '../'

const Section = ({ superTitle, title, lead, children, isDark, padding }) => {
  return (
    <Block as="section" color={isDark ? 'dark' : 'white'} padding={padding}>
      <Block padding="text" constrain="text" isCentered>
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
  padding: PropTypes.oneOf(['m', 'l', 'xl']),
}

Section.defaultProps = {
  padding: 'xl',
}

export default Section
