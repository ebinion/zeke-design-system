"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ = require("../");

var _excluded = ["onClick"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledA = _styledComponents.default.a(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font: inherit;\n  line-height: inherit;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.kind !== 'incognito' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n      cursor: pointer;\n      font-weight: ", ";\n      text-decoration: none;\n      border-bottom: ", " solid\n        ", ";\n      transition-property: border, background;\n      transition-duration: ", ";\n      transition-timing-function: ", ";\n\n      &:active,\n      &:hover {\n        color: ", ";\n        background: ", ";\n        border-color: ", ";\n        outline: 0;\n      }\n    "])), _.colorTokens.backgrounds.link, _.colorTokens.text.link, _.textTokens.normal.weightBold, _.measurementTokens.linkBorder, _.colorTokens.borders.link, _.animationTokens.duration.normal, _.animationTokens.easing, _.colorTokens.text.linkHighlight, _.colorTokens.backgrounds.linkHighlight, _.colorTokens.borders.linkHighlight);
}, function (props) {
  return props.kind === 'nav' && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      border: 0;\n      transition-property: color;\n      transition-duration: ", ";\n      transition-timing-function: ", ";\n\n      &:active,\n      &:hover {\n        color: ", ";\n        background: none;\n        outline: 0;\n      }\n    "])), _.animationTokens.duration.normal, _.animationTokens.easing, _.colorTokens.text.navHighlight);
}, function (props) {
  return props.kind === 'incognito' && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      color: inherit;\n      text-decoration: none;\n    "])));
}, function (props) {
  return props.keyboardOnly && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      border: 0;\n      clip: rect(0 0 0 0);\n      height: 1px;\n      margin: -1px;\n      overflow: hidden;\n      padding: 0;\n      position: absolute;\n      top: 10px;\n      transform: translateX(-50%);\n      left: 50%;\n      width: 1px;\n\n      &:focus {\n        clip: auto;\n        height: auto;\n        margin: auto;\n        max-width: 600px;\n        overflow: visible;\n        width: auto;\n      }\n    "])));
});

var A = function A(_ref) {
  var onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, _excluded);

  var elementRef = (0, _react.useRef)(null);

  var handleClick = function handleClick(event) {
    elementRef.current.blur();
    onClick(event);
  };

  return /*#__PURE__*/_react.default.createElement(StyledA, _extends({}, props, {
    href: props.to ? props.to : props.href,
    onClick: handleClick,
    ref: elementRef
  }), props.children);
};

A.propTypes = {
  as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  href: _propTypes.default.string,
  keyboardOnly: _propTypes.default.bool,
  kind: _propTypes.default.oneOf(['normal', 'incognito', 'nav']),
  onClick: _propTypes.default.func,
  to: _propTypes.default.string,
  useInheritedFont: _propTypes.default.bool
};
A.defaultProps = {
  kind: 'normal',
  onClick: function onClick() {}
};
var _default = A;
exports.default = _default;