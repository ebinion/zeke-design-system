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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledComponent = _styledComponents.default.header(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  box-sizing: border-box;\n  display: grid;\n  grid-gap: var(--component-padding);\n  grid-template-columns: auto auto 1fr auto;\n  grid-template-areas: 'button logo . cta';\n  padding: var(--site-padding);\n\n  ", "\n"])), function (props) {
  return props.isFloated && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      position: absolute;\n      z-index: ", ";\n    "])), _.measurementTokens.zIndex.header);
});

var StyledButton = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  grid-area: button;\n"])));

var StyledLogo = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  grid-area: logo;\n"])));

var StyledCta = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  grid-area: cta;\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.ctaHiddenBelow === 'small' && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      display: none;\n      @media screen and (min-width: ", ") {\n        display: block;\n      }\n    "])), _.measurementTokens.breakpoints.horizontal.s);
}, function (props) {
  return props.ctaHiddenBelow === 'medium' && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      display: none;\n      @media screen and (min-width: ", ") {\n        display: block;\n      }\n    "])), _.measurementTokens.breakpoints.horizontal.m);
});

var Header = function Header(props) {
  return /*#__PURE__*/_react.default.createElement(StyledComponent, {
    role: "banner",
    isFloated: props.isFloated
  }, /*#__PURE__*/_react.default.createElement(StyledButton, null, /*#__PURE__*/_react.default.createElement(_.IconButton, {
    icon: /*#__PURE__*/_react.default.createElement(_.IconMenu, {
      size: "l",
      color: props.color
    }),
    title: "Menu",
    clickHandler: props.menuClickHandler
  })), /*#__PURE__*/_react.default.createElement(StyledLogo, null, /*#__PURE__*/_react.default.createElement(_.Logo, {
    color: props.color,
    href: props.logoHref,
    linkElement: props.logoLinkElement,
    isLink: props.href ? true : false
  }, props.siteTitle)), /*#__PURE__*/_react.default.createElement(StyledCta, {
    ctaHiddenBelow: props.ctaHiddenBelow
  }, props.children));
};

Header.propTypes = {
  children: _propTypes.default.node,
  color: _propTypes.default.oneOf(['black', 'knockout']),
  ctaHiddenBelow: _propTypes.default.oneOf(['small', 'medium']),
  isFloated: _propTypes.default.bool,
  logoHref: _propTypes.default.string,
  logoLinkElement: _propTypes.default.node,
  menuClickHandler: _propTypes.default.func,
  siteTitle: _propTypes.default.element
};
Header.defaultProps = {
  color: 'black'
};
var _default = Header;
exports.default = _default;