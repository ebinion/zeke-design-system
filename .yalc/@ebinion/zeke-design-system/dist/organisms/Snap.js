"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSnap = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  -webkit-overflow-scrolling: touch;\n  scroll-snap-type: ", " ", ";\n  width: 100%;\n\n  ", ";\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.direction;
}, function (props) {
  return props.type;
}, function (props) {
  if (props.direction === 'x') {
    return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        display: flex;\n        flex-direction: row;\n        overflow-x: auto;\n      "])));
  } else {
    return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        height: 100vh;\n        overflow-y: auto;\n      "])));
  }
}, function (props) {
  return props.direction === 'y' && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      > * {\n        scroll-snap-align: start;\n      }\n    "])));
}, function (props) {
  return props.direction === 'x' && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      > * {\n        flex: 0 0 100%;\n        scroll-snap-align: center;\n      }\n    "])));
}); // Note: because this element is scrollable it should also be focusable
// (https://dequeuniversity.com/rules/axe/4.1/scrollable-region-focusable?application=axeAPI)


var Snap = function Snap(props) {
  return /*#__PURE__*/_react.default.createElement(StyledSnap, _extends({}, props, {
    tabIndex: "0"
  }), props.children);
};

Snap.propTypes = {
  as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  direction: _propTypes.default.oneOf(['x', 'y']),
  type: _propTypes.default.oneOf(['proximity', 'mandatory'])
};
Snap.defaultProps = {
  direction: 'y',
  type: 'proximity'
};
var _default = Snap;
exports.default = _default;