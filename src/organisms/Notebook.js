import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { A, Badge, colorTokens, H3, measurementTokens, P, Text } from '../'

const StyledNotebook = styled.div`
  background: #d5d5d5;
  border-radius: 0 8px 8px 0;
  box-shadow: 0 2px 8px ${colorTokens.shadows.light};
  height: 0;
  overflow: hidden;
  padding-top: 135.47%;
  position: relative;

  &::before {
    border-left: 10px solid #2a2a2a;
    box-shadow: 0 0 0 2px ${colorTokens.shadows.light};
    background: #000;
    display: block;
    content: '';
    position: absolute;
    height: 100%;
    width: 2px;
    left: 0;
    top: 0;
    z-index: 2;
  }
`

const StyledImage = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0%;
  left: 0;

  > * {
    height: 100%;
  }
`

const StyledBadge = styled.span`
  position: absolute;
  bottom: 10px;
  right: 10px;
`

const StyledContent = styled.div`
  margin-top: ${measurementTokens.componentMargin.s};
`

const Notebook = props => {
  const renderBadge = () => {
    if (props.count) {
      return (
        <StyledBadge>
          <Badge>
            {props.count}{' '}
            <Text as="span" visuallyHidden>
              {' '}
              articles in {props.title}
            </Text>
          </Badge>
        </StyledBadge>
      )
    } else {
      return null
    }
  }

  return (
    <A
      as={props.linkAs}
      href={props.href || props.to}
      to={props.href || props.to}
      kind="incognito"
    >
      <StyledNotebook>
        <StyledImage>{props.image}</StyledImage>
        {renderBadge()}
      </StyledNotebook>
      <StyledContent>
        <H3 noMargin as={props.headingAs} respondToLinkHover>
          {props.title}
        </H3>
        <P noMargin respondToLinkHover>
          {props.description}
        </P>
      </StyledContent>
    </A>
  )
}

Notebook.propTypes = {
  count: PropTypes.number,
  description: PropTypes.string,
  headingAs: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  image: PropTypes.element.isRequired,
  linkAs: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
  title: PropTypes.string,
  to: PropTypes.string.isRequired,
}

Notebook.defaultProps = {
  linkAs: 'a',
  headingAs: 'h4',
}

export default Notebook
