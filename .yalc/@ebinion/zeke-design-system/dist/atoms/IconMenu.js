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

var IconMenu = function IconMenu(props) {
  return /*#__PURE__*/_react.default.createElement(_Icon.default, _extends({}, props, {
    title: "Menu",
    viewbox: "0 0 32 32"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M0,7 L0,9.34782609 L25.6,9.34782609 L25.6,7 L0,7 Z M6.4,14.826087 L6.4,17.173913 L32,17.173913 L32,14.826087 L6.4,14.826087 Z M0,22.6521739 L0,25 L25.6,25 L25.6,22.6521739 L0,22.6521739 Z",
    fillRule: "nonzero"
  }));
};

IconMenu.propTypes = {
  color: _propTypes.default.oneOf(Object.keys(_.colorTokens.icons)),
  respondToHover: _propTypes.default.bool,
  size: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeSmallAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeMediumAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeLargeAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons))
};
var _default = IconMenu;
exports.default = _default;