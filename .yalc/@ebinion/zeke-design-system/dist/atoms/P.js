"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var P = function P(props) {
  return /*#__PURE__*/_react.default.createElement(_Text.default, props, props.children);
};

P.propTypes = {
  align: _propTypes.default.oneOf(['left', 'center', 'right']),
  bold: _propTypes.default.bool,
  color: _propTypes.default.oneOf(['normal', 'light', 'bold', 'knockout', 'success', 'error', 'warning']),
  lineHeight: _propTypes.default.oneOf(['normal', 'tight']),
  size: _propTypes.default.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
  as: _propTypes.default.string
};
P.defaultProps = {
  as: 'p'
};
var _default = P;
exports.default = _default;