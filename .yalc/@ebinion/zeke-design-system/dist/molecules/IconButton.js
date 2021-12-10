"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledComponent = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  appearance: none;\n  background: none;\n  border: 0;\n  box-shadow: 0;\n  color: ", ";\n  cursor: pointer;\n  padding: 0;\n  text-align: center;\n  min-height: ", ";\n\n  &:hover,\n  &:focus {\n    color: ", ";\n    outline: 0;\n  }\n"])), _.measurementTokens.nav, _.measurementTokens.touchTarget, _.colorTokens.text.navHighlight);

var IconButton = function IconButton(props) {
  var buttonRef = /*#__PURE__*/_react.default.createRef();

  var clickHandler = function clickHandler(event) {
    buttonRef.current.blur();
    props.clickHandler(event);
  };

  return /*#__PURE__*/_react.default.createElement(StyledComponent, {
    onClick: clickHandler,
    type: props.type,
    ref: buttonRef
  }, /*#__PURE__*/_react.default.createElement(_.Text, {
    element: "span",
    visuallyHidden: true
  }, props.title), props.icon && /*#__PURE__*/_react.default.cloneElement(props.icon, {
    respondToHover: true
  }));
};

IconButton.propTypes = {
  title: _propTypes.default.string.isRequired,
  icon: _propTypes.default.node.isRequired,
  clickHandler: _propTypes.default.func,
  type: _propTypes.default.oneOf(['button', 'submit', 'reset'])
};
IconButton.defaultProps = {
  clickHandler: function clickHandler() {},
  type: 'button'
};
var _default = IconButton;
exports.default = _default;