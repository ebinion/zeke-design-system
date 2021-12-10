"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = function Section(_ref) {
  var superTitle = _ref.superTitle,
      title = _ref.title,
      lead = _ref.lead,
      children = _ref.children,
      isDark = _ref.isDark;
  return /*#__PURE__*/_react.default.createElement(_.Block, {
    as: "section",
    color: isDark ? 'dark' : 'white',
    padding: "none",
    paddingBottom: _.measurementTokens.componentPadding.xl
  }, /*#__PURE__*/_react.default.createElement(_.SectionHeader, {
    title: title,
    superTitle: superTitle,
    isKnockedout: isDark,
    as: "header"
  }, lead), children);
};

Section.propTypes = {
  superTitle: _propTypes.default.string,
  title: _propTypes.default.string,
  lead: _propTypes.default.oneOf([_propTypes.default.string, _propTypes.default.element]),
  isDark: _propTypes.default.bool
};
var _default = Section;
exports.default = _default;