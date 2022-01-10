import Icon from './Icon'
import {
  IconDribbble,
  IconEllipsis,
  IconGithub,
  IconLinkedin,
  IconLogo,
  IconMenu,
  IconTwitter,
  IconX,
} from '../'

const story = {
  title: 'Atoms/Icon',
  component: Icon,
  subcomponents: [
    IconDribbble,
    IconEllipsis,
    IconGithub,
    IconLinkedin,
    IconLogo,
    IconMenu,
    IconTwitter,
    IconX,
  ],
}
export default story

const Template = args => <Icon {...args} />

export const icon = Template.bind({})
icon.args = {
  children: <rect width="77" height="77" />,
  title: 'An example title',
  viewbox: '0 0 77 77',
}

export const dribbble = IconDribbble
export const ellipsis = IconEllipsis
export const github = IconGithub
export const linkedin = IconLinkedin
export const logo = IconLogo
export const menu = IconMenu
export const twitter = IconTwitter
export const x = IconX
