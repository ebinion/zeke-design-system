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
  respondToHover: {
    type: {
      name: 'boolean',
      required: false,
    },
    description: 'Set to true when embedded in links or buttons',
    control: {
      type: null,
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
  sizeSmallAndAbove: {
    type: {
      name: 'string',
      required: true,
    },
    description: '`m` `l` `xl`',
    control: {
      type: null,
    },
    table: {
      type: {
        summary: null,
      },
    },
  },
  sizeMediumAndAbove: {
    type: {
      name: 'string',
      required: true,
    },
    description: '`m` `l` `xl`',
    control: {
      type: null,
    },
    table: {
      type: {
        summary: null,
      },
    },
  },
  sizeLargeAndAbove: {
    type: {
      name: 'string',
      required: true,
    },
    description: '`m` `l` `xl`',
    control: {
      type: null,
    },
    table: {
      type: {
        summary: null,
      },
    },
  },
}
