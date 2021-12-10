"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledComponent = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n"])));

var StyledLogo = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  line-height: 0;\n"])));

var StyledText = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-left: var(--component-padding);\n"])));

var Logo = function Logo(props) {
  var isLink = function isLink() {
    return props.href || props.linkElement ? true : false;
  };

  var renderLink = function renderLink() {
    return /*#__PURE__*/_react.default.createElement(_.A, {
      as: props.linkElement,
      href: props.href,
      kind: "incognito"
    }, props.children);
  };

  var renderText = function renderText() {
    return /*#__PURE__*/_react.default.createElement(StyledText, null, /*#__PURE__*/_react.default.createElement(_.Text, {
      color: props.color,
      size: "xl"
    }, isLink() ? renderLink() : props.children));
  };

  return /*#__PURE__*/_react.default.createElement(StyledComponent, null, /*#__PURE__*/_react.default.createElement(StyledLogo, {
    as: isLink() ? props.linkElement || 'a' : false,
    href: props.href
  }, /*#__PURE__*/_react.default.createElement(_.IconLogo, {
    color: props.color,
    size: "xl",
    sizeMediumAndAbove: "xl",
    respondToHover: isLink()
  })), props.children && renderText());
};

Logo.propTypes = {
  children: _propTypes.default.element,
  color: _propTypes.default.oneOf(['black', 'knockout']),
  linkElement: _propTypes.default.node,
  href: _propTypes.default.string
};
Logo.defaultProps = {
  color: 'black'
};
var _default = Logo;
exports.default = _default;