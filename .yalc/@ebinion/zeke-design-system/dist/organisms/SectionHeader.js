"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SectionHeader = function SectionHeader(_ref) {
  var as = _ref.as,
      children = _ref.children,
      isKnockedout = _ref.isKnockedout,
      lead = _ref.lead,
      title = _ref.title,
      superTitle = _ref.superTitle;
  var composedLead = lead || children;

  var getColor = function getColor() {
    return isKnockedout ? 'knockout' : 'normal';
  };

  var renderLead = function renderLead() {
    if (typeof composedLead === 'string') {
      return /*#__PURE__*/_react.default.createElement(_.Text, {
        align: "center",
        size: "l",
        color: getColor(),
        noMargin: true
      }, composedLead);
    } else {
      return composedLead;
    }
  };

  return /*#__PURE__*/_react.default.createElement(_.Block, {
    as: as,
    constrain: "text",
    padding: "xl"
  }, superTitle && /*#__PURE__*/_react.default.createElement(_.SectionHeading, {
    isKnockedOut: isKnockedout
  }, superTitle), /*#__PURE__*/_react.default.createElement("div", null, title && /*#__PURE__*/_react.default.createElement(_.H2, {
    as: "h3",
    align: "center",
    color: getColor(),
    lineHeight: "normal",
    noMargin: true
  }, title), composedLead && renderLead()));
};

SectionHeader.propTypes = {
  superTitle: _propTypes.default.string,
  title: _propTypes.default.string,
  lead: _propTypes.default.string,
  isKnockedout: _propTypes.default.bool,
  as: _propTypes.default.string
};
SectionHeader.defaultProps = {
  as: 'div'
};
var _default = SectionHeader;
exports.default = _default;