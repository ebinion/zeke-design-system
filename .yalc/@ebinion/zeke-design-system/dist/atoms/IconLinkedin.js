"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconLinkedin = function IconLinkedin(props) {
  return /*#__PURE__*/_react.default.createElement(_Icon.default, _extends({}, props, {
    title: "LinkedIn",
    viewbox: "0 0 32 32"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M29.63 0H2.362C1.058 0 0 1.034 0 2.306v27.385C0 30.965 1.058 32 2.362 32H29.63c1.305 0 2.37-1.035 2.37-2.309V2.306C32 1.034 30.935 0 29.63 0zM9.491 27.268H4.743V11.997h4.748v15.271zM7.117 9.909a2.751 2.751 0 1 1 0-5.502 2.751 2.751 0 0 1 0 5.502zm20.15 17.359h-4.741v-7.426c0-1.772-.035-4.05-2.467-4.05-2.47 0-2.847 1.929-2.847 3.921v7.554h-4.745V11.996h4.553v2.086h.065c.634-1.2 2.182-2.466 4.491-2.466 4.803 0 5.69 3.162 5.69 7.276v8.376h.001z"
  }));
};

IconLinkedin.propTypes = {
  color: _propTypes.default.oneOf(Object.keys(_.colorTokens.icons)),
  respondToHover: _propTypes.default.bool,
  size: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeSmallAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeMediumAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeLargeAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons))
};
var _default = IconLinkedin;
exports.default = _default;