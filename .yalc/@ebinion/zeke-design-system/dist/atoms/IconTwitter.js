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

var IconTwitter = function IconTwitter(props) {
  return /*#__PURE__*/_react.default.createElement(_Icon.default, _extends({}, props, {
    title: "Twitter",
    viewbox: "0 0 32 26"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.064 26A18.587 18.587 0 0 1 0 23.051c.514.061 1.036.092 1.566.092 3.076 0 5.907-1.049 8.153-2.81a6.573 6.573 0 0 1-6.133-4.558 6.578 6.578 0 0 0 2.965-.112 6.568 6.568 0 0 1-5.266-6.436l.001-.083a6.536 6.536 0 0 0 2.974.821 6.56 6.56 0 0 1-2.921-5.463c0-1.203.324-2.33.889-3.3A18.642 18.642 0 0 0 15.76 8.06 6.565 6.565 0 0 1 22.155 0c1.888 0 3.595.797 4.792 2.073A13.142 13.142 0 0 0 31.116.48a6.578 6.578 0 0 1-2.887 3.631A13.116 13.116 0 0 0 32 3.077a13.347 13.347 0 0 1-3.276 3.398c.013.281.019.565.019.849 0 8.674-6.603 18.675-18.679 18.675"
  }));
};

IconTwitter.propTypes = {
  color: _propTypes.default.oneOf(Object.keys(_.colorTokens.icons)),
  respondToHover: _propTypes.default.bool,
  size: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeSmallAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeMediumAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeLargeAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons))
};
var _default = IconTwitter;
exports.default = _default;