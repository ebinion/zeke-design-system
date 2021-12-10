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

var IconX = function IconX(props) {
  return /*#__PURE__*/_react.default.createElement(_Icon.default, _extends({}, props, {
    title: "X",
    viewbox: "0 0 32 32"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M2.5.375l-2.125 2.125 1.063 1.063 12.438 12.438-12.438 12.438-1.063 1.063 2.125 2.125 1.063-1.063 12.438-12.438 12.438 12.438 1.063 1.063 2.125-2.125-1.063-1.063-12.438-12.438 12.438-12.438 1.063-1.063-2.125-2.125-1.063 1.063-12.438 12.438-12.438-12.438-1.063-1.063z"
  }));
};

IconX.propTypes = {
  color: _propTypes.default.oneOf(Object.keys(_.colorTokens.icons)),
  respondToHover: _propTypes.default.bool,
  size: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeSmallAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeMediumAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeLargeAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons))
};
var _default = IconX;
exports.default = _default;