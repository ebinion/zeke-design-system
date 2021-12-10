"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("..");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledColumns = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: grid;\n  grid-gap: var(--component-margin);\n\n  @media screen and (min-width: ", ") {\n    grid-template-columns: repeat(", ", 1fr);\n  }\n"])), _.measurementTokens.breakpoints.horizontal.m, function (props) {
  return props.columnCount;
});

var Columns = function Columns(props) {
  return /*#__PURE__*/_react.default.createElement(StyledColumns, {
    columnCount: props.base
  }, props.children);
};

Columns.propTypes = {
  /**
   * Sets the number of columns the grid system is based on
   */
  base: _propTypes.default.number.isRequired
};
Columns.defaultProps = {};
var _default = Columns;
exports.default = _default;