import React from 'react'

import { SiteLayout } from '../'

export default {
  title: 'Templates/Layout/Site Layout',
  component: SiteLayout,
}

export const componentPlayground = () => {
  const Header = () => <div>Header Area</div>
  const Main = () => <div>Main Area</div>
  const Footer = () => <div>Footer Area</div>

  return (
    <SiteLayout
      headerChildren={<Header />}
      mainChildren={<Main />}
      footerChildren={<Footer />}
    />
  )
}
