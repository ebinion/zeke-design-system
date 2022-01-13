import React from 'react'
import PropTypes from 'prop-types'

import { Block, SectionHeader } from '../'

const getPaddingVar = padding => {
  switch (padding) {
    case 'xl':
      return 'var(--component-margin-xl)'
    case 'l':
      return 'var(--component-margin-l)'
    default:
      return 'var(--component-margin)'
  }
}

const Section = ({ superTitle, title, lead, children, isDark, padding }) => {
  return (
    <Block
      as="section"
      color={isDark ? 'dark' : 'white'}
      padding="none"
      paddingBottom={getPaddingVar(padding)}
    >
      <Block padding={padding} constrain="text" isCentered>
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
