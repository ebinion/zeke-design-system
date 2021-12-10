"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _numbers = require("../helpers/numbers");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTime = _styledComponents.default.time(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font: inherit;\n  color: inherit;\n"])));

var Time = function Time(props) {
  var getUTCFullYear = function getUTCFullYear() {
    return props.date.getUTCFullYear().toString();
  };

  var getFullYear = function getFullYear() {
    return props.date.getFullYear().toString();
  };

  var getUTCMonth = function getUTCMonth() {
    return (0, _numbers.addLeadingZero)(props.date.getUTCMonth() + 1);
  };

  var getMonth = function getMonth() {
    return (0, _numbers.addLeadingZero)(props.date.getMonth() + 1);
  };

  var getUTCDate = function getUTCDate() {
    return (0, _numbers.addLeadingZero)(props.date.getUTCDate());
  };

  var getDate = function getDate() {
    return (0, _numbers.addLeadingZero)(props.date.getDate());
  };

  var getUTCHour = function getUTCHour() {
    return (0, _numbers.addLeadingZero)(props.date.getUTCHours());
  };

  var getUTCMinute = function getUTCMinute() {
    return (0, _numbers.addLeadingZero)(props.date.getUTCMinutes());
  };

  var getUTCSecond = function getUTCSecond() {
    return (0, _numbers.addLeadingZero)(props.date.getUTCSeconds());
  };

  var dateAttrString = "".concat(getUTCFullYear(), "-").concat(getUTCMonth(), "-").concat(getUTCDate(), "T").concat(getUTCHour(), ":").concat(getUTCMinute(), ":").concat(getUTCSecond(), ".000Z");
  var dateDisplay = props.children ? props.children : "".concat(getMonth(), ".").concat(getDate(), ".").concat(getFullYear());
  return /*#__PURE__*/_react.default.createElement(StyledTime, {
    dateTime: dateAttrString
  }, dateDisplay);
};

Time.propTypes = {
  date: _propTypes.default.instanceOf(Date)
};
var _default = Time;
exports.default = _default;