"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("..");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHeader = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n"])));

var StyledWrapper = (0, _styledComponents.default)(_.Snap)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n"])));

var SnapLayout = function SnapLayout(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.GlobalStyles, null), /*#__PURE__*/_react.default.createElement(StyledWrapper, null, /*#__PURE__*/_react.default.createElement(StyledHeader, null, props.headerChildren), props.children, /*#__PURE__*/_react.default.createElement("footer", {
    role: "contentinfo"
  }, props.footerChildren)));
};

SnapLayout.propTypes = {
  headerChildren: _propTypes.default.node,
  children: _propTypes.default.node,
  footerChildren: _propTypes.default.node
};
SnapLayout.defaultProps = {};
var _default = SnapLayout;
exports.default = _default;