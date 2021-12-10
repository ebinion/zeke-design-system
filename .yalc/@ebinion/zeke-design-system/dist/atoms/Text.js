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

var _excluded = ["as", "bold", "color", "children", "kind", "lineHeight", "lineHeightSmallUp", "lineHeightMediumUp", "lineHeightLargeUp", "noMargin", "size", "sizeSmallUp", "sizeMediumUp", "sizeLargeUp"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledP = _styledComponents.default.p(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n\n  ", "\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n  ", "\n\n  ", "\n\n  \n  @media screen and (min-width: ", ") {\n    ", "\n    ", "\n    ", "\n  }\n\n  @media screen and (min-width: ", ") {\n    ", "\n    ", "\n    ", "\n  }\n\n  @media screen and (min-width: ", ") {\n    ", "\n    ", "\n    ", "\n  }\n"])), function (props) {
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: ", ";\n    font-weight: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    text-align: ", ";\n    margin: ", ";\n    text-transform: ", ";\n  "])), props.textColor, props.weight, props.fontList, props.size, props.lineHeight, props.align, props.marginSpacing, props.isUppercased ? 'uppercase' : 'none');
}, function (props) {
  return props.constrain && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      max-width: ", ";\n    "])), _.measurementTokens.maxTextWidth);
}, function (props) {
  return props.truncate && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      overflow: hidden;\n      text-overflow: ellipsis;\n      text-overflow: fade;\n      white-space: nowrap;\n    "])));
}, function (props) {
  return props.visuallyHidden && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      border: 0;\n      clip: rect(0 0 0 0);\n      height: 1px;\n      margin: -1px;\n      overflow: hidden;\n      padding: 0;\n      position: absolute;\n      width: 1px;\n    "])));
}, function (props) {
  return props.respondToLinkHover && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      transition: color ", "\n        ", ";\n\n      a:active &,\n      a:hover & {\n        color: ", ";\n      }\n    "])), _.animationTokens.duration.normal, _.animationTokens.easing, _.colorTokens.text.respondToLink);
}, _.measurementTokens.breakpoints.horizontal.s, function (props) {
  return props.alignSmallUp && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        text-align: ", ";\n      "])), props.alignSmallUp);
}, function (props) {
  return props.sizeSmallUp && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        font-size: ", ";\n      "])), props.sizeSmallUp);
}, function (props) {
  return props.lineHeightSmallUp && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        line-height: ", ";\n      "])), props.lineHeightSmallUp);
}, _.measurementTokens.breakpoints.horizontal.m, function (props) {
  return props.alignMediumUp && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        text-align: ", ";\n      "])), props.alignMediumUp);
}, function (props) {
  return props.sizeMediumUp && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        font-size: ", ";\n      "])), props.sizeMediumUp);
}, function (props) {
  return props.lineHeightMediumUp && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        line-height: ", ";\n      "])), props.lineHeightMediumUp);
}, _.measurementTokens.breakpoints.horizontal.l, function (props) {
  return props.alignLargeUp && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        text-align: ", ";\n      "])), props.alignLargeUp);
}, function (props) {
  return props.sizeLargeUp && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        font-size: ", ";\n      "])), props.sizeLargeUp);
}, function (props) {
  return props.lineHeightLargeUp && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        line-height: ", ";\n      "])), props.lineHeightLargeUp);
});

var Text = function Text(_ref) {
  var as = _ref.as,
      bold = _ref.bold,
      color = _ref.color,
      children = _ref.children,
      kind = _ref.kind,
      lineHeight = _ref.lineHeight,
      lineHeightSmallUp = _ref.lineHeightSmallUp,
      lineHeightMediumUp = _ref.lineHeightMediumUp,
      lineHeightLargeUp = _ref.lineHeightLargeUp,
      noMargin = _ref.noMargin,
      size = _ref.size,
      sizeSmallUp = _ref.sizeSmallUp,
      sizeMediumUp = _ref.sizeMediumUp,
      sizeLargeUp = _ref.sizeLargeUp,
      props = _objectWithoutProperties(_ref, _excluded);

  var getColor = function getColor() {
    if (kind === 'heading' && color === 'light') {
      return _.colorTokens.text.headingLight;
    } else if (kind === 'heading' && color === 'normal') {
      return _.colorTokens.text.heading;
    } else if (bold && kind === 'normal' && color === 'normal') {
      return _.colorTokens.text.bold;
    } else if (kind === 'decorative' && color === 'normal') {
      return _.colorTokens.text.bold;
    } else {
      return _.colorTokens.text[color];
    }
  };

  var getLineHeight = function getLineHeight(sizeKey, lineHeight) {
    var lineHeightPx = lineHeight === 'normal' ? _.textTokens.sizes[sizeKey].lineHeightNormal : _.textTokens.sizes[sizeKey].lineHeightTight;
    return pxToMultiLineHeight(getSize(sizeKey), lineHeightPx);
  };

  var pxToMultiLineHeight = function pxToMultiLineHeight(textSize, lineHeight) {
    var context = stripPx(textSize);
    var target = stripPx(lineHeight);
    return target / context;
  };

  var stripPx = function stripPx(pxString) {
    if (typeof pxString === 'string') {
      return parseInt(pxString.trim().split('px')[0], 10);
    } else {
      return pxString;
    }
  };

  var getSize = function getSize(sizeKey) {
    return _.textTokens.sizes[sizeKey].size;
  };

  var getSpacing = function getSpacing() {
    if (noMargin || props.margin === 'none') {
      return '0';
    } else if (props.margin === 'tight') {
      return "".concat(_.textTokens.sizes[size].spacingTight, " 0");
    } else {
      return "".concat(_.textTokens.sizes[size].spacing, " 0 ").concat(_.textTokens.sizes[size].spacingTight, " 0");
    }
  };

  var getWeight = function getWeight() {
    switch (kind) {
      case 'decorative':
        return bold ? _.textTokens.decorative.weightBold : _.textTokens.decorative.weightNormal;

      case 'heading':
        return bold ? _.textTokens.heading.weightBold : _.textTokens.heading.weightNormal;

      case 'code':
        return bold ? _.textTokens.code.weightBold : _.textTokens.code.weightNormal;

      default:
        return bold ? _.textTokens.normal.weightBold : _.textTokens.normal.weightNormal;
    }
  };

  var getFontFamily = function getFontFamily() {
    return _.textTokens[kind].fontFamily;
  };

  var getSizes = function getSizes() {
    return {
      size: getSize(size),
      sizeSmallUp: sizeSmallUp ? getSize(sizeSmallUp) : false,
      sizeMediumUp: sizeMediumUp ? getSize(sizeMediumUp) : false,
      sizeLargeUp: sizeLargeUp ? getSize(sizeLargeUp) : false
    };
  };

  var getLineHeights = function getLineHeights() {
    var lineHeights = {
      lineHeight: getLineHeight(size, lineHeight),
      lineHeightSmallUp: false,
      lineHeightMediumUp: false,
      lineHeightLargeUp: false
    }; // Small

    if (lineHeightSmallUp && sizeSmallUp) {
      lineHeights.lineHeightSmallUp = getLineHeight(sizeSmallUp, lineHeightSmallUp);
    } else if (lineHeightSmallUp) {
      lineHeights.lineHeightSmallUp = getLineHeight(size, lineHeightSmallUp);
    } // Medium


    if (lineHeightMediumUp && sizeMediumUp) {
      lineHeights.lineHeightMediumUp = getLineHeight(sizeMediumUp, lineHeightMediumUp);
    } else if (lineHeightMediumUp && sizeSmallUp) {
      lineHeights.lineHeightMediumUp = getLineHeight(sizeSmallUp, lineHeightMediumUp);
    } else if (lineHeightMediumUp) {
      lineHeights.lineHeightMediumUp = getLineHeight(size, lineHeightMediumUp);
    } else if (lineHeightSmallUp && sizeMediumUp) {
      lineHeights.lineHeightMediumUp = getLineHeight(sizeMediumUp, lineHeightSmallUp);
    } else if (sizeMediumUp) {
      lineHeights.lineHeightMediumUp = getLineHeight(sizeMediumUp, lineHeight);
    } // Large


    if (lineHeightLargeUp && sizeLargeUp) {
      lineHeights.lineHeightLargeUp = getLineHeight(sizeLargeUp, lineHeightLargeUp);
    } else if (lineHeightLargeUp && sizeMediumUp) {
      lineHeights.lineHeightLargeUp = getLineHeight(sizeMediumUp, lineHeightLargeUp);
    } else if (lineHeightLargeUp && sizeSmallUp) {
      lineHeights.lineHeightLargeUp = getLineHeight(sizeSmallUp, lineHeightLargeUp);
    } else if (lineHeightLargeUp) {
      lineHeights.lineHeightLargeUp = getLineHeight(size, lineHeightLargeUp);
    } else if (sizeLargeUp && lineHeightMediumUp) {
      lineHeights.lineHeightLargeUp = getLineHeight(sizeLargeUp, lineHeightMediumUp);
    } else if (sizeLargeUp && lineHeightSmallUp) {
      lineHeights.lineHeightLargeUp = getLineHeight(sizeLargeUp, lineHeightSmallUp);
    } else if (sizeLargeUp) {
      lineHeights.lineHeightLargeUp = getLineHeight(sizeLargeUp, lineHeight);
    }

    return lineHeights;
  };

  return /*#__PURE__*/_react.default.createElement(StyledP, _extends({
    as: props.visuallyHidden ? 'i' : as,
    fontList: getFontFamily()
  }, getSizes(), getLineHeights(), {
    marginSpacing: getSpacing()
  }, props, {
    textColor: getColor(),
    weight: getWeight()
  }), children);
};

Text.propTypes = {
  as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  align: _propTypes.default.oneOf(['left', 'center', 'right']),
  alignSmallUp: _propTypes.default.oneOf(['left', 'center', 'right']),
  alignMediumUp: _propTypes.default.oneOf(['left', 'center', 'right']),
  alignLargeUp: _propTypes.default.oneOf(['left', 'center', 'right']),
  bold: _propTypes.default.bool,
  color: _propTypes.default.oneOf(['normal', 'light', 'xLight', 'knockout', 'success', 'error', 'warning']),
  constrain: _propTypes.default.bool,
  isUppercased: _propTypes.default.bool,
  kind: _propTypes.default.oneOf(['normal', 'heading', 'decorative', 'code']),
  lineHeight: _propTypes.default.oneOf(['normal', 'tight']),
  lineHeightSmallUp: _propTypes.default.oneOf(['normal', 'tight']),
  lineHeightMediumUp: _propTypes.default.oneOf(['normal', 'tight']),
  lineHeightLargeUp: _propTypes.default.oneOf(['normal', 'tight']),
  margin: _propTypes.default.oneOf(['normal', 'tight', 'none']),
  noMargin: _propTypes.default.bool,
  respondToLinkHover: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
  sizeSmallUp: _propTypes.default.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
  sizeMediumUp: _propTypes.default.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
  sizeLargeUp: _propTypes.default.oneOf(['xxl', 'xl', 'l', 'm', 's', 'xs']),
  truncate: _propTypes.default.bool,
  visuallyHidden: _propTypes.default.bool
};
Text.defaultProps = {
  as: 'p',
  align: 'left',
  bold: false,
  color: 'normal',
  kind: 'normal',
  lineHeight: 'normal',
  margin: 'normal',
  respondToLinkHover: false,
  size: 'm'
};
var _default = Text;
exports.default = _default;