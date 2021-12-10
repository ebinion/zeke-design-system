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

var StyledContainer = _styledComponents.default.a(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 8px;\n  box-shadow: 0 2px 8px ", ";\n  box-sizing: border-box;\n  display: block;\n  cursor: pointer;\n  height: 0;\n  padding-bottom: 75%;\n  position: relative;\n  outline: 4px solid transparent;\n  text-decoration: none;\n  transition: box-shadow ", "\n    ", ";\n\n  &:active,\n  &:hover {\n    box-shadow: 0 2px 12px 0 ", ",\n      0 0 0 3px ", ";\n  }\n"])), _.colorTokens.backgrounds.light, _.colorTokens.shadows.light, _.animationTokens.duration.normal, _.animationTokens.easing, _.colorTokens.shadows.light, _.colorTokens.borders.linkHighlight);

var StyledArticle = _styledComponents.default.article(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n\n  &::after {\n    ", "\n  }\n"])), function (props) {
  return props.showFade && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        background: linear-gradient(\n          0deg,\n          ", ",\n          rgba(255, 255, 255, 0)\n        );\n        content: '';\n        display: block;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        height: 30%;\n        width: 100%;\n        pointer-events: none;\n      "])), _.colorTokens.backgrounds.Note);
});

var StyledHeader = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex: 0 0 auto;\n  padding: ", ";\n  padding-bottom: 0;\n"])), _.measurementTokens.componentPadding.m);

var StyledContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  flex: 0 0 auto;\n  padding: ", ";\n  padding-top: 0;\n  margin-top: ", ";\n"])), _.measurementTokens.componentPadding.m, _.measurementTokens.componentPadding.s);

var StyledImageWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  flex: 1 1 auto;\n  margin-top: ", ";\n  padding: 0;\n  overflow: hidden;\n\n  > * {\n    height: 100%;\n    width: 100%;\n  }\n\n  img {\n    object-fit: cover;\n  }\n"])), _.measurementTokens.componentPadding.s);

var Summary = function Summary(props) {
  if (props.text && !props.image) {
    return /*#__PURE__*/_react.default.createElement(StyledContent, null, /*#__PURE__*/_react.default.createElement(_.Text, {
      noMargin: true
    }, props.text));
  } else if (props.image) {
    return /*#__PURE__*/_react.default.createElement(StyledImageWrapper, null, props.image);
  } else {
    return null;
  }
};

var Note = function Note(props) {
  return /*#__PURE__*/_react.default.createElement(StyledContainer, {
    as: props.linkElement,
    href: props.href || props.to,
    to: props.to || props.href
  }, /*#__PURE__*/_react.default.createElement(StyledArticle, {
    showFade: !props.image
  }, /*#__PURE__*/_react.default.createElement(StyledHeader, null, /*#__PURE__*/_react.default.createElement(_.Text, {
    noMargin: true,
    color: "light",
    size: "s"
  }, props.superTitle), /*#__PURE__*/_react.default.createElement(_.H3, {
    lineHeight: "tight",
    noMargin: true,
    as: props.headingLevel
  }, props.title)), /*#__PURE__*/_react.default.createElement(Summary, {
    text: props.summary,
    image: props.image
  })));
};

Note.propTypes = {
  superTitle: _propTypes.default.node,
  to: _propTypes.default.string.isRequired,
  href: _propTypes.default.string,
  title: _propTypes.default.string,
  summary: _propTypes.default.string,
  image: _propTypes.default.node,
  linkElement: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string]).isRequired,
  headingLevel: _propTypes.default.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired
};
Note.defaultProps = {
  linkElement: 'a',
  headingLevel: 'h2',
  date: new Date()
};
var _default = Note;
exports.default = _default;