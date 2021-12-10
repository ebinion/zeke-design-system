"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("..");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledOffsetGrid = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: grid;\n  grid-gap: var(--component-padding-xl);\n\n  @media screen and (min-width: ", ") {\n    --offset: 200px;\n    grid-template-columns: 1fr 1fr;\n    padding-bottom: var(--offset);\n\n    > *:nth-child(2n) {\n      transform: translateY(var(--offset));\n    }\n  }\n"])), _.measurementTokens.breakpoints.horizontal.s);

var OffsetGrid = function OffsetGrid(props) {
  return /*#__PURE__*/_react.default.createElement(StyledOffsetGrid, null, props.children);
};

var _default = OffsetGrid;
exports.default = _default;