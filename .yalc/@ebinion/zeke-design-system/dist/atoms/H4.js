"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var H4 = function H4(props) {
  return /*#__PURE__*/_react.default.createElement(_Text.default, _extends({
    kind: props.kind
  }, props));
};

H4.propTypes = {
  as: _propTypes.default.string,
  bold: _propTypes.default.bool,
  kind: _propTypes.default.oneOf(['normal', 'heading', 'decorative', 'code']),
  lineHeight: _propTypes.default.oneOf(['normal', 'tight']),
  size: _propTypes.default.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs'])
};
H4.defaultProps = {
  as: 'h4',
  bold: true,
  lineHeight: 'tight',
  size: 'l'
};
var _default = H4;
exports.default = _default;