"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledBadge = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 100vh;\n  display: inline-block;\n  padding: 0 ", ";\n"])), _.colorTokens.backgrounds.badge.white, _.measurementTokens.componentPadding.s);

var Badge = function Badge(props) {
  return /*#__PURE__*/_react.default.createElement(StyledBadge, null, /*#__PURE__*/_react.default.createElement(_.Text, {
    as: "span",
    bold: true,
    size: props.size
  }, props.children));
};

Badge.propTypes = {
  size: _propTypes.default.oneOf(['xs', 's', 'm', 'l', 'xl'])
};
Badge.defaultProps = {
  size: 's'
};
var _default = Badge;
exports.default = _default;