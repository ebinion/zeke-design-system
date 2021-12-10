"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.titleKnob = exports.shortGraphKnob = exports.imageSourceKnob = exports.LongGraphKnob = void 0;

var _addonKnobs = require("@storybook/addon-knobs");

var _lorem = _interopRequireDefault(require("./lorem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var titleKnob = function titleKnob() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Title';
  return (0, _addonKnobs.text)(title, _lorem.default.generateWords(10));
};

exports.titleKnob = titleKnob;

var shortGraphKnob = function shortGraphKnob() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Summary';
  return (0, _addonKnobs.text)(title, _lorem.default.generateSentences(2));
};

exports.shortGraphKnob = shortGraphKnob;

var LongGraphKnob = function LongGraphKnob() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Content';
  return (0, _addonKnobs.text)(title, _lorem.default.generateSentences(5));
};

exports.LongGraphKnob = LongGraphKnob;

var imageSourceKnob = function imageSourceKnob() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Image source';
  return (0, _addonKnobs.text)(title, 'https://via.placeholder.com/1200x700');
};

exports.imageSourceKnob = imageSourceKnob;