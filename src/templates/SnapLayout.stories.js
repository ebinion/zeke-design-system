import React from 'react'

import { Block, Header, SnapLayout, Text } from '..'
import lorem from '../helpers/lorem'

const config = {
  title: 'Templates/Snap Layout',
  component: SnapLayout,
  parameters: {
    layout: 'fullscreen',
  },
}
export default config

const Footer = () => <Block padding="xl">Footer Area</Block>

const text = lorem.generateParagraphs(1)

export const snapLayout = () => {
  return (
    <SnapLayout headerChildren={<Header />} footerChildren={<Footer />}>
      <Block hasChildrenCenterY isFullScreen padding="l" paddingTop="100px">
        <Text>{text}</Text>
      </Block>
      <Block color="dark" isFullScreen padding="xl">
        <Text color="knockout" size="xxl">
          Block 1
        </Text>
        <Text color="knockout">{text}</Text>
      </Block>
      <Block color="dark" isFullScreen padding="xl">
        <Text color="knockout" size="xxl">
          Block 2
        </Text>
        <Text color="knockout">{text}</Text>
      </Block>
      <Block color="dark" isFullScreen padding="xl">
        <Text color="knockout" size="xxl">
          Block 3
        </Text>
        <Text color="knockout">{text}</Text>
      </Block>
    </SnapLayout>
  )
}
