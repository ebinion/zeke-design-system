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

var IconLogo = function IconLogo(props) {
  return /*#__PURE__*/_react.default.createElement(_Icon.default, _extends({}, props, {
    title: "Zeke Binion Logo",
    viewbox: "0 0 512 512"
  }), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("rect", {
    x: "0",
    y: "0",
    width: "512",
    height: "512"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M235.724781,352 L235.724781,330.698651 L125.504758,330.698651 L233.710316,179.862069 L233.710316,160 L95,160 L95,181.301349 L202.917777,181.301349 L95,332.137931 L95,352 L235.724781,352 Z M375.458317,352 C410.567568,352 431,330.986507 431,300.185907 C431,277.157421 414.020936,256.143928 393.588504,252.977511 C411.143129,249.235382 427.25885,233.115442 427.25885,208.935532 C427.25885,180.149925 406.826418,160 373.443852,160 L287.972973,160 L287.972973,352 L375.458317,352 Z M369.414922,243.190405 L311.858774,243.190405 L311.858774,181.301349 L369.414922,181.301349 C390.998477,181.301349 402.509707,195.118441 402.509707,212.389805 C402.509707,229.949025 390.998477,243.190405 369.414922,243.190405 Z M370.853826,330.698651 L311.858774,330.698651 L311.858774,264.491754 L370.853826,264.491754 C394.164065,264.491754 406.250856,280.035982 406.250856,297.595202 C406.250856,318.032984 393.012943,330.698651 370.853826,330.698651 Z",
    class: "duotone",
    fillRule: "nonzero"
  })));
};

IconLogo.propTypes = {
  color: _propTypes.default.oneOf(Object.keys(_.colorTokens.icons)),
  respondToHover: _propTypes.default.bool,
  size: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeSmallAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeMediumAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeLargeAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons))
};
IconLogo.defaultProps = {};
var _default = IconLogo;
exports.default = _default;