import React from 'react'

import { SiteLayout } from '../'

const story = {
  title: 'Templates/Site Layout',
  component: SiteLayout,
  parameters: {
    layout: 'fullscreen',
  },
}

const Header = () => <div>Header Area</div>
const Main = () => <div>Main Area</div>
const Footer = () => <div>Footer Area</div>

export const siteLayout = () => {
  return (
    <SiteLayout
      headerChildren={<Header />}
      mainChildren={<Main />}
      footerChildren={<Footer />}
    />
  )
}

export default story
