import React, { createRef, useState, useEffect } from 'react'
import PropType from 'prop-types'
import styled from 'styled-components'

import { colorTokens, measurementTokens, textTokens } from '../'

const iframeWrapperClass = 'iframeWrapper'
const imageWrapperClass = 'imageWrapper'

const StyledHTML = styled.div`
  font-weight: ${textTokens.normal.weightNormal};
  font-family: ${textTokens.normal.fontFamily};
  color: ${colorTokens.text.normal};
  font-size: ${textTokens.sizes.m.size};
  line-height: ${textTokens.sizes.m.lineHeightTight};
  margin: 0;

  /* BLOCKS */
  p {
    color: inherit;
    font: inherit;
    line-height: ${textTokens.sizes.m.lineHeightNormal};
    margin: ${textTokens.sizes.m.spacing} 0;
  }
  p:first-child {
    margin-top: 0;
  }
  p:last-child {
    margin-bottom: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colorTokens.text.heading};
    font-weight: ${textTokens.heading.weightBold};
    font-family: ${textTokens.heading.fontFamily};
  }
  h1 {
    font-size: ${textTokens.sizes.xxl.size};
    line-height: ${textTokens.sizes.xxl.lineHeightNormal};
    margin: ${textTokens.sizes.xxl.spacing} 0 0 0;
  }
  h2 {
    font-size: ${textTokens.sizes.xl.size};
    line-height: ${textTokens.sizes.xl.lineHeightNormal};
    margin: ${textTokens.sizes.xl.spacing} 0 0 0;
  }
  h3 {
    font-size: ${textTokens.sizes.l.size};
    line-height: ${textTokens.sizes.l.lineHeightNormal};
    margin: ${textTokens.sizes.l.spacing} 0 0 0;
  }
  h4 {
    font-size: ${textTokens.sizes.xxl.size};
    line-height: ${textTokens.sizes.xxl.lineHeightNormal};
    margin: ${textTokens.sizes.xxl.spacing} 0 0 0;
  }
  h1:first-child,
  h2:first-child,
  h3:first-child,
  h4:first-child,
  h5:first-child,
  h6:first-child {
    margin-top: 0;
  }
  h1:last-child,
  h2:last-child,
  h3:last-child,
  h4:last-child,
  h5:last-child,
  h6:last-child {
    margin-bottom: 0;
  }

  ul,
  ol {
    margin: ${textTokens.sizes.m.spacing} 0;
  }
  li {
    color: inherit;
    font: inherit;
    line-height: ${textTokens.sizes.m.lineHeightNormal};
    margin: ${textTokens.listItem.spacing} 0;
  }
  li:first-child {
    margin-top: 0;
  }
  li:last-child {
    margin-bottom: 0;
  }

  blockquote {
    margin: ${textTokens.sizes.xl.spacing} 0;
  }
  blockquote:first-child {
    margin-top: 0;
  }
  blockquote:last-child {
    margin-bottom: 0;
  }
  blockquote p {
    font-weight: ${textTokens.normal.weightNormal};
    font-family: ${textTokens.normal.fontFamily};
    color: ${colorTokens.text.bold};
    font-size: ${textTokens.sizes.l.size};
    line-height: ${textTokens.sizes.l.lineHeightNormal};
    margin: ${textTokens.sizes.l.spacing} 0;
    font-style: oblique;
  }
  blockquote cite {
    color: inherit;
    display: block;
    font-size: ${textTokens.sizes.m.size};
    line-height: ${textTokens.sizes.m.lineHeightNormal};
    font-weight: ${textTokens.normal.weightBold};
    text-align: right;
    margin: ${textTokens.sizes.m.spacing} 0;
    font-style: normal;
  }

  .${iframeWrapperClass} {
    height: 0;
    padding-top: 56.25%; /* 16:9 ratio */
    position: relative;
  }
  .${iframeWrapperClass} iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .${imageWrapperClass}:not(:last-child) {
    margin-bottom: 0.5em;
  }
  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.m}) {
    .${imageWrapperClass} {
      margin-left: -50px;
      margin-right: -50px;
    }
  }
  @media screen and (min-width: ${measurementTokens.breakpoints.horizontal.l}) {
    .${imageWrapperClass} {
      margin-left: -75px;
      margin-right: -75px;
    }
  }

  /* INLINES */
  a {
    color: ${colorTokens.text.link};
    cursor: pointer;
    font-family: inherit;
    font-weight: inherit;
    text-decoration: 'underline';
  }
  a:active,
  a:hover {
    color: ${colorTokens.text.linkHighlight};
    text-decoration: 'none';
    outline: 0;
  }

  b,
  strong {
    font-weight: ${textTokens.normal.weightBold};
  }

  code {
    color: ${colorTokens.text.code};
    font-family: monospace;
  }
`

const reduceMultipleSpaceChars = content => {
  return content.replace(/\s+/g, ' ')
}

const wrapIframes = content => {
  const startRegex = new RegExp(/(<iframe)/, 'g')
  const endRegex = new RegExp(/(<\/iframe>)/, 'g')

  let newString = content.replace(
    startRegex,
    `<div class="${iframeWrapperClass}"><iframe`
  )
  newString = newString.replace(endRegex, '</iframe></div>')

  return newString
}

const wrapImages = content => {
  const startRegex = new RegExp(
    /(<span class="gatsby-resp-image-wrapper")/,
    'g'
  )
  const endRegex = new RegExp(/(loading="lazy" \/> <\/span>)/, 'g')

  let newString = content.replace(
    startRegex,
    `<div class="${imageWrapperClass}"><span class="gatsby-resp-image-wrapper"`
  )
  newString = newString.replace(endRegex, 'loading="lazy" /> </span></div>')

  return newString
}

const MarkdownContent = props => {
  const htmlRef = createRef()
  const [areIframesProcessed, setAreIframesProcessed] = useState(false)

  let processedContent = reduceMultipleSpaceChars(props.children)
  processedContent = wrapIframes(processedContent)
  processedContent = wrapImages(processedContent)
  const html = { __html: processedContent }

  useEffect(() => {
    if (!areIframesProcessed) {
      processIframes()
    }
  })

  const processIframes = () => {
    const wrappers = htmlRef.current.querySelectorAll(`.${iframeWrapperClass}`)

    wrappers.forEach(wrapper => {
      const iframe = wrapper.querySelector('iframe')
      const ratio = iframe.height / iframe.width

      wrapper.style.paddingTop = `${ratio * 100}%`
    })

    setAreIframesProcessed(true)
  }

  const processImages = () => {
    // const "gatsby-resp-image-wrapper"
  }

  return <StyledHTML dangerouslySetInnerHTML={html} ref={htmlRef}></StyledHTML>
}

MarkdownContent.propTypes = {
  children: PropType.string,
}

MarkdownContent.defaultProps = {}

export default MarkdownContent
