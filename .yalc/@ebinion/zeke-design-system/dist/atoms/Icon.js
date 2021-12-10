"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _ = require("../");

var _excluded = ["children", "title", "viewbox"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledIcon = _styledComponents.default.svg(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  fill: ", ";\n  height: auto;\n  transition-property: fill;\n  transition-duration: ", ";\n  transition-timing-function: ", ";\n  width: ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  return _.colorTokens.icons[props.color];
}, _.animationTokens.duration.normal, _.animationTokens.easing, function (props) {
  return _.measurementTokens.icons[props.size];
}, function (props) {
  if (props.respondToHover) {
    switch (props.color) {
      case 'gold':
        return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            button:active &,\n            button:hover &,\n            a:active &,\n            a:hover & {\n              fill: ", ";\n            }\n          "])), _.colorTokens.icons.goldHighlight);

      default:
        return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            button:active &,\n            button:hover &,\n            a:active &,\n            a:hover & {\n              fill: ", ";\n            }\n          "])), _.colorTokens.icons.blackHighlight);
    }
  }
}, function (props) {
  switch (props.color) {
    case 'knockout':
      return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            .duotone {\n              fill: ", ";\n            }\n          }\n        "])), _.colorTokens.icons.black);

    default:
      return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n          .duotone {\n            fill: ", ";\n          }\n        "])), _.colorTokens.icons.knockout);
  }
}, function (props) {
  return props.sizeSmallAndAbove && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      @media screen and (min-width: ", ") {\n        width: ", ";\n      }\n    "])), _.measurementTokens.breakpoints.horizontal.s, function (props) {
    return _.measurementTokens.icons[props.sizeSmallAndAbove];
  });
}, function (props) {
  return props.sizeMediumAndAbove && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      @media screen and (min-width: ", ") {\n        width: ", ";\n      }\n    "])), _.measurementTokens.breakpoints.horizontal.m, function (props) {
    return _.measurementTokens.icons[props.sizeMediumAndAbove];
  });
}, function (props) {
  return props.sizeLargeAndAbove && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      @media screen and (min-width: ", ") {\n        width: ", ";\n      }\n    "])), _.measurementTokens.breakpoints.horizontal.l, function (props) {
    return _.measurementTokens.icons[props.sizeLargeAndAbove];
  });
});

var Icon = function Icon(_ref) {
  var children = _ref.children,
      title = _ref.title,
      viewbox = _ref.viewbox,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(StyledIcon, _extends({
    viewBox: viewbox
  }, props, {
    role: "img",
    "aria-label": title
  }), /*#__PURE__*/_react.default.createElement("title", null, title), children);
};

Icon.propTypes = {
  children: _propTypes.default.node.isRequired,
  color: _propTypes.default.oneOf(Object.keys(_.colorTokens.icons)).isRequired,
  respondToHover: _propTypes.default.bool,
  size: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)).isRequired,
  sizeSmallAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeMediumAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  sizeLargeAndAbove: _propTypes.default.oneOf(Object.keys(_.measurementTokens.icons)),
  title: _propTypes.default.string.isRequired,
  viewbox: _propTypes.default.string.isRequired
};
Icon.defaultProps = {
  color: 'inherit',
  size: 'm'
};
var _default = Icon;
exports.default = _default;