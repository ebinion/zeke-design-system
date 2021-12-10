"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Note = function Note(_ref) {
  var color = _ref.color,
      headingLevel = _ref.headingLevel,
      image = _ref.image,
      linkElement = _ref.linkElement,
      superTitle = _ref.superTitle,
      summary = _ref.summary,
      title = _ref.title,
      to = _ref.to;

  var getSuperTitleColor = function getSuperTitleColor() {
    switch (color) {
      case 'black':
        return 'light';

      case 'knockout':
        return 'xLight';

      default:
        return color;
    }
  };

  return /*#__PURE__*/_react.default.createElement(_.A, {
    as: linkElement,
    to: to,
    kind: "incognito"
  }, /*#__PURE__*/_react.default.createElement("article", null, image, /*#__PURE__*/_react.default.createElement(_.Text, {
    noMargin: true,
    color: getSuperTitleColor(),
    size: "s",
    respondToLinkHover: true,
    lineHeight: "tight",
    isUppercased: true
  }, superTitle), /*#__PURE__*/_react.default.createElement(_.H3, {
    color: color,
    kind: "normal",
    margin: "tight",
    as: headingLevel,
    respondToLinkHover: true
  }, title), /*#__PURE__*/_react.default.createElement(_.P, {
    color: color,
    size: image ? 'm' : 'l',
    noMargin: true,
    lineHeight: "tight"
  }, summary)));
};

Note.propTypes = {
  color: _propTypes.default.oneOf(['black', 'knockout']),
  image: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.element]),
  headingLevel: _propTypes.default.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  linkElement: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string]),
  superTitle: _propTypes.default.node,
  summary: _propTypes.default.string,
  title: _propTypes.default.string,
  to: _propTypes.default.string.isRequired
};
Note.defaultProps = {
  color: 'black',
  headingLevel: 'h2',
  linkElement: 'a'
};
var _default = Note;
exports.default = _default;