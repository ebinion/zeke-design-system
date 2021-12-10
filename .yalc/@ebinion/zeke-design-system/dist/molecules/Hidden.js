"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ = require("..");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Hidden = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n\n  ", "\n  \n  ", "\n\n  ", "\n  \n  ", "\n      \n  ", "\n"])), function (props) {
  return props.atBase && !props.andUp && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      @media (max-width: ", ") {\n        display: none;\n      }\n    "])), _.measurementTokens.breakpoints.horizontal.s);
}, function (props) {
  return props.atBase && props.andUp && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      display: none;\n    "])));
}, function (props) {
  return props.atSmall && !props.andUp && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      @media (min-width: ", ") and (max-width: ", ") {\n        display: none;\n      }\n    "])), _.measurementTokens.breakpoints.horizontal.s, _.measurementTokens.breakpoints.horizontal.m);
}, function (props) {
  return props.atSmall && props.andUp && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      @media (min-width: ", ") {\n        display: none;\n      }\n    "])), _.measurementTokens.breakpoints.horizontal.s);
}, function (props) {
  return props.atMedium && !props.andUp && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      @media (min-width: ", ") and (max-width: ", ") {\n        display: none;\n      }\n    "])), _.measurementTokens.breakpoints.horizontal.m, _.measurementTokens.breakpoints.horizontal.l);
}, function (props) {
  return props.atMedium && props.andUp && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      @media (min-width: ", ") {\n        display: none;\n      }\n    "])), _.measurementTokens.breakpoints.horizontal.m);
}, function (props) {
  return props.atLarge && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      @media (min-width: ", ") {\n        display: none;\n      }\n    "])), _.measurementTokens.breakpoints.horizontal.l);
});

Hidden.propTypes = {
  atBase: _propTypes.default.bool,
  atSmall: _propTypes.default.bool,
  atMedium: _propTypes.default.bool,
  atLarge: _propTypes.default.bool,
  andUp: _propTypes.default.bool
};
var _default = Hidden;
exports.default = _default;