"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledIconGroup = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: baseline;\n  display: flex;\n\n  > * {\n    margin-right: var(--component-padding);\n  }\n\n  > *:last-child {\n    margin-right: 0;\n  }\n"])));

var IconGroup = function IconGroup(props) {
  return /*#__PURE__*/_react.default.createElement(StyledIconGroup, null, props.children);
};

IconGroup.propTypes = {
  children: _propTypes.default.node
};
IconGroup.defaultProps = {};
var _default = IconGroup;
exports.default = _default;