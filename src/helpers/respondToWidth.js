import { measurementTokens } from '..'

const respondToWidth = size => {
  return window.matchMedia(
    `screen and (min-width: ${measurementTokens.breakpoints.horizontal[size]})`
  )
}

export default respondToWidth
