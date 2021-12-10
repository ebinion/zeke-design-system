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

var _excluded = ["as", "children", "isKnockedOut"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledComponent = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &::after {\n    content: '';\n    display: block;\n    border-bottom: ", " solid\n      ", ";\n    margin-top: ", ";\n    margin-bottom: ", ";\n    ", "\n    width: 50px;\n\n    @media (min-width: ", ") {\n      ", "\n    }\n    @media (min-width: ", ") {\n      ", "\n    }\n    @media (min-width: ", ") {\n      ", "\n    }\n  }\n"])), _.measurementTokens.sectionHeadingBorder, function (props) {
  return props.isKnockedOut ? _.colorTokens.text.knockout : _.colorTokens.text.heading;
}, _.measurementTokens.componentPadding.s, _.measurementTokens.componentMargin.s, function (props) {
  return props.align;
}, _.measurementTokens.breakpoints.horizontal.s, function (props) {
  return props.alignSmallUp;
}, _.measurementTokens.breakpoints.horizontal.m, function (props) {
  return props.alignMediumUp;
}, _.measurementTokens.breakpoints.horizontal.l, function (props) {
  return props.alignLargeUp;
});

var SectionHeading = function SectionHeading(_ref) {
  var as = _ref.as,
      children = _ref.children,
      isKnockedOut = _ref.isKnockedOut,
      props = _objectWithoutProperties(_ref, _excluded);

  var getAlignmentCss = function getAlignmentCss(align) {
    switch (align) {
      case 'left':
        return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          margin-left: 0;\n          margin-right: 0;\n        "])));

      case 'right':
        return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          margin-left: auto;\n          margin-right: 0;\n        "])));

      default:
        return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n          margin-left: auto;\n          margin-right: auto;\n        "])));
    }
  };

  return /*#__PURE__*/_react.default.createElement(StyledComponent, {
    align: getAlignmentCss(props.align),
    alignSmallUp: props.alignSmallUp ? getAlignmentCss(props.alignSmallUp) : null,
    alignMediumUp: props.alignMediumUp ? getAlignmentCss(props.alignMediumUp) : null,
    alignLargeUp: props.alignLargeUp ? getAlignmentCss(props.alignLargeUp) : null,
    isKnockedOut: isKnockedOut
  }, /*#__PURE__*/_react.default.createElement(_.Text, {
    as: as,
    align: props.align,
    alignSmallUp: props.alignSmallUp,
    alignMediumUp: props.alignMediumUp,
    alignLargeUp: props.alignLargeUp,
    bold: true,
    color: isKnockedOut ? 'knockout' : 'normal',
    constrain: false,
    isUppercased: true
  }, children));
};

SectionHeading.propTypes = {
  align: _propTypes.default.oneOf(['left', 'center', 'right']),
  alignSmallUp: _propTypes.default.oneOf(['left', 'center', 'right']),
  alignMediumUp: _propTypes.default.oneOf(['left', 'center', 'right']),
  alignLargeUp: _propTypes.default.oneOf(['left', 'center', 'right']),
  as: _propTypes.default.string,
  isKnockedOut: _propTypes.default.bool
};
SectionHeading.defaultProps = {
  as: 'h2',
  align: 'center'
};
var _default = SectionHeading;
exports.default = _default;