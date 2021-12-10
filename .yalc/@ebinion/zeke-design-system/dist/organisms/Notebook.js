"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("../");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledNotebook = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: #d5d5d5;\n  border-radius: 0 8px 8px 0;\n  box-shadow: 0 2px 8px ", ";\n  height: 0;\n  overflow: hidden;\n  padding-top: 135.47%;\n  position: relative;\n\n  &::before {\n    border-left: 10px solid #2a2a2a;\n    box-shadow: 0 0 0 2px ", ";\n    background: #000;\n    display: block;\n    content: '';\n    position: absolute;\n    height: 100%;\n    width: 2px;\n    left: 0;\n    top: 0;\n    z-index: 2;\n  }\n"])), _.colorTokens.shadows.light, _.colorTokens.shadows.light);

var StyledImage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0%;\n  left: 0;\n\n  > * {\n    height: 100%;\n  }\n"])));

var StyledBadge = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n"])));

var StyledContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-top: ", ";\n"])), _.measurementTokens.componentMargin.s);

var Notebook = function Notebook(props) {
  var renderBadge = function renderBadge() {
    if (props.count) {
      return /*#__PURE__*/_react.default.createElement(StyledBadge, null, /*#__PURE__*/_react.default.createElement(_.Badge, null, props.count, ' ', /*#__PURE__*/_react.default.createElement(_.Text, {
        as: "span",
        visuallyHidden: true
      }, ' ', "articles in ", props.title)));
    } else {
      return null;
    }
  };

  return /*#__PURE__*/_react.default.createElement(_.A, {
    as: props.linkAs,
    href: props.href || props.to,
    to: props.href || props.to,
    kind: "incognito"
  }, /*#__PURE__*/_react.default.createElement(StyledNotebook, null, /*#__PURE__*/_react.default.createElement(StyledImage, null, props.image), renderBadge()), /*#__PURE__*/_react.default.createElement(StyledContent, null, /*#__PURE__*/_react.default.createElement(_.H3, {
    noMargin: true,
    as: props.headingAs,
    respondToLinkHover: true
  }, props.title), /*#__PURE__*/_react.default.createElement(_.P, {
    noMargin: true,
    respondToLinkHover: true
  }, props.description)));
};

Notebook.propTypes = {
  count: _propTypes.default.number,
  description: _propTypes.default.string,
  headingAs: _propTypes.default.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  image: _propTypes.default.node,
  linkAs: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  title: _propTypes.default.string.isRequired,
  to: _propTypes.default.string.isRequired
};
Notebook.defaultProps = {
  linkAs: 'a',
  headingAs: 'h3'
};
var _default = Notebook;
exports.default = _default;