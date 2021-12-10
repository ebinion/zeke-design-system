"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorKnobs = colorKnobs;
exports.iconArgTypes = void 0;
exports.sizeKnobs = sizeKnobs;

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("..");

function sizeKnobs() {
  var defaultSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'm';
  return (0, _addonKnobs.select)('Size', ['m', 'l', 'xl'], defaultSize);
}

function colorKnobs() {
  var colorKeys = Object.keys(_.colorTokens.icons);
  return (0, _addonKnobs.select)('Color', colorKeys, 'inherit');
}

var iconArgTypes = {
  color: {
    type: {
      name: 'string',
      required: true
    },
    control: {
      type: null
    },
    description: '`black` `gold` `goldHighlight` `knockout` `inherit`',
    defaultValue: {
      summary: 'inherit'
    },
    table: {
      type: {
        summary: null
      }
    }
  },
  respondToHover: {
    type: {
      name: 'boolean',
      required: false
    },
    description: 'Set to true when embedded in links or buttons',
    control: {
      type: null
    }
  },
  size: {
    type: {
      name: 'string',
      required: true
    },
    description: '`m` `l` `xl`',
    defaultValue: {
      summary: 'm'
    },
    control: {
      type: null
    },
    table: {
      type: {
        summary: null
      }
    }
  },
  sizeSmallAndAbove: {
    type: {
      name: 'string',
      required: true
    },
    description: '`m` `l` `xl`',
    control: {
      type: null
    },
    table: {
      type: {
        summary: null
      }
    }
  },
  sizeMediumAndAbove: {
    type: {
      name: 'string',
      required: true
    },
    description: '`m` `l` `xl`',
    control: {
      type: null
    },
    table: {
      type: {
        summary: null
      }
    }
  },
  sizeLargeAndAbove: {
    type: {
      name: 'string',
      required: true
    },
    description: '`m` `l` `xl`',
    control: {
      type: null
    },
    table: {
      type: {
        summary: null
      }
    }
  }
};
exports.iconArgTypes = iconArgTypes;