import { select } from '@storybook/addon-knobs'

import { colorTokens } from '..'

export function sizeKnobs(defaultSize = 'm') {
  return select('Size', ['m', 'l', 'xl'], defaultSize)
}

export function colorKnobs() {
  const colorKeys = Object.keys(colorTokens.icons)

  return select('Color', colorKeys, 'inherit')
}

export const iconArgTypes = {
  color: {
    type: {
      name: 'string',
      required: true,
    },
    control: {
      type: null,
    },
    description: '`black` `gold` `goldHighlight` `knockout` `inherit`',
    defaultValue: {
      summary: 'inherit',
    },
    table: {
      type: {
        summary: null,
      },
    },
  },
  size: {
    type: {
      name: 'string',
      required: true,
    },
    description: '`m` `l` `xl`',
    defaultValue: {
      summary: 'm',
    },
    control: {
      type: null,
    },
    table: {
      type: {
        summary: null,
      },
    },
  },
  isLink: {
    type: {
      name: 'boolean',
      required: false,
    },
    description: 'Boolean',
    control: {
      type: null,
    },
  },
}
