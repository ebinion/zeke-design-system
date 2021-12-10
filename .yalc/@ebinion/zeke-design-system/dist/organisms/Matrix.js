"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _underscore = require("underscore");

var _ = require("../");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var repeatString = function repeatString(count) {
  var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1fr';
  var newtextArray = [];
  (0, _underscore.times)(count, function () {
    newtextArray.push(text);
  });
  return newtextArray.join(' ');
};

var StyledComponent = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: grid;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  ", "\n\n\n  @media screen and (min-width: ", ") {\n    ", "\n  }\n\n  @media screen and (min-width: ", ") {\n    ", "\n  }\n\n  @media screen and (min-width: ", ") {\n    ", "\n  }\n"])), function (props) {
  if (props.useComponentMargin) {
    switch (props.gutter) {
      case 'xl':
        return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            gap: var(--component-padding-xl) var(--component-margin);\n          "])));

      case 'l':
        return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            gap: var(--component-padding-l) var(--component-margin);\n          "])));

      default:
        return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            gap: var(--component-padding) var(--component-margin);\n          "])));
    }
  } else {
    switch (props.gutter) {
      case 'xl':
        return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n            gap: var(--component-padding-xl);\n          "])));

      case 'l':
        return (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n            gap: var(--component-padding-l);\n          "])));

      default:
        return (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n            gap: var(--component-padding);\n          "])));
    }
  }
}, _.measurementTokens.breakpoints.horizontal.s, function (props) {
  return props.maxColumns >= 2 && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        grid-template-columns: ", ";\n      "])), repeatString(2));
}, _.measurementTokens.breakpoints.horizontal.m, function (props) {
  return props.maxColumns >= 3 && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        grid-template-columns: ", ";\n      "])), repeatString(3));
}, _.measurementTokens.breakpoints.horizontal.l, function (props) {
  return props.maxColumns >= 4 && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        grid-template-columns: ", ";\n      "])), repeatString(props.maxColumns));
});

var Matrix = function Matrix(props) {
  return /*#__PURE__*/_react.default.createElement(StyledComponent, props, props.children);
};

Matrix.propTypes = {
  as: _propTypes.default.string,
  gutter: _propTypes.default.oneOf(['m', 'l', 'xl']),
  maxColumns: _propTypes.default.number,

  /**
   * Use to ensure columns gaps align with <Columns> component
   */
  useComponentMargin: _propTypes.default.bool
};
Matrix.defaultProps = {
  as: 'div',
  gutter: 'm',
  maxColumns: 4
};
var _default = Matrix;
exports.default = _default;