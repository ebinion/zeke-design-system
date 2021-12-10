"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("..");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ArticleComponent = _styledComponents.default.article(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  @media screen and (min-width: ", ") {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n  }\n"])), _.measurementTokens.breakpoints.horizontal.m);

var ArticleInnerContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  @media screen and (min-width: ", ") {\n    width: 120%;\n  }\n"])), _.measurementTokens.breakpoints.horizontal.m);

var ImageContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  @media screen and (min-width: ", ") {\n    float: left;\n    width: 50%;\n  }\n"])), _.measurementTokens.breakpoints.horizontal.m);

var ContentContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  @media screen and (min-width: ", ") {\n    background-color: ", ";\n    background-color: #fffd;\n    box-sizing: border-box;\n    position: relative;\n    float: left;\n    left: -10.66666667%; /* approximation of removing extra 20% that was added */\n    margin-top: 100px;\n    padding: ", ";\n\n    width: 44%;\n    z-index: 2;\n  }\n\n  @media screen and (min-width: ", ") {\n    padding: ", ";\n    left: -6.66666667%; /* approximation of removing extra 20% that was added */\n    width: 40%;\n  }\n"])), _.measurementTokens.breakpoints.horizontal.m, function (props) {
  return props.bgColor;
}, _.measurementTokens.componentPadding.l, _.measurementTokens.breakpoints.horizontal.l, _.measurementTokens.componentPadding.xl);

var BigTeaser = function BigTeaser(_ref) {
  var bgColor = _ref.bgColor,
      linkElement = _ref.linkElement,
      to = _ref.to,
      title = _ref.title,
      summary = _ref.summary,
      superTitle = _ref.superTitle,
      image = _ref.image,
      headingLevel = _ref.headingLevel;
  var hexTransparencyValue = 'd';

  var getTransparentBgColor = function getTransparentBgColor() {
    var trimmedColor = bgColor.replace(' ', '');

    if (trimmedColor.length === 4) {
      return trimmedColor + hexTransparencyValue;
    } else if (trimmedColor.length === 7) {
      return trimmedColor + hexTransparencyValue + hexTransparencyValue;
    } else {
      return trimmedColor;
    }
  };

  return /*#__PURE__*/_react.default.createElement(_.A, {
    as: linkElement,
    to: to,
    kind: "incognito"
  }, /*#__PURE__*/_react.default.createElement(ArticleComponent, null, /*#__PURE__*/_react.default.createElement(ArticleInnerContainer, null, /*#__PURE__*/_react.default.createElement(ImageContainer, null, image), /*#__PURE__*/_react.default.createElement(ContentContainer, {
    bgColor: getTransparentBgColor()
  }, superTitle && /*#__PURE__*/_react.default.createElement(_.SectionHeading, {
    alignMediumUp: "left"
  }, superTitle), /*#__PURE__*/_react.default.createElement(_.H3, {
    as: headingLevel,
    align: "center",
    alignMediumUp: "left",
    lineHeight: "tight",
    lineHeightMediumUp: "normal",
    noMargin: true,
    respondToLinkHover: true,
    sizeMediumUp: "xl"
  }, title), /*#__PURE__*/_react.default.createElement(_.P, {
    align: "center",
    alignMediumUp: "left",
    kind: "decorative",
    sizeMediumUp: "l",
    lineHeight: "tight",
    lineHeightMediumUp: "normal",
    noMargin: true
  }, summary)))));
};

BigTeaser.propTypes = {
  bgColor: _propTypes.default.string,
  superTitle: _propTypes.default.string,
  to: _propTypes.default.string.isRequired,
  title: _propTypes.default.string,
  summary: _propTypes.default.string,
  image: _propTypes.default.node.isRequired,
  linkElement: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string]),
  headingLevel: _propTypes.default.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};
BigTeaser.defaultProps = {
  bgColor: _.colorTokens.backgrounds.light,
  linkElement: 'a',
  headingLevel: 'h2'
};
var _default = BigTeaser;
exports.default = _default;