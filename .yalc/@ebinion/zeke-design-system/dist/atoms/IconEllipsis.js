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

var IconEllipsis = function IconEllipsis(props) {
  return /*#__PURE__*/_react.default.createElement(_Icon.default, _extends({}, props, {
    title: "Ellipsis",
    viewbox: "0 0 47 10"
  }), /*#__PURE__*/_react.default.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    transform: "translate(5.000000, 5.000000) rotate(45.000000) translate(-5.000000, -5.000000) ",
    x: "2",
    y: "2",
    width: "6",
    height: "6"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    transform: "translate(23.485281, 5.000000) rotate(45.000000) translate(-23.485281, -5.000000) ",
    x: "20.4852814",
    y: "2",
    width: "6",
    height: "6"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    transform: "translate(41.970563, 5.000000) rotate(45.000000) translate(-41.970563, -5.000000) ",
    x: "38.9705627",
    y: "2",
    width: "6",
    height: "6"
  })));
};

IconEllipsis.propTypes = {
  color: _propTypes.default.oneOf(Object.keys(_.colorTokens.icons)),
  respondToHover: _propTypes.default.bool,
  size: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeSmallAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeMediumAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeLargeAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons))
};
var _default = IconEllipsis;
exports.default = _default;