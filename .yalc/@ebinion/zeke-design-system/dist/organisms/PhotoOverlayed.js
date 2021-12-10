"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("..");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  @media (min-width: ", ") {\n    padding-top: 0.1px;\n    position: relative;\n    width: 100%;\n  }\n"])), _.measurementTokens.breakpoints.horizontal.m);

var ImageContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  @media (min-width: ", ") {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 33%;\n  }\n\n  @media (min-width: ", ") {\n    width: 40%;\n  }\n"])), _.measurementTokens.breakpoints.horizontal.m, _.measurementTokens.breakpoints.horizontal.m);

var ContentContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: var(--component-padding-l);\n\n  @media (min-width: ", ") {\n    background-color: ", ";\n    box-sizing: border-box;\n    position: relative;\n    margin-top: 100px;\n    left: 25%;\n    width: 75%;\n    z-index: 2;\n  }\n\n  @media (min-width: ", ") {\n    width: 67%;\n    left: 33%;\n    margin-top: 150px;\n  }\n"])), _.measurementTokens.breakpoints.horizontal.m, function (props) {
  return props.bgColor;
}, _.measurementTokens.breakpoints.horizontal.l);

var PhotoOverlayed = function PhotoOverlayed(_ref) {
  var bgColor = _ref.bgColor,
      children = _ref.children,
      image = _ref.image;
  return /*#__PURE__*/_react.default.createElement(StyledWrapper, null, /*#__PURE__*/_react.default.createElement(ImageContainer, null, image), /*#__PURE__*/_react.default.createElement(ContentContainer, {
    bgColor: bgColor
  }, children));
};

PhotoOverlayed.propTypes = {
  bgColor: _propTypes.default.string,
  image: _propTypes.default.node.isRequired
};
PhotoOverlayed.defaultProps = {
  bgColor: _.colorTokens.backgrounds.site
};
var _default = PhotoOverlayed;
exports.default = _default;