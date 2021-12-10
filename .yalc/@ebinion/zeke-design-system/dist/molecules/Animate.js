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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var animationNames = {
  FADE_IN: 'fadeIn',
  FADE_IN_FROM_LEFT: 'fadeInFromLeft',
  FADE_IN_FROM_TOP: 'fadeInFromTop',
  FADE_IN_FROM_RIGHT: 'fadeInFromRight',
  FADE_IN_FROM_BOTTOM: 'fadeInFromBottom'
};
var animationKeyframes = {
  fadeIn: (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    0% {\n      opacity: 0;\n    }\n\n    100% {\n      opacity: 1;\n    }\n  "]))),
  fadeInFromLeft: (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    0% {\n      opacity: 0;\n      transform: translateX(-", ")\n    }\n\n    100% {\n      opacity: 1;\n      transform: translateX(0)\n    }\n  "])), _.animationTokens.slideDistance.normal),
  fadeInFromRight: (0, _styledComponents.keyframes)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    0% {\n      opacity: 0;\n      transform: translateX(", ")\n    }\n\n    100% {\n      opacity: 1;\n      transform: translateX(0)\n    }\n  "])), _.animationTokens.slideDistance.normal),
  fadeInFromTop: (0, _styledComponents.keyframes)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    0% {\n      opacity: 0;\n      transform: translateY(-", ")\n    }\n\n    100% {\n      opacity: 1;\n      transform: translateY(0)\n    }\n  "])), _.animationTokens.slideDistance.normal),
  fadeInFromBottom: (0, _styledComponents.keyframes)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    0% {\n      opacity: 0;\n      transform: translateY(", ")\n    }\n\n    100% {\n      opacity: 1;\n      transform: translateY(0)\n    }\n  "])), _.animationTokens.slideDistance.normal)
};

var StyledAnimate = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  animation-name: ", ";\n  animation-delay: ", ";\n  animation-direction: ", "\n  animation-duration: ", ";\n  animation-fill-mode: both;\n  animation-play-state: ", ";\n  animation-timing-function: ", ";\n"])), function (props) {
  return animationKeyframes[props.kind];
}, function (props) {
  return props.delay;
}, function (props) {
  return props.direction;
}, function (props) {
  return props.duration;
}, function (props) {
  return props.isPlaying ? 'running' : 'paused';
}, function (props) {
  return props.easing;
});

var Animate = function Animate(props) {
  return /*#__PURE__*/_react.default.createElement(StyledAnimate, props);
};

Animate.propTypes = {
  as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  children: _propTypes.default.node,
  kind: _propTypes.default.oneOf(Object.values(animationNames)),
  isPlaying: _propTypes.default.bool,
  direction: _propTypes.default.oneOf(['normal', 'reverse', 'alternate', 'alternate-reverse']),
  duration: _propTypes.default.string,
  easing: _propTypes.default.string
};
Animate.defaultProps = {
  easing: _.animationTokens.easing,
  delay: 0,
  duration: _.animationTokens.duration.normal,
  direction: 'normal',
  isPlaying: false
};
var _default = Animate;
exports.default = _default;