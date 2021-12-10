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

var IconDribbble = function IconDribbble(props) {
  return /*#__PURE__*/_react.default.createElement(_Icon.default, _extends({}, props, {
    title: "Dribbble",
    viewbox: "0 0 26 27"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17.143 23.683c-.469-2.69-1.25-5.469-2.344-8.337h-.033l-.034.017c-.178.067-.418.159-.72.276-.301.117-.865.391-1.691.82-.825.43-1.59.888-2.293 1.373-.703.486-1.434 1.124-2.193 1.917-.76.792-1.334 1.618-1.725 2.478l-.25-.185c2.053 1.675 4.386 2.512 6.997 2.512 1.473 0 2.902-.291 4.286-.871zm-3.097-10.162a29.054 29.054 0 0 0-.888-1.858c-3.47 1.038-7.226 1.557-11.266 1.557a2.644 2.644 0 0 0-.017.351c0 1.384.246 2.704.737 3.96a10.994 10.994 0 0 0 2.076 3.373c.558-.993 1.247-1.922 2.067-2.787s1.616-1.56 2.386-2.085c.77-.524 1.498-.976 2.184-1.356.687-.379 1.242-.647 1.666-.803l.619-.218.218-.058c.101-.028.173-.053.218-.076zm-1.792-3.549c-1.339-2.377-2.7-4.487-4.084-6.328a10.836 10.836 0 0 0-3.918 3.114A10.85 10.85 0 0 0 2.11 11.31c3.37 0 6.753-.446 10.145-1.339zm11.451 5.34c-2.343-.669-4.626-.831-6.847-.485.971 2.667 1.686 5.285 2.143 7.852 1.239-.837 2.271-1.895 3.097-3.173s1.362-2.676 1.607-4.194zM10.229 2.907zm9.877 2.427c-2.065-1.83-4.481-2.745-7.249-2.745-.848 0-1.713.106-2.595.318 1.462 1.897 2.835 4.029 4.119 6.395.77-.29 1.495-.628 2.176-1.013.681-.385 1.219-.728 1.615-1.03.397-.3.762-.619 1.097-.954s.544-.56.628-.678l.209-.293zm3.733 8.12c-.033-2.59-.865-4.877-2.494-6.864l-.017.017c-.1.134-.206.27-.318.41s-.354.388-.728.745-.77.695-1.189 1.013c-.418.318-.976.68-1.674 1.088a16.99 16.99 0 0 1-2.201 1.08c.279.592.524 1.122.736 1.59.023.067.059.165.109.293.05.129.092.22.126.277a14.7 14.7 0 0 1 1.247-.118 24.113 24.113 0 0 1 2.385-.008 27.872 27.872 0 0 1 2.821.268l.611.1c.168.028.307.053.419.076l.167.033zm1.875.117c0 2.333-.574 4.484-1.724 6.454s-2.709 3.53-4.679 4.679c-1.97 1.15-4.121 1.725-6.454 1.725-2.332 0-4.484-.575-6.454-1.725a12.794 12.794 0 0 1-4.679-4.68C.574 18.055 0 15.905 0 13.572c0-2.332.575-4.484 1.724-6.454a12.8 12.8 0 0 1 4.68-4.679c1.97-1.15 4.121-1.724 6.453-1.724 2.333 0 4.484.575 6.454 1.724a12.802 12.802 0 0 1 4.679 4.68c1.15 1.97 1.724 4.12 1.724 6.453z"
  }));
};

IconDribbble.propTypes = {
  color: _propTypes.default.oneOf(Object.keys(_.colorTokens.icons)),
  respondToHover: _propTypes.default.bool,
  size: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeSmallAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeMediumAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeLargeAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons))
};
var _default = IconDribbble;
exports.default = _default;