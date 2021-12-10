"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHr = _styledComponents.default.i(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: block;\n  margin: var(--component-padding-l) 0;\n"])));

var HR = function HR() {
  return /*#__PURE__*/_react.default.createElement(StyledHr, {
    "aria-hidden": true
  }, /*#__PURE__*/_react.default.createElement(_.IconEllipsis, {
    size: "xl"
  }));
};

var _default = HR;
exports.default = _default;